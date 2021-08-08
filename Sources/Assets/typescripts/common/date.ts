export function getDateFromFullDate(date: string | number | Date, dateString: { innerHTML: string; }) {
    let d = new Date(date);
    dateString.innerHTML = d.toDateString();
}

export function getYearFromFullDate(date: string | number | Date, dateString: { innerHTML: number; }) {
    let d = new Date(date);
    dateString.innerHTML = d.getFullYear();
}