/// <reference path="../Scripts/jasmine.js" />
/// <reference path="../Scripts/underscore.js" />

/// <reference path="../app/Helpers/Arrays.js" />
/// <reference path="../app/Helpers/filePaths.js" />

describe('ArrayExtensions', function () {
    describe('chunks should', function () {
        it('contain the correct values', function () {
            var input = [1, 2, 3, 4];
            var result = ArrayExt.chunks(input, 2);
            expect(result[0][0]).toBe(1);
            expect(result[0][1]).toBe(2);
            expect(result[1][0]).toBe(3);
            expect(result[1][1]).toBe(4);

        });

        it('break up array into correct sizes', function () {
            var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            var chunkSize = 2;
            var result = ArrayExt.chunks(array, chunkSize);
            expect(result.length).toBe(5);
            for (var i = 0; i < result.length; i++)
                expect(result[i].length).toBe(chunkSize);
        });

        it('put left overs into the last array', function () {
            var input = [1, 2, 3];
            var result = ArrayExt.chunks(input, 2);
            expect(result.length).toBe(2);
            expect(result[0].length).toBe(2);
            expect(result[1].length).toBe(1);
            expect(result[0][0]).toBe(1);
            expect(result[0][1]).toBe(2);
            expect(result[1][0]).toBe(3);
        });

        it('not affect the input array', function () {
            var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            var result = ArrayExt.chunks(array, 3);
            expect(array.length).toBe(10);
            for (var i = 0; i < 10; i++)
                expect(array[i]).toBe(i + 1);            
        });
    })
});

describe('FilePaths', function(){
    describe('getfilename should', function(){
        it('get the name from a relative path', function(){
            var path = '../asdf/fds/df/hello.txt';
            var filename = 'hello.txt';
            expect(Filepaths.getFilename(path)).toBe(filename);
        })
    })
})
