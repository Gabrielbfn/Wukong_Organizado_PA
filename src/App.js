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

        <button className='jogar-butom'>
        <img  class="imagem_botao_jogar" src='https://cdn.discordapp.com/attachments/1240374436071473224/1250554098671943764/jogar.png?ex=666b5cc3&is=666a0b43&hm=11b9faf2682fae72c8b532304652710869ee76f7ab45ac0d934e1b669996b551&' />
        </button>
          {/* <button className='jogar-butom'>
            <img src='..src/assets/images/1713991542711.webp' />
          </button>

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
