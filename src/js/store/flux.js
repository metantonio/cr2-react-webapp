const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {//aquí almacenamos todos los estados gloables
			//demo es un estado global
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
				{
					title: "THIRD",
					background: "white",
					initial: "white"
				}
			],
			persona: { nombre: "Adrinana" },
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				//setStore({ demo: demo });

				//lo correcto es:
				setStore({ ...store, demo: demo })
			},
			setPersona: () => {
				let store = getStore() //obtenemos los estados contenidos en store
				let actions = getActions()
				let alexis = actions.loadSomeData()
				let antonio = { nombre: "Antonio", edad: 34 }
				setStore({ ...store, persona: antonio }) //spread, mantener los elementos viejos y cambiar el que nos interesa.				
			},
			setFavorites: () => {
				let store = getStore() //obtenemos los estados contenidos en store
				let actions = getActions()
				//let antonio = { nombre: "Antonio", edad: 34 }
				//setStore({ ...store, persona: antonio }) //spread, mantener los elementos viejos y cambiar el que nos interesa.				
			},
			fetchGenerico: async (path, metodo = "GET", data = null) => {
				const BASE_URL = process.env.BASE_URL
				let url = BASE_URL + path

				let obj = {
					method: metodo,
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + localStorage.getItem("token")
					},
					body: JSON.stringify(data)
				}

				if (metodo == "GET") {
					obj = {
						method: metodo,
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + localStorage.getItem("token")
						}
					}
				}

				let response = await fetch(url, obj)

				//response.ok == True significa que la respuesta tiene status 200-299
				if (response.ok) {
					let responseObj = await response.json() //transformación de la promesa en json a objeto en javascript
					return responseObj

				} else {
					let responseObj = await response.json()
					alert("Hubo un error en la petición: " + response.statusText)
					return responseObj
				}
			},
			fetchPromise: async (path, metodo = "GET", data = null) => {
				const BASE_URL = process.env.BASE_URL
				let url = BASE_URL + path

				let obj = {
					method: metodo,
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + localStorage.getItem("token")
					},
					body: JSON.stringify(data)
				}

				if (metodo == "GET") {
					obj = {
						method: metodo,
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + localStorage.getItem("token")
						}
					}
				}

				let response = await fetch(url, obj)
				return response

			}
		}
	};
};

export default getState;