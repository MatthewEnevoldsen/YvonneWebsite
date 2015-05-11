module Biography {
    export class Controller {
        static $inject = ['$scope'];


        constructor(private $scope: BiographyScope) {
            $scope.sections = this.getBio();
        }

        private getBio = function (): Array<BioSection> {
            return [
                new BioSection("Biography", [
                    "Born in Guangdong, China, 1989",
                    "Lives and works in London, UK"
                ], [
                        new BioEvent("2012 - 2014", ["MA Fine Art Painting, The Royal College of Art, London, UK"]),
                        new BioEvent("2008 - 2012", ["BA Fine Art, The Slade School of Fine Art, UCL, London, UK"])
                    ]),
                new BioSection("Group Exhibitions", [
                ], [
                        new BioEvent("2015", [
                            "Creekside Open 2015 selected by Lisa Milroy, A.P.T Gallery, London, UK",
                            "Psychoanalytic research in the 21st century: Where we are now, Freud Museum, London, UK",
                            "Griffin Art Prize 2014 UK, White Moose Gallery, Barnstaple, Devon, UK"
                        ]),
                        new BioEvent("2014", [
                            "Starter, L'ESCARGOT, London, UK",
                            "Now in Reverse, Hundred Years Gallery, London, UK",
                            "Drawing from Here and There, Elysium Gallery Offsite, Swansea, UK",
                            "Griffin Art Prize 2014 UK, Griffin Gallery, London, UK",
                            "Beep 2014: A Portrait of the Artist as..., Elysium Gallery Offsite, Swansea, UK",
                            "From Here and There: Drawings from Swansea to Colorado, Clara Hatton Gallery, Colorado State Univeristy, Fort Collins, USA",
                            "Show RCA 2014, Royal College of Art, Battersea, London, UK",
                            "You know, I...-Instinct with thinking!, Hockney Gallery, Royal College of Art, London, UK",
                            "PNTG NOV. RCA 2nd Year MA Painting Show, Henry Moore Gallery, Royal College of Art, London, UK"
                        ]),
                        new BioEvent("2013", [
                            "Notes to Self, Dyson Building Royal College of Art, London, UK",
                            "Royal College of Art Fine Art Work in Progress Show,The Kensington Galleries, Royal College of Art, London, UK"
                        ]),
                        new BioEvent("2012", [
                            "The Slade School of Fine Art BA/BFA Degree Show, The Slade School of Fine Art, UCL, London, UK",
                            "Vincula, UCL Art Museum, UCL, London, UK",
                            "New End Art Foundation Exhibition, New End Art Gallery, London, UK"
                        ]),
                        new BioEvent("2010-2011", [
                            "EXHIBITIONISM, East Wing Nine (Part 3 Academy Hang), The Courtauld Institute of Art, London, UK"
                        ]),
                        new BioEvent("2010", [
                            "Transfer-A Slade/Strang Collaboration, UCL Art Museum, UCL, London, UK"
                        ])
                    ]),
                new BioSection("Prizes", [], [
                    new BioEvent("2014", [
                        "Griffin Art Prize UK - Shortlist",
                        "Art Graduates Prize (Herbert Smith Freehills & Works in Print) - Shortlist"
                    ])
                ])
            ];
        }
    }

    class BioSection {
        constructor(
            public heading: string,
            public events: string[],
            public datedEvents: BioEvent[]) { }
    }

    class BioEvent {
        constructor(
            public date: string,
            public events: string[]) { }
    }

    interface BiographyScope extends ng.IScope {
        sections: BioSection[];
    }

}

["Starter, L'ESCARGOT, London, UK",
    "Now in Reverse, Hundred Years Gallery, London, UK",
    "Drawing from Here and There, Elysium Gallery Offsite, Swansea, UK",
    "Griffin Art Prize 2014 UK, Griffin Gallery, London, UK",
    "Beep 2014: A Portrait of the Artist as..., Elysium Gallery Offsite, Swansea, UK",
    "From Here and There: Drawings from Swansea to Colorado, Clara Hatton Gallery, Colorado State Univeristy, Fort Collins, USA",
    "Show RCA 2014, Royal College of Art, Battersea, London, UK",
    "You know, I...-Instinct with thinking!, Hockney Gallery, Royal College of Art, London, UK",
    "PNTG NOV. RCA 2nd Year MA Painting Show, Henry Moore Gallery, Royal College of Art, London, UK"
]


