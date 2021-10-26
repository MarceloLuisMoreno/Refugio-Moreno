import ItemListContainer from "./components/Containers/ItemListContainer";
import NavBar from "./components/NavBar";
import "./styles/styles.css"

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavBar />
				<ItemListContainer greeting="Bienvenidos a REFUGIO - Tienda Deco" />
			</header>
		</div>
	);
}

export default App;
