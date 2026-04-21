import type { Metadata } from "next";
import { getGalleryItems } from "@/lib/queries";
import GalleryCard from "@/components/cards/GalleryCard";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View CoverCo's portfolio of custom cover projects including before and after transformations for hotels, casinos, stadiums, and more.",
};

export default async function GalleryPage() {
  const items = await getGalleryItems();

  const beforeAfterPairs = items.reduce(
    (acc, item) => {
      if (item.beforeAfterType === "before") {
        const afterItem = items.find(
          (i) =>
            i.beforeAfterType === "after" &&
            i.title.toLowerCase().includes(
              item.title.toLowerCase().replace(" before", "").replace("before ", "")
            )
        );
        acc.push({ before: item, after: afterItem || null });
      } else if (item.beforeAfterType === "single" || !item.beforeAfterType) {
        acc.push({ before: item, after: null });
      }
      return acc;
    },
    [] as { before: (typeof items)[0]; after: (typeof items)[0] | null }[]
  );

  // Filter unique items - include pairs where after exists, and singles
  const displayItems = beforeAfterPairs.filter((pair) => {
    if (pair.before.beforeAfterType === "before" && pair.after) return true;
    if (pair.before.beforeAfterType === "single" || !pair.before.beforeAfterType) return true;
    return false;
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-[#1a365d]">
        <div className="container-wide">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8b6d4b] font-medium">
            Portfolio
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-white mt-4 mb-6">
            Gallery & Transformations
          </h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            See the impact of custom covers on venues across the country. Browse our portfolio of before-and-after transformations and completed projects.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayItems.map((pair) => (
              <GalleryCard key={pair.before.id} item={pair.before} />
            ))}
          </div>

          {displayItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#6b6b6b]">
                Gallery items will be added soon. Contact us to see examples of our work.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
