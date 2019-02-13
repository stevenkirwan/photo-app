// function to format a date
export const _formatDate = (date) => {
    // create a new date 
    date = new Date(date);
    // get the year
    const year = date.getFullYear();
    // get the month - if it's less than 10 add a 0
    const month = (date.getMonth() < 10 ? "0" : "") + (date.getMonth() + 1);
    // get the day - if it's less than 10 add a 0
    const day = (date.getDate() < 10 ? "0" : "") + date.getDate();
    // return the new date separated by a forward slash 
    return `${day} / ${month} / ${year}`;
}