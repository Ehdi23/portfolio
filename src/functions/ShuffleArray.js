export function shuffle (arr) {
    let alet = arr.map(item => ({value: item, sort: Math.random()}))
    return alet.sort((a, b) => a.sort - b.sort).map(item => item.value);
}