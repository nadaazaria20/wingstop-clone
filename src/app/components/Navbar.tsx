"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/">
          <Image
            src="/logowingstop.png"
            alt="Wingstop Logo"
            width={100}
            height={30}
            className="cursor-pointer"
            priority
          />
        </Link>

        <ul className="hidden md:flex items-center gap-6 font-semibold text-black text-sm">
          <li><Link href="/menu">MENU</Link></li>
          <li><Link href="/rasa">RASA</Link></li>
          <li className="relative group">
            <button>OFFER ▾</button>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 px-4 rounded">
              <li><Link href="/offer/dine-in">DINE-IN</Link></li>
              <li><Link href="/offer/special">SPECIAL</Link></li>
            </ul>
          </li>
          <li className="relative group">
            <button>LOYALTI ▾</button>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 px-4 rounded">
              <li><Link href="/loyalti/poin">POIN</Link></li>
              <li><Link href="/loyalti/kupon">KUPON</Link></li>
            </ul>
          </li>
          <li><Link href="/voucher">VOUCHER</Link></li>
          <li><Link href="/lokasi">LOKASI</Link></li>
          <li><Link href="/login">LOGIN</Link></li>
        </ul>

        <div className="flex items-center gap-2">
          <Link href="/order/takeaway">
            <Image
              src="/takeawayheader.jpeg"
              alt="Takeaway"
              width={120}
              height={30}
              className="cursor-pointer"
            />
          </Link>
          <Link href="/order/delivery">
            <Image
              src="/deliveryheader.jpeg"
              alt="Delivery"
              width={120}
              height={30}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
