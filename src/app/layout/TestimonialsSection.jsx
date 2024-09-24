import Carousel from "@/components/Carousel";
import MessageCard from "@/components/MessageCard";
import TestimonialCard from "@/components/TestimonialCard";

import womenAvatar1 from "@/../public/img/women-avatar-1.svg";
import womenAvatar2 from "@/../public/img/women-avatar-2.svg";
import menAvatar1 from "@/../public/img/men-avatar-1.svg";

export default function TestimonialsSection() {
  return (
    <section
      className="my-20 space-y-12 xl:my-[150px] xl:space-y-20 2xl:my-[200px] 2xl:space-y-[100px]"
      id="testimonials"
    >
      <div className="flex flex-col items-center gap-[10px] xl:gap-[14px] 2xl:gap-[19px]">
        <MessageCard>Their Happy Words 🤗</MessageCard>
        <h2 className="font-headings text-[38px] font-bold text-grey-10 xl:text-[48px] 2xl:text-[58px]">
          Our Testimonials
        </h2>
        <p className="text-center text-grey-20 2xl:max-w-[990px] 2xl:text-xl">
          Our testimonials are heartfelt reflections of the nurturing
          environment we provide, where children flourish both academically and
          emotionally.
        </p>
      </div>
      <Carousel>
        {testimonialsData.map((item) => (
          <div
            className="flex max-w-[425px] flex-shrink-0 flex-grow-0 basis-full"
            key={item.name}
          >
            <TestimonialCard
              image={item.image}
              name={item.name}
              stars={item.stars}
              testimony={item.testimony}
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
}

const testimonialsData = [
  {
    image: womenAvatar1,
    name: "Jennifer B.",
    stars: 4,
    testimony:
      "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
  },
  {
    image: womenAvatar2,
    name: "David K.",
    stars: 5,
    testimony:
      "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
  },
  {
    image: menAvatar1,
    name: "Emili L.",
    stars: 5,
    testimony:
      "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
  },
];
