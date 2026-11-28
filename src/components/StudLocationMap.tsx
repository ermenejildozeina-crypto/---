import {
  APILoadingStatus,
  APIProvider,
  AdvancedMarker,
  InfoWindow,
  Map as GoogleMap,
  Pin,
  useAdvancedMarkerRef,
  useApiLoadingStatus,
  useMap,
  useMapsLibrary,
} from '@vis.gl/react-google-maps';
import { Compass, ExternalLink, MapPin } from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Language, TranslationDictionary } from '../data/i18n';

interface StudLocationMapProps {
  t: TranslationDictionary;
  language: Language;
}

type MapMode = 'roadmap' | 'terrain' | 'hybrid';

interface ResolvedLocation {
  lat: number;
  lng: number;
  formattedAddress: string;
  placeId: string;
}

const ESTATE_QUERY =
  'Kichi-Jargylchak, Jeti-Oguz District, Issyk-Kul Region, Kyrgyzstan';

function isQuotaErrorMessage(err: unknown): boolean {
  const text = err instanceof Error ? err.message : String(err ?? '');
  return /RESOURCE_EXHAUSTED|OVER_QUERY_LIMIT|QuotaExceeded|OverQuotaMapError|429|quota/i.test(
    text
  );
}

interface StudMapCanvasProps {
  t: TranslationDictionary;
  language: Language;
  mapTypeId: MapMode;
  onLocationResolved: (location: ResolvedLocation) => void;
  resolvedLocation: ResolvedLocation | null;
}

