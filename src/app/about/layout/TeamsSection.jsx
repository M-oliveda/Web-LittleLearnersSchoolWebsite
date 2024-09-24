import MessageCard from "@/components/MessageCard";
import TeamMemberCard from "./components/TeamMemberCard";

import sarahProfileImage from "@/../public/img/sarah-profile.png";
import davidRobertsProfileImage from "@/../public/img/david-roberts-profile.png";
import emilyFernandezProfileImage from "@/../public/img/emily-fernandez-profile.png";
import michaelTurnerProfileImage from "@/../public/img/michael-turner-profile.png";

export default function TeamsSection() {
  return (
    <section
      className="mx-auto my-20 max-w-[1280px] space-y-[50px] xl:my-[154px] xl:space-y-20 2xl:my-[200px] 2xl:space-y-[100px]"
      id="teachers"
    >
      <div className="flex flex-col items-center gap-[10px] xl:gap-[14px] 2xl:gap-[19px]">
        <MessageCard>Our Teachers With Experties</MessageCard>
        <h2 className="text-center font-headings text-[38px] font-bold text-grey-10 xl:text-[48px]">
          Our Team Members
        </h2>
        <p className="max-w-[1196px] text-center text-lg text-grey-20 2xl:text-base">
          At Little Learners Academy, our teaching team is the heart of our
          educational journey. We take great pride in employing highly qualified
          and passionate educators who possess a deep understanding of early
          childhood development. Our teachers create a warm and engaging
          atmosphere, encouraging curiosity, instilling confidence, and
          fostering a love for learning.
        </p>
      </div>
      <div className="mx-auto w-[90%] space-y-10 xl:flex xl:flex-wrap xl:justify-center xl:gap-10 xl:space-y-0">
        {teamsData.map((item) => (
          <TeamMemberCard
            key={item.fullname}
            fullname={item.fullname}
            profileImage={item.profileImage}
            qualification={item.qualification}
            about={item.about}
            email={item.email}
          />
        ))}
      </div>
    </section>
  );
}

const teamsData = [
  {
    profileImage: sarahProfileImage,
    fullname: "Ms. Sarah Anderson",
    qualification: "Bachelor's Degree in Early Childhood Education",
    about:
      "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
    email: "sarahanderson@email.me",
  },
  {
    profileImage: davidRobertsProfileImage,
    fullname: "Mr. David Roberts",
    qualification: "Master's Degree in Elementary Education",
    about:
      "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",
    email: "davidroberts@email.me",
  },
  {
    profileImage: emilyFernandezProfileImage,
    fullname: "Ms. Emily Hernandez",
    qualification: "Diploma in Child Psychology",
    about:
      "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.",
    email: "emilyfernandez@email.me",
  },
  {
    profileImage: michaelTurnerProfileImage,
    fullname: "Mr. Michael Turner",
    qualification: "Bachelor's Degree in Physical Education",
    about:
      "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",
    email: "michaelturner@email.me",
  },
];
