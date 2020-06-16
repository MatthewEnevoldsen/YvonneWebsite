module Biography {
    export class Controller {
        static $inject = ['$scope'];


        constructor(private $scope: BiographyScope) {
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
                        year: "2017",
                        descs: ["Coldstream Prize, UCL"]
                    },
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
                },
                ],
                groupExhibitions: [{
                        date: "2018",
                        events: [{ exhibName: "She Performs", venue: "London Gallery West Project Space" }]
                    },{
                        date: "2017",
                        events: [{ exhibName: "Beyond the Borders: Joseonjok’s Ambiguous Identity", venue: "Crypt Gallery, London" },
                            { exhibName: "Slade Graduate Degree Show 2017", venue: "Slade School of Fine Art, UCL, London" },
                            { exhibName: "Monologue Dialogue 4: Mysticism and Insecurity", venue: "The Koppel Project, London" },
                            { exhibName: "The Intercontinental", venue: "Roaming Room, London" },
                            { exhibName: "On The Verge", venue: "12 Star Gallery, London" },
                            { exhibName: "Tipping Point", venue: "The Foundry, London" }]
                    },
                    {
                        date: "2016",
                        events: [{ exhibName: "Refuse: Refuge: Re-fuse", venue: "The Koppel Project, London" },
                            { exhibName: "Indigo Vastness", venue: "The Street Gallery, UCLH, London" }]
                    },
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
                            { exhibName: "You know, I...-Instinct with thinking!", venue: " Hockney Gallery, Royal College of Art, London " }, ]
                    },
                    {
                        date: "2013",
                        events: [{ exhibName: "PNTG NOV. RCA Year 2 MA Painting Show", venue: " Henry Moore Gallery, Royal College of Art, London " },
                            { exhibName: "Notes to Self", venue: " Dyson Building, Royal College of Art, London" },
                            { exhibName: "Royal College of Art Fine Art Work in Progress Show", venue: " The Kensington Galleries, Royal College of Art, London" }, ]
                    },
                    {
                        date: "2012",
                        events: [{ exhibName: "The Slade School of Fine Art BA/BFA Degree Show", venue: " The Slade School of Fine Art, UCL, London " },
                            { exhibName: "Vincula", venue: " UCL Art Museum, UCL, London " },
                            { exhibName: "New End Art Foundation Exhibition", venue: " New End Art Gallery, London" }, ]
                    },
                    {
                        date: "2010",
                        events: [{ exhibName: "EXHIBITIONISM", venue: " East Wing Nine (Part 3 Academy Hang), The Courtauld Institute of Art, London " },
                            { exhibName: "Transfer-A Slade/Strang Collaboration", venue: " UCL Art Museum, UCL, London" }, ]
                    }
                ],
            };
        }
    }

    class CV {
        education: YearedEvents[];
        awards: YearedEvents[];
        soloExhibitions: YearedExhibitions[];
        groupExhibitions: YearedExhibitions[];
    }

    class YearedExhibitions {
        date: string;
        events: Exhibition[];
    }

    class YearedEvents {
        year: string;
        descs: string[];
    }

    class Exhibition {
        exhibName: string;
        venue: string;
    }

    interface BiographyScope extends ng.IScope {
        cv: CV;
    }

}
