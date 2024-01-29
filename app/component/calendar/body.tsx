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

export default function Body(props: BodyProps) {
    const [data, setData] = useState<Data[] | []>([]);

    useEffect(() => {
        setData([]);
        ajax(props.date);
    }, [props.date]);

    const ajax = async (date: Date) => {
        try {
            const res = await fetch(`https://amock.io/api/launch/new/${formattedDate(date)}`);
            let object = await res.json();
        } catch (err) {
            console.log(err);
        }
        const mock = [{ date: new Date(2024, 0, 4), thumbnailSrc: "/gran-turismo-7__1x1.webp", bannerSrc: "/gran-turismo-7__16x9.webp" }];
        let processedData: Data[] = [];
        getAllDaysInMonth(date).map((interval: Date, i: number) => {
            console.log(interval, new Date(2024, 0, 4), isDaySame(interval, new Date(2024, 1, 4)));
            processedData.push({
                value: i + 1,
                selected: mock.find((launch: any) => isDaySame(interval, launch.date))
            });
        });
        console.log("processedData", processedData);
        setData(processedData);
    };


    return <div>
        <div className="grid grid-cols-7 py-3 gap-2">
            {DAYS.map((day: string, index: number) => <div className="text-center font-bold" key={index}>{day}</div>)}
            {Array(getMonthStart(props.date)).fill(1).map((el, i) =>
                <div className="invisible" key={i}></div>
            )}
            {data.map((interval: Data) =>
                <Card value={interval.value} key={interval.value} data={interval.selected} />
            )}
        </div>
    </div>
}