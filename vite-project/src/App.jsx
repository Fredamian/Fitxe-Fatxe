import { useState } from 'react'
import DisplayPlayers from './DisplayPlayers'
import './App.css'
import './imgs/game-logo.png'
import './imgs/ex.png'
import './imgs/ou.png'

import WIN from './WIN'

//contador que dira qual a vez de cada um no momento
let cont = 0;
//variaveis para armazenar cada jogada
var fatxeO = Array(4).fill();
var fatxeX = Array(4).fill();

let ganhar = false;


var ganhou = 0;
function App() {
  const x = "./src/imgs/ex.png";
  const o = "./src/imgs/ou.png";
  const [mudar, setMudar] = useState(Array(9).fill(""));

  //variaveis com todas as combinacoes
  const fitxeX = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  const fitxeO = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

 // criar funcao para dizer qual botao foi clicado
function handleClick(index) {
  
  const newMudar = [...mudar];  // deixar array com a primeira versao
 
  if(preenchido(mudar)){//verficar se newMudar ja se encontra cheio
      //jog1 = 0 =  X      jog2 = 1 = O
    if (newMudar[index] == "" && cont == 0) {
      newMudar[index] = x;  // se a pos estiver vazia, coloca X
      cont = 1;  
    }
    if (newMudar[index] == "" && cont == 1) {
      newMudar[index] = o;  
      cont = 0;
    }
    receber(newMudar,mudar)
    setMudar(newMudar);  // final 

    // Uso para verificar a vitória do jogador X
    if (vencedor(fatxeX, fitxeX)) {
      console.log("Jogador X venceu!");
      ganhou = 1;
      ganhar = true;
    }   
    // Uso para verificar a vitória do jogador O
    if (vencedor(fatxeO, fitxeO)) {
      console.log("Jogador O venceu!");
      ganhou =0;
      ganhar = true;
    }
  }
  else{
    window.alert(1)
  }
}

function vencedor(fatxe, fitxe) {
  return fitxe.some(combination => 
    combination.every(position => fatxe.includes(position))
  );
}

// ao mudar uma posicao no array mudar, saber qual posicao foi mudado
// e entao colocar esta posicao dentro de um array
function receber (array1, array2){
    for(let i = 0 ; i <= 8 ; i++){
      
      if(array1[i] == array2[i]){
      } 
      
      else{ 
        if(array1[i] == x){
          //implementar aqui para mudar o valor do prox elemento que sera mudado
          //let mud1 = i+1
          console.log("era um X na posicao "+i)
          fatxeX.push(i)
        }
      
        else{
          //let mud2 = i+1
          console.log("era um O na posicao "+i);
          fatxeO.push(i)
        }
      }
    }
}

//funcao para ver se array mudar ja esta preenchido
function preenchido(array){
  for(let i = 0; i<=8; i++){
    if(array[i] == ""){
      return true
    }
  }
}

function tentNov (){
  location.reload(true);
}

  return (
  <div>
    <h2>FITXE FATXE</h2>
    <div className="mainBox">
   {ganhar ==false && <DisplayPlayers alternar={cont}/>}
   {ganhar==false && <div className="btnEscolha"> 
    <span onClick={() => handleClick(0)} className='esclhas'><img src={mudar[0] || ""}  /></span>
    <span onClick={() => handleClick(1)} className='esclhas'><img src={mudar[1] || ""}  /></span>
    <span onClick={() => handleClick(2)} className='esclhas' ><img src={mudar[2] || ""}  /></span>
    <span onClick={() => handleClick(3)} className='esclhas'><img src={mudar[3]|| ""}  /></span>
    <span onClick={() => handleClick(4)} className='esclhas' ><img src={mudar[4]|| ""}  /></span>
    <span onClick={() => handleClick(5)} className='esclhas' ><img src={mudar[5]|| ""}  /></span>
    <span onClick={() => handleClick(6)} className='esclhas'><img src={mudar[6]|| ""}  /></span>
    <span onClick={() => handleClick(7)} className='esclhas'><img src={mudar[7] || ""}  /></span>
    <span onClick={() => handleClick(8)} className='esclhas'><img src={mudar[8] || ""}  /></span>
    </div> }
    {ganhar && <WIN ganhou = {ganhou} tentNov = {tentNov} />}
   </div>  
   </div>
  );
}
export default App;