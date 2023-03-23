let accessoires = document.getElementsByName('accessories');
let listToShow = document.getElementById('listToShow');
let bikePrice = 0;
let accPrice = 0;
let bike = document.getElementById('bike');

/**
 * function to get bike
 */

function getBike() {
    let bikeChoose = bike.options[bike.selectedIndex].value;
    let descBike = bike.options[bike.selectedIndex].text;
    let imgBikeChoose = document.getElementById('imgBikeChoose');
    let imgChooseBike = document.getElementById('imgChooseBike');
    let descriptionBike = document.getElementById('descriptionBike');
    let bikeDesc = document.getElementById('bikeDesc');
    let priceBike = document.getElementById('priceBike');
    switch (bikeChoose) {
        case '1':
            descriptionBike.innerHTML = descBike;
            bikeDesc.innerHTML = descBike;
            priceBike.innerHTML = "600 CHF";
            bikePrice = parseFloat(600);
            imgBikeChoose.src = "./pics/velo1.jpg";
            imgChooseBike.src = "./pics/velo1.jpg";
            break;
        case '2':
            descriptionBike.innerHTML = descBike;
            bikeDesc.innerHTML = descBike;
            priceBike.innerHTML = "700 CHF";
            bikePrice = parseFloat(700);
            imgBikeChoose.src = "./pics/velo2.jpg";
            imgChooseBike.src = "./pics/velo2.jpg";
            break;
        case '3':
            descriptionBike.innerHTML = descBike;
            bikeDesc.innerHTML = descBike;
            priceBike.innerHTML = "500 CHF";
            bikePrice = parseFloat(500);
            imgBikeChoose.src = "./pics/velo3.jpg";
            imgChooseBike.src = "./pics/velo3.jpg";
            break;
        case '4':
            descriptionBike.innerHTML = descBike;
            bikeDesc.innerHTML = descBike;
            priceBike.innerHTML = "800 CHF";
            bikePrice = parseFloat(800);
            imgBikeChoose.src = "./pics/velo4.jpg";
            imgChooseBike.src = "./pics/velo4.jpg";
            break;
        case '5':
            descriptionBike.innerHTML = descBike;
            bikeDesc.innerHTML = descBike;
            priceBike.innerHTML = "1000 CHF";
            bikePrice = parseFloat(1000);
            imgBikeChoose.src = "./pics/velo5.jpg";
            imgChooseBike.src = "./pics/velo5.jpg";
            break;
    }
    sumTotal(bikePrice, accPrice);
}

/**
 *Get the accessories
 */

console.log(accessoires);

function getAccessories() {
    let accessoryChoose = [];
    for (let i = 0; i < accessoires.length; i++) {
        if (accessoires[i].checked === true) {
            accessoryChoose.push(accessoires[i]);
        }
    }
    showAccessory(accessoryChoose);
}

/**
 * show the accessory
 * @param {array} tab accessories from accessoryChoose
 * 
 */

function showAccessory(accessoryChoose) {
    for (let i = 0; i < accessoryChoose.length; i++) {
        console.log(accessoryChoose[i]);
        switch (accessoryChoose[i].value) {
            case 'Selle':
                listToShow.innerHTML = accessoryChoose[i].value;
                accPrice = accessoryChoose[i].dataset.price + accPrice;
                break;
            case 'Guidon':
                listToShow.innerHTML = accessoryChoose[i].value;
                accPrice = accessoryChoose[i].dataset.price + accPrice;
                break;
            case 'Freins':
                listToShow.innerHTML = accessoryChoose[i].value;
                accPrice = accessoryChoose[i].dataset.price + accPrice;
                break;
            case 'Pneu':
                listToShow.innerHTML = accessoryChoose[i].value;
                accPrice = accessoryChoose[i].dataset.price + accPrice;
                break;
            case 'Lumières':
                listToShow.innerHTML = accessoryChoose[i].value;
                accPrice = accessoryChoose[i].dataset.price + accPrice;
                break;
            case 'Casque':
                listToShow.innerHTML = accessoryChoose[i].value;
                accPrice = accessoryChoose[i].dataset.price + accPrice;
                break;
            case 'Chaines':
                listToShow.innerHTML = accessoryChoose[i].value;
                accPrice = accessoryChoose[i].dataset.price + accPrice;
                break;
            case 'Pédales':
                listToShow.innerHTML = accessoryChoose[i].value;
                accPrice = accessoryChoose[i].dataset.price + accPrice;
                break;
            case 'Garde-Boue':
                listToShow.innerHTML = accessoryChoose[i].value;
                accPrice = accessoryChoose[i].dataset.price + accPrice;
                break;
            case 'Cadenas':
                listToShow.innerHTML = accessoryChoose[i].value;
                accPrice = accessoryChoose[i].dataset.price + accPrice;
                break;
        }
    }
    sumTotal(bikePrice, accPrice);
}

/**
 * calcul et affiche la somme totale
 * @param {integer} - for biKePrice
 * @param {integer} - for accPrice
 */

function sumTotal(bikePrice, accPrice) {
    let sum = document.getElementById('sum');
    let priceTotal = parseFloat(bikePrice) + parseFloat(accPrice);
    sum.innerHTML = priceTotal + " CHF";
}