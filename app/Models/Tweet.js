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

  /**
   * A tweet can have as many replies as possible.
   *
   * @method replies
   *
   * @return {Object}
   */
  replies () {
    return this.hasMany('App/Models/Reply')
  }
}

module.exports = Tweet
