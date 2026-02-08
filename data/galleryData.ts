import { GalleryItem } from "@/components/GalleryTemplate";

export const allGalleryItems: GalleryItem[] = [
  {
    id: 1,
    category: "painting",
    src: "/TVY6064.jpg",
    title: "Abstract Horizon",
    year: "2026",
    medium: "Acrylic on Canvas",
    size: "36 x 48 in",
    series: "Horizon Series",
    featured: true
  },
  {
    id: 2,
    category: "sculpture",
    src: "/TVY6078.jpg",
    title: "Earthen Dreams",
    year: "2026",
    medium: "Mixed Media",
    size: "40 x 50 in",
    series: "Earth Collection",
    featured: true
  },
  {
    id: 3,
    category: "mixed-media",
    src: "/TVY6085.jpg",
    title: "Color Symphony",
    year: "2026",
    medium: "Acrylic on Canvas",
    size: "30 x 40 in",
    series: "Symphony Series"
  },
  {
    id: 4,
    category: "painting",
    src: "/TVY6086.jpg",
    title: "Monochrome Flow",
    year: "2026",
    medium: "Oil on Canvas",
    size: "36 x 48 in",
    series: "Flow Collection",
    featured: true
  },
  {
    id: 5,
    category: "digital",
    src: "/TVY6096.jpg",
    title: "Digital Essence",
    year: "2026",
    medium: "Digital Print",
    size: "32 x 42 in",
    series: "Digital Explorations"
  },
  {
    id: 6,
    category: "sculpture",
    src: "/TVY6099.jpg",
    title: "Textured Reality",
    year: "2026",
    medium: "Mixed Media",
    size: "38 x 46 in",
    series: "Reality Series",
    featured: true
  },
  {
    id: 7,
    category: "mixed-media",
    src: "/TVY6101.jpg",
    title: "Organic Forms",
    year: "2026",
    medium: "Mixed Media on Canvas",
    size: "34 x 44 in",
    series: "Organic Collection"
  },
  {
    id: 8,
    category: "painting",
    src: "/TVY6102.jpg",
    title: "Gestural Expression",
    year: "2026",
    medium: "Acrylic on Canvas",
    size: "36 x 48 in",
    series: "Expression Series"
  },
];

export const featuredItems = allGalleryItems.filter(item => item.featured);

export const smallCanvasItems: GalleryItem[] = [
  {
    id: 101,
    category: "painting",
    src: "/big-art-small-canvas/IMG_9643.JPG",
    title: "Small Canvas 1",
    year: "2026",
    medium: "Mixed Media on Canvas",
    size: "12 x 16 in",
    series: "Small Canvas Collection"
  },
  {
    id: 102,
    category: "painting",
    src: "/big-art-small-canvas/IMG_9644.JPG",
    title: "Small Canvas 2",
    year: "2026",
    medium: "Mixed Media on Canvas",
    size: "12 x 16 in",
    series: "Small Canvas Collection"
  },
  {
    id: 103,
    category: "painting",
    src: "/big-art-small-canvas/IMG_9645.JPG",
    title: "Small Canvas 3",
    year: "2026",
    medium: "Mixed Media on Canvas",
    size: "12 x 16 in",
    series: "Small Canvas Collection"
  },
  {
    id: 104,
    category: "painting",
    src: "/big-art-small-canvas/IMG_9646.JPG",
    title: "Small Canvas 4",
    year: "2026",
    medium: "Mixed Media on Canvas",
    size: "12 x 16 in",
    series: "Small Canvas Collection"
  },
  {
    id: 105,
    category: "painting",
    src: "/big-art-small-canvas/IMG_9647.JPG",
    title: "Small Canvas 5",
    year: "2026",
    medium: "Mixed Media on Canvas",
    size: "12 x 16 in",
    series: "Small Canvas Collection"
  },
  {
    id: 106,
    category: "painting",
    src: "/big-art-small-canvas/IMG_9648.JPG",
    title: "Small Canvas 6",
    year: "2026",
    medium: "Mixed Media on Canvas",
    size: "12 x 16 in",
    series: "Small Canvas Collection"
  },
  {
    id: 107,
    category: "painting",
    src: "/big-art-small-canvas/IMG_9649.JPG",
    title: "Small Canvas 7",
    year: "2026",
    medium: "Mixed Media on Canvas",
    size: "12 x 16 in",
    series: "Small Canvas Collection"
  },
  {
    id: 108,
    category: "painting",
    src: "/big-art-small-canvas/IMG_9654.JPG",
    title: "Small Canvas 8",
    year: "2026",
    medium: "Mixed Media on Canvas",
    size: "12 x 16 in",
    series: "Small Canvas Collection"
  },
  {
    id: 109,
    category: "painting",
    src: "/big-art-small-canvas/IMG_9655.JPG",
    title: "Small Canvas 9",
    year: "2026",
    medium: "Mixed Media on Canvas",
    size: "12 x 16 in",
    series: "Small Canvas Collection"
  },
  {
    id: 110,
    category: "painting",
    src: "/big-art-small-canvas/IMG_9657.JPG",
    title: "Small Canvas 10",
    year: "2026",
    medium: "Mixed Media on Canvas",
    size: "12 x 16 in",
    series: "Small Canvas Collection"
  }
];
