const accessoires = document.getElementsByName("accessoires");
let bike = document.getElementById('bike');
let bikeprice = 0;
let accPrice = 0;



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
    for (let i = 0; i < accessoires.length; i++) {
        if (accessoires[i].checked) {
            console.log(accessoires[i]);
        }
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
