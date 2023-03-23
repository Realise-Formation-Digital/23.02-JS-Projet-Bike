let accessoires = document.getElementsByName('accessories');
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
        default:
            descriptionBike.innerHTML = "";
            bikeDesc.innerHTML = "";
            priceBike.innerHTML = "";
            bikePrice = parseFloat(0);
            imgBikeChoose.src = "./pics/velo-exemple.png";
            imgChooseBike.src = "./pics/velo-exemple.png";
    }
    sumTotal(bikePrice, accPrice);
}

/**
 *Get the accessories
 */

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
    let listToShow = document.getElementById('listToShow');
    removeAllChildNodes(listToShow);
    accPrice = 0;
    for (let i = 0; i < accessoryChoose.length; i++) {
        console.log(accessoryChoose[i]);
        switch (accessoryChoose[i].value) {
            case 'Selle':
                let selle = document.createElement('li');
                let selleText = document.createTextNode(accessoryChoose[i].value);
                selle.appendChild(selleText);
                listToShow.appendChild(selle);
                accPrice = parseInt(accessoryChoose[i].dataset.price) + parseInt(accPrice);
                break;
            case 'Guidon':
                let Guidon = document.createElement('li');
                let GuidonText = document.createTextNode(accessoryChoose[i].value);
                Guidon.appendChild(GuidonText);
                listToShow.appendChild(Guidon);
                accPrice = parseInt(accessoryChoose[i].dataset.price) + parseInt(accPrice);
                break;
            case 'Freins':
                let Freins = document.createElement('li');
                let FreinsText = document.createTextNode(accessoryChoose[i].value);
                Freins.appendChild(FreinsText);
                listToShow.appendChild(Freins);
                accPrice = parseInt(accessoryChoose[i].dataset.price) + parseInt(accPrice);
                break;
            case 'Pneu':
                let Pneu = document.createElement('li');
                let PneuText = document.createTextNode(accessoryChoose[i].value);
                Pneu.appendChild(PneuText);
                listToShow.appendChild(Pneu);
                accPrice = parseInt(accessoryChoose[i].dataset.price) + parseInt(accPrice);
                break;
            case 'Lumières':
                let Lumières = document.createElement('li');
                let LumièresText = document.createTextNode(accessoryChoose[i].value);
                Lumières.appendChild(LumièresText);
                listToShow.appendChild(Lumières);
                accPrice = parseInt(accessoryChoose[i].dataset.price) + parseInt(accPrice);
                break;
            case 'Casque':
                let Casque = document.createElement('li');
                let CasqueText = document.createTextNode(accessoryChoose[i].value);
                Casque.appendChild(CasqueText);
                listToShow.appendChild(Casque);
                accPrice = parseInt(accessoryChoose[i].dataset.price) + parseInt(accPrice);
                break;
            case 'Chaines':
                let Chaines = document.createElement('li');
                let ChainesText = document.createTextNode(accessoryChoose[i].value);
                Chaines.appendChild(ChainesText);
                listToShow.appendChild(Chaines);
                accPrice = parseInt(accessoryChoose[i].dataset.price) + parseInt(accPrice);
                break;
            case 'Pédales':
                let pedales = document.createElement('li');
                let pedalesText = document.createTextNode(accessoryChoose[i].value);
                pedales.appendChild(pedalesText);
                listToShow.appendChild(pedales);
                accPrice = parseInt(accessoryChoose[i].dataset.price) + parseInt(accPrice);
                break;
            case 'Garde-Boue':
                let garde = document.createElement('li');
                let gardeText = document.createTextNode(accessoryChoose[i].value);
                garde.appendChild(gardeText);
                listToShow.appendChild(garde);
                accPrice = parseInt(accessoryChoose[i].dataset.price) + parseInt(accPrice);
                break;
            case 'Cadenas':
                let cadenas = document.createElement('li');
                let cadenasText = document.createTextNode(accessoryChoose[i].value);
                cadenas.appendChild(cadenasText);
                listToShow.appendChild(cadenas);
                accPrice = parseInt(accessoryChoose[i].dataset.price) + parseInt(accPrice);
                break;
        }
    }
    sumTotal(bikePrice, accPrice);
}


/**
 * clear the list for new choice
 * @param {element} - the element parent child to remove
 */

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/**
 * calcul et affiche la somme totale
 * @param {integer} - for biKePrice
 * @param {integer} - for accPrice
 */

function sumTotal(bikePrice, accPrice) {
    let sum = document.getElementById('sum');
    let priceTotal = parseInt(bikePrice) + parseInt(accPrice);
    sum.innerHTML = parseInt(priceTotal) + " CHF";
}