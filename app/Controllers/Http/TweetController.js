'use strict'

const Tweet = use('App/Models/Tweet')

class TweetController {
  /**
   * Post a tweet
   *
   * @method tweet
   *
   * @param  {Object} request
   * @param  {Object} auth
   * @param  {Object} response
   *
   * @return {JSON}
   */
  async tweet ({ request, auth, response }) {
    // get currently authenticated user
    const user = auth.current.user

    // Save tweet to database
    const tweet = await Tweet.create({
      user_id: user.id,
      tweet: request.input('tweet')
    })

    // fetch tweet's relations
    await tweet.loadMany(['user', 'favorites', 'replies'])

    return response.json({
      status: 'success',
      message: 'Tweet posted!',
      data: tweet
    })
  }
}

module.exports = TweetController
