import { getDaysInMonth, getMonth, isValid, getDay, startOfMonth, addMonths, subMonths, eachDayOfInterval, endOfMonth, isSameDay, format } from 'date-fns';

export const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber"];

export const getMonthName = (date: Date) => MONTHS[getMonth(date)];

export const isDateValid = (year: number, month: number) => isValid(new Date(year, month));

export const getNoOfDaysInMonth = (date: Date) => getDaysInMonth(date);

export const getMonthStart = (date: Date) => getDay(startOfMonth(date));

export const addMonth = (date: Date) => addMonths(date, 1);

export const subMonth = (date: Date) => subMonths(date, 1);

export const getAllDaysInMonth = (date: Date) => eachDayOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date)
});

export const isDaySame = (date1: Date, date2: Date) => isSameDay(date1, date2);

export const formattedDate = (date: Date) => format(date, 'MM-dd-yyyy');