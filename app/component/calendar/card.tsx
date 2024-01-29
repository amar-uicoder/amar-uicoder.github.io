import Image from 'next/image';

type CardProps = {
    value: number,
    data: any
}

export default function Card(props: CardProps) {

    return <a href="#" className="relative block max-w-sm p-12 bg-white border border-gray-200 shadow hover:bg-gray-100" style = {{
        backgroundImage: `url("${props.data?.thumbnailSrc}")`,
        backgroundSize: '100% 100%'
     }}>
        &nbsp;<span className={`absolute top-3 right-5 font-bold ${props.data != null ? "bg-blue-900 text-white rounded-full px-3 py-1" : "" }`}>{props.value}</span>
    </a>
}