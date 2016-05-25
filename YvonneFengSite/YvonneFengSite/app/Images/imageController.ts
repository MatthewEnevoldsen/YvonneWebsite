module Images {
    export class Controller {
        static $inject = ['$scope', '$routeParams', '$location'];

        public manager: Images.Manager;

        private work: ImageCollection[];

        constructor($scope: ImageScope,
            $routeParams: ImagesRouteService,
            $location: ng.ILocationService,
            pictures: ImageDetails[]) {
            this.work = [
                {
                    name: "Drawings",
                    images: [
                        { id: 0, name: "Delete", year: 2015, medium: "Ink on paper", size: "29.7 x 42cm", path: "Resources/Drawings/I/Delete.jpg" },
                        { id: 1, name: "You are one of us", year: 2014, medium: "Ink on Chinese paper", size: "69.5 x 45.5cm", path: "Resources/Drawings/I/You are one of us.jpg" },
                        { id: 2, name: "C0415", year: 2014, medium: "Ink on Chinese paper", size: "69.5 x 45.5cm", path: "Resources/Drawings/I/C0415.jpg" },
                        { id: 3, name: "Sleepless five years ahead", year: 2014, medium: "Ink on paper", size: "53 x 38cm", path: "Resources/Drawings/I/Sleepless five years ahead.jpg" },
                        { id: 4, name: "Hand", year: 2014, medium: "Ink on paper", size: "42 x 29.7cm", path: "Resources/Drawings/I/Hand.jpg" },
                        { id: 5, name: "10pm", year: 2014, medium: "Ink on paper", size: "53 x 38cm", path: "Resources/Drawings/I/10pm.jpg" },
                        { id: 6, name: "Unblock", year: 2014, medium: "Ink on paper", size: "53 x 38cm", path: "Resources/Drawings/I/Unblock.jpg" },
                        { id: 7, name: "Sit", year: 2014, medium: "Ink on paper", size: "29.7 x 42cm", path: "Resources/Drawings/I/Sit.jpg" },
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
                        { id: 0, name: "Up and down, in and out", year: 2016, medium: "Oil on canvas", size: "200 x 170cm", path: "Resources/WorkI/Up and down, in and out.jpg" },
                        { id: 1, name: "Plaster/Phone", year: 2015, medium: "Oil on polyester and canvas", size: "101.5 x 61cm each", path: "Resources/WorkI/PlasterPhone.jpg" },
                        { id: 2, name: "Jade bracelet", year: 2015, medium: "Oil on board ", size: "40 x 60cm", path: "Resources/WorkI/Jade bracelet.jpg" },
                        { id: 3, name: "Shadow", year: 2015, medium: "Charcoal, acrylic and oil on canvas ", size: "130 x 170cm", path: "Resources/WorkI/Shadow.jpg" },
                        { id: 4, name: "Immersive darkness", year: 2015, medium: "Charcoal, graphite and acrylic on canvas", size: "120 x 120cm", path: "Resources/WorkI/Immersive darkness.jpg" },
                        { id: 5, name: "Trace of cracks", year: 2015, medium: "Charcoal, acrylic and newsprint on canvas", size: "110 x 150cm", path: "Resources/WorkI/Trace of cracks.jpg" },
                        { id: 6, name: "The wall", year: 2016, medium: "Drawing installation, charcoal on newsprint", size: "197 x 381.5cm", path: "Resources/WorkI/The Wall.jpg" },
                        { id: 7, name: "Fence", year: 2015, medium: "Charcoal and ink on paper", size: "150 x 200cm each", path: "Resources/WorkI/Fence.jpg" },
                        { id: 8, name: "Step to the left, step to the right", year: 2015, medium: "Oil and oil pastel on canvas", size: "101.6 x 76.2cm", path: "Resources/WorkI/Step to the left step to the right.jpg" },
                    ]
                },
                {
                    name: "WorkII",
                    images: [
                        { id: 0, name: "Suite", year: 2015, medium: "Ink, acrylic and oil on canvas", size: "91.5 x 121.5cm", path: "Resources/WorkII/Suite.jpg" },
                        { id: 1, name: "Final moment", year: 2015, medium: "Charcoal,  ink and oil on canvas", size: "101.6 x 76.2cm", path: "Resources/WorkII/Final moment.jpg" },
                        { id: 2, name: "Panegyric", year: 2015, medium: "Charcoal and acrylic on canvas", size: "160 x 200cm", path: "Resources/WorkII/Panegyric.jpg" },
                        { id: 3, name: "Don’t come back", year: 2014, medium: "Charcoal and acrylic on canvas", size: "200 x 150cm", path: "Resources/WorkII/Don't come back.jpg" },
                        { id: 4, name: "Must it be? It must be!", year: 2014, medium: "Charcoal and acrylic on canvas", size: "160 x 200cm", path: "Resources/WorkII/Must it be It must be.jpg" },
                        { id: 5, name: "Video game", year: 2014, medium: "Charcoal and acrylic on canvas", size: "150 x 185cm", path: "Resources/WorkII/Video game.jpg" },
                        { id: 6, name: "Mammogram", year: 2014, medium: "Charcoal and acrylic on canvas", size: "155 x 185cm", path: "Resources/WorkII/Mammogram.jpg" },
                        { id: 7, name: "The phone", year: 2013, medium: "Acrylic on canvas", size: "180 x 150cm", path: "Resources/WorkII/The phone.jpg" },
                    ]
                }
            ];
            this.manager = new Manager(_.filter(this.work, function (coll: ImageCollection) { return coll.name == $routeParams.collectionName; })[0], $location);
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