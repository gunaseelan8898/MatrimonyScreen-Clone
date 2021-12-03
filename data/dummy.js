import User from '../model/User';

const USER = [
    new User(
        'u4',
        'Male',
        require('../assets/user/ranveer.jpg'),
        'Ranveer',
        28,
        6.0,
        82,
        'Actor',
        100000,
        'Hindu'

    ),
    new User(
        'u7',
        'Female',
        require('../assets/user/priya.jpeg'),
        'Priya',
        23,
        5.8,
        70,
        'Makeup-artist',
        50000,
        'Hindu'
    ),
    new User(
        'u8',
        'Male',
        require('../assets/user/salman.jpg'),
        'Salman',
        29,
        6.0,
        75,
        'Actor',
        150000,
        'Muslim'
    ),
    new User(
        'u9',
        'Female',
        require('../assets/user/mirnal.jpeg'),
        'Mirnalini',
        23,
        5.6,
        60,
        'Fashion Model',
        50000,
        'Hindu'
    ),
]

export default USER;
