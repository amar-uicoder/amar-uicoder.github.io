import Calendar from "./component/calendar/calendar"
export default function Page() {
  const date = new Date();
  return <Calendar year={date.getFullYear()} month={date.getMonth() + 1} />
}