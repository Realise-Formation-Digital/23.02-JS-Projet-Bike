const accessoires = document.getElementsByName("accessoires");
/**
 * function that check accessories selected 
 */
function checkEverything() {
    for (let i = 0; i < accessoires.length; i++){
        if (accessoires[i].checked){
            console.log(accessoires[i]);
        }
    }
}
