import MessageCard from "@/components/MessageCard";
import PageCard from "./components/PageCard";

export default function PagesSection() {
  return (
    <section className="my-20 space-y-12 xl:my-[150px] xl:space-y-20 2xl:my-[200px] 2xl:space-y-[100px]">
      <div className="flex flex-col items-center gap-[10px] xl:gap-[14px] 2xl:gap-[19px]">
        <MessageCard>Explore More</MessageCard>
        <h2 className="text-center font-headings text-[38px] font-bold text-grey-10 xl:text-[48px] 2xl:text-[58px]">
          Navigate through our Pages
        </h2>
        <p className="max-w-[880px] text-center text-grey-20 2xl:max-w-[990px] 2xl:text-xl">
          Your gateway to discovering a wealth of valuable information about our
          kindergarten school, Feel free to explore and learn more about the
          enriching experiences that await your child at our kindergarten school
        </p>
      </div>
      <div className="space-y-10 xl:flex xl:flex-wrap xl:justify-center xl:gap-10 xl:space-y-0">
        {pagesCardData.map((item) => (
          <PageCard
            title={item.title}
            key={item.title}
            description={item.description}
            path={item.path}
          />
        ))}
      </div>
    </section>
  );
}

const pagesCardData = [
  {
    title: "About Us",
    description:
      "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
    path: "/about",
  },
  {
    title: "Academics",
    description:
      "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
    path: "/academics",
  },
  {
    title: "Student Life",
    description:
      "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
    path: "/studentlife",
  },
  {
    title: "Admissions",
    description:
      "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
    path: "/admissions",
  },
];
