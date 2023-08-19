export const imgToUri = async (imageUrl: string) => {
    // fetchメソッドで画像を取得する
    const res = await fetch(imageUrl);
    const blob = await res.arrayBuffer();

    const buffer = Buffer.from(blob);

    const base64 = buffer.toString("base64");
    // MIMEタイプを取得する
    const type = res.headers.get("content-type") || "";
    // data URIとして完成させる
    const dataUri = `data:${type};base64,${base64}`;
    return dataUri;
};
