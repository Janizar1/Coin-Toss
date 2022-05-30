let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let tossBtn = document.querySelector("#toss-button");
let resetBtn = document.querySelector("#reset-button");


tossBtn.addEventListener("click", () => {
    let f = Math.floor(Math.random() * 2);
    coin.style.animation = "none";

    if(f){
        setTimeout(function (){
            //access animation property specified in css files to make coin spin
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        //if heads increment heads count +1
        heads++;
    }else{
        setTimeout(function (){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        //else tails increment tails count +1 
        tails++;
    }
    setTimeout(updateCount, 3000);
    disableButton();
});


//update number of occurances of heads and tails
function updateCount(){
    document.querySelector("#heads-counts").textContent =`Heads: ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}
//function disable button disables toss button until result comes
function disableButton(){
    tossBtn.dis, disabled = true;
    setTimeout(function(){
        tossBtn.disabled = false;
    },3000);
}

//event listener for reset button so when reset button is clicked counter is reset
resetBtn.addEventListener("click", () => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateCount();
})