export default function FeesTable(props) {
  return (
    <table className="w-full table-fixed">
      <thead className="mb-10 block rounded-[10px] border-2 border-grey-15 bg-orange-95">
        <tr className="sticky top-0 flex w-full">
          {props.theaddata.map((head) => (
            <th
              key={head}
              className="w-full text-nowrap px-[30px] py-[18px] text-left text-lg font-medium text-grey-15 [&:not(:first-child)]:border-l-2 [&:not(:first-child)]:border-l-grey-15"
            >
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="block rounded-[10px] border-2 border-grey-15 bg-orange-99">
        {props.tbodydata.map((row, id = 1) => (
          <tr
            key={`row ${id + 1}`}
            className="flex w-full [&:not(:last-child)]:border-b-2 [&:not(:last-child)]:border-b-grey-15"
          >
            {row.map((item) => (
              <td
                key={item}
                className={`flex w-full flex-col justify-center text-wrap px-[30px] py-[18px] text-lg font-medium text-grey-15 [&:not(:first-child)]:border-l-2 [&:not(:first-child)]:border-l-grey-15`}
              >
                {item}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
