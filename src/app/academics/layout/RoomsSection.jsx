import WebsiteSection from "@/components/WebsiteSection";
import RoomsGallery from "../components/RoomsGallery";

export default function RoomsSection() {
  return (
    <WebsiteSection
      id="gallery"
      message="Our Gallery"
      title="Our Rooms Gallery"
      paragraph="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
    >
      <RoomsGallery />
    </WebsiteSection>
  );
}
