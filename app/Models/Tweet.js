'use strict'

const Model = use('Model')

class Tweet extends Model {
  /**
   * A tweet belong to a user.
   *
   * @method user
   *
   * @return {Object}
   */
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Tweet
