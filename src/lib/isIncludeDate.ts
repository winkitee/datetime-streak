function isIncludeDate(date: Date, startDate: Date, endDate: Date) {
    const time = date.getTime();
    return startDate.getTime() <= time && time < endDate.getTime();
}

export default isIncludeDate;
