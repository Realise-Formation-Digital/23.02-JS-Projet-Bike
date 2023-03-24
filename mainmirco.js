let bikeprice = [];
console.log(bikeprice)


 
    function change(value){
    let prix = document.getElementById('prix');
 
    let messagedes = document.getElementById('message');

    let img = document.getElementById('imgid');

        switch(value){
            case ('1'):
                prix.innerHTML = "200 chf";
                bikeprice = 200;
                messagedes.innerHTML = "GH-7 ce modèle vous fera vivre des sensations fortes are you ready ?";
                img.src = "pics/velo1.jpg";
                break;
            case ('2'): 
                prix.innerHTML = "250 chf";
                bikeprice = 250;
                messagedes.innerHTML = 'BH-9 ce modèle vous offrira compfort et le respect des autres become the king of the road';
                img.src = "pics/velo2.jpg";
                break;
            case ('3'): 
                prix.innerHTML = "650 chf";
                bikeprice = 650;
                messagedes.innerHTML = 'KU-2 ce modèle fera de vous un dieu parmis les cyclistes become GOD !';
                img.src = "pics/velo3.jpg";
                break;
            case ('4'): 
                prix.innerHTML = "750 chf";
                bikeprice = 750;
                messagedes.innerHTML = 'VP-0 ce modèle polyvalent vous servira pour chaque occasion';
                img.src = "pics/velo4.jpg";
                break;
            case ('5'): 
                prix.innerHTML = "1500 chf";
                bikeprice = 1500;
                messagedes.innerHTML = 'XY-5 ce modèle inspirer de la plus pur tradition vous plongera dans les années 50';
                img.src = "pics/velo5.jpg";
                break;
                default:
                prix.innerHTML = "";
                bikeprice = 0;
                messagedes.innerHTML = 'Veuillez choisir un modèle';
                img.src = "pics/velo-exemple.png";

        }

    }