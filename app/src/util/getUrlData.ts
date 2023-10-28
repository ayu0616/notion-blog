import { JSDOM } from 'jsdom'

export const getUrlData = async (url: string) => {
    const html = await fetch(url).then((res) => res.text())
    const parser = new JSDOM(html)
    const doc = parser.window.document
    const title = doc.querySelector('title')?.textContent ?? url
    const description =
        doc
            .querySelector('meta[name="description"]')
            ?.getAttribute('content') ?? ''
    const iconUrl = `http://www.google.com/s2/favicons?domain=${url}`
    return { title, description, iconUrl }
}
