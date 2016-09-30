'use strict'

app.factory('userStorage', function() {
	let user, id

	let setUser = data => user = data

	let getUser = () => user

	let setID = data => id = data

	let getID = () => id

	return {
		setUser,
		getUser,
		setID,
		getID
	} 
})