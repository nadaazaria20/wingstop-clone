"use client";

import { useState } from "react";

export default function VideoEmbed() {
  const [play, setPlay] = useState(false);

  return (
    <div className="w-full bg-gray-100 flex justify-center py-10">
      <div className="w-full max-w-6xl aspect-video relative">
        {!play ? (
          <div
            className="w-full h-full relative cursor-pointer group"
            onClick={() => setPlay(true)}
          >
            {/* Thumbnail */}
            <img
              src="/video-thumbnail.jpg" // taruh gambar di folder public/
              alt="Wingstop Video"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />

            {/* Overlay transparan */}
            <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/40 transition" />

            {/* Tombol Play */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-red-600 w-16 h-16 flex items-center justify-center rounded-md shadow-lg group-hover:scale-105 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 4l12 6-12 6V4z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/1QPqO1xKJVA?autoplay=1"
            title="Wingstop Indonesia"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}
