'use strict'

const Tweet = use('App/Models/Tweet')
const Reply = use('App/Models/Reply')

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

  /**
   * Fetch a tweet
   *
   * @method show
   *
   * @param  {Object} params
   * @param  {Object} response
   *
   * @return {JSON}
   */
  async show ({ params, response }) {
    try {
      const tweet = await Tweet.query()
        .where('id', params.id)
        .with('user')
        .with('replies')
        .with('replies.user')
        .with('favorites')
        .firstOrFail()

      return response.json({
        status: 'success',
        data: tweet
      })
    } catch (error) {
      return response.status(404).json({
        status: 'error',
        message: 'Tweet not found'
      })
    }
  }

  /**
   * Reply a tweet
   *
   * @method reply
   *
   * @param  {Object} request
   * @param  {Object} auth
   * @param  {Object} params
   * @param  {Object} response
   *
   * @return {JSON}
   */
  async reply ({ request, auth, params, response }) {
    // get currently authenticated user
    const user = auth.current.user

    // get tweet with the specified ID
    const tweet = await Tweet.find(params.id)

    // persist to database
    const reply = await Reply.create({
      user_id: user.id,
      tweet_id: tweet.id,
      reply: request.input('reply')
    })

    // fetch user that made the reply
    await reply.load('user')

    return response.json({
      status: 'success',
      message: 'Reply posted!',
      data: reply
    })
  }

  /**
   * Delete a tweet
   *
   * @method destroy
   *
   * @param  {Object} request
   * @param  {Object} auth
   * @param  {Object} params
   * @param  {Object} response
   *
   * @return {NULL}
   */
  async destroy ({ request, auth, params, response }) {
    // get currently authenticated user
    const user = auth.current.user

    // get tweet with the specified ID
    const tweet = await Tweet.query()
      .where('user_id', user.id)
      .where('id', params.id)
      .firstOrFail()

    await tweet.delete()

    return response.json({
      status: 'success',
      message: 'Tweet deleted!',
      data: null
    })
  }
}

module.exports = TweetController
