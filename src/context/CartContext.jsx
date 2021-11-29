import { createContext, useContext } from "react"
import { useState, useEffect } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
	// carList arreglo que guarda los items agregados al carrito
	// controlo si hay algo en el localstorage para inicializar carrito
	const [cartList, setCartList] = useState(() => {
		return localStorage.cartList !== null ? JSON.parse(localStorage.cartList) : []
	})

	useEffect(() => {
		localStorage.setItem("cartList", JSON.stringify(cartList))
	}, [cartList])

	//	Función para adicionar el item a cartList si no está en el carrito
	function addItem(items) {
		const cartListBak = [...cartList]
		const idItem = cartListBak.findIndex((prod) => prod.id === items.item.id)
		if (idItem === -1) {
			//Incorporo el nuevo item al carrito junto a la cantidad
			setCartList([...cartList, { ...items.item, quantity: items.quantity }])
		} else {
			//Controlo si la nueva cantidad sumada a la que ya tenía, no supera la cantidad de stock, para sumar en el item que ya está en el carrito
			cartListBak[idItem].quantity + items.quantity > cartListBak[idItem].stock
				? (cartListBak[idItem].quantity = cartListBak[idItem].stock)
				: (cartListBak[idItem].quantity += items.quantity)
			setCartList(cartListBak)
		}
	}

	// 	Función para sumar la cantidades de items que tiene el carrito
	const itemsCart = () => {
		return cartList.reduce((prev, next) => prev + next.quantity, 0)
	}

	// Funcion para poner a cero el carrito
	const clearCart = () => {
		setCartList([])
	}

	// Funcion para eliminar un item del carrito
	const clearItem = (id) => {
		setCartList(cartList.filter((item) => item.id !== id))
	}

	//Funcion para totalizar el Carrito
	const totalCart = () => {
		return cartList.reduce((total, item) => total + item.quantity * item.price, 0)
	}

	return (
		<CartContext.Provider
			value={{
				cartList,
				addItem,
				itemsCart,
				clearCart,
				totalCart,
				clearItem,
			}}>
			{children}
		</CartContext.Provider>
	)
}

export default CartContextProvider
