'use strict'

app.factory('userStorage', function($q) {
	let user = ''
	let id = ''

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