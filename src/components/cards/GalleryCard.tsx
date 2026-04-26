import Image from "next/image";
import type { GalleryItem } from "@/types";

interface GalleryCardProps {
  item: GalleryItem;
  onClick?: () => void;
}

export default function GalleryCard({ item, onClick }: GalleryCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg border border-[#e5ddd3] text-left card-hover w-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden image-scale">
        <Image
          src={item.imageUrl}
          alt={item.altText}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {item.beforeAfterType && item.beforeAfterType !== "single" && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-[#1a365d] text-white text-xs uppercase tracking-wider font-medium rounded">
            {item.beforeAfterType === "before" ? "Before" : "After"}
          </span>
        )}
      </div>
      <div className="p-4">
        <h4 className="font-serif text-base text-[#1a365d] mb-1">{item.title}</h4>
        {item.caption && (
          <p className="text-sm text-[#6b6b6b] line-clamp-2">{item.caption}</p>
        )}
        {item.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-[#f5f0eb] text-[#8b6d4b] text-xs rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </button>
  );
}
