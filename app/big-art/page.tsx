import GalleryTemplate from "@/components/GalleryTemplate";
import { featuredItems } from "@/data/galleryData";

export default function BigArtPage() {
  return (
    <div className="pt-20">
      <GalleryTemplate
        title="Big Art"
        subtitle="GRAND COLLECTION"
        description="Explore our collection of large-scale artworks that make bold statements. These impressive pieces are designed to transform spaces and captivate audiences with their commanding presence."
        items={featuredItems}
        showCategoryFilter={false}
      />
    </div>
  );
}
