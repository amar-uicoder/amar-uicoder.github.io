import React, { useState, useEffect } from 'react';
import { DAYS, getMonthStart, getAllDaysInMonth, isDaySame, formattedDate } from "../../library/date-helper";
import Card from "./card";

type BodyProps = {
    date: Date
};

type Data = {
    value: number,
    selected: any,
}

type Events = {
    date: Date,
    thumbnailSrc: string,
    bannerSrc: string,
}

export default function Body(props: BodyProps) {
    const [data, setData] = useState<Data[] | []>([]);
    const [events, setEvents] = useState<Events[] | []>([]);
    const [monthStart, setMonthStart] = useState<number>(0);

    useEffect(() => {
        setMonthStart(getMonthStart(props.date));
        setData([]);
        ajax(props.date);
    }, [props.date]);

    const ajax = async (date: Date) => {
        try {
            const res = await fetch(`https://amock.io/api/launch/new/${formattedDate(date)}`);
            //let object = await res.json();
            setEvents([{ date: new Date(2024, 0, 2), thumbnailSrc: "/hogwarts-legacy__1x1.webp", bannerSrc: "/hogwarts-legacy__16x9.webp" }, { date: new Date(2024, 0, 17), thumbnailSrc: "/metal-gear-solid__1x1.jpeg", bannerSrc: "/metal-gear-solid__16x9.webp" },{ date: new Date(2024, 0, 4), thumbnailSrc: "/gran-turismo-7__1x1.webp", bannerSrc: "/gran-turismo-7__16x9.webp" }]);
        } catch (err) {
            console.log(err);
        }
    };


    return <div>
        <div className="grid grid-cols-7 py-3 gap-2 flex">
            {DAYS.map((day: string, index: number) => <div className="text-center font-bold" key={index}>{day}</div>)}
            {Array(getMonthStart(props.date)).fill(1).map((el, j) =>
                <div className="invisible" key={j}></div>
            )}
            {getAllDaysInMonth(props.date).map((interval: Date, i: number) => {
                let selected = events.find((launch: any) => isDaySame(interval, launch.date));
                return <>
                    <Card value={i + 1} key={i} data={selected} order={monthStart+i}/>
                </>
                }
            )}
        </div>
    </div>
}