'use strict'

const Route = use('Route')

// user signup
Route.post('/signup', 'UserController.signup')
// user login
Route.post('/login', 'UserController.login')
