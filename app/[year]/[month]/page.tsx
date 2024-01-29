import Calendar from "../../component/calendar/calendar";
export function generateStaticParams() {
    return [{ year: '2024', month: '1' }, { year: '2024', month: '2' }]
  }

export default function Page({ params }: { params: { year: number, month: number } }) {
    return <Calendar year={params.year} month={params.month} />
}