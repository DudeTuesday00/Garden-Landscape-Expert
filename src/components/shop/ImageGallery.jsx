'use client'

import { useState } from 'react'

export default function ImageGallery({ images, productName, emoji }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [mainFailed, setMainFailed] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const activeImage = images[activeIdx]

  return (
    <>
      {/* Main image */}
      <div
        className="relative w-full aspect-square bg-garden-50 dark:bg-gray-700 rounded-2xl overflow-hidden cursor-zoom-in"
        onClick={() => setLightboxOpen(true)}
        title="Click to enlarge"
      >
        {mainFailed || !activeImage ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl">{emoji}</span>
          </div>
        ) : (
          <img
            key={activeImage}
            src={activeImage}
            alt={`${productName} — image ${activeIdx + 1}`}
            className="w-full h-full object-cover"
            onError={() => setMainFailed(true)}
          />
        )}

        {/* Zoom hint */}
        {!mainFailed && activeImage && (
          <span className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full pointer-events-none">
            🔍 Click to enlarge
          </span>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-3 flex-wrap">
          {images.map((img, idx) => (
            <ThumbnailBtn
              key={idx}
              img={img}
              idx={idx}
              activeIdx={activeIdx}
              productName={productName}
              emoji={emoji}
              onClick={() => {
                setActiveIdx(idx)
                setMainFailed(false)
              }}
            />
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl leading-none"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close lightbox"
          >
            ×
          </button>
          {mainFailed || !activeImage ? (
            <span className="text-9xl">{emoji}</span>
          ) : (
            <img
              src={activeImage}
              alt={`${productName} — enlarged`}
              className="max-w-full max-h-full object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </>
  )
}

function ThumbnailBtn({ img, idx, activeIdx, productName, emoji, onClick }) {
  const [failed, setFailed] = useState(false)
  return (
    <button
      onClick={onClick}
      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
        idx === activeIdx
          ? 'border-garden-600 shadow-md'
          : 'border-gray-200 dark:border-gray-600 hover:border-garden-400'
      }`}
      aria-label={`View image ${idx + 1}`}
    >
      {failed || !img ? (
        <div className="w-full h-full bg-garden-50 dark:bg-gray-700 flex items-center justify-center">
          <span className="text-xl">{emoji}</span>
        </div>
      ) : (
        <img
          src={img}
          alt={`${productName} thumbnail ${idx + 1}`}
          className="w-full h-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </button>
  )
}
