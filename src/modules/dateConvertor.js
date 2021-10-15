//This function will get a date 
//then give how long has passed 
//from that date.

const dateConvertor = (date) => {
    const date1 = new Date(date);
    const date2 = new Date();
    const diffTime = Math.abs(date2-date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

export default dateConvertor;