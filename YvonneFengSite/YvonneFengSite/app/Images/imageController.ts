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
                            id:1,
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
                        { id: 0, name: "Don’t come back", year: 2014, medium: "charcoal and acrylic on canvas", width: 200, height: 150, path: "Resources/WorkI/Don't come back.jpg" },
                        { id: 1, name: "Must it be? It must be!", year: 2014, medium: "charcoal and acrylic on canvas", width: 160, height: 200, path: "Resources/WorkI/Must it be It must be.jpg" },
                        { id: 2, name: "Mammogram", year: 2014, medium: "charcoal and acrylic on canvas", width: 155, height: 185, path: "Resources/WorkI/Mammogram.jpg" },
                        { id: 3, name: "Video game", year: 2014, medium: "charcoal and acrylic on canvas", width: 150, height: 185, path: "Resources/WorkI/Video game.jpg" },
                        { id: 4, name: "Panegyric", year: 2015, medium: "charcoal and acrylic on canvas", width: 160, height: 200, path: "Resources/WorkI/Panegyric.jpg" },
                        { id: 5, name: "Final moment", year: 2015, medium: "charcoal,  ink and oil on canvas", width: 101.6, height: 76.2, path: "Resources/WorkI/Final moment.jpg" },
                        { id: 6, name: "The phone", year: 2013, medium: "acrylic on canvas", width: 180, height: 150, path: "Resources/WorkI/The phone.jpg" },

                    ]
                },
                {
                    name: "WorkII",
                    images: [
                        { id: 0, name: "Don’t come back", year: 2014, medium: "charcoal and acrylic on canvas", width: 200, height: 150, path: "Resources/WorkI/Don't come back.jpg" },
                        { id: 1, name: "Must it be? It must be!", year: 2014, medium: "charcoal and acrylic on canvas", width: 160, height: 200, path: "Resources/WorkI/Final moment.jpg" },
                        { id: 2, name: "Mammogram", year: 2014, medium: "charcoal and acrylic on canvas", width: 155, height: 185, path: "Resources/WorkI/Mammogram.jpg" },
                    ]
                }
            ];

            this.manager = new Manager(_.filter(this.work, function (coll: ImageCollection) { return coll.name == $routeParams.collectionName; })[0] , $location);
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