import { DAY_TIME } from "./config";

function getLastWeeklyRange(date: Date) {
    const day = date.getDay();
    const endDate = new Date(date.getTime() - DAY_TIME * day);
    const startDate = new Date(endDate.getTime() - DAY_TIME * 7);
    return [startDate, endDate];
}

export default getLastWeeklyRange;
