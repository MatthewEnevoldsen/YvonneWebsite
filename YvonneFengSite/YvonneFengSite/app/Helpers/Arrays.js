var ArrayExt;
(function (ArrayExt) {
    function chunks(array, chunkSize) {
        var result = [];
        var arrayCopy = array.slice();
        while (arrayCopy.length) {
            result.push(arrayCopy.splice(0, chunkSize));
        }
        return result;
    }
    ArrayExt.chunks = chunks;
})(ArrayExt || (ArrayExt = {}));
