var flag = true;
var state = [1,0,1,1,0,1,0,1,0];//[0,0,0,0,0,0,0]
var player1 , player2;
var winCount1 =0, winCount2 =0;
var reset;
var score1 = 1;
var score2 = 1;



var winnerDiv = document.querySelector('.iswinner');
document.querySelector('table').addEventListener('click', (e)=>{
    // console.log(e.target);
    if(e.target.id){
        setValue(e.target);
    }
});
  
  function MainUi(){
    player1 = document.querySelector('#player-1').value;
    player2 = document.querySelector('#player-2').value;
    if (player1 && player2) 
    {

    document.querySelector('.players').style.display='none';
    document.querySelector('.two').style.display='block';

    document.querySelector('#name1').innerText = player1 + " : ";
    document.querySelector('#name2').innerText = player2 + " : ";

   
}
else {
    alert("Plesase Fill the above inputs!");
}

}
function setValue(curDiv)
{
    id = curDiv.id;
    if(flag){
        if(state[id]==0 || state[id]==1)//state[id]==0
        {
            document.getElementById(id).innerHTML = "X";
            state[id] = 'X';
            flag = !flag;
            checkWinner(!flag);
        }
    
    }
    else{
        if(state[id]==0 || state[id]==1)
        {
            document.getElementById(id).innerHTML = "O";
            state[id]='O';
            flag = !flag;
            checkWinner(!flag);
            
        }
      
    }
   
}

function checkWinner(type){
    let winnerCon = [

        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]


    ];
    for (let i = 0; i < winnerCon.length; i++) {
        let [a, b, c] = winnerCon[i];


        if (state[a] == state[b] && state[a] == state[c]) {

            if (type) {
                winnerDiv.innerHTML ='<h3>Winner X</h3>';
                document.getElementById('player1-score').innerHTML = score1++;
                setDisable();
                break;
            }
            else {
                winnerDiv.innerHTML = '<h3>Winner O</h3>';
                document.getElementById('player2-score').innerHTML = score2++;
                setDisable();
                break;

            }
        }

    }

    
        let temp = 0;
        for (let i = 0; i < state.length; i++) {
            if (state[i] == 1 || state[i] == 0 || state[i] == null) {
    
                temp += 1;
            }
        }
        // console.log(temp);
        if (temp == 0) {
            // alert('Draw');
            winnerDiv.innerHTML = '<h3>Try Again!</h3>' + '<h2>Draw</h2>'
        }
    }
    
function setDisable(){
    for(let i=0; i<state.length; i++){
        if(state[i]==1 || state[i]==0){
            state[i]=null;
    }
   }
}
function Reset(){
  

        // const choice = confirm("are sure you want to reset");
        if (true) {
            flag = true;
            state = [1, 0, 1, 1, 0, 1, 0, 1, 0];
            let allIndex = document.querySelectorAll('td');
            for (let i = 0; i < allIndex.length; i++) {
                allIndex[i].innerHTML = "";
                winnerDiv.innerHTML = "";
    
            }
        }
    }

    function Restart(){

    
    // document.getElementById('clear')('click', e = () => {
        const choice1= confirm('Are you sure ?');
        if(choice1){
            location.reload()
     
        }
    }
