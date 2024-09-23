export default function MessageCard({ children }) {
  return (
    <p className="rounded-md border-2 border-black bg-white px-[14px] py-2 text-sm font-medium text-grey-20 xl:text-base 2xl:px-5 2xl:py-[10px] 2xl:text-lg">
      {children}
    </p>
  );
}
