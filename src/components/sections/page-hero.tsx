import Image from "next/image";
import { Badge } from "@/components/ui/badge";

type HeroBadge = { label: string; icon?: React.ElementType };

export default function PageHero({
  titleWhite,
  titleGold,
  description,
  imageSrc,
  badges = [],
}: {
  titleWhite: string;
  titleGold: string;
  description?: string;
  imageSrc: string;
  badges?: HeroBadge[];
}) {
  return (
    <section
      className="relative pt-28 pb-20 overflow-hidden"
      style={{
        // da blu -> nero
        background: "linear-gradient(135deg,#000000 0%,#222222 50%,#000000 100%)",
      }}
    >
      <Image
        src={imageSrc}
        alt="Hero background"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div className="relative container z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          <span className="text-white">{titleWhite} </span>
          {/* accento giallo */}
          <span className="text-[#FFD700]">{titleGold}</span>
        </h1>

        {description && (
          <p className="mt-4 text-lg md:text-2xl text-white/90 max-w-3xl">
            {description}
          </p>
        )}

        {!!badges.length && (
          <div className="mt-6 flex flex-wrap gap-3">
            {badges.map((b, i) => {
              const Icon = b.icon;
              return (
                <Badge
                  key={i}
                  className="bg-white/15 border-white/25 text-white"
                >
                  {Icon ? <Icon className="w-4 h-4 mr-2" /> : null}
                  {b.label}
                </Badge>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
