'use strict'

const Schema = use('Schema')

class FollowersSchema extends Schema {
  up () {
    this.create('followers', table => {
      table.increments()
      table.integer('user_id').unsigned().notNullable()
      table.integer('follower_id').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('followers')
  }
}

module.exports = FollowersSchema
