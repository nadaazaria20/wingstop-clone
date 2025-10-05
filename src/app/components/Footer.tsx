import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-15 pb-20 relative">
      {/* Top Links */}
      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-5 font-bold">
          <a href="#">KARIR</a>
          <a href="#">HUBUNGI KAMI</a>
        </div>

        <div className="flex space-x-6 text-gray-300">
          <a href="#">Privasi</a>
          <a href="#">Sitemap</a>
          <a href="#">FAQ</a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6" />

      {/* Sosmed Icons */}
      <div className="flex justify-center space-x-6 text-2xl">
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTiktok /></a>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaYoutube /></a>
      </div>

      
      <div className="border-t border-gray-700 my-6" />

    
      <div className="mt-auto text-center text-white-400 text-sm">
        © Restoran Wingstop, Inc. 2024. Semua Hak Dilindungi Undang-Undang.
      </div>

      
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>
    </footer>
  );
}