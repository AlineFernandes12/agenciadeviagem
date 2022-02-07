import logo from './logo.svg';
import './style.css'
import agencia from './imagens/agencia.jpg'
import curitiba from './imagens/curitiba.jpg'
import malas from './imagens/malas.jpg'
import riodejaneiro from './imagens/riodejaneiro.jpg'
import salvador from './imagens/salvador.jpg' 

function App() {
  return (
    <div>
      <nav> 
		<ul>
			<li><a href="#"> Home</a></li>
			<li><a href="#"> Destino</a></li>
			<li><a href="#"> Promoção</a></li>
			<li><a href="#"> Contato</a></li>
		</ul>
	</nav>
	<div className="home">
		
		<h1> Agencia de viagem: Vamos viajar!</h1>
	
		<h2>
		Encontre Passagens aéreas com desconto!
		</h2>
		<p>
		Compre Passagens economicas sem precisar de milhas
		</p>
		<div className="input">
			<input type="text" id="fname" name="fname" placeholder="Origem"/>
		<input type="text" id="fname" name="fname" placeholder="Destino"/>
		<input type="date" id="fname" name="fname" placeholder="Ida"/>
		<input type="date" id="fname" name="fname" placeholder="Volta"/>
		<div className="button" ><button>Buscar</button></div>
		<img alt= "malas"src={malas}/>
		</div>
		
	</div>
	<div className="container">
		<div><h2 className="titulo_promocao"> Promoções</h2></div>
		
		<div className="cards">
			<div className= "card">
				<img alt= "salvador"src={salvador}/>
				<p>Promoção passagem de Salvador/São Paulo </p>
				<p>R$####</p>
				<div className="button" ><button>Comprar</button></div>
			</div>
			<div className="card">
				<img alt="curitiba"src={curitiba}/>
				<p>Promoção passagem de Curitiba/Alagoas </p>
				<p>R$####</p>
				<div className="button" ><button>Comprar</button></div>
			</div>
			<div className="card">
				<img alt="riodejaneiro"src={riodejaneiro}/>
				<p>Promoção passagem do Rio de Janeiro/Minas Gerais </p>
				<p>R$####</p>
				<div className="button" ><button>Comprar</button></div>
			</div>
		</div>
		
		

	
	</div>
	<footer> 
		<div>
			<h3>
				Fale conosco
			</h3>
			<p>Central: (71)3233-1125</p>
			<p>E-mail: contato@vamosviajar.com.br</p>
		</div>
		<div>
			<h3>Redes sociais</h3>
			<p>Facebook: vamos viajar</p>
		
			<p>Instagram: @vamosviajar</p>
		</div>
		
	</footer>

    </div>
  );
}

export default App;
