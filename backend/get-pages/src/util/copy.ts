/** ディープコピーを作成する */
export const deepCopy = <T>(obj: T): T => {
    return JSON.parse(JSON.stringify(obj));
};
