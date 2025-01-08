import { ReactNode, useState } from "react";
import { format, sub, isValid, add } from "date-fns";
import { tv } from "tailwind-variants";
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

import { useCalendarRows } from "./hooks";
import CalendarRow from "./CalendarRow";

function isEmpty (value: string | null) {
  return value === null || value.length < 1
}

const dateField = tv({
  base: "bg-gray-50 rounded-lg p-2 px-3 text-lg",
  variants: {
    active: {
      true: 'text-green-500 bg-gray-50',
      false: 'text-gray-800',
    }
  }
})

const calendarDayButton = tv({
  base: "w-10 h-10 text-sm text-center rounded-full",
  variants: {
    selected: {
      true: 'bg-green-500 text-white',
      false: 'hover:bg-gray-100'
    }
  }
})

export default function DateFieldWithCalendar ({
  label,
  value,
  onChange
}: {
  label: ReactNode
  value: string
  onChange: (value: string) => void
}) {
  const [active, setActive] = useState<boolean>(false)
  const [month, setMonth] = useState<string>(() => {
    const date = new Date(value ?? NaN)
    if (isValid(date)) return format(date, 'yyyy-MM')
    return format(new Date(), 'yyyy-MM')
  })

  const valueLabel = isEmpty(value) ? '----/--/--' : format(new Date(value), 'yyy/MM/dd')
  const rows = useCalendarRows(month);

  const handlePreviousMonth = () => {
    setMonth(format(sub(new Date(month), { months: 1}), 'yyyy-MM'),)
  }
  const handleNextMonth = () => {
    setMonth(format(add(new Date(month), { months: 1}), 'yyyy-MM'),)
  }

  return (
    <div>
      <button
        className="flex flex-row justify-between items-center border-b px-4 py-3 w-full"
        onClick={() => setActive(!active)}>
        <div className="text-gray-800">{label}</div>
        <div className={dateField({ active })}>
          {valueLabel}
        </div>
      </button>
      <div className="transition-all duration-300 ease-in-out" style={{ maxHeight: active ? '1000px' : '0', overflow: 'hidden' }}>
        <div className="border-b">
          <div className="flex flex-row items-center p-3">
            <div className="flex-grow">
              <input
                type="month" className="border py-1 px-2 text-sm rounded"
                value={month} onChange={event => setMonth(event.target.value)} />
            </div>
            <div className="flex gap-1">
              <button onClick={handlePreviousMonth} className="px-2 active:bg-gray-200 hover:bg-gray-100 w-8 h-8 rounded-full text-sm">
                <SlArrowLeft />
              </button>
              <button onClick={handleNextMonth} className="px-2 active:bg-gray-200 hover:bg-gray-100 w-8 h-8 rounded-full text-sm">
                <SlArrowRight />
              </button>
            </div>
          </div>
          <div className="py-2">
            <CalendarRow>
              <div className="text-sm text-center text-gray-500">日</div>
              <div className="text-sm text-center text-gray-500">月</div>
              <div className="text-sm text-center text-gray-500">火</div>
              <div className="text-sm text-center text-gray-500">水</div>
              <div className="text-sm text-center text-gray-500">木</div>
              <div className="text-sm text-center text-gray-500">金</div>
              <div className="text-sm text-center text-gray-500">土</div>
            </CalendarRow>
            <div>
              {rows.map((row, r) => (
                <CalendarRow key={r}>
                  {row.map((column, c) => {
                    const selected = column.value == value
                    return (
                      <div key={c} className="flex justify-center items-center">
                        {column.shown ? (
                          <button
                            onClick={() => onChange(column.value)}
                            className={calendarDayButton({ selected })}>
                            {column.day}
                          </button>
                        ) : (
                          null
                        )}
                      </div>
                    )
                  })}
                </CalendarRow>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
