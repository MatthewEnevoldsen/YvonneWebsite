﻿module Images {
    export class Controller {
        static $inject = ['$scope', '$routeParams', '$location'];

        public manager: Images.Manager;

        private work: ImageCollection[];

        constructor($scope: ImageScope,
            $routeParams: ImagesRouteService,
            $location: ng.ILocationService,
            pictures: ImageDetails[]) {
            this.work = [
                //{
                //    name: "Drawings",
                //    images: [
                //        { id: 0, name: "Delete", year: 2015, medium: "Ink on paper", size: "29.7 x 42cm", path: "Resources/Drawings/I/Delete.jpg" },
                //        { id: 1, name: "You are one of us", year: 2014, medium: "Ink on Chinese paper", size: "69.5 x 45.5cm", path: "Resources/Drawings/I/You are one of us.jpg" },
                //        { id: 2, name: "C0415", year: 2014, medium: "Ink on Chinese paper", size: "69.5 x 45.5cm", path: "Resources/Drawings/I/C0415.jpg" },
                //        { id: 3, name: "Sleepless five years ahead", year: 2014, medium: "Ink on paper", size: "53 x 38cm", path: "Resources/Drawings/I/Sleepless five years ahead.jpg" },
                //        { id: 4, name: "Hand", year: 2014, medium: "Ink on paper", size: "42 x 29.7cm", path: "Resources/Drawings/I/Hand.jpg" },
                //        { id: 5, name: "10pm", year: 2014, medium: "Ink on paper", size: "53 x 38cm", path: "Resources/Drawings/I/10pm.jpg" },
                //        { id: 6, name: "Unblock", year: 2014, medium: "Ink on paper", size: "53 x 38cm", path: "Resources/Drawings/I/Unblock.jpg" },
                //        { id: 7, name: "Sit", year: 2014, medium: "Ink on paper", size: "29.7 x 42cm", path: "Resources/Drawings/I/Sit.jpg" },
                //    ]
                //},
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
                        { id: 0, name: "Greener on the other side?", year: 2017, medium: "Pastel, acrylic and oil on canvas", size: "150 x 200cm", path: "Resources/WorkI/Greener on the other side.jpg" },
                        { id: 1, name: "Climax a victory", year: 2016, medium: "Pastel, acrylic and oil on canvas", size: "170 x 160cm", path: "Resources/WorkI/Climax a victory.jpg" },
                        { id: 2, name: "The size of apple, the size of war", year: 2016, medium: "Pastel, acrylic and oil on canvas", size: "190 x 200cm", path: "Resources/WorkI/The size of apple, the size of war.jpg" },
                        { id: 3, name: "Window to the world", year: 2017, medium: "Pastel, acrylic and oil on canvas", size: "106.5 x 76cm", path: "Resources/WorkI/Window to the world.jpg" },
                        { id: 4, name: "A rebellious act", year: 2017, medium: "Pastel, acrylic and oil on canvas", size: "170 x 160cm", path: "Resources/WorkI/A rebellious act.jpg" },
                        { id: 5, name: "Reaching", year: 2017, medium: "Graphite, acrylic and oil on canvas", size: "200 x 180cm", path: "Resources/WorkI/Reaching.jpg" },
                    ]
                },
                {
                    name: "WorkII",
                    images: [
                        { id: 0, name: "Telescreen 04", year: 2017, medium: "Oil on aluminum", size: "30 x 42cm", path: "Resources/WorkII/Telescreen 04.jpg" },
                        { id: 1, name: "Telescreen 03", year: 2017, medium: "Oil on aluminum", size: "30 x 35cm", path: "Resources/WorkII/Telescreen 03.jpg" },
                        { id: 2, name: "Telescreen 02", year: 2017, medium: "Oil on aluminum", size: "30 x 21cm", path: "Resources/WorkII/Telescreen 02.jpg" },
                        { id: 3, name: "Telescreen 01", year: 2017, medium: "Oil on aluminum", size: "30 x 42cm", path: "Resources/WorkII/Telescreen 01.jpg" },
                        { id: 4, name: "Telescreens", year: 2016, medium: "Oil on aluminum", size: "160 x 110cm", path: "Resources/WorkII/Telescreens.jpg" },
                    ]
                },
                {
                    name: "WorkIII",
                    images: [
                        { id: 0, name: "Mother and child", year: 2016, medium: "Oil on canvas", size: "Diptych, 84.5 x 59cm each", path: "Resources/WorkIII/Mother and child.jpg" },
                        { id: 1, name: "Up and down, in and out", year: 2016, medium: "Oil on canvas", size: "200 x 170cm", path: "Resources/WorkIII/Up and down, in and out.jpg" },
                        { id: 2, name: "Plaster/Phone", year: 2015, medium: "Oil on polyester and canvas", size: "101.5 x 61cm each", path: "Resources/WorkIII/PlasterPhone.jpg" },
                        { id: 3, name: "Jade bracelet", year: 2015, medium: "Oil on board ", size: "40 x 60cm", path: "Resources/WorkIII/Jade bracelet.jpg" },
                        { id: 4, name: "Shadow", year: 2015, medium: "Charcoal, acrylic and oil on canvas ", size: "130 x 170cm", path: "Resources/WorkIII/Shadow.jpg" },
                        { id: 5, name: "Immersive darkness", year: 2015, medium: "Charcoal, graphite and acrylic on canvas", size: "120 x 120cm", path: "Resources/WorkIII/Immersive darkness.jpg" },
                        { id: 6, name: "Trace of cracks", year: 2015, medium: "Charcoal, acrylic and newsprint on canvas", size: "110 x 150cm", path: "Resources/WorkIII/Trace of cracks.jpg" },
                        { id: 7, name: "The wall", year: 2016, medium: "Drawing installation, charcoal on newsprint", size: "197 x 381.5cm", path: "Resources/WorkIII/The Wall.jpg" },
                        { id: 8, name: "Step to the left, step to the right", year: 2015, medium: "Oil and oil pastel on canvas", size: "101.6 x 76.2cm", path: "Resources/WorkIII/Step to the left step to the right.jpg" },
                    ]
                }
            ];
            this.manager = new Manager(_.filter(this.work, (coll: ImageCollection) => coll.name == $routeParams.collectionName)[0], $location);
            $scope.manager = this.manager;
            if ($routeParams.imageId)
                this.manager.selectImageById($routeParams.imageId);
        }
    }

    export interface ImageScope extends ng.IScope {
        manager: Manager;
    }
    export interface ImagesRouteService extends ng.route.IRouteParamsService {
        collectionName: string;
        imageId: number;
    }
}