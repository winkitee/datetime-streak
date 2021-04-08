const expect = require("chai").expect;
const getStreak = require("../dist/index").getStreak;

describe("getStreak", () => {
    it("should return correct streak - 1", () => {
        const data = require("./testData1.json");
        const result = getStreak(
            data.map((v) => v.startTime),
            "03:00:00"
        );
        console.log(result);
        expect(result).to.have.property("currentDailyStreak").equal(33);
        expect(result).to.have.property("currentWeeklyStreak").equal(7);
        expect(result).to.have.property("longestDailyStreak").equal(33);
        expect(result).to.have.property("longestWeeklyStreak").equal(7);
    });

    it("should return correct streak - 2", () => {
        const data = require("./testData2.json");
        const result = getStreak(
            data.map((v) => v.startTime),
            "03:00:00"
        );
        console.log(result);
        expect(result).to.have.property("currentDailyStreak").equal(0);
        expect(result).to.have.property("currentWeeklyStreak").equal(0);
        expect(result).to.have.property("longestDailyStreak").equal(1);
        expect(result).to.have.property("longestWeeklyStreak").equal(2);
        expect(Object.keys(result.activityDates).length).to.equal(2);
    });

    it("should return correct streak - 3", () => {
        const data = require("./testData2.json");
        const result = getStreak(
            data.map((v) => v.startTime),
            "16:00:00"
        );
        console.log(result);
        expect(result).to.have.property("currentDailyStreak").equal(0);
        expect(result).to.have.property("currentWeeklyStreak").equal(0);
        expect(result).to.have.property("longestDailyStreak").equal(2);
        expect(result).to.have.property("longestWeeklyStreak").equal(2);
        expect(Object.keys(result.activityDates).length).to.equal(4);
    });

    it("should return correct streak - 4", () => {
        const data = [
            new Date(2021, 3, 6, 13, 40, 20), // 2021-4-6
            "2021-04-07T06:40:20.000Z", // 2021-4-7
            1617888567772, // 2021-4-8
            new Date(2021, 3, 8, 12, 00, 20), // 2021-4-8
        ];
        const result = getStreak(data, "00:00:00");
        console.log(result);
        expect(result).to.have.property("currentDailyStreak").equal(3);
        expect(result).to.have.property("currentWeeklyStreak").equal(1);
        expect(result).to.have.property("longestDailyStreak").equal(3);
        expect(result).to.have.property("longestWeeklyStreak").equal(1);
        expect(Object.keys(result.activityDates).length).to.equal(3);
    });
});
