"use client";
import React, { useState, useEffect } from 'react';
import Body from "./body";
import Header from "./header";
import { isDateValid, addMonth, subMonth } from "../../library/date-helper";

type CalendarProps = {
    year: number,
    month: number
}

export default function CalendarBody(props: CalendarProps) {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        if(isDateValid(props.year, props.month-1)) {
            setDate(new Date(props.year, props.month -1));
        }
    }, [props.year, props.month]);

    const previousClick = () => setDate(subMonth(date));
    const nextClick = () => setDate(addMonth(date));


    return <div className="p-3">
        <Header date={date} previousClick={previousClick} nextClick={nextClick}></Header>
        <hr/>
        <Body date={date}></Body>
    </div>
}