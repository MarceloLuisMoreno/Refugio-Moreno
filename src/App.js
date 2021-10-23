import ItemListContainer from "./components/Containers/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavBar />
				<ItemListContainer greeting="Bienvenidos a Refugio - Tienda Deco" />
			</header>
		</div>
	);
}

export default App;
