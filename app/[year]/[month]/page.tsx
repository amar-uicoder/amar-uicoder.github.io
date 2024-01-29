import Calendar from "../../component/calendar/calendar";
export function generateStaticParams() {
    return [{ year: '2024', month: '1' }, { year: '2024', month: '2' }, { year: '2024', month: '3' }, { year: '2024', month: '4' }, { year: '2024', month: '5' }, { year: '2024', month: '6' }, { year: '2024', month: '7' }, { year: '2024', month: '8' }, { year: '2024', month: '9' }, { year: '2024', month: '10' }, { year: '2024', month: '11' }, { year: '2024', month: '12' },
    { year: '2025', month: '1' }, { year: '2025', month: '2' }, { year: '2025', month: '3' }, { year: '2025', month: '4' }, { year: '2025', month: '5' }, { year: '2025', month: '6' }, { year: '2025', month: '7' }, { year: '2025', month: '8' }, { year: '2025', month: '9' }, { year: '2025', month: '10' }, { year: '2025', month: '11' }, { year: '2025', month: '12' },
    { year: '2023', month: '1' }, { year: '2023', month: '2' }, { year: '2023', month: '3' }, { year: '2023', month: '4' }, { year: '2023', month: '5' }, { year: '2023', month: '6' }, { year: '2023', month: '7' }, { year: '2023', month: '8' }, { year: '2023', month: '9' }, { year: '2023', month: '10' }, { year: '2023', month: '11' }, { year: '2023', month: '12' }];
  }

export default function Page({ params }: { params: { year: number, month: number } }) {
    return <Calendar year={params.year} month={params.month} />
}