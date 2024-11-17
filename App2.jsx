import { useState } from 'react'


import DisplayPlayers from './DisplayPlayers'
import './App.css'

import './imgs/game-logo.png'
import './imgs/ex.png'
import './imgs/ou.png'


function App() {
  const [mudar11, setMudar11] = useState("./src/imgs/ex.png");
  const [mudar12, setMudar12] = useState("./src/imgs/ex.png");
  const [mudar13, setMudar13] = useState("./src/imgs/ex.png");
  const [mudar21, setMudar21] = useState("./src/imgs/ex.png");
  const [mudar22, setMudar22] = useState("./src/imgs/ex.png");
  const [mudar23, setMudar23] = useState("./src/imgs/ex.png");
  const [mudar31, setMudar31] = useState("./src/imgs/ex.png");
  const [mudar32, setMudar32] = useState("./src/imgs/ex.png");
  const [mudar33, setMudar33] = useState("./src/imgs/ex.png");
  const x = "./src/imgs/ex.png";
  const o = "./src/imgs/ou.png";

 // criar funcao para dizer qual botao foi clicado
function handleClick(id){
    if(mudar11 == x)
      setMudar11(o)
    else
    setMudar11(x)
  }

  
  return (
  <div>

    <h2>Este é o jogo de Fitxe Fatxe</h2>
    <div className="mainBox">
  
   <DisplayPlayers />
   <div className="btnEscolha" >
    <span onClick={() => handleClick('oneone')} className='esclhas'><img src={mudar11} alt="padrao" /></span>
    <span onClick={() => handleClick('onetwo')} className='esclhas'><img src={mudar12} alt="padrao" /></span>
    <span onClick={() => handleClick('onethree')} className='esclhas' ><img src={mudar13} alt="padrao" /></span>
    <span onClick={() => handleClick('twone')} className='esclhas'><img src={mudar21} alt="padrao" /></span>
    <span onClick={() => handleClick('twotwo')} className='esclhas' ><img src={mudar22} alt="padrao" /></span>
    <span onClick={() => handleClick('twothree')} className='esclhas' ><img src={mudar23} alt="padrao" /></span>
    <span onClick={() => handleClick('threeone')} className='esclhas'><img src={mudar31} alt="padrao" /></span>
    <span onClick={() => handleClick('threetwo')} className='esclhas'><img src={mudar32} alt="padrao" /></span>
    <span onClick={() => handleClick('threethree')} className='esclhas'><img src={mudar33} alt="padrao" /></span>
    </div>
   
   
  
   </div>  
   </div>
  );
}

export default App
