"use client";

import Image from "next/image";
import { useState } from "react";

export function ScreenshotGallery({ screenshots }: { screenshots: string[] }) {
  const [selected, setSelected] = useState<string | null>(null);

  if (screenshots.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {screenshots.map((src) => (
          <button
            key={src}
            onClick={() => setSelected(src)}
            className="overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-muted-gray/40"
          >
            <Image
              src={src}
              alt="Project screenshot"
              width={800}
              height={500}
              className="h-auto w-full object-cover"
            />
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <Image
              src={selected}
              alt="Project screenshot enlarged"
              width={1600}
              height={1000}
              className="h-auto max-h-[90vh] w-auto max-w-[90vw] rounded-lg object-contain"
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-soft-black shadow-lg"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
