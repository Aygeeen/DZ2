var cities = ["Bishkek", "Los Angeles", "Chicago", "New York", "Houston", "Dallas", "Philadelphia", "Seattle"];

var citiesLongNames = [];
var citiesWithS = [];

for (let i = 0; i < cities.length; i++) {
    const city = cities[i];

    if (city.length > 6) {
        citiesLongNames.push(city);
    }
    if (city.includes('s') || city.includes('S')) {
        citiesWithS.push(city);
    }
}

console.log("Города с названиями длиннее 6 символов:", citiesLongNames);
console.log("Города с буквой 's' или 'S' в названии:", citiesWithS);
// ------------------------------------------------------


var color = prompt('Введите цвет светофора')
var colorObject = {
    red: "Стоп",
    yellow: "Приготовьтесь",
    green: "Езжайте"
};
switch (color){
    case 'red':
    case 'yellow':
    case 'green':
        alert(colorObject[color])
        break;
    default:
        alert('пожалуйста,введите корректный цвет светофора')
        break;
}
