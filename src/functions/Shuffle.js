// export function shuffle (array) {
//     let currentIndex = array.length;

//     while (currentIndex != 0) {
//         let randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;

//         [array[currentIndex], array[randomIndex]] = [
//             array[randomIndex], array[currentIndex]
//         ];
//     }
// }

// let arr = [2, 4, 6, 10, 5, 14, 12, 35, 12, 145, 18];

// shuffle(arr);
// console.log(arr); 

// export function shuffle (arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
// }

// export function shuffle (arr) {
//     return arr.map(item => ({value: item, sort: Math.random()}))
//     .sort((a, b) => a.sort - b.sort)
//     .map(item => item.value);
// }