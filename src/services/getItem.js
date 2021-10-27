const producto = {
		id: 1,
		tipo: "plantas",
		nombre: "Aloe",
		descripcion: "Aloe Vera en maceta de cemento con plato",
		imagen: "/assets/productos/planta-1.jpg",
		precio: 1050,
		stock: 10,
	}

export const getItem  = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(producto);
	}, 2000);
});

