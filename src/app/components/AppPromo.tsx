"use client";

import Image from "next/image";

export default function AppPromo() {
  return (
    <div className="w-full bg-gray-50 py-16 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center px-6 md:px-0 gap-10">
        
        {/* Teks Kiri */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 leading-snug">
            <br /> 
          </h2>
          <a
            href="https://play.google.com/store/apps/details?id=com.wingstop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/downloadws.png" // simpan logo Playstore di /public
              alt="Google Play"
              width={700}
              height={500}
              className="mt-6"
            />
          </a>
        </div>

        {/* Gambar Kanan */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/mobilews.png" // gambar mockup HP, simpan di /public
            alt="Wingstop App Preview"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
