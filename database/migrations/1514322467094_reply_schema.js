'use strict'

const Schema = use('Schema')

class ReplySchema extends Schema {
  up () {
    this.create('replies', table => {
      table.increments()
      table.integer('user_id').unsigned().notNullable()
      table.integer('tweet_id').unsigned().notNullable()
      table.text('reply').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('replies')
  }
}

module.exports = ReplySchema
