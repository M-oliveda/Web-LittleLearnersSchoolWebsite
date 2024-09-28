export default function AdmissionSteps() {
  return (
    <div className="mx-auto w-[80%] space-y-[60px] xl:grid xl:grid-cols-3 xl:gap-[50px] xl:space-y-0">
      {admissionsStepsData.map((item) => (
        <AdmissionStep
          key={item.title}
          step={item.step}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

function AdmissionStep(props) {
  return (
    <article className="group relative">
      <div className="xl:relative xl:left-0 xl:inline-block">
        <div className="relative left-1/2 right-1/2 inline-block -translate-x-1/2 rounded-[10px] border-2 border-grey-15 bg-white px-6 py-[10px] text-grey-10 drop-shadow-customone 2xl:px-[30px] 2xl:py-[14px] 2xl:drop-shadow-customonexl">
          <p className="font-headings text-[40px] font-extrabold text-grey-10 xl:text-[44px] 2xl:text-[60px]">
            {props.step}
          </p>
        </div>
        <div className="relative">
          <div className="relative left-1/2 right-1/2 -z-10 h-[63px] w-[10px] -translate-x-1/2 bg-orange-80 after:absolute after:bottom-0 after:right-1/2 after:start-1/2 after:top-0 after:w-[2px] after:-translate-x-[50%] after:bg-black last:after:hidden"></div>

          <div className="absolute -top-[14px] left-1/2 right-1/2 z-10 flex size-5 -translate-x-1/2 items-center justify-center">
            <div className="size-5 rounded-full border-2 border-grey-15 bg-white"></div>
          </div>
        </div>
      </div>
      <div className="h-[322px] space-y-[14px] rounded-[10px] border-2 border-grey-15 bg-white p-[30px] drop-shadow-customone 2xl:drop-shadow-customonexl">
        <h3 className="font-headings text-[26px] font-bold text-grey-10 xl:text-[30px] 2xl:text-[40px]">
          {props.title}
        </h3>
        <p className="font-medium text-grey-30 2xl:text-xl">
          {props.description}
        </p>
      </div>
      <span className="absolute left-1/2 right-1/2 -z-10 h-[63px] w-[10px] -translate-x-1/2 bg-orange-80 after:absolute after:bottom-0 after:right-1/2 after:start-1/2 after:top-0 after:w-[2px] after:-translate-x-[50%] after:bg-black group-last:hidden xl:hidden" />
    </article>
  );
}

const admissionsStepsData = [
  {
    step: 1,
    title: "Inquiry",
    description:
      "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.",
  },
  {
    step: 2,
    title: "School Tour",
    description:
      "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.",
  },
  {
    step: 3,
    title: "Application Form",
    description:
      "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable).",
  },
  {
    step: 4,
    title: "Parent Interview",
    description:
      "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations.",
  },
  {
    step: 5,
    title: "Student Assessment",
    description:
      "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.",
  },
  {
    step: 6,
    title: "Acceptance",
    description:
      "Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.",
  },
];
