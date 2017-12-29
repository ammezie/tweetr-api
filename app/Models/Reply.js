'use strict'

const Model = use('Model')

class Reply extends Model {
  /**
   * A reply is to a tweet.
   *
   * @method tweet
   *
   * @return {Object}
   */
  tweet () {
    return this.belongsTo('App/Models/Tweet')
  }

  /**
   * A reply is made by a user.
   *
   * @method user
   *
   * @return {Object}
   */
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Reply
