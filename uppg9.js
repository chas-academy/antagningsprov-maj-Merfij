

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

    function sort(argument){
        for(let i = 0; i < argument.length; i++){
            if(argument[i] %2 === 0){
                console.log(argument[i] + "jämt")
            } else {
                console.log(argument[i] + " udda")
            }
        }
    }

sort(siffror = [1, 23, 40, 46])
  

}

module.exports = { uppg9 };