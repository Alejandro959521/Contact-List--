const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {

			Contacts: [],
			id:""


		},
		actions: {

			createContact: async (valor) => {
				const actions = getActions() 
				try {
					const url = "https://playground.4geeks.com/apis/fake/contact/"
					const opt = {
						method: "POST",
						headers: {
							"Content-type": "Application/json"
						},
						body: JSON.stringify(
							valor
						)
					}
					const response = await fetch(url, opt)
					console.log("esto es la respuesta", response)

					if (response.ok) {
						actions.getContact()
						alert("Contacto creado con exito")
						
						return true
					} else alert("Error al crear contacto")
				} catch (error) {
					console.log("hay un error pendejo!!", error);
				}

			},

			getContact: async () => {
				
				try {
					const url = "https://playground.4geeks.com/apis/fake/contact/agenda/alejandro959521"
					const opt = {
						method: "GET",
						headers: {
							"Content-type": "Application/json"
						},

					}
					const response = await fetch(url, opt)

					if (response.ok) {
						const body = await response.json()
						setStore({ Contacts: body })
						console.log("positivo",body)

                               
					} else alert("Error al traer los contactos")
				} catch (error) {
					console.log("hay un error del pendejo get!!", error);
				}
			},

			deleteContact: async () => {
				const actions = getActions()
				const store = getStore()
				try {

					const url = "https://playground.4geeks.com/apis/fake/contact/"
					const opt = {

						method: "DELETE",
						headers: {
							"Content-type": "Application/json"
						}
					}
					const response = await fetch(url+store.id, opt)
					if (response.ok) {

						actions.getContact()

					} else alert("error al eliminar")

				} catch (error) {
					console.log(error)

				}
			},

			putContact: async (valor) => {
                      const store = getStore()
				try {
						const url ="https://playground.4geeks.com/apis/fake/contact/"
                        const opt ={
							method: "PUT",
							headers: {
								"Content-type": "Application/json"
							},
							body: JSON.stringify(
								valor
							)

						}

						const response = await fetch(url+store.id,opt)
						if (response.ok){
							
							alert("contacto actualizado")
						} else alert("error al actualizar contacto")
 
				}
				catch (error){

						console.log(error)


				}



			}
		}
	};
};

export default getState;
