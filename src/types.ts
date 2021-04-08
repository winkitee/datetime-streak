type DateT = Date | number | string;
type DateTimesObj = { [key: string]: DateT };
type DateTimesArray = DateT[];
type DateTimes = DateTimesObj | DateTimesArray;
type StreakObj = {
    currentDailyStreak: number;
    currentWeeklyStreak: number;
    longestDailyStreak: number;
    longestWeeklyStreak: number;
    activityDates: { [key: string]: number };
};
