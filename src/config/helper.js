
export function timeAgo(date){
    const currentDate = new Date();
    const givenDate = new Date(date);
    const difference = currentDate - givenDate;
    const seconds = difference / 1000;
    if (seconds < 60) {
        return `${Math.floor(seconds)} seconds ago`;
    }
    const minutes = seconds / 60;
    if (minutes < 60) {
        return `${Math.floor(minutes)} minutes ago`;
    }
    const hours = minutes / 60;
    if (hours < 24) {
        return `${Math.floor(hours)} hours ago`;
    }
    const days = hours / 24;
    if (days < 30) {
        return `${Math.floor(days)} days ago`;
    }
    const months = days / 30;
    if (months < 12) {
        return `${Math.floor(months)} months ago`;
    }
    const years = months / 12;
    return `${Math.floor(years)} years ago`;
}

// Example usage
console.log(timeAgo("2023-12-01T14:00:00Z")); // Output depends on the current time
