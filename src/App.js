import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ItemListContainer from "./components/Containers/ItemListContainer"
import ItemDetailContainer from "./components/Containers/ItemDetailContainer"
import HomeContainer from "./components/Containers/HomeContainer"
import Cart from "./components/Cart/Cart"
import NavBar from "./components/NavBar/NavBar"
import CartContextProvider from "./context/CartContext"
import UsContainer from './components/Containers/UsContainer';
import ContactContainer from './components/Containers/ContactContainer';
import GalleryContainer from './components/Containers/GalleryContainer';
import "./App.css"


function App() {
	return (
		<>
			<div className="appHeader p-5">
				<CartContextProvider>
					<Router>
						<NavBar />
						<Switch>
							<Route exact path="/home">
								<HomeContainer greeting="Bienvenidos a REFUGIO - Tienda Deco" />
							</Route>
							<Route exact path="/" component={ItemListContainer} />
							<Route exact path="/category/:categoryId" component={ItemListContainer} />
							<Route exact path="/item/:itemId" component={ItemDetailContainer} />
							<Route exact path="/cart" component={Cart} />
							<Route exact path="/us" component={UsContainer} />
							<Route exact path="/contact" component={ContactContainer} />
							<Route exact path="/gallery" component={GalleryContainer} />
						</Switch>
					</Router>
				</CartContextProvider>
			</div>
		</>
	)
}

export default App
