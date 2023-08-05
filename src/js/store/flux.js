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
			persona: { nombre: "Adrinana" }
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
			}
		}
	};
};

export default getState;