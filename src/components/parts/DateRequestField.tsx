import { isValid } from "date-fns"
import { useMemo } from "react"

export default function DateRquestField ({
  date
}: {
  date: string
}) {

  const {
    isValidDate,
    monthLabel,
    dateLabel,
    dayLabel
  } = useMemo(() => {
    const dateObj = new Date(date)
    if (!isValid(dateObj)) {
      return {
        isValidDate: false,
        monthLabel: "",
        dateLabel: "",
        dayLabel: ""
      }
    }
    const monthLabel = dateObj.getMonth() + 1 + "月"
    const dateLabel = dateObj.getDate() + "日"
    const dayLabel = `(${['日', '月', '火', '水', '木', '金', '土'][dateObj.getDay()]})`

    return {
      isValidDate: true,
      monthLabel,
      dateLabel,
      dayLabel
    }
  }, [date])

  return (
    <div className="flex p-3 justify-between border-b align-center">
      <div className="flex text-right items-center">
        {isValidDate ? (
          <>
            <span className="w-10">{monthLabel}</span>
            <span className="w-10">{dateLabel}</span>
            <span className="w-10 text-center text-sm text-gray-700">{dayLabel}</span>
          </>
        ) : (
          <span className="w-24">無効な日付</span>
        )}
      </div>
      <div className="text-md w-64 bg-gray-50 rounded text-center text-gray-500 py-1 select-none">
        なし
      </div>
    </div>
  )
}
