var Images;
(function (Images) {
    var Controller = (function () {
        function Controller($scope, $routeParams, $location, pictures) {
            this.work = [
                {
                    name: "Drawings",
                    images: [
                        {
                            id: 0,
                            path: "Resources/Drawings/large/10pm, 2014, ink on paper, 53 x 38 cm.jpg",
                            name: "10pm",
                            year: 2014,
                            medium: "ink on paper",
                            width: 53,
                            height: 38
                        },
                        {
                            id: 1,
                            path: "Resources/Drawings/large/C0415, 2014, ink on Chinese paper, 45.5 x 69.5.jpg",
                            name: "C0415",
                            year: 2014,
                            medium: "ink on Chinese paper",
                            width: 45.5,
                            height: 69.5
                        },
                    ]
                },
                {
                    name: "Sketchbook",
                    images: [
                        {
                            id: 0,
                            path: "Resources/Drawings/large/10pm, 2014, ink on paper, 53 x 38 cm.jpg",
                            name: "10pm",
                            year: 2014,
                            medium: "ink on paper",
                            size: "53x38cm",
                            width: 53,
                            height: 38
                        },
                        {
                            id: 1,
                            path: "Resources/Drawings/large/C0415, 2014, ink on Chinese paper, 45.5 x 69.5.jpg",
                            name: "C0415",
                            year: 2014,
                            medium: "ink on Chinese paper",
                            width: 45.5,
                            height: 69.5
                        },
                    ]
                },
                {
                    name: "WorkI",
                    images: [
                        { id: 1, name: "Final moment", year: 2015, medium: "Charcoal,  ink and oil on canvas", size: "101.6x76.2cm", path: "Resources/WorkI/Final moment.jpg" },
                        { id: 2, name: "Panegyric", year: 2015, medium: "Charcoal and acrylic on canvas", size: "160x200cm", path: "Resources/WorkI/Panegyric.jpg" },
                        { id: 3, name: "Don’t come back", year: 2014, medium: "Charcoal and acrylic on canvas", size: "200x150cm", path: "Resources/WorkI/Don't come back.jpg" },
                        { id: 4, name: "Must it be? It must be!", year: 2014, medium: "Charcoal and acrylic on canvas", size: "160x200cm", path: "Resources/WorkI/Must it be It must be.jpg" },
                        { id: 5, name: "Video game", year: 2014, medium: "Charcoal and acrylic on canvas", size: "150x185cm", path: "Resources/WorkI/Video game.jpg" },
                        { id: 6, name: "Mammogram", year: 2014, medium: "Charcoal and acrylic on canvas", size: "155x185cm", path: "Resources/WorkI/Mammogram.jpg" },
                        { id: 7, name: "The phone", year: 2013, medium: "Acrylic on canvas", size: "180x150cm", path: "Resources/WorkI/The phone.jpg" }
                    ]
                },
                {
                    name: "WorkII",
                    images: [
                        { id: 1, name: "Final moment", year: 2015, medium: "Charcoal,  ink and oil on canvas", size: "101.6x76.2cm", path: "Resources/WorkI/Final moment.jpg" },
                        { id: 2, name: "Panegyric", year: 2015, medium: "Charcoal and acrylic on canvas", size: "160x200cm", path: "Resources/WorkI/Panegyric.jpg" },
                        { id: 3, name: "Don’t come back", year: 2014, medium: "Charcoal and acrylic on canvas", size: "200x150cm", path: "Resources/WorkI/Don't come back.jpg" },
                        { id: 4, name: "Must it be? It must be!", year: 2014, medium: "Charcoal and acrylic on canvas", size: "160x200cm", path: "Resources/WorkI/Must it be It must be.jpg" },
                        { id: 5, name: "Video game", year: 2014, medium: "Charcoal and acrylic on canvas", size: "150x185cm", path: "Resources/WorkI/Video game.jpg" },
                        { id: 6, name: "Mammogram", year: 2014, medium: "Charcoal and acrylic on canvas", size: "155x185cm", path: "Resources/WorkI/Mammogram.jpg" },
                        { id: 7, name: "The phone", year: 2013, medium: "Acrylic on canvas", size: "180x150cm", path: "Resources/WorkI/The phone.jpg" }
                    ]
                }
            ];
            this.manager = new Images.Manager(_.filter(this.work, function (coll) { return coll.name == $routeParams.collectionName; })[0], $location);
            $scope.manager = this.manager;
            if ($routeParams.imageId)
                this.manager.selectImageById($routeParams.imageId);
        }
        Controller.$inject = ['$scope', '$routeParams', '$location'];
        return Controller;
    })();
    Images.Controller = Controller;
})(Images || (Images = {}));
//# sourceMappingURL=imageController.js.map