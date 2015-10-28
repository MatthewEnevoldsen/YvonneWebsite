var Filepaths;
(function (Filepaths) {
    function getFilename(path) {
        return path.replace(/^.*[\\\/]/, '');
    }
    Filepaths.getFilename = getFilename;
})(Filepaths || (Filepaths = {}));
//# sourceMappingURL=filepaths.js.map