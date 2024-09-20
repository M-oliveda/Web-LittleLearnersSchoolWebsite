import MessageCard from "@/components/MessageCard";
import QuestionAnswerItem from "@/components/QuestionAnswerItem";

export default function FAQSection() {
  return (
    <section className="my-20 space-y-12 xl:my-[150px] xl:space-y-20 2xl:my-[200px] 2xl:space-y-[100px]">
      <div className="flex flex-col items-center gap-[10px] xl:gap-[14px] 2xl:gap-[19px]">
        <MessageCard>Solutions For The Doubts</MessageCard>
        <h2 className="font-headings text-[38px] font-bold text-grey-10 xl:text-[48px] 2xl:text-[58px]">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-grey-20 2xl:max-w-[990px] 2xl:text-xl">
          Find all the essential information you need in our FAQ section,
          designed to address the most frequently asked questions and help you
          make informed decisions for your child`s education.
        </p>
      </div>
      <div className="justify-between xl:columns-2">
        {questionsData.map((item) => (
          <QuestionAnswerItem
            question={item.question}
            answer={item.answer}
            key={item.question}
          />
        ))}
      </div>
    </section>
  );
}

const questionsData = [
  {
    question: "What are the school hours at Little Learners Academy?",
    answer:
      "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    question: "Is there a uniform policy for students?",
    answer:
      "Yes, Little Learners Academy has a uniform policy that encourages students to wear comfortable and appropriate clothing for learning and play. Detailed information about the uniform requirements is provided during enrollment.",
  },
  {
    question: "What extracurricular activities are available for students?",
    answer:
      "We offer a wide range of extracurricular activities, including arts and crafts, music, sports, and language clubs, to help students explore their interests beyond the classroom.",
  },
  {
    question: "What extracurricular activities are available for students?",
    answer:
      "We offer a wide range of extracurricular activities, including arts and crafts, music, sports, and language clubs, to help students explore their interests beyond the classroom.",
  },
  {
    question: "How do you handle food allergies and dietary restrictions?",
    answer:
      "We take food allergies and dietary restrictions very seriously. Our staff works closely with parents to ensure that meals and snacks are safe for each child. Special accommodations are made to prevent exposure to allergens.",
  },
  {
    question:
      "What is the teacher-to-student ratio at Little Learners Academy?",
    answer:
      "Our teacher-to-student ratio is 1:10, ensuring personalized attention and a supportive learning environment for all students.",
  },
  {
    question: "How do you handle discipline and behavior management?",
    answer:
      "We use positive reinforcement and age-appropriate behavior management techniques to encourage good behavior. Our goal is to help children learn self-regulation and respect for others.",
  },
  {
    question: "How do you handle discipline and behavior management?",
    answer:
      "We use positive reinforcement and age-appropriate behavior management techniques to encourage good behavior. Our goal is to help children learn self-regulation and respect for others.",
  },
];
