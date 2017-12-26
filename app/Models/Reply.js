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
}

module.exports = Reply
