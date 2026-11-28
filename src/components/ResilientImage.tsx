import { useState } from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#23201C] via-[#1B1916] to-[#121110] text-[#E6E2DA] p-6 text-center ${className}`}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          className="text-[#B69870] mb-3"
          aria-hidden="true"
        >
          <path d="M12 3L4 9v12h16V9l-8-6z" />
          <path d="M9 21V12h6v9" />
        </svg>
        <span className="font-display text-lg font-semibold tracking-wide">
          {fallbackTitle || 'Ала-Тоо Асыл Тукум'}
        </span>
        <span className="text-xs text-[#A39E93] mt-1">Племенной фонд · Иссык-Куль</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
