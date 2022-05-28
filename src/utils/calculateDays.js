const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

export const dayDifference = (dateStart, dateEnd) => {
    const timeDiff = Math.abs(dateEnd.getTime() - dateStart.getTime());
    return Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
}

export const findRoomsById = (data, roomId) => {
    return data.find(room => room.id === parseInt(roomId));
}

export const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    let dates = [];

    while (date <= end) {
        dates.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }

    return dates;
}