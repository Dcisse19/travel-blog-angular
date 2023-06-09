interface Image {
  id: number,
  name: string,
  image: string
}

export interface ITrip {
  id: number,
  country: string,
  city: string,
  departureDate: string,
  returnDate: string,
  mainImage: Image,
  secondaryImages: Image[],
  travelDescription:string,
  advantages: string[],
  disadvantages: string[],
  advices: string[],
  abstract: string,
  isMain: boolean
}

export const TRIPS : ITrip[] = [
  {
    id: 1,
    country: "Albanie",
    city: "Tirana",
    departureDate: "14.04.22",
    returnDate: "17.05.22" ,
    mainImage: {
      id:1,
      name:"tirana main picture",
      image: "assets/images/cities/albanie-tirana/main-picture-tirana.svg"
    },
    secondaryImages: [
      {
        id:2,
        name:"tirana secondary picture 1",
        image: "assets/images/cities/albanie-tirana/other-picture-tirana-1.svg"
      },
      {
        id:3,
        name:"tirana secondary picture 2",
        image: "assets/images/cities/albanie-tirana/other-picture-tirana-1.svg"
      },
      {
        id:4,
        name:"tirana secondary picture 3",
        image: "assets/images/cities/albanie-tirana/other-picture-tirana-1.svg"
      },
      {
        id:5,
        name:"tirana secondary picture 4",
        image: "assets/images/cities/albanie-tirana/other-picture-tirana-1.svg"
      }
    ],
    travelDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac.Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
    advantages: ["Un pays très simple à sillonner, sans embrouilles ni complexité","Des habitants gentils, spontanés et qui cherchent le contact","Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"] ,
    disadvantages: ["Le climat torride en juillet-août, sauf en montagne","La côte très fréquentée l'été et de plus en plus bétonnée"] ,
    advices: ["Prenez une paire de tong !"] ,
    abstract: "L'Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l'accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s'éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l'Albanie.",
    isMain: true
  },
  {
    id: 2,
    country: "Guatemala",
    city: "Monterrico",
    departureDate: "10.12.21",
    returnDate: "18.12.21" ,
    mainImage: {
      id:6,
      name:"monterrico main picture",
      image: "assets/images/cities/guatemala-monterrico/main-picture-monterrico.svg"
    },
    secondaryImages: [
      {
        id:7,
        name:"tirana secondary picture 1",
        image: "assets/images/cities/guatemala-monterrico/other-picture-monterrico-1.svg"
      },
      {
        id:8,
        name:"monterrico secondary picture 2",
        image: "assets/images/cities/guatemala-monterrico/other-picture-monterrico-1.svg"
      },
      {
        id:9,
        name:"monterrico secondary picture 3",
        image: "assets/images/cities/guatemala-monterrico/other-picture-monterrico-1.svg"
      },
      {
        id:10,
        name:"monterrico secondary picture 4",
        image: "assets/images/cities/guatemala-monterrico/other-picture-monterrico-1.svg"
      }
    ],
    travelDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac.Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
    advantages: ["Un pays très simple à sillonner, sans embrouilles ni complexité","Des habitants gentils, spontanés et qui cherchent le contact","Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"] ,
    disadvantages: ["Le climat torride en juillet-août, sauf en montagne","La côte très fréquentée l'été et de plus en plus bétonnée"] ,
    advices: ["Prenez une paire de tong !"] ,
    abstract: "L'Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l'accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s'éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l'Albanie.",
    isMain: false
  },
  {
    id: 3,
    country: "Grèce",
    city: "Athènes",
    departureDate: "16.07.22",
    returnDate: "30.07.22" ,
    mainImage: {
      id:11,
      name:"athenes main picture",
      image: "assets/images/cities/grece-athenes/main-picture-athenes.svg"
    },
    secondaryImages: [
      {
        id:12,
        name:"athenes secondary picture 1",
        image: "assets/images/cities/grece-athenes/other-picture-athenes-1.svg"
      },
      {
        id:13,
        name:"athenes secondary picture 2",
        image: "assets/images/cities/grece-athenes/other-picture-athenes-1.svg"
      },
      {
        id:14,
        name:"athenes secondary picture 3",
        image: "assets/images/cities/grece-athenes/other-picture-athenes-1.svg"
      },
      {
        id:15,
        name:"athenes secondary picture 4",
        image: "assets/images/cities/grece-athenes/other-picture-athenes-1.svg"
      }
    ],
    travelDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac.Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
    advantages: ["Un pays très simple à sillonner, sans embrouilles ni complexité","Des habitants gentils, spontanés et qui cherchent le contact","Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"] ,
    disadvantages: ["Le climat torride en juillet-août, sauf en montagne","La côte très fréquentée l'été et de plus en plus bétonnée"] ,
    advices: ["Prenez une paire de tong !"] ,
    abstract: "L'Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l'accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s'éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l'Albanie.",
    isMain: false
  },
  {
    id: 4,
    country: "Tunisie",
    city: "Tunis",
    departureDate: "08.09.21",
    returnDate: "15.09.21" ,
    mainImage: {
      id:16,
      name:"tunis main picture",
      image: "assets/images/cities/tunisie-tunis/main-picture-tunis.svg"
    },
    secondaryImages: [
      {
        id:17,
        name:"tunis secondary picture 1",
        image: "assets/images/cities/tunisie-tunis/other-picture-tunis-1.svg"
      },
      {
        id:18,
        name:"tunis secondary picture 2",
        image: "assets/images/cities/tunisie-tunis/other-picture-tunis-1.svg"
      },
      {
        id:19,
        name:"tunis secondary picture 3",
        image: "assets/images/cities/tunisie-tunis/other-picture-tunis-1.svg"
      },
      {
        id:20,
        name:"tunis secondary picture 4",
        image: "assets/images/cities/tunisie-tunis/other-picture-tunis-1.svg"
      }
    ],
    travelDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac.Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
    advantages: ["Un pays très simple à sillonner, sans embrouilles ni complexité","Des habitants gentils, spontanés et qui cherchent le contact","Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"] ,
    disadvantages: ["Le climat torride en juillet-août, sauf en montagne","La côte très fréquentée l'été et de plus en plus bétonnée"] ,
    advices: ["Prenez une paire de tong !"] ,
    abstract: "L'Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l'accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s'éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l'Albanie.",
    isMain: false
  },
  {
    id: 5,
    country: "Tunisie",
    city: "El Jem",
    departureDate: "02.06.22",
    returnDate: "13.06.22" ,
    mainImage: {
      id:21,
      name:"el-jem main picture",
      image: "assets/images/cities/tunisie-el-jem/main-picture-el-jem.svg"
    },
    secondaryImages: [
      {
        id:22,
        name:"el-jem secondary picture 1",
        image: "assets/images/cities/tunisie-el-jem/other-picture-tunis-1.svg"
      },
      {
        id:23,
        name:"el-jem secondary picture 2",
        image: "assets/images/cities/tunisie-el-jem/other-picture-el-jem-1.svg"
      },
      {
        id:24,
        name:"el-jem secondary picture 3",
        image: "assets/images/cities/tunisie-el-jem/other-picture-el-jem-1.svg"
      },
      {
        id:25,
        name:"el-jem secondary picture 4",
        image: "assets/images/cities/tunisie-el-jem/other-picture-el-jem-1.svg"
      }
    ],
    travelDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac.Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
    advantages: ["Un pays très simple à sillonner, sans embrouilles ni complexité","Des habitants gentils, spontanés et qui cherchent le contact","Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"] ,
    disadvantages: ["Le climat torride en juillet-août, sauf en montagne","La côte très fréquentée l'été et de plus en plus bétonnée"] ,
    advices: ["Prenez une paire de tong !"] ,
    abstract: "L'Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l'accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s'éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l'Albanie.",
    isMain: false
  }
]
