import Fees from "../components/Fees";

export default function FeesSection() {
  return (
    <div className="space-y-10 xl:space-y-[60px] 2xl:space-y-[80px]">
      <Fees
        theaddata={[
          "Program",
          "Age Group",
          "Annual Tuitition",
          "Registration Fee",
          "Activity Fee",
        ]}
        tbodydata={[
          ["Nursery", "2 - 3 Years", "$1,686", "$162", "$12"],
          ["Pre - Kindergartens", "3 - 4 Years", "$2,686", "$220", "$16"],
          ["Kindergarten", "4 - 5 Years", "$3,686", "$340", "$20"],
        ]}
      />
      <Fees
        theaddata={["Additional Services"]}
        tbodydata={[
          ["Before and After-School Care", "$120 / per month"],
          ["Language Immersion Program", "$60 / per semester"],
          ["Transportation (optional)", "$80 / per month"],
        ]}
      />
    </div>
  );
}
