import sportsImage from "@/../public/img/sports.png";
import culturalFestivalsImage from "@/../public/img/cultural-festivals.png";
import artExibitionsImage from "@/../public/img/art-exhibitions.png";
import scienceFairImage from "@/../public/img/science-fair.png";
import internationalDayImage from "@/../public/img/international-day.png";
import graduationCeremonyImage from "@/../public/img/graduation-ceremony.png";
import ImageCard from "@/components/ImageCard";

export default function Events() {
  return (
    <div className="space-y-[60px] xl:grid xl:grid-cols-3 xl:gap-10 xl:space-y-0">
      {eventsData.map((item) => (
        <ImageCard
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

const eventsData = [
  {
    image: sportsImage,
    title: "Annual Sports Day",
    description:
      "A day filled with friendly competition, team spirit, and sportsmanship.",
  },
  {
    image: culturalFestivalsImage,
    title: "Cultural Festivals",
    description:
      "Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation.",
  },
  {
    image: artExibitionsImage,
    title: "Art Exhibitions",
    description:
      "Showcasing our students' artistic talents through exhibitions and displays.",
  },
  {
    image: scienceFairImage,
    title: "Science Fair",
    description:
      "A platform for budding scientists to present their innovative projects and experiments.",
  },
  {
    image: internationalDayImage,
    title: "International Day",
    description:
      "A vibrant celebration of our diverse community, embracing cultures from around the world.",
  },
  {
    image: graduationCeremonyImage,
    title: "Graduation Ceremony",
    description:
      "A significant milestone as our Kindergarten students prepare to embark on their academic journey.",
  },
];
