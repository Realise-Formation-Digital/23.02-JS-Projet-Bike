const accessoires = document.getElementsByName("accessories");
let bike = document.getElementById('bike');
let bikeprice = 0;
let accPrice = 0;


//Function change made with love by Daniel and Mirco
//Définir les variables prix messades et img
//Reflexion sur la function a utiliser test avec une function par boutton d'option mais nous sommes revenu sur la function switch car nous ne stockions aucunes valeurs
//creation de la variables bikeschoose par sylvain qui va définir le paramatres pour le switch et qui vaut à l'option choisis
//But changer la description de l'article du prix et l'image en fonction du choix selectionner par l'utilisateur
function change() {
    let bikeChoose = bike.options[bike.selectedIndex].value;
    let descBike = bike.options[bike.selectedIndex].text;
    let prix = document.getElementById('prix');
    let messagedes = document.getElementById('message');
    let img = document.getElementById('imgid');
    let imgChooseBike = document.getElementById('imgChooseBike');

    switch (bikeChoose) {
        case ('1'):
            bikeDesc.innerHTML = descBike;
            prix.innerHTML = "200 chf";
            bikeprice = 200;
            messagedes.innerHTML = descBike;
            img.src = "pics/velo1.jpg";
            imgChooseBike.src = "./pics/velo1.jpg";
            break;
        case ('2'):
            bikeDesc.innerHTML = descBike;
            prix.innerHTML = "250 chf";
            bikeprice = 250;
            messagedes.innerHTML = descBike;
            img.src = "pics/velo2.jpg";
            imgChooseBike.src = "./pics/velo2.jpg";
            break;
        case ('3'):
            bikeDesc.innerHTML = descBike;
            prix.innerHTML = "650 chf";
            bikeprice = 650;
            messagedes.innerHTML = descBike;
            img.src = "pics/velo3.jpg";
            imgChooseBike.src = "./pics/velo3.jpg";
            break;
        case ('4'):
            bikeDesc.innerHTML = descBike;
            prix.innerHTML = "750 chf";
            bikeprice = 750;
            messagedes.innerHTML = descBike;
            img.src = "pics/velo4.jpg";
            imgChooseBike.src = "./pics/velo4.jpg";
            break;
        case ('5'):
            bikeDesc.innerHTML = descBike;
            prix.innerHTML = "1500 chf";
            bikeprice = 1500;
            messagedes.innerHTML = descBike;
            img.src = "pics/velo5.jpg";
            imgChooseBike.src = "./pics/velo5.jpg";
            break;
        default:
            bikeDesc.innerHTML = "";
            prix.innerHTML = "";
            bikeprice = 0;
            messagedes.innerHTML = 'Veuillez choisir un modèle';
            img.src = "pics/velo-exemple.png";
            imgChooseBike.src = "./pics/velo-exemple.png";
    }
    sumTotal(bikeprice, accPrice);
}

/**
 * function that check accessories selected 
 */
function checkEverything() {
    let accessoryChoose = [];
    for (let i = 0; i < accessoires.length; i++) {
        if (accessoires[i].checked === true) {
            accessoryChoose.push(accessoires[i]);
        }
    }
    showAccessory(accessoryChoose);
}


/**
 * function to show the list 
 * @param {array} - for accessoryChoose checkEverything() 
 */

function showAccessory(accessoryChoose) {
    let listToShow = document.getElementById('listToShow');
    removeAllChildNodes(listToShow);
    accPrice = 0;
    for (let i = 0; i < accessoryChoose.length; i++) {
        console.log('boucle de selection', accessoryChoose[i]);
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
            case 'chaine-velo':
                let Chaines = document.createElement('li');
                let ChainesText = document.createTextNode(accessoryChoose[i].value);
                Chaines.appendChild(ChainesText);
                listToShow.appendChild(Chaines);
                accPrice = parseInt(accessoryChoose[i].dataset.price) + parseInt(accPrice);
                break;
            case 'pédale':
                let pedales = document.createElement('li');
                let pedalesText = document.createTextNode(accessoryChoose[i].value);
                pedales.appendChild(pedalesText);
                listToShow.appendChild(pedales);
                accPrice = parseInt(accessoryChoose[i].dataset.price) + parseInt(accPrice);
                break;
            case 'garde-boue':
                let garde = document.createElement('li');
                let gardeText = document.createTextNode(accessoryChoose[i].value);
                garde.appendChild(gardeText);
                listToShow.appendChild(garde);
                accPrice = parseInt(accessoryChoose[i].dataset.price) + parseInt(accPrice);
                break;
            case 'cadena':
                let cadenas = document.createElement('li');
                let cadenasText = document.createTextNode(accessoryChoose[i].value);
                cadenas.appendChild(cadenasText);
                listToShow.appendChild(cadenas);
                accPrice = parseInt(accessoryChoose[i].dataset.price) + parseInt(accPrice);
                break;
        }
    }
    sumTotal(bikeprice, accPrice);
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
