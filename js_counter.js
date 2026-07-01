const decreasebutton = document.getElementById("decreasebutton");
const resetbutton = document.getElementById("resetbutton");
const increasebutton = document.getElementById("increasebutton");
const countLabel = document.getElementById("countLabel");
let count = 0;

increasebutton.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreasebutton.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetbutton.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}