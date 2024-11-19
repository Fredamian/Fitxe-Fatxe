import ChangeID from './ChangeID';
import './WIN.css'


function WIN(props){
    const vari = props.ganhou;
    
    if(vari == 1){
        return(
            <div className="gameOver">
                <h1 className='bg-amber-700'>Game Over!  <br/></h1>
                 <p>Fitch Fatch <br/></p>
                 <p>Froyd  <br/></p>
                 <button onClick={props.tentNov}>Jogar Novamente</button>
                 
            </div>
    )
    }
    else if(vari == 0){
    return(
        <div  className="gameOver">
            <h1 className='bg-amber-700'>Game Over!  <br/></h1>
                 <p>Fitch Fatch <br/></p>
                 <p>Jogador 2  <br/></p>
                 <button onClick={props.tentNov}>Jogar Novamente</button>
                
            </div>
        )
    }
}
export default WIN;