import fs from "fs";

/** ファイルに書き込む関数（ディレクトリが存在しない場合は作成する） */
export const writeFile = (path: string, data: string) => {
    return fs.writeFile(path, data, (err) => {
        if (err && err.code === "ENOENT") {
            const dir = path.split("/").slice(0, -1).join("/");
            fs.mkdirSync(dir, { recursive: true });
            writeFile(path, data);
        }
    });
};
