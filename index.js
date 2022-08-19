// Code your solutions in this file
const cards= (["Venam","Eris","Melia"], "surprise");
function writeCards(cards,surprise){
  let presents=[]
for (let i = 0; i < cards.length; i++){
   presents.push(`Thank you, ${cards[i]}, for the wonderful ${surprise} gift!`);
}
return presents
}
function countDown(){
  let number = 10
  while (number >= 0){
    console.log(number--)
  }
}
