module Biography {
    export class Controller {
        static $inject = ['$scope'];


        constructor(private $scope: BiographyScope) {
            $scope.sections = this.getBio();
        }

        private getBio = function (): Array<BioSection> {
            return [
                new BioSection("Bio1", [
                    new BioEvent("1989", "Born"),
                    new BioEvent("1990", "1st Birthday")
                ]),
                new BioSection("Schoole", [
                    new BioEvent("1995", "BabbySchool"),
                    new BioEvent("2015", "Rambled about some word")
                ])
            ];
        }
    }

    class BioSection {
        constructor(
            public heading: string,
            public events: Array<BioEvent>) { }
    }

    class BioEvent {
        constructor(
            public date: string,
            public description: string) { }
    }

    interface BiographyScope extends ng.IScope {
        sections: BioSection[];
    }

}