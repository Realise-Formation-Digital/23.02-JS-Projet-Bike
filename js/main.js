let accessoires = document.getElementsByName('accessories');
console.log(accessoires);
let bikePrice = 0;
let accPrice = 0;
let bike = document.getElementsById('bike');
console.log(bike);
/**
 * function to get bike
 */

function getBike() {
    let bikeChoose = bike.options[bike.selectedIndex].value;
    let descBike = bike.options[bike.selectedIndex].text;
    console.log(bikeChoose, descBike);
    switch (value) {
        case '1':
            console.log('1');
            break;
        case '2':
            console.log('2');
            break;
        case '3':
            console.log('3');
            break;
        case '4':
            console.log('4');
            break;
        case '5':
            console.log('5');
            break;
    }
}