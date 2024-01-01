import { Color } from '../color'

export interface RichText {
    annotations: Annotations
    href?: string
    text: string
    type: 'text' | 'equation'
}

export interface Annotations {
    bold: boolean
    code: boolean
    color: Color
    italic: boolean
    strikethrough: boolean
    underline: boolean
}
