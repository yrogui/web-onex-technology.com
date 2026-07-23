"use client";

import { useTranslations } from "next-intl";
import {
  Gem,
  Landmark,
  Shield,
  Factory,
  Boxes,
  Headset,
  Plane,
  ConciergeBell,
  GraduationCap,
  Building2,
  type LucideProps,
} from "lucide-react";
import { type FC } from "react";

const SECTORS: { id: string; Icon: FC<LucideProps> }[] = [
  { id: "luxe", Icon: Gem },
  { id: "banque", Icon: Landmark },
  { id: "assurance", Icon: Shield },
  { id: "industrie", Icon: Factory },
  { id: "distribution", Icon: Boxes },
  { id: "relationclient", Icon: Headset },
  { id: "transport", Icon: Plane },
  { id: "hotellerie", Icon: ConciergeBell },
  { id: "education", Icon: GraduationCap },
  { id: "public", Icon: Building2 },
];

function SectorCard({ Icon, label }: { Icon: FC<LucideProps>; label: string }) {
  return (
    <div className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px] bg-[#FAFAF7] border border-smoke rounded-[14px] shrink-0 flex flex-col items-center justify-end pb-4 md:pb-5">
      {/* Icon center anchored at 35% of card height */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Icon strokeWidth={1.5} className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] text-charcoal" />
      </div>
      <span className="relative font-sans font-medium text-[11px] uppercase tracking-[0.1em] text-graphite text-center leading-tight px-3">
        {label}
      </span>
    </div>
  );
}

export function SectorMarquee() {
  const t = useTranslations("pavesSectoriels");

  return (
    <section className="py-16 bg-paper border-t border-smoke/30" suppressHydrationWarning>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 text-center mb-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite">
          {t("eyebrow")}
        </p>
      </div>

      <div className="marquee-container">
        <div className="marquee-track gap-6">
          {SECTORS.map(({ id, Icon }) => (
            <SectorCard key={id} Icon={Icon} label={t(`sectors.${id}`)} />
          ))}
          {/* Duplicate for seamless loop — hidden from assistive technology */}
          <span aria-hidden="true" className="marquee-duplicate contents">
            {SECTORS.map(({ id, Icon }) => (
              <SectorCard key={`dup-${id}`} Icon={Icon} label={t(`sectors.${id}`)} />
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
