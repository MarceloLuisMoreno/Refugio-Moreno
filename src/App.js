import ItemListContainer from "./components/Containers/ItemListContainer";
import NavBar from "./components/NavBar";
import "./styles/styles.css"
import ItemDetailContainer from './components/Containers/ItemDetailContainer';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavBar />
				<ItemListContainer greeting="Bienvenidos a REFUGIO - Tienda Deco" />
				<ItemDetailContainer />
			</header>
		</div>
	);
}

export default App;
