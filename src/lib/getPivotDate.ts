import { DAY_TIME } from "./config";

function getPivotDate(date: Date, pivotTime: string) {
    const y = date.getFullYear();
    const m = date.getMonth();
    const d = date.getDate();
    const [hours, minutes, seconds] = pivotTime.split(":");
    let pivotDate = new Date(y, m, d, +hours, +minutes, +seconds);
    if (date.getTime() > pivotDate.getTime()) {
        pivotDate = new Date(pivotDate.getTime() + DAY_TIME);
    }
    return pivotDate;
}

export default getPivotDate;
