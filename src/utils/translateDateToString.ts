export const translateDateToString = (date: string): string => {
    const d = new Date(Date.parse(date));
    return `${d.toLocaleDateString()} ${d.toLocaleTimeString('ru-RU', {timeStyle: "short"})}`
    // return d.getDate() +
    // "." +
    // (d.getMonth() + 1) +
    // "." +
    // +d.getFullYear() +
    // " " +
    // +d.getHours() +
    // ":" +
    // +d.getMinutes();
}