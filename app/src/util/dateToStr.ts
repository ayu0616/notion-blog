export default function dateToStr(date: Date | string): string {
    const d = new Date(date)
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
}
