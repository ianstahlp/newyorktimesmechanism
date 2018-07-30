export default (date) => {
    date = new Date(date);
    const year = date.getFullYear();
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;
    let day = day.getDate().toString();
    day = day.length > 1 ? day : "0" + day;
    return month + "/" + day + "/" + year;
};

