var Images;
(function (Images) {
    var Controller = (function () {
        function Controller($scope, $routeParams, $location, pictures) {
            this.work = [
                {
                    name: "Drawings",
                    images: [
                        { id: 0, name: "Delete", year: 2015, medium: "Ink on paper", size: "29.7x42cm", path: "Resources/Drawings/I/Delete.jpg" },
                        { id: 1, name: "You are one of us", year: 2014, medium: "Ink on Chinese paper", size: "69.5x45.5cm", path: "Resources/Drawings/I/You are one of us.jpg" },
                        { id: 2, name: "C0415", year: 2014, medium: "Ink on Chinese paper", size: "69.5x45.5cm", path: "Resources/Drawings/I/C0415.jpg" },
                        { id: 3, name: "Sleepless five years ahead", year: 2014, medium: "Ink on paper", size: "53x38cm", path: "Resources/Drawings/I/Sleepless five years ahead.jpg" },
                        { id: 4, name: "Hand", year: 2014, medium: "Ink on paper", size: "42x29.7cm", path: "Resources/Drawings/I/Hand.jpg" },
                        { id: 5, name: "10pm", year: 2014, medium: "Ink on paper", size: "53x38cm", path: "Resources/Drawings/I/10pm.jpg" },
                        { id: 6, name: "Unblock", year: 2014, medium: "Ink on paper", size: "53x38cm", path: "Resources/Drawings/I/Unblock.jpg" },
                        { id: 7, name: "Sit", year: 2014, medium: "Ink on paper", size: "29.7x42cm", path: "Resources/Drawings/I/Sit.jpg" },
                    ]
                },
                {
                    name: "Sketches",
                    images: [
                        { id: 0, name: "Sketchbook project, commission by Onassis Cultural Centre, Greece", year: 2015, medium: "Ink on paper", size: "A4 sketchbook", path: "Resources/drawings/sketchbook/1.jpg" },
                        { id: 1, name: "Sketchbook project, commission by Onassis Cultural Centre, Greece", year: 2015, medium: "Ink on paper", size: "A4 sketchbook", path: "Resources/drawings/sketchbook/2.jpg" },
                        { id: 2, name: "Sketchbook project, commission by Onassis Cultural Centre, Greece", year: 2015, medium: "Ink on paper", size: "A4 sketchbook", path: "Resources/drawings/sketchbook/3.jpg" },
                        { id: 3, name: "Sketchbook project, commission by Onassis Cultural Centre, Greece", year: 2015, medium: "Ink on paper", size: "A4 sketchbook", path: "Resources/drawings/sketchbook/4.jpg" },
                        { id: 4, name: "Sketchbook project, commission by Onassis Cultural Centre, Greece", year: 2015, medium: "Ink on paper", size: "A4 sketchbook", path: "Resources/drawings/sketchbook/5.jpg" },
                        { id: 5, name: "Sketchbook project, commission by Onassis Cultural Centre, Greece", year: 2015, medium: "Ink on paper", size: "A4 sketchbook", path: "Resources/drawings/sketchbook/6.jpg" },
                        { id: 6, name: "Sketchbook project, commission by Onassis Cultural Centre, Greece", year: 2015, medium: "Ink on paper", size: "A4 sketchbook", path: "Resources/drawings/sketchbook/7.jpg" },
                    ]
                },
                {
                    name: "WorkI",
                    images: [
                        { id: 0, name: "Plaster/Phone", year: 2015, medium: "Oil on polyester and canvas", size: "101.5x61cm each", path: "Resources/WorkI/PlasterPhone.jpg" },
                        { id: 1, name: "Shadow", year: 2015, medium: "Charcoal, acrylic and oil on canvas ", size: "130x170cm", path: "Resources/WorkI/Shadow.jpg" },
                        { id: 2, name: "Jade bracelet", year: 2015, medium: "Oil on board ", size: "40x60cm", path: "Resources/WorkI/Jade bracelet.jpg" },
                        { id: 3, name: "Trace of cracks", year: 2015, medium: "Charcoal, acrylic and newsprint on canvas", size: "110x150cm", path: "Resources/WorkI/Trace of cracks.jpg" },
                        { id: 4, name: "Immersive darkness", year: 2015, medium: "Charcoal, graphite and acrylic on canvas", size: "120x120cm", path: "Resources/WorkI/Immersive darkness.jpg" },
                        { id: 5, name: "Fence", year: 2015, medium: "Charcoal and ink on paper", size: "150x200cm each", path: "Resources/WorkI/Fence.jpg" },
                        { id: 6, name: "Suite", year: 2015, medium: "Ink, acrylic and oil on canvas", size: "91.5x121.5cm", path: "Resources/WorkI/Suite.jpg" },
                        { id: 7, name: "Step to the left, step to the right", year: 2015, medium: "Oil and oil pastel on canvas", size: "101.6x76.2cm", path: "Resources/WorkI/Step to the left step to the right.jpg" },
                    ]
                },
                {
                    name: "WorkII",
                    images: [
                        { id: 0, name: "Final moment", year: 2015, medium: "Charcoal,  ink and oil on canvas", size: "101.6x76.2cm", path: "Resources/WorkII/Final moment.jpg" },
                        { id: 1, name: "Panegyric", year: 2015, medium: "Charcoal and acrylic on canvas", size: "160x200cm", path: "Resources/WorkII/Panegyric.jpg" },
                        { id: 2, name: "Don’t come back", year: 2014, medium: "Charcoal and acrylic on canvas", size: "200x150cm", path: "Resources/WorkII/Don't come back.jpg" },
                        { id: 3, name: "Must it be? It must be!", year: 2014, medium: "Charcoal and acrylic on canvas", size: "160x200cm", path: "Resources/WorkII/Must it be It must be.jpg" },
                        { id: 4, name: "Video game", year: 2014, medium: "Charcoal and acrylic on canvas", size: "150x185cm", path: "Resources/WorkII/Video game.jpg" },
                        { id: 5, name: "Mammogram", year: 2014, medium: "Charcoal and acrylic on canvas", size: "155x185cm", path: "Resources/WorkII/Mammogram.jpg" },
                        { id: 6, name: "The phone", year: 2013, medium: "Acrylic on canvas", size: "180x150cm", path: "Resources/WorkII/The phone.jpg" },
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