var flag = true;
var state = [1,0,1,1,0,1,0,1,0];//[0,0,0,0,0,0,0]
var player1 , player2;
var winCount1 =0, winCount2 =0;


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
    if(state[0]==state[1] && state[0]==state[2]){
        if(type){
            winnerDiv.innerHTML = 'Winner X';
            setDisable();
        }
        else{
            winnerDiv.innerHTML = 'Winner O';
        }
    }
    else if(state[3]==state[4] && state[3]==state[5]){
        if(type){
            winnerDiv.innerHTML = 'Winner X';
            setDisable();
        }
        else{
            winnerDiv.innerHTML = 'Winner O';
        }
    }
    else if(state[6]==state[7] && state[6]==state[8]){
        if(type){
            winnerDiv.innerHTML = 'Winner X';
            setDisable();
        }
        else{
            winnerDiv.innerHTML = 'Winner O';
        }
    }
    else if(state[0]==state[3] && state[0]==state[6]){
        if(type){
            winnerDiv.innerHTML = 'Winner X';
            setDisable();
        }
        else{
            winnerDiv.innerHTML = 'Winner O';
        }
    }
    else if(state[1]==state[4] && state[1]==state[7]){
        if(type){
            winnerDiv.innerHTML = 'Winner X';
            setDisable();
        }
        else{
            winnerDiv.innerHTML = 'Winner O';
        }
    }
    else if(state[2]==state[5] && state[2]==state[8]){
        if(type){
            winnerDiv.innerHTML = 'Winner X';
            setDisable();
        }
        else{
            winnerDiv.innerHTML = 'Winner O';
        }
    }
    else if(state[0]==state[4] && state[0]==state[8]){
        if(type){
            winnerDiv.innerHTML = 'Winner X';
            setDisable();
        }
        else{
            winnerDiv.innerHTML = 'Winner O';
        }
    }
    else if(state[2]==state[4] && state[2]==state[6]){
        if(type){
            winnerDiv.innerHTML = 'Winner X';
            setDisable();
        }
        else{
            winnerDiv.innerHTML = 'Winner O';
        }
    }
    else{
        // alert("Draw");
        let temp=0;
        for(let i=0; i<state.length; i++){
            if(state[i]==1 || state[i]==0){
                temp+=1;//temp=temp+1
            }
        }
        if(temp==0){
            winnerDiv.innerHTML = 'Draw';
            setDisable();
        }
        }
    }

function setDisable(){
    for(let i=0; i<state.length; i++){
        if(state[i]==1 || state[i]==0){
            state[i]=null;
    }
   }
}

