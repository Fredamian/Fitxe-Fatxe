import './players.css'

function DisplayPlayers({alternar}){

if(alternar == 0){
return (
    <div  className="displayPlayers"> 
      <div className="div1" ><p>Froyd  </p><img className='simb'  src="./src/imgs/ex.png" alt="" /></div>
      <div className="div2Blur"><p>Jogador 2</p><img className='simb' src="./src/imgs/ou.png" alt="" /></div>
    </div>
)
}
if(alternar == 1){
  return (
    <div  className="displayPlayers"> 
    <div className="div1Blur" ><p>Froyd  </p><img className='simb'  src="./src/imgs/ex.png" alt="" /></div>
    <div className="div2"><p>Jogador 2</p><img className='simb' src="./src/imgs/ou.png" alt="" /></div>
  </div>
  )
  }
}

export default DisplayPlayers;