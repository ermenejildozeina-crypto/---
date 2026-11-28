import 'dotenv/config';
import express, { type Request, type Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type SupportedLanguage = 'ru' | 'en' | 'ky';

interface ChatMessageInput {
  role: 'user' | 'assistant';
  text: string;
}

interface ChatRequestBody {
  messages?: unknown;
  language?: unknown;
  currency?: unknown;
}

const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

function buildSystemInstruction(language: SupportedLanguage, currency: 'USD' | 'KGS'): string {
  const languageDirective =
    language === 'ky'
      ? 'Respond primarily in natural, polite Kyrgyz (Кыргызча), unless the user writes in another language.'
      : language === 'en'
        ? 'Respond primarily in crisp, natural English, unless the user writes in another language.'
        : 'Respond primarily in refined, natural Russian (Русский), unless the user writes in another language.';

  return `You are the senior bloodstock advisor and concierge at "Ала-Тоо Асыл Тукум" (Ala-Too Asyl Tukum), an exclusive pedigree horse stud farm located in the Issyk-Kul Region, Jeti-Oguz District, Kichi-Jargylchak village, Kyrgyz Republic (1,650 m alpine pasture elevation). Stud Director (Руководитель завода): Исмаилов Улан Жумабекович (Ulan Zhumabekovich Ismailov).

${languageDirective}
Keep responses concise (2-5 short sentences or a neat plain-text list), factual, and authoritative in an understated luxury equestrian tone. Never use markdown asterisks, hashtags, code prefixes, or emojis. Do not invent horses, prices, or veterinary results outside the verified stud portfolio below.
The user currently views prices in ${currency}. Mention prices in ${currency} first when asked (with the alternate currency optional).

VERIFIED STUD PORTFOLIO (2026):
1. Ак-Шумкар (Ak-Shumkar) — Akhal-Teke Stallion, born 2021, Metallic Golden Buckskin, Kaplan line, 162 cm withers, chest 184 cm, cannon 20.5 cm, VNIIK #AT-0849. Price: $52,000 USD / 4,520,000 KGS. Focus: Dressage & Breeding. Vet: Full Nov 2026 limb radiographs clear.
2. Хан-Тенгри (Khan-Tengri) — English Thoroughbred Stallion, born 2022, Dark Bay, Northern Dancer line, 167 cm withers, chest 191 cm, cannon 21.0 cm, Jockey Club #TB-4118. Price: $68,000 USD / 5,910,000 KGS. Focus: Stayer Flat Racing (ready 2027 season). Vet: Clean upper respiratory endoscopy & digital X-rays, FEI vaccinated.
3. Кара-Байыр (Kara-Baiyr) — New Kyrgyz Sport Stallion, born 2021, Jet Black, Ala-Too Altyn line, 159 cm withers, chest 188 cm, cannon 20.5 cm, Kyrgyz State Studbook #NK-1904. Price: $34,000 USD / 2,950,000 KGS. Focus: Alaman Baige, Kok-Boru & Endurance. Vet: Fast heart-rate recovery at 1,650 m, sound tendons.
4. Ай-Пери (Ai-Peri) — Akhal-Teke Mare, born 2020, Dapple Gray, Gundogar line, 160 cm withers, chest 185 cm, cannon 19.5 cm, VNIIK #AT-0621. Price: $44,000 USD / 3,820,000 KGS. Focus: Foundation Broodmare & Show Jumping. Vet: Grade-A reproductive ultrasound, proven producer.
5. Амир-Шах (Amir-Shah) — Purebred Arabian Stallion, born 2021, Chestnut, Kuhaylan-Siglavi line, 155 cm withers, chest 180 cm, cannon 19.0 cm, WAHO / VNIIK #AR-2214. Price: $49,000 USD / 4,260,000 KGS. Focus: 120 km Endurance & Show. Vet: FEI CEI 2* cardiac & metabolic clearance.
6. Кронпринц (Kronprinz) — Hanoverian Warmblood Stallion, born 2020, Dark Bay, Donnerhall / Sandro Hit line, 171 cm withers, chest 198 cm, cannon 22.0 cm, Hannoveraner #DE-7730. Price: $78,000 USD / 6,780,000 KGS. Focus: 140 cm Show Jumping & Grand Prix Dressage. Vet: Full Oct 2026 spine/hock/navicular X-rays & FEI passport.
7. Буран-Орлов (Buran-Orlov) — Orlov Trotter Stallion, born 2021, Light Dapple Gray, Pion line, 165 cm withers, chest 192 cm, cannon 21.5 cm, VNIIK #OR-3309. Price: $38,000 USD / 3,300,000 KGS. Focus: Harness Trotting & Ceremonial Riding. Vet: Clean joints, trained in sulky (1,600 m) and under saddle.
8. Златояр (Zlatoyar) — Don Stallion, born 2022, Golden Chestnut, Bruch line, 164 cm withers, chest 190 cm, cannon 21.0 cm, VNIIK #DN-1182. Price: $36,000 USD / 3,130,000 KGS. Focus: Eventing, Kok-Boru & Endurance. Vet: High bone density, cold/altitude resilient.
9. Блэк-Барон (Black Baron) — Friesian Stallion, born 2020, Jet Black, Jasper 366 line, 166 cm withers, chest 196 cm, cannon 22.5 cm, KFPS #NL-9041. Price: $64,000 USD / 5,560,000 KGS. Focus: Classical Dressage & Show. Vet: Negative KFPS genetic tests (hydrocephalus/dwarfism), clean X-rays.
10. Зарина (Zarina) — Karabair Mare, born 2021, Bay, Samarkand-Bakhtiyor line, 157 cm withers, chest 184 cm, cannon 19.8 cm, Central Asian Studbook #KB-0473. Price: $29,000 USD / 2,520,000 KGS. Focus: All-purpose mountain riding & breeding. Vet: Sound on rocky alpine terrain, reproductive clearance.
11. Корком-Пери (Korkom-Peri) — New Kyrgyz Sport Mare, born 2022, Golden Palomino with flaxen mane, Issyk-Kul Altyn line, 158 cm withers, chest 185 cm, cannon 19.6 cm, Kyrgyz State Studbook #NK-2148. Price: $35,000 USD / 3,040,000 KGS. Focus: Foundation Breeding & Alpine Endurance. Vet: Grade-A reproductive ultrasound, clean X-rays, rapid heart-rate recovery at 1,650 m.

SERVICES & LOGISTICS:
- High-altitude rearing at 1,650 m in Kichi-Jargylchak village, Jeti-Oguz District (Issyk-Kul Region) builds lung volume and dense bone.
- Full VNIIK / Jockey Club / Kyrgyz State Studbook / FEI documentation, ISO microchip, DNA parentage verification.
- Independent pre-purchase vet check & digital X-rays welcomed.
- Export & customs quarantine arranged via specialized horse floats or air freight to Kazakhstan, Russia, Uzbekistan, and UAE.
- Private viewings in Kichi-Jargylchak (Jeti-Oguz District, Issyk-Kul Region) or live HD video inspections daily 08:30-18:00 by appointment (+996 555 840-210, concierge@alatoo-asyl.kg). Encourage users ready to schedule a viewing to use the booking form on the page.`;
}

function normalizeMessages(raw: unknown): ChatMessageInput[] | null {
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > 24) {
    return null;
  }

  const parsed: ChatMessageInput[] = [];
  for (const item of raw) {
    if (!item || typeof item !== 'object') return null;
    const role = (item as { role?: unknown }).role;
    const text = (item as { text?: unknown }).text;
    if (role !== 'user' && role !== 'assistant') return null;
    if (typeof text !== 'string') return null;
    const trimmed = text.trim();
    if (!trimmed || trimmed.length > 2000) return null;
    parsed.push({ role, text: trimmed });
  }

  if (parsed[parsed.length - 1]?.role !== 'user') {
    return null;
  }

  return parsed;
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '100kb' }));

  app.get('/api/maps-config', (_req: Request, res: Response) => {
    const apiKey =
      process.env.VITE_GOOGLE_MAPS_API_KEY || process.env.GOOGLE_MAPS_API_KEY || '';
    res.json({ apiKey });
  });

  app.get('/api/maps-geocode', async (req: Request, res: Response) => {
    const apiKey =
      process.env.VITE_GOOGLE_MAPS_API_KEY || process.env.GOOGLE_MAPS_API_KEY || '';
    if (!apiKey) {
      res.status(503).json({
        errorCode: 'MISSING_MAPS_API_KEY',
        error: 'Google Maps API key is not configured.',
      });
      return;
    }

    const rawAddress = typeof req.query.address === 'string' ? req.query.address.trim() : '';
    if (!rawAddress || rawAddress.length > 300) {
      res.status(400).json({
        errorCode: 'INVALID_ADDRESS',
        error: 'A valid address query parameter is required.',
      });
      return;
    }

    const rawLang = typeof req.query.language === 'string' ? req.query.language : 'ru';
    const languageCode = rawLang === 'en' || rawLang === 'ky' ? rawLang : 'ru';

    try {
      const encodedAddress = encodeURIComponent(rawAddress);
      const url = `https://geocode.googleapis.com/v4/geocode/address/${encodedAddress}?regionCode=kg&languageCode=${languageCode}`;
      const upstream = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask':
            'results.placeId,results.location,results.formattedAddress,results.viewport',
          'X-Goog-Maps-Solution-ID': 'gmp_mcp_codeassist_v1_aistudio',
        },
      });

      const payload = (await upstream.json().catch(() => null)) as {
        results?: Array<{
          placeId?: string;
          location?: { latitude?: number; longitude?: number };
          formattedAddress?: string;
        }>;
        error?: { status?: string; message?: string; code?: number };
      } | null;

      if (
        upstream.status === 429 ||
        payload?.error?.status === 'RESOURCE_EXHAUSTED' ||
        payload?.error?.code === 429
      ) {
        res.status(429).json({
          error: {
            status: 'RESOURCE_EXHAUSTED',
            message: payload?.error?.message || 'Google Maps Platform quota reached.',
          },
        });
        return;
      }

      if (!upstream.ok) {
        res.status(upstream.status).json({
          errorCode: 'GEOCODE_UPSTREAM_ERROR',
          error: payload?.error?.message || 'Unable to geocode address.',
        });
        return;
      }

      const firstResult = payload?.results?.[0];
      const lat = firstResult?.location?.latitude;
      const lng = firstResult?.location?.longitude;

      if (typeof lat !== 'number' || typeof lng !== 'number') {
        res.status(404).json({
          errorCode: 'ADDRESS_NOT_FOUND',
          error: 'No matching location returned.',
        });
        return;
      }

      res.json({
        lat,
        lng,
        placeId: firstResult?.placeId ?? '',
        formattedAddress: firstResult?.formattedAddress ?? '',
      });
    } catch (err: unknown) {
      console.error('Geocoding proxy error:', err);
      res.status(502).json({
        errorCode: 'GEOCODE_FETCH_FAILED',
        error: err instanceof Error ? err.message : 'Geocoding request failed.',
      });
    }
  });

  app.post('/api/chat', async (req: Request, res: Response) => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      res.status(503).json({
        errorCode: 'MISSING_API_KEY',
        error: 'Server API key is not configured.',
      });
      return;
    }

    const body = (req.body || {}) as ChatRequestBody;
    const messages = normalizeMessages(body.messages);
    if (!messages) {
      res.status(400).json({
        errorCode: 'INVALID_PAYLOAD',
        error: 'Invalid chat message payload.',
      });
      return;
    }

    const language: SupportedLanguage =
      body.language === 'en' || body.language === 'ky' ? body.language : 'ru';
    const currency: 'USD' | 'KGS' = body.currency === 'KGS' ? 'KGS' : 'USD';

    const historyMessages = messages.slice(0, -1).map((msg) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.text }],
    }));
    const latestMessage = messages[messages.length - 1].text;

    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      const chat = ai.chats.create({
        model: 'gemini-4-hydrogen',
        history: historyMessages,
        config: {
          systemInstruction: buildSystemInstruction(language, currency),
          thinkingConfig: {
            thinkingLevel: ThinkingLevel.LOW,
          },
        },
      });

      const response = await chat.sendMessage({
        message: latestMessage,
      });

      const replyText = (response.text ?? '').trim();
      if (!replyText) {
        res.status(502).json({
          errorCode: 'EMPTY_RESPONSE',
          error: 'Assistant returned an empty response.',
        });
        return;
      }

      res.json({ reply: replyText });
    } catch (err: unknown) {
      const status =
        typeof err === 'object' &&
        err !== null &&
        'status' in err &&
        typeof (err as { status?: unknown }).status === 'number'
          ? (err as { status: number }).status
          : 500;

      console.error('Gemini chat endpoint error:', err);
      res.status(status >= 400 && status < 600 ? status : 500).json({
        errorCode: 'UPSTREAM_ERROR',
        error:
          err instanceof Error
            ? err.message
            : 'Unable to reach the assistant service right now.',
      });
    }
  });

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
