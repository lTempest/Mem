GameStart()
var point =0;

function GameStart(){
    const card = ["🍏", "🍐", "🍋", "🍑", "🍓", "🥑", "🍍", "🍒 ", "🍈", "🍉"];
    let finalcard = card.concat(card);
    let memory = document.getElementById('memory');
    let backcard;
    let frontcard;
    let i;


    //rendre le placement random
    // if(i = true){
        // for (let i =finalcard.length; i; i--){
            // j = Math.floor(Math.random()*i);
            // [finalcard[i-1], finalcard[j]] = [finalcard[j], finalcard[i-1]];
        // }
    // }


    //crée 1 div super cards qui contient back/front card
    for( let i = 0 ; i < finalcard.length ; i++){
        supercard = document.createElement('div');
        supercard.className ='supercards'
        memory.prepend(supercard)

        backcard = document.createElement('div');
        backcard.className ='backcarda';
        supercard.prepend(backcard);

        frontcard = document.createElement('div');
        frontcard.innerHTML = finalcard[i];
        frontcard.className = 'frontcarda';
        supercard.prepend(frontcard);
    }
    CardIsReturn()
}

function CardIsReturn(){
    const memoryChild = memory.childNodes;
    let cardReturn = [];
    let cardValue;
    let cardgood = [];
    //rendre les cartes cliquables et faire en sorte de ne pas en retourner + de 2
    memoryChild.forEach(element => {
        element.addEventListener('click', function(){
            if( cardReturn.length <=1){
            element.classList.toggle('rotate');
            cardValue = element ;
            cardReturn.push(cardValue);
            }
            if(cardReturn.length == 2){
                if (cardReturn[0].innerHTML !== cardReturn[1].innerHTML){
                setTimeout ( function(){
                    for(const c of cardReturn){
                        c.classList.toggle('rotate');
                        cardReturn = [];
                        temps -= 4
                    }
                }, 1000);}
                else {
                    cardgood.push(cardReturn[0,1]);
                    cardReturn = [];
                    point++ ;
                    temps += 7;
                    let score = document.getElementById('off').innerHTML = point;
                }
                if(cardgood.length == 10){
                    for(let cards of memoryChild){
                        console.log(memoryChild)
                        cards.remove()
                    }
                    
                }
            }

        }) 
    })
}


//timer
const departMinutes = 5
let temps = departMinutes * 60
const timerElement = document.getElementById("timer")
const gameover = document.getElementById('gameover')

setInterval(() => {
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)

  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = `${minutes}:${secondes}`
  temps = temps <= 0 ? 0 : temps - 1
    if(temps === 0){
        gameover.classList.add('display_ah')
    }
}, 1000)




//button rejouer
let rejouer = document.getElementById("rejouer")

rejouer.addEventListener('click', function(){
    window.location.reload()
})

//game over voulez vous rejouer ?
let rejouer2 = document.getElementById("rejouer2")

rejouer2.addEventListener('click', function(){
    window.location.reload()
})


/*php...*/
function helpRecord (){
    
    window.location.href = "index.php?score" + a;
    console.log(a)
}
