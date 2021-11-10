import {createContext, useContext} from "react";
import {useState} from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {
	// carList arreglo que guarda los items agregados al carrito
	const [cartList, setCartList] = useState([]);

	//	Función para adicionar el item a cartList si no está en el carrito
	function addItem(items) {
		//		setCartList([...cartList, items]);
		const cartListBak = [...cartList];
		if (cartListBak.find((prod) => prod.id === items.item.id) !== undefined) {
			//Sumo la cantidad en el item que ya está en el carrito
			cartListBak.find((prod) => prod.id === items.item.id).cantidad += items.cantidad;
			setCartList(cartListBak);
		} else {
			//Incorporo el nuevo item al carrito junto a la cantidad
			setCartList([...cartList, {...items.item, cantidad: items.cantidad}]);
		}
	}

	// 	Función para sumar la cantidades de items que tiene el carrito
	const itemsCarrito = () => {
		return cartList.reduce((prev, next) => prev + next.cantidad, 0);
	};

		// Funcion para poner a cero el carrito
	const clear = () => {
		setCartList([]);
	};

	//Funcion para totalizar el Carrito
    const totalCart = () => {
        let total = 0;
        cartList.forEach((item) => {
            total += item.cantidad * item.precio;
        });
        return total;
    };

	return (
		<CartContext.Provider
			value={{
				cartList,
				addItem,
				itemsCarrito,
				clear,
				totalCart
			}}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
