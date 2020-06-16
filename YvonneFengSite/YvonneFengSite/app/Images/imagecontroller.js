var Images;
(function (Images) {
    var Controller = (function () {
        function Controller($scope, $routeParams, $location, pictures) {
            this.work = [
                {
                    name: "InvisibleWall",
                    images: [
                        { id: 0, name: "Invisible Wall", year: 2016, medium: "Ink on wall, at The Foundry, London, Commissioned by Beaconsfield Gallery", size: "3 x 6m", path: "Resources/Drawings/InvisibleWall/Foundry Wall 2.jpg" },
                        { id: 1, name: "Invisible Wall", year: 2016, medium: "Ink on wall, at The Foundry, London, Commissioned by Beaconsfield Gallery", size: "3 x 6m", path: "Resources/Drawings/InvisibleWall/Foundry Wall 3.jpg" },
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
                    name: "GreenerOnTheOtherSide",
                    images: [
                        { id: 0, name: "Greener on the other side?", year: 2017, medium: "Pastel, acrylic and oil on canvas", size: "150 x 200cm", path: "Resources/Greener On The Other Side/Greener on the other side.jpg" },
                        { id: 1, name: "I have come this far", year: 2017, medium: "Oil on canvas", size: "106.5 x 76cm", path: "Resources/Greener On The Other Side/I have come this far.jpg" },
                        { id: 2, name: "The size of apple, the size of war", year: 2016, medium: "Pastel, acrylic and oil on canvas", size: "190 x 200cm", path: "Resources/Greener On The Other Side/The size of apple, the size of war.jpg" },
                        { id: 3, name: "Reaching", year: 2017, medium: "Graphite, acrylic and oil on canvas", size: "200 x 180cm", path: "Resources/Greener On The Other Side/Reaching.jpg" },
                        { id: 4, name: "Cut", year: 2017, medium: "Oil on canvas", size: "61 x 40cm", path: "Resources/Greener On The Other Side/cut.jpg" },
                        { id: 5, name: "I will take your tears for love", year: 2017, medium: "Oil on canvas", size: "61 x 61cm", path: "Resources/Greener On The Other Side/I will take your tears for love.jpg" },
                        { id: 6, name: "Unreachable sky", year: 2017, medium: "Ink, graphite and oil on canvas", size: "200 x 130cm", path: "Resources/Greener On The Other Side/Unreachable Sky.jpg" },
                        { id: 7, name: "Greener on the other side?", year: 2017, medium: "Exhibition View ", size: "", path: "Resources/Greener On The Other Side/Installation view.jpg" },
                    ]
                },
                {
                    name: "BodyAsMetaphor",
                    images: [
                        { id: 0, name: "Quarantine", year: 2020, medium: "Graphite and oil on canvas", size: "190 x 150cm", path: "Resources/BodyAsMetaphor/Quarantine.jpg" },
                        { id: 1, name: "The Constitution of Collectivity", year: 2020, medium: "Oil on canvas", size: "90 x170cm", path: "Resources/BodyAsMetaphor/The Constitution of Collectivity.jpg" },
                        { id: 2, name: "Boundary", year: 2019, medium: "Oil on canvas", size: "200 x 150cm", path: "Resources/BodyAsMetaphor/Boundary.jpg" },
                        { id: 6, name: "A rebellious act", year: 2017, medium: "Pastel, acrylic and oil on canvas", size: "170 x 160cm", path: "Resources/BodyAsMetaphor/A rebellious act.jpg" },
                        { id: 7, name: "Climax a victory", year: 2016, medium: "Pastel, acrylic and oil on canvas", size: "170 x 160cm", path: "Resources/BodyAsMetaphor/Climax a victory.jpg" },
                        { id: 5, name: "Vicissitudes of life (up)", year: 2017, medium: "Acrylic, pigment and oil on canvas", size: "130 x 180cm", path: "Resources/BodyAsMetaphor/Vicissitudes of Life (up).jpg" },
                        { id: 3, name: "Vicissitudes of life (down)", year: 2017, medium: "Acrylic, pigment and oil on canvas", size: "130 x 180cm", path: "Resources/BodyAsMetaphor/Vicissitudes of Life (down).jpg" },
                        { id: 4, name: "Mise-en-scène", year: 2017, medium: "Exhibition View", size: "Chelsea Waterside ArtSpace, London", path: "Resources/BodyAsMetaphor/miseenscene.jpg" },
                    ]
                },
                {
                    name: "Telescreens",
                    images: [
                        { id: 0, name: "Telescreen 04", year: 2017, medium: "Oil on etched aluminum", size: "30 x 42cm", path: "Resources/Telescreens/Telescreen 04.jpg" },
                        { id: 1, name: "Telescreen 03", year: 2017, medium: "Oil on etched aluminum", size: "30 x 35cm", path: "Resources/Telescreens/Telescreen 03.jpg" },
                        { id: 2, name: "Telescreen 02", year: 2017, medium: "Oil on etched aluminum", size: "30 x 21cm", path: "Resources/Telescreens/Telescreen 02.jpg" },
                        { id: 3, name: "Telescreen 01", year: 2017, medium: "Oil on etched aluminum", size: "30 x 42cm", path: "Resources/Telescreens/Telescreen 01.jpg" },
                        { id: 4, name: "Telescreens", year: 2016, medium: "Spray paint, ink and oil on canvas", size: "160 x 110cm", path: "Resources/Telescreens/Telescreens.jpg" },
                    ]
                },
                {
                    name: "AmnesiacsStories",
                    images: [
                        { id: 0, name: "Mother and child", year: 2016, medium: "Oil on canvas", size: "Diptych, 84.5 x 59cm each", path: "Resources/AnAmnesiacsStories/Mother and child.jpg" },
                        { id: 1, name: "Up and down, in and out", year: 2016, medium: "Oil on canvas", size: "200 x 170cm", path: "Resources/AnAmnesiacsStories/Up and down, in and out.jpg" },
                        { id: 2, name: "Plaster/Phone", year: 2015, medium: "Oil on polyester and canvas", size: "101.5 x 61cm each", path: "Resources/AnAmnesiacsStories/PlasterPhone.jpg" },
                        { id: 3, name: "Jade bracelet", year: 2015, medium: "Oil on board ", size: "40 x 60cm", path: "Resources/AnAmnesiacsStories/Jade bracelet.jpg" },
                        { id: 4, name: "Shadow", year: 2015, medium: "Charcoal, acrylic and oil on canvas ", size: "130 x 170cm", path: "Resources/AnAmnesiacsStories/Shadow.jpg" },
                        { id: 5, name: "Immersive darkness", year: 2015, medium: "Charcoal, graphite and acrylic on canvas", size: "120 x 120cm", path: "Resources/AnAmnesiacsStories/Immersive darkness.jpg" },
                        { id: 6, name: "Trace of cracks", year: 2015, medium: "Charcoal, acrylic and newsprint on canvas", size: "110 x 150cm", path: "Resources/AnAmnesiacsStories/Trace of cracks.jpg" },
                        { id: 7, name: "The wall", year: 2016, medium: "Drawing installation, charcoal on newsprint", size: "197 x 381.5cm", path: "Resources/AnAmnesiacsStories/The Wall.jpg" },
                        { id: 8, name: "Step to the left, step to the right", year: 2015, medium: "Oil and oil pastel on canvas", size: "101.6 x 76.2cm", path: "Resources/AnAmnesiacsStories/Step to the left step to the right.jpg" },
                        { id: 9, name: "An Amnesiac's Stories", year: 2015, medium: "Exhibition View", size: "Hundred Years Gallary, London", path: "Resources/AnAmnesiacsStories/Installation 1.jpg" },
                        { id: 10, name: "Installation View", year: null, medium: "", size: "", path: "Resources/AnAmnesiacsStories/Viva installation.jpg" },
                    ]
                }
            ];
            this.manager = new Images.Manager(_.filter(this.work, function (coll) { return coll.name == $routeParams.collectionName; })[0], $location);
            $scope.manager = this.manager;
            if ($routeParams.imageId)
                this.manager.selectImageById($routeParams.imageId);
        }
        return Controller;
    }());
    Controller.$inject = ['$scope', '$routeParams', '$location'];
    Images.Controller = Controller;
})(Images || (Images = {}));
