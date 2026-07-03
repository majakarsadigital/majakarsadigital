'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

interface Product {
  id: string;
  name: string;
  image_url: string;
}

interface Props {
  products: Product[];
}

function usePingPongMarquee(speed: number) {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef(0);
  const dir = useRef(-1);

  useEffect(() => {
    let frame: number;

    const animate = () => {
      const el = ref.current;
      if (!el) return;
      const container = el.parentElement;
      if (!container) return;

      const maxScroll = el.scrollWidth - container.clientWidth;
      pos.current += speed * dir.current;

      if (pos.current <= -maxScroll) {
        pos.current = -maxScroll;
        dir.current = 1;
      }
      if (pos.current >= 0) {
        pos.current = 0;
        dir.current = -1;
      }

      el.style.transform = `translate3d(${pos.current}px,0,0)`;
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [speed]);

  return ref;
}

export function TwoRowCarousel({ products }: Props) {
  const mid = Math.ceil(products.length / 2);
  const top = products.slice(0, mid);
  const bottom = products.slice(mid);

  const topRef = usePingPongMarquee(1.2);
  const bottomRef = usePingPongMarquee(1.4);

  const ProductItem = ({ product }: { product: Product }) => (
    <div className="group w-[260px] sm:w-[420px] md:w-[600px] lg:w-[800px] flex-shrink-0 aspect-video rounded-xs overflow-hidden">

      <Image
        src={product.image_url}
        alt={product.name}
        width={800}
        height={600}
        className="w-full h-full object-cover grayscale-100 transition-all duration-500 group-hover:grayscale-0"
        draggable={false}
      />
    </div>
  );

  return (
    <div className="w-full space-y-4 sm:space-y-6 md:space-y-8 overflow-hidden">
      <div className="overflow-hidden">
        <div ref={topRef} className="flex gap-3 sm:gap-5 md:gap-8">
          {top.map((p, i) => (
            <ProductItem key={`top-${i}`} product={p} />
          ))}
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          ref={bottomRef}
          className="flex gap-3 sm:gap-5 md:gap-8 px-8 sm:px-20 md:px-40 lg:px-60"
        >
          {bottom.map((p, i) => (
            <ProductItem key={`bottom-${i}`} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}