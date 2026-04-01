import { JOB_ICONS } from "@/lib/constants";
import Image from "next/image";

export const WorkBrands = () => {
  const items = [...JOB_ICONS, ...JOB_ICONS, ...JOB_ICONS, ...JOB_ICONS]; // Repeat the array to create a longer list for scrolling

  return (
    <div className="overflow-hidden w-full">
      <ul className="flex gap-12 w-max carousel-scroll">
        {items.map((brand, i) => (
          <li key={i} className="flex items-center justify-center shrink-0">
            <Image
              src={brand.img}
              alt={brand.alt}
              width={120}
              height={60}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