function StudMapCanvas({
  t,
  language,
  mapTypeId,
  onLocationResolved,
  resolvedLocation,
}: StudMapCanvasProps) {
  const map = useMap();
  const loadingStatus = useApiLoadingStatus();
  const placesLib = useMapsLibrary('places');
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoOpen, setInfoOpen] = useState(true);
  const [lookupError, setLookupError] = useState(false);

  const apiLanguage = language === 'en' ? 'en' : 'ru';

  useEffect(() => {
    if (loadingStatus === APILoadingStatus.AUTH_FAILURE) {
      window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
      setLookupError(true);
    } else if (loadingStatus === APILoadingStatus.FAILED) {
      setLookupError(true);
    }
  }, [loadingStatus]);

  useEffect(() => {
    if (
      loadingStatus !== APILoadingStatus.LOADED ||
      !placesLib ||
      resolvedLocation
    ) {
      return;
    }

    let cancelled = false;

    const resolveEstateCoordinates = async () => {
      try {
        const request = {
          textQuery: ESTATE_QUERY,
          fields: ['displayName', 'location', 'formattedAddress', 'id'],
          language: apiLanguage,
          region: 'kg',
          maxResultCount: 1,
          internalUsageAttributionIds: ['gmp_mcp_codeassist_v1_aistudio'],
        } as Parameters<typeof placesLib.Place.searchByText>[0];

        const { places } = await placesLib.Place.searchByText(request);
        const firstPlace = places?.[0];
        const loc = firstPlace?.location;

        if (!cancelled && loc) {
          onLocationResolved({
            lat: loc.lat(),
            lng: loc.lng(),
            formattedAddress:
              firstPlace.formattedAddress || t.contact.addressValue,
            placeId: firstPlace.id || '',
          });
          setLookupError(false);
          return;
        }
      } catch (err: unknown) {
        if (isQuotaErrorMessage(err)) {
          window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
        }
      }

      try {
        const res = await fetch(
          `/api/maps-geocode?address=${encodeURIComponent(ESTATE_QUERY)}&language=${apiLanguage}`
        );
        const data = (await res.json().catch(() => null)) as {
          lat?: number;
          lng?: number;
          placeId?: string;
          formattedAddress?: string;
          error?: { status?: string };
        } | null;

        if (
          res.status === 429 ||
          data?.error?.status === 'RESOURCE_EXHAUSTED'
        ) {
          window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
          if (!cancelled) setLookupError(true);
          return;
        }

        if (
          !cancelled &&
          res.ok &&
          typeof data?.lat === 'number' &&
          typeof data?.lng === 'number'
        ) {
          onLocationResolved({
            lat: data.lat,
            lng: data.lng,
            formattedAddress: data.formattedAddress || t.contact.addressValue,
            placeId: data.placeId || '',
          });
          setLookupError(false);
          return;
        }
      } catch {
        // Handled cleanly below with fallback card
      }

      if (!cancelled) {
        setLookupError(true);
      }
    };

    void resolveEstateCoordinates();

    return () => {
      cancelled = true;
    };
  }, [
    apiLanguage,
    loadingStatus,
    onLocationResolved,
    placesLib,
    resolvedLocation,
    t.contact.addressValue,
  ]);

  useEffect(() => {
    if (map) {
      map.setMapTypeId(mapTypeId);
    }
  }, [map, mapTypeId]);

  const handleRecenter = useCallback(() => {
    if (!map || !resolvedLocation) return;
    map.panTo({ lat: resolvedLocation.lat, lng: resolvedLocation.lng });
    map.setZoom(12);
    setInfoOpen(true);
  }, [map, resolvedLocation]);

  const directionsHref = useMemo(() => {
    if (resolvedLocation) {
      const base = `https://www.google.com/maps/dir/?api=1&destination=${resolvedLocation.lat},${resolvedLocation.lng}`;
      return resolvedLocation.placeId
        ? `${base}&destination_place_id=${encodeURIComponent(resolvedLocation.placeId)}`
        : base;
    }
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ESTATE_QUERY)}`;
  }, [resolvedLocation]);

  if (lookupError) {
    return (
      <div className="w-full h-[380px] sm:h-[440px] bg-[#181715] flex flex-col items-center justify-center p-8 text-center space-y-4">
        <MapPin className="w-6 h-6 text-[#C4A67A]" aria-hidden="true" />
        <div className="space-y-1.5 max-w-md">
          <h4 className="font-display text-2xl font-semibold text-[#F7F6F3]">
            {t.map.unavailableTitle}
          </h4>
          <p className="text-sm text-[#B5AFA5] leading-relaxed">
            {t.map.unavailableBody}
          </p>
        </div>
        <a
          href={directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[#181715] bg-[#F7F6F3] hover:bg-[#E5E2DC] rounded-sm transition-colors"
        >
          <span>{t.map.openDirectionsLabel}</span>
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    );
  }

  if (!resolvedLocation) {
    return (
      <div className="w-full h-[380px] sm:h-[440px] bg-[#181715] flex items-center justify-center p-6">
        <p className="text-xs font-mono text-[#B5AFA5] tracking-wide">
          {t.map.loadingLabel}
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[380px] sm:h-[440px] bg-[#181715]">
      <GoogleMap
        mapId="DEMO_MAP_ID"
        defaultCenter={{ lat: resolvedLocation.lat, lng: resolvedLocation.lng }}
        defaultZoom={12}
        mapTypeId={mapTypeId}
        gestureHandling="cooperative"
        streetViewControl={false}
        mapTypeControl={false}
        fullscreenControl={true}
        internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
        style={{ width: '100%', height: '100%' }}
      >
        <AdvancedMarker
          ref={markerRef}
          position={{ lat: resolvedLocation.lat, lng: resolvedLocation.lng }}
          title={t.map.infoTitle}
          onClick={() => setInfoOpen((prev) => !prev)}
        >
          <Pin
            background="#8C6D46"
            borderColor="#F7F6F3"
            glyphColor="#F7F6F3"
            scale={1.15}
          />
        </AdvancedMarker>

        {infoOpen && marker && (
          <InfoWindow
            anchor={marker}
            maxWidth={290}
            onCloseClick={() => setInfoOpen(false)}
          >
            <div className="p-1 text-[#181715] space-y-2 font-sans">
              <div className="font-semibold text-sm leading-snug">
                {t.map.infoTitle}
              </div>
              <p className="text-xs text-[#4A4640] leading-relaxed">
                {resolvedLocation.formattedAddress}
              </p>
              <div className="text-[11px] font-mono text-[#6B645A] tabular-nums">
                {t.map.coordinatesLabel}: {resolvedLocation.lat.toFixed(4)},{' '}
                {resolvedLocation.lng.toFixed(4)}
              </div>
              <div className="text-[11px] text-[#5E584F] pt-1 border-t border-[#181715]/10">
                {t.map.infoHours}
              </div>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#785A34] hover:text-[#181715] underline underline-offset-2"
              >
                <span>{t.map.openDirectionsLabel}</span>
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>

      <div className="absolute bottom-3 left-3 z-10">
        <button
          type="button"
          onClick={handleRecenter}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#181715]/90 hover:bg-[#181715] text-[#F7F6F3] border border-[#F7F6F3]/20 rounded-sm shadow-sm cursor-pointer transition-colors"
        >
          <Compass className="w-3.5 h-3.5 text-[#C4A67A]" aria-hidden="true" />
          <span>{t.map.recenterLabel}</span>
        </button>
      </div>
    </div>
  );
}

export function StudLocationMap({ t, language }: StudLocationMapProps) {
  const envKey =
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY ||
    (globalThis as { GOOGLE_MAPS_API_KEY?: string }).GOOGLE_MAPS_API_KEY ||
    '';

  const [apiKey, setApiKey] = useState<string>(envKey);
  const [configLoaded, setConfigLoaded] = useState<boolean>(Boolean(envKey));
  const [mapTypeId, setMapTypeId] = useState<MapMode>('terrain');
  const [resolvedLocation, setResolvedLocation] =
    useState<ResolvedLocation | null>(null);

  useEffect(() => {
    if (envKey) {
      setApiKey(envKey);
      setConfigLoaded(true);
      return;
    }

    let cancelled = false;
    fetch('/api/maps-config')
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { apiKey?: string } | null) => {
        if (!cancelled) {
          setApiKey(data?.apiKey || '');
          setConfigLoaded(true);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setConfigLoaded(true);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [envKey]);

  const directionsHref = useMemo(() => {
    if (resolvedLocation) {
      const base = `https://www.google.com/maps/dir/?api=1&destination=${resolvedLocation.lat},${resolvedLocation.lng}`;
      return resolvedLocation.placeId
        ? `${base}&destination_place_id=${encodeURIComponent(resolvedLocation.placeId)}`
        : base;
    }
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ESTATE_QUERY)}`;
  }, [resolvedLocation]);

  const providerLanguage = language === 'en' ? 'en' : 'ru';

  return (
    <div className="mt-14 pt-12 border-t border-[#F7F6F3]/12 space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
        <div className="space-y-2 max-w-2xl">
          <p className="text-xs font-medium tracking-wide text-[#C4A67A]">
            {t.map.kicker}
          </p>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#F7F6F3] leading-tight text-balance">
            {t.map.title}
          </h3>
          <p className="text-sm text-[#B5AFA5] leading-relaxed">
            {t.map.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 self-start lg:self-end shrink-0">
          <div
            role="group"
            aria-label={t.map.kicker}
            className="inline-flex p-1 bg-[#211F1C] border border-[#F7F6F3]/15 rounded-sm"
          >
            {(['terrain', 'roadmap', 'hybrid'] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setMapTypeId(mode)}
                aria-pressed={mapTypeId === mode}
                className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors cursor-pointer whitespace-nowrap ${
                  mapTypeId === mode
                    ? 'bg-[#8C6D46] text-[#F7F6F3]'
                    : 'text-[#B5AFA5] hover:text-[#F7F6F3]'
                }`}
              >
                {t.map.viewModes[mode]}
              </button>
            ))}
          </div>

          <a
            href={directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#181715] bg-[#F7F6F3] hover:bg-[#E5E2DC] rounded-sm transition-colors whitespace-nowrap"
          >
            <span>{t.map.openDirectionsLabel}</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="border border-[#F7F6F3]/15 rounded-sm overflow-hidden bg-[#211F1C]">
        {!configLoaded ? (
          <div className="w-full h-[380px] sm:h-[440px] bg-[#181715] flex items-center justify-center p-6">
            <p className="text-xs font-mono text-[#B5AFA5]">
              {t.map.loadingLabel}
            </p>
          </div>
        ) : !apiKey ? (
          <div className="w-full h-[380px] sm:h-[440px] bg-[#181715] flex flex-col items-center justify-center p-8 text-center space-y-4">
            <MapPin className="w-6 h-6 text-[#C4A67A]" aria-hidden="true" />
            <div className="space-y-1.5 max-w-md">
              <h4 className="font-display text-2xl font-semibold text-[#F7F6F3]">
                {t.map.unavailableTitle}
              </h4>
              <p className="text-sm text-[#B5AFA5] leading-relaxed">
                {t.map.unavailableBody}
              </p>
            </div>
            <a
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[#181715] bg-[#F7F6F3] hover:bg-[#E5E2DC] rounded-sm transition-colors"
            >
              <span>{t.map.openDirectionsLabel}</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        ) : (
          <APIProvider
            apiKey={apiKey}
            libraries={['marker', 'places']}
            language={providerLanguage}
            region="KG"
          >
            <StudMapCanvas
              t={t}
              language={language}
              mapTypeId={mapTypeId}
              resolvedLocation={resolvedLocation}
              onLocationResolved={setResolvedLocation}
            />
          </APIProvider>
        )}

        <div className="px-4 sm:px-6 py-3.5 bg-[#211F1C] border-t border-[#F7F6F3]/12 flex flex-wrap items-center justify-between gap-3 text-xs text-[#B5AFA5]">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C4A67A] shrink-0" aria-hidden="true" />
            <span>{resolvedLocation?.formattedAddress || t.contact.addressValue}</span>
          </div>
          <div className="flex items-center gap-4 font-mono tabular-nums text-[11px] text-[#9E978C]">
            {resolvedLocation && (
              <span>
                {resolvedLocation.lat.toFixed(4)}, {resolvedLocation.lng.toFixed(4)}
              </span>
            )}
            <span>{t.map.elevationBadge}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
