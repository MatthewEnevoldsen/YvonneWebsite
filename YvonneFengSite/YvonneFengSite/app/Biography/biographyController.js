var Biography;
(function (Biography) {
    var Controller = (function () {
        function Controller($scope) {
            this.$scope = $scope;
            //$scope.sections = this.getBio();
            $scope.cv = {
                education: [
                    {
                        year: "2014-",
                        descs: ["PhD Fine Art (practice-led), Slade School of Fine Art, UCL, London"]
                    },
                    {
                        year: "2014",
                        descs: ["MA Painting, Royal College of Art, London"]
                    },
                    {
                        year: "2012",
                        descs: ["BA Fine Art, Slade School of Fine Art, UCL, London"]
                    },
                ],
                awards: [
                    {
                        year: "2015",
                        descs: ["Excellence in Drawing Award, The Arts Club Charitable Trust (winner)"]
                    },
                    {
                        year: "2014",
                        descs: [
                            "Art Graduates Prize, Herbert Smith Freehills & Works in Print (shortlisted)",
                            "Beep2014: Wales’ International Contemporary Painting Prize (shortlisted)",
                            "Griffin Art Prize (shortlisted)"
                        ]
                    },
                ],
                soloExhibitions: [{
                        date: "2015",
                        events: [{ exhibName: "An Amnesiac's Stories", venue: "Hundred Years Gallery, London" }]
                    }
                ],
                groupExhibitions: [
                    {
                        date: "2015",
                        events: [{ exhibName: "Creekside Open 2015", venue: "A.P.T Gallery, London" },
                            { exhibName: "Psychoanalytic research in the 21st century: Where we are now", venue: " Freud Museum, London " },
                            { exhibName: "Griffin Art Prize 2014 UK", venue: " White Moose Gallery, Barnstaple, Devon " },]
                    },
                    {
                        date: "2014",
                        events: [{ exhibName: "Now in Reverse", venue: "Hundred Years Gallery, London" },
                            { exhibName: "Drawing from Here and There", venue: "Elysium Gallery Offsite, Swansea" },
                            { exhibName: "Griffin Art Prize 2014 UK", venue: " Griffin Gallery, London" },
                            { exhibName: "Beep 2014: A Portrait of the Artist as…", venue: " Elysium Gallery Offsite, Swansea" },
                            { exhibName: "From Here and There: Drawings from Swansea to Colorado", venue: " Clara Hatton Gallery, Colorado State University, Fort Collins, USA " },
                            { exhibName: "Show RCA 2014", venue: " Sackler Building, Royal College of Art, London" },
                            { exhibName: "You know, I...-Instinct with thinking!", venue: " Hockney Gallery, Royal College of Art, London " },]
                    },
                    {
                        date: "2013",
                        events: [{ exhibName: "PNTG NOV. RCA Year 2 MA Painting Show", venue: " Henry Moore Gallery, Royal College of Art, London " },
                            { exhibName: "Notes to Self", venue: " Dyson Building, Royal College of Art, London" },
                            { exhibName: "Royal College of Art Fine Art Work in Progress Show", venue: " The Kensington Galleries, Royal College of Art, London" },]
                    },
                    {
                        date: "2012",
                        events: [{ exhibName: "The Slade School of Fine Art BA/BFA Degree Show", venue: " The Slade School of Fine Art, UCL, London " },
                            { exhibName: "Vincula", venue: " UCL Art Museum, UCL, London " },
                            { exhibName: "New End Art Foundation Exhibition", venue: " New End Art Gallery, London" },]
                    },
                    {
                        date: "2010",
                        events: [{ exhibName: "EXHIBITIONISM", venue: " East Wing Nine (Part 3 Academy Hang), The Courtauld Institute of Art, London " },
                            { exhibName: "Transfer-A Slade/Strang Collaboration", venue: " UCL Art Museum, UCL, London" },]
                    }
                ],
            };
        }
        Controller.$inject = ['$scope'];
        return Controller;
    })();
    Biography.Controller = Controller;
    var CV = (function () {
        function CV() {
        }
        return CV;
    })();
    var YearedExhibitions = (function () {
        function YearedExhibitions() {
        }
        return YearedExhibitions;
    })();
    var YearedEvents = (function () {
        function YearedEvents() {
        }
        return YearedEvents;
    })();
    var Exhibition = (function () {
        function Exhibition() {
        }
        return Exhibition;
    })();
})(Biography || (Biography = {}));
//# sourceMappingURL=biographyController.js.map