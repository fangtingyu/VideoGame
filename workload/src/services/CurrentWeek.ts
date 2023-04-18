
interface EachDay {
    currentDate: Date;
    weekday: string;
}


const getCurrentWeek = (startDate: Date) => {
    const currentWeek = [];
    const currentWeekSunday = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() - startDate.getDay()
    );

    // Push each day of the current week to the currentWeek array
    for (let i = 0; i < 7; i++) {
        const day = new Date(currentWeekSunday);
        day.setDate(currentWeekSunday.getDate() + i);
        currentWeek.push(day);
    }
    return (currentWeek)

}
// Get the date of the current week's Sunday

export default getCurrentWeek