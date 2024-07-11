console.log('ciao console');

const kilometers = prompt("Quanti chilometri dovrai percorrere?");
console.log('chilometri da percorrere:' + kilometers);

const age = prompt('Quanti anni hai?');
console.log('Età:' + age);

const priceTicket = kilometers * 0.21 ;
console.log('prezzo del biglietto:' + priceTicket + '€');

const priceTicketForMinor = (Math.round((kilometers * 0.168) * 100) / 100);
console.log('prezzo del biglietto per minorenni:' + priceTicketForMinor + '€');

// const priceTicketForOver = Math.round(kilometers * 0.126);
// console.log('prezzo del biglietto per anziani:' + priceTicketForOver + '€');

const priceTicketForOver = kilometers * 0.126;
console.log('prezzo del biglietto per anziani:' + priceTicketForOver.toFixed(2) + '€');

const ageMinor = 17;
const ageOver = 65;

if (age <= ageMinor ) {
    console.log('prezzo scontato per minori:' + priceTicketForMinor + '€' );
}
else if (age >= ageOver) {
    console.log('prezzo scontato per anziani:' + priceTicketForOver.toFixed(2) + '€' );
}

else {
    console.log('prezzo normale' + priceTicket + '€');
}

// if (age >= ageOver) {
//     console.log('prezzo scontato per anziani:' + priceTicketForOver + '€' )
// }
// else {
//     console.log('prezzo normale' + priceTicket + '€')
// }