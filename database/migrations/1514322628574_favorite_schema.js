'use strict'

const Schema = use('Schema')

class FavoriteSchema extends Schema {
  up () {
    this.create('favorites', table => {
      table.increments()
      table.integer('user_id').unsigned().notNullable()
      table.integer('tweet_id').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('favorites')
  }
}

module.exports = FavoriteSchema
