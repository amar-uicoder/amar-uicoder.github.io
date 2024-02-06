import { DAYS } from "../../library/date-helper";

export default function Days() {
    return <>{DAYS.map((day: string, index: number) => <div className="text-center font-bold" key={`days-${index}`}>{day}</div>)}</>
}