"use client";

import Image from "next/image";

export default function InstaBox() {
  return (
    <div className="w-full bg-white py-10 flex justify-center">
      <div className="relative w-full max-w-6xl px-4">
        {/* Foto Instabox */}
        <Image
          src="/instaboxws.png" // ganti dengan nama file kamu di folder /public
          alt="Instabox Wingstop"
          width={1200}
          height={600}
          className="w-full h-auto rounded-xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
}
