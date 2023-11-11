import sharp from "sharp";

export const fetchImg = async (imageUrl: string) => {
    // fetchメソッドで画像を取得する
    const res = await fetch(imageUrl);
    const blob = await res.arrayBuffer();

    const buffer = Buffer.from(blob);
    const type = res.headers.get("content-type") || "";

    return { buffer, type };
};

export const imgToUri = async (imageUrl: string) => {
    // 画像を取得する
    const { buffer, type } = await fetchImg(imageUrl);

    // 画像をbase64に変換する
    const base64 = buffer.toString("base64");
    // data URIとして完成させる
    const dataUri = `data:${type};base64,${base64}`;
    return dataUri;
};

export const imgToWebp = async (buffer: Buffer, quality: number = 50) => {
    // sharpで画像を変換する
    const webp = await sharp(buffer).webp({ quality }).toBuffer();
    return webp;
};
