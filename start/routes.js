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
  Route.get('/timeline', 'UserController.timeline')
  Route.get('/users_to_follow', 'UserController.usersToFollow')
  Route.post('/follow', 'UserController.follow')
  Route.delete('/unfollow/:id', 'UserController.unFollow')
})
  .prefix('users')
  .middleware(['auth:jwt'])

Route.post('/tweet', 'TweetController.tweet').middleware(['auth:jwt'])
Route.get('/tweets/:id', 'TweetController.show')
Route.post('/tweets/reply/:id', 'TweetController.reply').middleware([
  'auth:jwt'
])
// Delete tweet
Route.delete('/tweets/destroy/:id', 'TweetController.destroy').middleware([
  'auth:jwt'
])

// tweet reactions
Route.group(() => {
  // favorite tweet
  Route.post('/create', 'FavoriteController.favorite')
  // unfavorite tweet
  Route.delete('/destroy/:id', 'FavoriteController.unFavorite')
})
  .prefix('favorites')
  .middleware(['auth:jwt'])

// User profile
Route.get(':username', 'UserController.showProfile')
