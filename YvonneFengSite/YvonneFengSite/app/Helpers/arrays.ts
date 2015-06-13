module ArrayExt {
    export function chunks<T>(array: T[], chunkSize: number): T[][] {
        var result: T[][] = [];
        var arrayCopy = array.slice();
        while (arrayCopy.length) {
            result.push(arrayCopy.splice(0, chunkSize));
        }
        return result;
    }
}