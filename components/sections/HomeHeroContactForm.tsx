'use client';

import { FilloutStandardEmbed } from '@fillout/react';

export function HomeHeroContactForm() {
  return (
    <div className="w-full max-w-[560px] rounded-[2rem] border border-white/25 bg-white/10 p-5 shadow-[0_28px_70px_rgba(4,17,29,0.3)] backdrop-blur-xl sm:p-7">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E8C37A]">
          Get in touch
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Tell us about your plans
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-white/85">
          Share your details and the service you are interested in.
        </p>
      </div>

      <div className="w-full min-w-0">
        <FilloutStandardEmbed filloutId="v3wLQqgVGhus" dynamicResize />
      </div>
    </div>
  );
}
