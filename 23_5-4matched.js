// // Ex 1

// const numbers = [45, 65, 23, 98, 19];

// // for (let i = 0; i < numbers.length; i++) {
// //     const number = numbers[i];
// //     console.log(number);
// // }

// // Alternative way to solve the above program:

// for (const number of numbers) {
//     console.log(number);
// }

// Ex. 2

const products = [
    { id: 1, name: 'Xiomi phone', price: 19000 },
    { id: 2, name: 'HP Probook Laptop', price: 62000 },
    { id: 3, name: 'Samsung Note 7', price: 40000 },
    { id: 4, name: 'Walton 35K phone', price: 30000 },
    { id: 5, name: 'Dell Laptop', price: 19000 },
    { id: 6, name: 'Lenovo Phone', price: 19000 },
    { id: 7, name: 'iPhone', price: 91000 },
    { id: 8, name: 'mac book air', price: 119000 },
]

// for (const product of products) {
//     console.log(product);
// }

function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        //console.log(product);
        //console.log(product.name);
        if (product.name.includes(search)) {
            matched.push(product);
        }
    }
}
const result = matchedProducts(products, phone);
console.log(result);