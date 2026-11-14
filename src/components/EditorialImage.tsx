import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: 'eager' | 'lazy';
}

export function EditorialImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  loading = 'lazy',
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[#EDE6DA] border border-[#8A7A6B]/25 px-6 py-10 text-center ${containerClassName}`}
      >
        <Sparkles className="h-5 w-5 text-[#8A7A6B] mb-3" aria-hidden="true" strokeWidth={1.25} />
        <p className="font-serif text-base text-[#2B211C]">Maison Éclat</p>
        <p className="mt-1 text-xs text-[#4E4541] max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden bg-[#EDE6DA] ${containerClassName}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`h-full w-full object-cover ${className}`}
      />
    </div>
  );
}
