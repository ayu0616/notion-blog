import { Color } from '../color'

export interface RichText {
    type: 'text' | 'equation'
    text: string
    href?: string
    annotations: Annotations
}

export interface Annotations {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: Color
}
