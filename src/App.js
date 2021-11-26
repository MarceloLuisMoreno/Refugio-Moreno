import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// BrowserRouter as Router, me permite poner Router en lugar de BrowerRouter
import ItemListContainer from "./components/Containers/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/Containers/ItemDetailContainer";
import HomeContainer from "./components/Containers/HomeContainer";
import Cart from "./components/Cart";
import "./styles/styles.css";
import CartContextProvider from "./context/CartContext";

function App() {

	return (
		<>
			<div className="appHeader p-5">
				<CartContextProvider>
					<Router>
						<NavBar />
						<Switch>
							<Route exact path="/">
								<HomeContainer greeting="Bienvenidos a REFUGIO - Tienda Deco" />
							</Route>
							<Route
								exact
								path="/category/:categoryId"
								component={ItemListContainer}
							/>
							<Route exact path="/item/:itemId" component={ItemDetailContainer} />
							<Route exact path="/cart" component={Cart} />
						</Switch>
					</Router>
				</CartContextProvider>
			</div>
		</>
	);
}

export default App;
