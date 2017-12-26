'use strict'

const Schema = use('Schema')

class TweetSchema extends Schema {
  up () {
    this.create('tweets', table => {
      table.increments()
      table.integer('user_id').unsigned().notNullable()
      table.text('tweet').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tweets')
  }
}

module.exports = TweetSchema
