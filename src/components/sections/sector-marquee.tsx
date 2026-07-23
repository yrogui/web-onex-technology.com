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
    <div className="flex flex-col items-center justify-center gap-4 w-[140px] h-[140px] md:w-[180px] md:h-[180px] bg-[#FAFAF7] border border-smoke rounded-[14px] shrink-0">
      <Icon strokeWidth={1.5} className="w-8 h-8 text-charcoal" />
      <span className="font-sans font-medium text-[11px] uppercase tracking-[0.1em] text-graphite text-center leading-tight px-3">
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
