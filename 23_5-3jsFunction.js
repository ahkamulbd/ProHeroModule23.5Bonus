// // Ex. 1

// const nayok = {
//     name: 'Sakib Khan',
//     id: 121,
//     address: 'movie cinema',
//     isSingle: true,
//     friends: ['Apu', 'Raaz', 'Salman', 'Amir'],
//     movies: [{ name: 'no. 1', year: 2025 },
//     { name: 'king Khan', year: 2018 }],
//     act: function () {
//         console.log('acting like Sakib Khan');
//     },
//     car: {
//         brand: 'tesla',
//         price: 5000000,
//         made: 2025,
//         manufacturer: {
//             name: 'tesla',
//             ceo: 'Elon Mask',
//             country: 'USA'
//         }
//     }
// }
// console.log(nayok.act);
// nayok.act

// // Ex. 2

// //const products = [15, 56, 87];
// const products = {
//     '0': 15,
//     '1': 56,
//     '2': 87
// }
// console.log(products);

// Ex. 3

function add(num1, num2) {
    console.log(num1, num2);
    console.log(arguments);
}
add(12, 13, 45, 89, 78);