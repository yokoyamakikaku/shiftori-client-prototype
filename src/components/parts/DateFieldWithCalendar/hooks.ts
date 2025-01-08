import { useMemo } from "react"
import { format, startOfMonth, endOfWeek, add, startOfWeek, endOfMonth } from "date-fns";

export function useCalendarRows (month: string) {
  const rows = useMemo(() => {
    const rows = []
    const date = new Date(month + "-01");
    const startMonth = startOfMonth(date);
    const endMonth = endOfMonth(date);
    const startCalendar = startOfWeek(startMonth);
    const endCalendar = endOfWeek(endMonth);

    for (let weekStart = startCalendar; weekStart <= endCalendar; weekStart = add(weekStart, { weeks: 1 })) {
      const weekEnd = endOfWeek(weekStart)
      const row = []
      for (let date = weekStart; date <= weekEnd; date = add(date, { days: 1})) {
        const day = date.getDate();
        const value = format(date, 'yyyy-MM-dd');
        const shown = startMonth <= date && date <= endMonth;
        row.push({ day, value, shown, })
      }
      rows.push(row)
    }

    return rows;
  }, [month])
  return rows;
}
