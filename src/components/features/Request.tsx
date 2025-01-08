import { SlArrowLeft } from "react-icons/sl";
import { Link } from "react-router-dom";
import DateFieldWithCalendar from "../parts/DateFieldWithCalendar";
import FormSection from "../parts/FormSection";
import DateRequestField from "../parts/DateRequestField";
import { add, endOfMonth, format, startOfMonth } from "date-fns";
import { useMemo, useState } from "react";

export default function Request () {
  const [startDate, setStartDate] = useState<string>(() => format(startOfMonth(add(new Date(), {months:1})), 'yyyy-MM-dd'));;
  const [endDate, setEndDate] = useState<string>(() => format(endOfMonth(add(new Date(), {months:1})), 'yyyy-MM-dd'));

  const dates = useMemo(() => {
    if (!startDate || !endDate) return [];
    const start = new Date(startDate);
    const end = new Date(endDate);
    const dates = [];
    while (start <= end) {
      dates.push(format(start, 'yyyy-MM-dd'));
      start.setDate(start.getDate() + 1);
    }
    return dates;
  }, [startDate, endDate]);

  return (
    <div className="bg-gray-100 min-h-screen pb-40">
      <div className="border-b bg-white">
        <div className="max-w-xl mx-auto">
          <Link to="/" className="flex gap-2 items-center py-3 px-2">
            <SlArrowLeft />
            戻る
          </Link>
        </div>
      </div>
      <div className="py-20 bg-white px-4">
        <div className="text-center text-2xl font-bold max-w-xl mx-auto">
          シフトの希望を出す
        </div>
      </div>
      <div className="max-w-xl mx-auto py-12">
        <FormSection title="期間">
          <DateFieldWithCalendar
            label="開始" value={startDate} onChange={value => setStartDate(value)} />
          <DateFieldWithCalendar
            label="終了" value={endDate} onChange={value => setEndDate(value)} />
        </FormSection>
        <FormSection title="希望">
          {dates.map(date => (
            <DateRequestField key={date} date={date} />
          ))}
        </FormSection>
      </div>
    </div>
  )
}
