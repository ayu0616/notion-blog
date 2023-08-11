import { Color } from "../color";

export interface RichText {
    type: "text" | "equation";
}

export interface RichTextText extends RichText {
    type: "text";
    text: string;
    href?: string;
    annotations: Annotations;
}

export interface Annotations {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: Color;
}
