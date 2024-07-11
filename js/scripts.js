console.log('ciao console');

const kilometers = "";

console.log('chilometri da percorrere:' + kilometers);


const age = "";

console.log('Età:' + age);

const priceTicket = (Math.round((kilometers * 0.21) * 100) / 100) ;
console.log('prezzo del biglietto:' + priceTicket + '€');

const priceTicketForMinor = (Math.round((kilometers * 0.168) * 100) / 100);
console.log('prezzo del biglietto per minorenni:' + priceTicketForMinor + '€');

// const priceTicketForOver = Math.round(kilometers * 0.126);
// console.log('prezzo del biglietto per anziani:' + priceTicketForOver + '€');

const priceTicketForOver = kilometers * 0.126;
console.log('prezzo del biglietto per anziani:' + priceTicketForOver.toFixed(2) + '€');

const ageMinor = 17;
const ageOver = 65;

// if (age <= ageMinor ) {
//     document.getElementById('resultPrice').innerHTML = priceTicketForMinor + '€'
//     console.log('prezzo scontato per minori:' + priceTicketForMinor + '€' );
// }
// else if (age >= ageOver) {
//     document.getElementById('resultPrice').innerHTML = priceTicketForOver + '€'
//     console.log('prezzo scontato per anziani:' + priceTicketForOver.toFixed(2) + '€' );
// }

// else {
//     document.getElementById('resultPrice').innerHTML = priceTicket + '€'
//     console.log('prezzo normale' + priceTicket + '€');
// }

// if (age >= ageOver) {
//     console.log('prezzo scontato per anziani:' + priceTicketForOver + '€' )
// }
// else {
//     console.log('prezzo normale' + priceTicket + '€')
// }


// document.getElementById('resultPrice').innerHTML = 

function myFuction(kilometers, age) {

    console.log(kilometers.value, age.value);
    kilometers = (kilometers.value)
    age = (age.value)
    

    console.log('chilometri da percorrere:' + kilometers);
    
    console.log('Età:' + age);

    const priceTicket = (Math.round((kilometers * 0.21) * 100) / 100);
    console.log('prezzo del biglietto:' + priceTicket + '€');

    const priceTicketForMinor = (Math.round((kilometers * 0.168) * 100) / 100);
    console.log('prezzo del biglietto per minorenni:' + priceTicketForMinor + '€');


    const priceTicketForOver = kilometers * 0.126;
    console.log('prezzo del biglietto per anziani:' + priceTicketForOver.toFixed(2) + '€');

    const ageMinor = 17;
    const ageOver = 65;

    if (age <= ageMinor) {
       
        document.getElementById('resultPrice').innerHTML = priceTicketForMinor + '€'
        console.log('prezzo scontato per minori:' + priceTicketForMinor + '€');
    }
    else if (age >= ageOver) {
        document.getElementById('resultPrice').innerHTML = priceTicketForOver + '€'
        console.log('prezzo scontato per anziani:' + priceTicketForOver.toFixed(2) + '€');
    }

    else {
        document.getElementById('resultPrice').innerHTML = priceTicket + '€'
        console.log('prezzo normale:' + priceTicket + '€');

    }


}

