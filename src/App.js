import './index.css'
// import fundo from "./assets/images/arte_menu_Wukong_novo.png";


function Home() {
  return (
    <div className="container-home">

    <div className='container-h1'>
          <h1 className='titulo-home'>WUKONG</h1>
          <h1 className='tituo-home2'>o despertar</h1> 
    </div>

        <div className='botao-home'>

        <button className='jogar-buttom' type="jogar"> 
          <img className='jogar-bottao' src="./" />
        </button>
{/* 
        <button type="novo-jogo"> 
          <img src="/src/assets/imagens/1713991542711.png" />
        </button>

        <button type="opicoes"> 
          <img src="/src/assets/imagens/1713991542711.png" />
        </button> */}
 
       
        </div>

    </div>
  );
}

export default Home;
