export default function formatDate(date) {
    let dateArr = date.split("-")
    let year = dateArr[0]
    let month = dateArr[1]
    let day = dateArr[2] > 9 ? dateArr[2] : dateArr[2].split("")[1]

    let monthName;
    switch (month) {
        case "01":
            monthName = "January"            
            break;
        case "02":
            monthName = "February"
            break;
        case "03":
            monthName = "March"
            break;
        case "04":
            monthName = "April"
            break;
        case "05":
            monthName = "May"
            break;
        case "06":
            monthName = "June"
            break;
        case "07":
            monthName = "July"
            break;
        case "08":
            monthName = "August"
            break;
        case "09":
            monthName = "September"
            break;
        case "10":
            monthName = "October"
            break;
        case "11":
            monthName = "November"
            break;
        case "12":
            monthName = "December"
            break;
    }

    return `${monthName} ${day} ${year}`
    // return date
}