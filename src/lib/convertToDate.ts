function convertToDate(date: DateT): Date {
    if (typeof date == "string" || typeof date == "number") {
        date = new Date(date);
    }
    return date;
}

export default convertToDate;
