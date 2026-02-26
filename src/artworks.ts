export type Artwork = {
    id: string;
    title: string;
    year: number;
    imageUrl: string;
    price: number;
    description?: string;
    available: boolean;
};

export const artworks: Artwork[] = [
    {
        id: "village-01",
        title: "Village",
        year: 2017,
        imageUrl: "images/img20171208_20593869.jpg",
        price: 600,
        description: "Watercolor on paper, A4",
        available: true
    },
    {
        id: "village-02",
        title: "Village",
        year: 2017,
        imageUrl: "images/img20171206_17501605.jpg",
        price: 600,
        description: "Watercolor on paper, A4",
        available: true
    },

    {
        id: "farm-01",
        title: "Farm",
        year: 2017,
        imageUrl: "images/img20171213_17083148.jpg",
        price: 400,
        description: "Watercolor on paper, A4",
        available: true
    },
    {
        id: "farm-02",
        title: "Farm",
        year: 2017,
        imageUrl: "images/20170120_150944.jpg",
        price: 600,
        description: "Watercolor on paper, A3",
        available: true
    },
    {
        id: "forest-01",
        title: "Forest",
        year: 2017,
        imageUrl: "images/img20171018_22515573.jpg",
        price: 400,
        description: "Watercolor on paper, A4",
        available: true
    },
    {
        id: "tree-01",
        title: "Tree",
        year: 2017,
        imageUrl: "images/img20171104_15265819.jpg",
        price: 500,
        description: "Watercolor on paper, A4",
        available: true
    },
    {
        id: "cabin-01",
        title: "Cabin",
        year: 2017,
        imageUrl: "images/img20171107_15463163.jpg",
        price: 500,
        description: "Watercolor on paper, A3",
        available: true
    },
    {
        id: "cabin-02",
        title: "Cabin",
        year: 2017,
        imageUrl: "images/img20171108_17484597.jpg",
        price: 500,
        description: "Watercolor on paper, A3",
        available: true
    },
    {
        id: "mountains-02",
        title: "Mountains",
        year: 2017,
        imageUrl: "images/img20171111_14060289.jpg",
        price: 500,
        description: "Watercolor on paper, A4",
        available: true
    },
    {
        id: "forest-02",
        title: "Forest",
        year: 2017,
        imageUrl: "images/img20171111_22060333.jpg",
        price: 500,
        description: "Watercolor on paper, A4",
        available: true
    },
    {
        id: "castle-01",
        title: "Castle",
        year: 2017,
        imageUrl: "images/img20171116_17031507.jpg",
        price: 500,
        description: "Watercolor on paper, A4",
        available: true
    },
    {
        id: "castle-02",
        title: "Castle",
        year: 2017,
        imageUrl: "images/img20171201_15395212.jpg",
        price: 500,
        description: "Watercolor on paper, A3",
        available: true
    },
    {
        id: "castle-03",
        title: "Castle",
        year: 2017,
        imageUrl: "images/img20171203_00134789.jpg",
        price: 500,
        description: "Watercolor on paper, A4",
        available: true
    },
    {
        id: "city-01",
        title: "City",
        year: 2017,
        imageUrl: "images/img20171123_16001549.jpg",
        price: 500,
        description: "Watercolor on paper, A4",
        available: true
    },
    {
        id: "city-02",
        title: "City",
        year: 2017,
        imageUrl: "images/img20171124_16014166.jpg",
        price: 500,
        description: "Watercolor on paper, A4",
        available: true
    },
    {
        id: "city-03",
        title: "City",
        year: 2017,
        imageUrl: "images/img20171124_21321976.jpg",
        price: 500,
        description: "Watercolor on paper, A4",
        available: true
    },
    {
        id: "city-04",
        title: "City",
        year: 2017,
        imageUrl: "images/img20171129_18190939.jpg",
        price: 500,
        description: "Watercolor on paper, A4",
        available: true
    },
    {
        id: "city-05",
        title: "City",
        year: 2017,
        imageUrl: "images/img20171129_20173701.jpg",
        price: 500,
        description: "Watercolor on paper, A4",
        available: true
    },
    {
        id: "city-06",
        title: "City",
        year: 2017,
        imageUrl: "images/img20171202_15333973.jpg",
        price: 500,
        description: "Watercolor on paper, A3",
        available: true
    },
    {
        id: "town-01",
        title: "Town",
        year: 2017,
        imageUrl: "images/20170117_213100.jpg",
        price: 500,
        description: "Watercolor on paper, A3",
        available: true
    },
    {
        id: "town-02",
        title: "Town",
        year: 2017,
        imageUrl: "images/20170914_151110.jpg",
        price: 1000,
        description: "Watercolor on paper, A2",
        available: true
    },
    {
        id: "people-01",
        title: "People",
        year: 2017,
        imageUrl: "images/img20171125_16544370.jpg",
        price: 500,
        description: "Watercolor on paper, A4",
        available: true
    },
    {
        id: "people-02",
        title: "People",
        year: 2017,
        imageUrl: "images/img20171218_20164833.jpg",
        price: 500,
        description: "Watercolor on paper, A3",
        available: false
    },
    {
        id: "people-03",
        title: "People",
        year: 2017,
        imageUrl: "images/img20171220_12103973.jpg",
        price: 500,
        description: "Watercolor on paper, A3",
        available: false
    },
    {
        id: "people-04",
        title: "People",
        year: 2017,
        imageUrl: "images/img20180101_15581576.jpg",
        price: 500,
        description: "Watercolor on paper, A4",
        available: false
    },
    {
        id: "people-05",
        title: "People",
        year: 2018,
        imageUrl: "images/img20180103_20544756.jpg",
        price: 500,
        description: "Watercolor on paper, A3",
        available: false
    },
    {
        id: "people-06",
        title: "People",
        year: 2018,
        imageUrl: "images/img20180111_16084825.jpg",
        price: 500,
        description: "Watercolor on paper, A4",
        available: false
    },
    {
        id: "house-02",
        title: "House",
        year: 2017,
        imageUrl: "images/img20171116_20150777.jpg",
        price: 500,
        description: "Watercolor on paper, A3",
        available: true
    },
    {
        id: "sledding-01",
        title: "Sledding",
        year: 2017,
        imageUrl: "images/img20171213_18453375.jpg",
        price: 400,
        description: "Watercolor on paper, A4",
        available: false
    },
    {
        id: "bridge-01",
        title: "Bridge",
        year: 2017,
        imageUrl: "images/img20171214_20311044.jpg",
        price: 400,
        description: "Watercolor on paper, A4",
        available: false
    },
    {
        id: "water-01",
        title: "Water",
        year: 2018,
        imageUrl: "images/img20180118_16375650.jpg",
        price: 400,
        description: "Watercolor on paper, A4",
        available: true
    },

];