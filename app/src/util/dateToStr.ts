export default function dateToStr(date: Date | string): string {
    const _date = new Date(date)
    const y = `000${_date.getFullYear().toString()}`.slice(-4)
    const m = `0${(_date.getMonth() + 1).toString()}`.slice(-2)
    const d = `0${_date.getDate().toString()}`.slice(-2)
    return `${y}-${m}-${d}`
}
