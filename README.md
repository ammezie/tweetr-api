# tweetr-api

> API for a Twitter clone built with AdonisJS. The repo for the frontend is available at [https://github.com/ammezie/tweetr-app](https://github.com/ammezie/tweetr-app)

## Getting Started

Clone the project repository by running the command below if you use SSH

```
git clone git@github.com:ammezie/tweetr-api.git
```

If you use https, use this instead

```
git clone https://github.com/ammezie/tweetr-api.git
```

## Setup

Run the command below to install dependencies

```
npm install
```


### Environment variables

Duplicate `.env.example` and rename it `.env`


### Migrations

Setup your database and enter the following in `.env`

```
DB_CONNECTION=mysql
DB_HOST=localhost
DB_DATABASE=tweetr
DB_USER=root
DB_PASSWORD=
```

Run the following command to run migration.

```
adonis migration:run
```

Finally, start the application:

```
adonis serve --dev
```

and visit [http://127.0.0.1:3333](http://127.0.0.1:3333) to see the application in action.
