"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    badge: "PROMO",
    badgeStyle: "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300",
    title: "POS Modern untuk Bisnis Anda",
    desc: "Kelola penjualan, stok, laporan, dan pelanggan dalam satu sistem yang cepat.",
    action: "Lihat Detail",
    href: "/produk/point_of_sale",
    preview: (
      <div className="relative w-full h-24 rounded-xl overflow-hidden mb-3">
        <Image
          src="/assets/pictures/add-pos-y.jpg"
          alt="POS Preview"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute bottom-2 left-3 text-white text-[10px] font-semibold tracking-wide">
          Point of Sale System
        </span>
      </div>
    ),
  },
  {
    badge: "NEW",
    badgeStyle: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
    title: "Aplikasi Mobile Custom untuk Brand Anda",
    desc: "Bangun aplikasi iOS & Android berperforma tinggi dengan UI yang memukau.",
    action: "Konsultasi Gratis",
    href: "/#contact",
    preview: (
      <div className="flex gap-2 mb-3">
        {["iOS", "Android", "Flutter"].map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>
    ),
  },
  {
    badge: "DISKON 20%",
    badgeStyle: "bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300",
    title: "Website Profesional Mulai 1 Jutaan",
    desc: "Landing page, company profile, hingga toko online siap pakai dalam 7 hari kerja.",
    action: "Pesan Sekarang",
    href: "/buat",
    preview: (
      <div className="bg-slate-100 dark:bg-white/5 rounded-lg p-3 mb-3 text-xs space-y-1.5">
        <div className="flex justify-between text-slate-600 dark:text-slate-400">
          <span>Landing Page</span>
          <span className="line-through text-slate-400">Rp 1.500.000</span>
        </div>
        <div className="flex justify-between font-semibold text-slate-800 dark:text-white">
          <span>Harga Promo</span>
          <span className="text-indigo-600 dark:text-indigo-400">Rp 1.000.000</span>
        </div>
      </div>
    ),
  },
];

const GAP = 12;
const STACK_HEIGHT = 200;

export default function StackedCards() {
  const [hovered, setHovered] = useState(false);
  const measureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [naturalHeights, setNaturalHeights] = useState<number[]>([]);

  useEffect(() => {
    setNaturalHeights(measureRefs.current.map((el) => el?.offsetHeight ?? 0));
  }, []);

  const getExpandedOffset = (i: number) => {
    let offset = 0;
    for (let j = 0; j < i; j++) {
      offset += (naturalHeights[j] ?? STACK_HEIGHT) + GAP;
    }
    return offset;
  };

  const totalExpandedHeight =
    naturalHeights.length > 0
      ? naturalHeights.reduce((sum, h) => sum + h + GAP, 0) - GAP
      : cards.length * (STACK_HEIGHT + GAP) - GAP;

  const CardContent = ({ card }: { card: (typeof cards)[0] }) => (
    <>
      <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full mb-3 inline-block ${card.badgeStyle}`}>
        {card.badge}
      </span>
      {card.preview}
      <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
        {card.title}
      </h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
        {card.desc}
      </p>
      <div className="flex gap-2">
        <Link
          href={card.href}
          className="flex-1 text-center text-xs font-semibold px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
        >
          {card.action}
        </Link>
        <a
          href="#contact"
          className="text-xs font-medium px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
        >
          Hubungi
        </a>
      </div>
    </>
  );

  return (
    <>
      <div className="fixed top-0 left-0 pointer-events-none opacity-0 w-[300px]" aria-hidden="true">
        {cards.map((card, i) => (
          <div key={i} ref={(el) => { measureRefs.current[i] = el; }} className="rounded-2xl p-5 mb-2">
            <CardContent card={card} />
          </div>
        ))}
      </div>

      <div
        className="relative w-[300px] transition-all duration-500"
        style={{ height: hovered ? `${totalExpandedHeight}px` : `${STACK_HEIGHT + 20}px` }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="absolute left-0 bottom-0 w-full bg-white dark:bg-[#0A0A0A] border border-slate-200 dark:border-white/10 rounded-2xl p-5 transition-all duration-500"
            style={{
              height: hovered ? `${naturalHeights[i] ?? STACK_HEIGHT}px` : `${STACK_HEIGHT}px`,
              overflow: "hidden",
              zIndex: cards.length - i,
              transform: hovered
                ? `translateY(${-getExpandedOffset(i)}px) scale(1)`
                : `translateY(${i * -8}px) scale(${1 - i * 0.03})`,
              opacity: hovered ? 1 : 1 - i * 0.15,
              transitionTimingFunction: "cubic-bezier(0.34, 1.2, 0.64, 1)",
            }}
          >
            <button className="absolute top-3 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white text-lg leading-none">
              ×
            </button>
            <CardContent card={card} />
          </div>
        ))}
      </div>
    </>
  );
}