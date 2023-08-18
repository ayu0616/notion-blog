export default function dateToStr(date: Date | string): string {
    if (typeof date === 'string') date = new Date(date)
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}
