/// <reference path="../Scripts/jasmine.js" />
/// <reference path="../Scripts/underscore.js" />

/// <reference path="../Scripts/angular.js" />
/// <reference path="../Scripts/angular-mocks.js" />
/// <reference path="../Scripts/angular-animate.js" />
/// <reference path="../Scripts/angular-route.js" />
/// <reference path="../Scripts/angular-ui/ui-bootstrap.js" />

/// <reference path="../app/Helpers/Arrays.js" />
/// <reference path="../app/Helpers/filePaths.js" />

/// <reference path="../app/Images/images.js" />
/// <reference path="../app/Images/imagemanager.js" />
/// <reference path="../app/Images/imagecontroller.js" />

/// <reference path="../app/Biography/biographyController.js" />
/// <reference path="../app/Contact/contactController.js" />
/// <reference path="../app/Drawings/drawingsController.js" />
/// <reference path="../app/Home/homeController.js" />

/// <reference path="../app/NavBar/navBarController.js" />
/// <reference path="../app/News/newsController.js" />

/// <reference path="../app/app.js" />



describe("other", function () {
    var $controller;
    beforeEach(module('YvonnesArt'));
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));
    it("blah", function () {
        var $scope = {};
        var cont = $controller('drawingsController', { $scope: $scope });
        expect(1).toEqual(1);
    });
})

describe('Image Manager', function () {
    var manager;
    beforeEach(function () { manager = new Images.Manager([{ id:1, name: 'test', path: './Resources/Test.bmp' }, { id:2, name: 'test2', path: './Resources/Test2.bmp' }]); });
    it('Should start off with no image selected', function () {
        expect(manager.isImageSelected()).toBe(false);
    });

    describe('Selecting an image should', function () {
        it('change the selected image', function () {
            manager.selectImageById(1);
            expect(manager.selectedImage.id).toBe(1);
        });
    });

});