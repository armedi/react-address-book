/**
 * This is only used in development.
 * To mock return data of randomuser.me api
 */

import fetchMock from 'fetch-mock'

fetchMock.config.fallbackToNetwork = true
fetchMock.config.warnOnFallback = false

fetchMock.get('begin:https://randomuser.me/api', {
  results: [
    {
      gender: 'female',
      name: {
        title: 'Miss',
        first: 'Louane',
        last: 'Vidal',
      },
      location: {
        street: {
          number: 2479,
          name: 'Place du 8 Février 1962',
        },
        city: 'Avignon',
        state: 'Vendée',
        country: 'France',
        postcode: 78276,
        coordinates: {
          latitude: '2.0565',
          longitude: '95.2422',
        },
        timezone: {
          offset: '+1:00',
          description: 'Brussels, Copenhagen, Madrid, Paris',
        },
      },
      email: 'louane.vidal@example.com',
      login: {
        uuid: '9f07341f-c7e6-45b7-bab0-af6de5a4582d',
        username: 'angryostrich988',
        password: 'r2d2',
        salt: 'B5ywSDUM',
        md5: 'afce5fbe8f32bcec1a918f75617ab654',
        sha1: '1a5b1afa1d9913cf491af64ce78946d18fea6b04',
        sha256:
          '0124895aa1e6e5fb0596fad4c413602e0922e8a8c2dc758bbdb3fa070ad25a07',
      },
      dob: {
        date: '1966-06-26T11:50:25.558Z',
        age: 54,
      },
      registered: {
        date: '2016-08-11T06:51:52.086Z',
        age: 4,
      },
      phone: '02-62-35-18-98',
      cell: '06-07-80-83-11',
      id: {
        name: 'INSEE',
        value: '2NNaN01776236 16',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/88.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/88.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/88.jpg',
      },
      nat: 'FR',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Don',
        last: 'White',
      },
      location: {
        street: {
          number: 4542,
          name: 'Rochestown Road',
        },
        city: 'Sallins',
        state: 'Monaghan',
        country: 'Ireland',
        postcode: 44584,
        coordinates: {
          latitude: '89.4367',
          longitude: '135.6354',
        },
        timezone: {
          offset: '+11:00',
          description: 'Magadan, Solomon Islands, New Caledonia',
        },
      },
      email: 'don.white@example.com',
      login: {
        uuid: '1cd1e622-12bb-4b35-a2c9-63ff7bda6c73',
        username: 'angryduck156',
        password: '0101',
        salt: 'XDlG0rRr',
        md5: '35e6f5e0247d43f6dec0056c8317f320',
        sha1: 'ee6a3affc22de617283eb28e8df7fab72b153052',
        sha256:
          '6cf456410cf19343336972d23d00d0884fed29c3e73a5584aeae2eeda3a48758',
      },
      dob: {
        date: '1949-10-09T00:25:51.304Z',
        age: 71,
      },
      registered: {
        date: '2017-06-06T09:27:25.706Z',
        age: 3,
      },
      phone: '051-441-5241',
      cell: '081-956-4429',
      id: {
        name: 'PPS',
        value: '5081227T',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/38.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/38.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/38.jpg',
      },
      nat: 'IE',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Loan',
        last: 'Lucas',
      },
      location: {
        street: {
          number: 2256,
          name: "Place de L'Église",
        },
        city: 'Argenteuil',
        state: 'Lot-et-Garonne',
        country: 'France',
        postcode: 87662,
        coordinates: {
          latitude: '3.9825',
          longitude: '176.6213',
        },
        timezone: {
          offset: '+7:00',
          description: 'Bangkok, Hanoi, Jakarta',
        },
      },
      email: 'loan.lucas@example.com',
      login: {
        uuid: '4b400301-d696-4618-862e-8a673f80e334',
        username: 'orangepanda844',
        password: 'wonderboy',
        salt: 'iHPZA8UP',
        md5: '97eca8070d96e8e27b1c468e9cb3fd9e',
        sha1: '23c5a9a09387d4d9b381c5f86330a1629971a7fa',
        sha256:
          '817b0ddb16a74507134956bcd0e80467e5efbcc309116bf3caf98199b6c54e59',
      },
      dob: {
        date: '1992-11-21T06:28:32.563Z',
        age: 28,
      },
      registered: {
        date: '2007-10-22T21:15:52.757Z',
        age: 13,
      },
      phone: '04-56-18-88-34',
      cell: '06-74-93-14-75',
      id: {
        name: 'INSEE',
        value: '1NNaN18631077 64',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/3.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/3.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/3.jpg',
      },
      nat: 'FR',
    },
    {
      gender: 'male',
      name: {
        title: 'Monsieur',
        first: 'Arno',
        last: 'Brun',
      },
      location: {
        street: {
          number: 3976,
          name: 'Rue de la Mairie',
        },
        city: 'Stocken-Höfen',
        state: 'Schaffhausen',
        country: 'Switzerland',
        postcode: 9563,
        coordinates: {
          latitude: '52.7455',
          longitude: '6.1478',
        },
        timezone: {
          offset: '+7:00',
          description: 'Bangkok, Hanoi, Jakarta',
        },
      },
      email: 'arno.brun@example.com',
      login: {
        uuid: '679d3319-d28a-4d6f-baf8-bde50a8a2edd',
        username: 'whitebutterfly474',
        password: 'shonuf',
        salt: 'DDoEyFRG',
        md5: '394d45b58344b04772234b6fd54bbfd1',
        sha1: '2fccefa4bbcd5e0d22f867652d617112968a582f',
        sha256:
          '044cf6fd20327cc39f2a8cad8f972bef7591a7d662afdb4ae19b5ba4d4c9d746',
      },
      dob: {
        date: '1983-05-25T05:55:31.820Z',
        age: 37,
      },
      registered: {
        date: '2015-02-25T19:12:42.984Z',
        age: 5,
      },
      phone: '076 793 40 04',
      cell: '078 672 71 74',
      id: {
        name: 'AVS',
        value: '756.4592.3936.31',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/23.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/23.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/23.jpg',
      },
      nat: 'CH',
    },
    {
      gender: 'female',
      name: {
        title: 'Miss',
        first: 'Aubrey',
        last: 'Martin',
      },
      location: {
        street: {
          number: 8675,
          name: 'Duke St',
        },
        city: 'Princeton',
        state: 'Nova Scotia',
        country: 'Canada',
        postcode: 'B7G 4G1',
        coordinates: {
          latitude: '-18.3929',
          longitude: '-5.5054',
        },
        timezone: {
          offset: '-2:00',
          description: 'Mid-Atlantic',
        },
      },
      email: 'aubrey.martin@example.com',
      login: {
        uuid: 'b7e527c8-3ca5-430c-ba83-711d6ad98773',
        username: 'smallzebra743',
        password: '0007',
        salt: '6XyMek6M',
        md5: '2c16eb746095f838d9f3bbd28048150b',
        sha1: '7c056b18ad1392267f86253286b40138fd24527b',
        sha256:
          '2a66257c19e251353bebc11b7b8dd7ef1c43f7417e738e10b60b559e8f097ee1',
      },
      dob: {
        date: '1955-04-29T11:58:30.868Z',
        age: 65,
      },
      registered: {
        date: '2019-03-24T01:09:31.327Z',
        age: 1,
      },
      phone: '394-561-2795',
      cell: '710-388-7246',
      id: {
        name: '',
        value: null,
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/18.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/18.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/18.jpg',
      },
      nat: 'CA',
    },
    {
      gender: 'female',
      name: {
        title: 'Miss',
        first: 'Julia',
        last: 'Smith',
      },
      location: {
        street: {
          number: 9439,
          name: 'Simcoe St',
        },
        city: 'Grand Falls',
        state: 'Manitoba',
        country: 'Canada',
        postcode: 'L2F 9K2',
        coordinates: {
          latitude: '-1.8238',
          longitude: '-38.6202',
        },
        timezone: {
          offset: '+4:30',
          description: 'Kabul',
        },
      },
      email: 'julia.smith@example.com',
      login: {
        uuid: '8b8ce16b-b3f5-4cf5-a007-a9c4c2c778f4',
        username: 'goldenpeacock890',
        password: '141414',
        salt: '1kP6LwZX',
        md5: 'dd6600d34c982c22df744d3c09207bcc',
        sha1: '202a94fa64e4a533eb6fce80fdd23d0b809374ac',
        sha256:
          'a1c430520cc74403badeee87f477e948ac9899241e00444a335ffa9d20e3cc22',
      },
      dob: {
        date: '1973-11-10T19:12:24.030Z',
        age: 47,
      },
      registered: {
        date: '2005-09-06T08:02:50.809Z',
        age: 15,
      },
      phone: '114-449-8390',
      cell: '123-247-3795',
      id: {
        name: '',
        value: null,
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/84.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/84.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/84.jpg',
      },
      nat: 'CA',
    },
    {
      gender: 'female',
      name: {
        title: 'Miss',
        first: 'Guro',
        last: 'Røstad',
      },
      location: {
        street: {
          number: 4745,
          name: 'Saxegaardsgata',
        },
        city: 'Råkvågen',
        state: 'Hedmark',
        country: 'Norway',
        postcode: '2330',
        coordinates: {
          latitude: '-35.4549',
          longitude: '149.0069',
        },
        timezone: {
          offset: '-1:00',
          description: 'Azores, Cape Verde Islands',
        },
      },
      email: 'guro.rostad@example.com',
      login: {
        uuid: '6a52282a-46d6-4a71-ac69-12ea0dfb3f24',
        username: 'bigdog376',
        password: 'scooby',
        salt: 'kpe5kNV8',
        md5: 'ecedd81361f18a6a001eaa73fa031c7e',
        sha1: '320157bec210ea3a3ea083801b0bdbbff9a40760',
        sha256:
          '7926e4d1ae8aa2f496edfa001a1efc307b82d80c9f8718989beeb07e1d08fffa',
      },
      dob: {
        date: '1972-03-17T09:15:14.547Z',
        age: 48,
      },
      registered: {
        date: '2005-09-22T22:39:21.746Z',
        age: 15,
      },
      phone: '52723960',
      cell: '99227985',
      id: {
        name: 'FN',
        value: '17037237434',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/48.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/48.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/48.jpg',
      },
      nat: 'NO',
    },
    {
      gender: 'female',
      name: {
        title: 'Mrs',
        first: 'Katarina',
        last: 'Mostad',
      },
      location: {
        street: {
          number: 4432,
          name: 'Framveien',
        },
        city: 'Isfjorden',
        state: 'Oslo',
        country: 'Norway',
        postcode: '3230',
        coordinates: {
          latitude: '73.3382',
          longitude: '-15.8943',
        },
        timezone: {
          offset: '-9:00',
          description: 'Alaska',
        },
      },
      email: 'katarina.mostad@example.com',
      login: {
        uuid: '8a23be8b-115d-4ec3-ba0b-47422f9d3afd',
        username: 'tinykoala661',
        password: 'christin',
        salt: 'nYXgbJU7',
        md5: 'f8aa486f677ad321dbad9889269fae9f',
        sha1: 'dc082d4d0c8a808e7003edd8d10cd716969122ec',
        sha256:
          'dbefa5932e5236c880a9292d07135159baba66b20e63e75ce745794abf4266d3',
      },
      dob: {
        date: '1982-09-28T14:36:13.425Z',
        age: 38,
      },
      registered: {
        date: '2014-12-24T19:19:49.612Z',
        age: 6,
      },
      phone: '27827884',
      cell: '47307161',
      id: {
        name: 'FN',
        value: '28098218876',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/15.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/15.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/15.jpg',
      },
      nat: 'NO',
    },
    {
      gender: 'female',
      name: {
        title: 'Mrs',
        first: 'Aada',
        last: 'Heinonen',
      },
      location: {
        street: {
          number: 4476,
          name: 'Rautatienkatu',
        },
        city: 'Rusko',
        state: 'Southern Ostrobothnia',
        country: 'Finland',
        postcode: 36158,
        coordinates: {
          latitude: '-20.3448',
          longitude: '-114.4092',
        },
        timezone: {
          offset: '-1:00',
          description: 'Azores, Cape Verde Islands',
        },
      },
      email: 'aada.heinonen@example.com',
      login: {
        uuid: 'dd2ae95d-c05b-4e83-9226-76ed6f023546',
        username: 'tinydog827',
        password: 'bigballs',
        salt: '1lsr668w',
        md5: '882e5524f77c1d4c163005c912f1dc6f',
        sha1: '31fe091e92d85eac0b420b20e7f38f070bf4ce64',
        sha256:
          'e847c602a79712d869a556be0367fab4e346df3129bf89a8c6b69778b3869259',
      },
      dob: {
        date: '1953-09-28T16:06:48.801Z',
        age: 67,
      },
      registered: {
        date: '2017-09-04T05:44:05.399Z',
        age: 3,
      },
      phone: '02-844-877',
      cell: '045-431-53-50',
      id: {
        name: 'HETU',
        value: 'NaNNA702undefined',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/55.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/55.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/55.jpg',
      },
      nat: 'FI',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Eeli',
        last: 'Kivisto',
      },
      location: {
        street: {
          number: 596,
          name: 'Pyynikintie',
        },
        city: 'Ristiina',
        state: 'Kainuu',
        country: 'Finland',
        postcode: 47504,
        coordinates: {
          latitude: '48.2435',
          longitude: '-61.3271',
        },
        timezone: {
          offset: '-2:00',
          description: 'Mid-Atlantic',
        },
      },
      email: 'eeli.kivisto@example.com',
      login: {
        uuid: 'be8633e6-3ce5-4b16-bba5-c241e2acfc12',
        username: 'greencat124',
        password: 'mememe',
        salt: 'Y4rn52ue',
        md5: 'a1d0cbe77780119325e466dbe0e57e2c',
        sha1: 'a555364cfe022b1828ca784ea561c45b4f3e85ab',
        sha256:
          '4a23bcb88abf0f04dede6d095f0789ad4618b29b761557ddcf11a0408e4415f5',
      },
      dob: {
        date: '1982-01-06T22:11:50.236Z',
        age: 38,
      },
      registered: {
        date: '2011-06-19T20:35:43.695Z',
        age: 9,
      },
      phone: '08-217-947',
      cell: '049-368-91-57',
      id: {
        name: 'HETU',
        value: 'NaNNA419undefined',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/95.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/95.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/95.jpg',
      },
      nat: 'FI',
    },
  ],
  info: {
    seed: 'abc',
    results: 10,
    page: 1,
    version: '1.3',
  },
})
