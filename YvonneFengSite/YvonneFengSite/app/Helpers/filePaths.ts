module Filepaths {
    export function getFilename(path: string) {
        return path.replace(/^.*[\\\/]/, '');
    }
}
