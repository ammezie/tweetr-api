'use strict'

const Route = use('Route')

// user signup
Route.post('/signup', 'UserController.signup')
// user login
Route.post('/login', 'UserController.login')
// user account
Route.group(() => {
  Route.get('/me', 'UserController.me')
  Route.put('/update_profile', 'UserController.updateProfile')
  Route.put('/change_password', 'UserController.changePassword')
})
  .prefix('account')
  .middleware(['auth:jwt'])

Route.group(() => {
  Route.get('/users_to_follow', 'UserController.usersToFollow')
  Route.post('/follow', 'UserController.follow')
})
  .prefix('users')
  .middleware(['auth:jwt'])

// User profile
Route.get(':username', 'UserController.showProfile')
