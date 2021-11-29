import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// BrowserRouter as Router, me permite poner Router en lugar de BrowerRouter
import ItemListContainer from "./components/Containers/ItemListContainer"
import ItemDetailContainer from "./components/Containers/ItemDetailContainer"
import HomeContainer from "./components/Containers/HomeContainer"
import "./App.css"
import CartContextProvider from "./context/CartContext"
import Cart from "./components/Cart/Cart"
import NavBar from "./components/NavBar/NavBar"

function App() {
	return (
		<>
			<div className="appHeader p-5">
				<CartContextProvider>
					<Router>
						<NavBar />
						<Switch>
							<Route exact path="/nosotros">
								<HomeContainer greeting="Bienvenidos a REFUGIO - Tienda Deco" />
							</Route>
							<Route exact path="/" component={ItemListContainer} />
							<Route exact path="/category/:categoryId" component={ItemListContainer} />
							<Route exact path="/item/:itemId" component={ItemDetailContainer} />
							<Route exact path="/cart" component={Cart} />
						</Switch>
					</Router>
				</CartContextProvider>
			</div>
		</>
	)
}

export default App
