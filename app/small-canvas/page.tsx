import GalleryTemplate from "@/components/GalleryTemplate";
import { smallCanvasItems } from "@/data/galleryData";

export default function SmallArtPage() {
  return (
    <div className="pt-20">
      <GalleryTemplate
        title="Big Art Small Canvas"
        subtitle="INTIMATE COLLECTION"
        description="Discover our collection of small-scale artworks, perfect for intimate spaces and personal collections. Each piece offers a unique perspective and detailed craftsmanship."
        items={smallCanvasItems}
        showCategoryFilter={true}
      />
    </div>
  );
}
