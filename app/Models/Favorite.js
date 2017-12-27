'use strict'

const Model = use('Model')

class Favorite extends Model {
  /**
   * A favorite is for a tweet.
   *
   * @method tweet
   *
   * @return {Object}
   */
  tweet () {
    return this.belongsTo('App/Models/Tweet')
  }
}

module.exports = Favorite
