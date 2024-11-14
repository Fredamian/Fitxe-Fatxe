import './WIN.css'
function WIN(props){
    console.log("win props = "+props.ganhou)
    const vari = props.ganhou;



    function TentarNov(){
        setMudar("");
        ganhar = false;
        console('entrou aqui')
    }

    if(vari == 1){
        return(
            <div className="gameOver">
                <h1 className='bg-amber-700'>Game Over!  <br/></h1>
                 <p>Fitch Fatch <br/></p>
                
                 <p>{props.ganhou}  <br/></p>
                 <button onClick={TentarNov}>Jogar Novamente</button>
            </div>
    )
}else{
    return(
        <div  className="gameOver">
            <h1 className='bg-amber-700'>Game Over!  <br/></h1>
                 <p>Fitch Fatch <br/></p>
                 <p>{props.ganhou}  <br/></p>
                 <button >Jogar Novamente</button>
            </div>
        )
    }
}
export default WIN;