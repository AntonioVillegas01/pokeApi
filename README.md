# POKE API middleware application

This is a bare-bones example of a POKE API middleware application providing

The entire application is contained within the `index.js` file.

`env` file is where you define the port and the base url of the project

`npm run test` runs a simplistic test of the diferents routes of the app using the jest framework

![Captura de Pantalla 2022-07-19 a la(s) 22 11 36](https://user-images.githubusercontent.com/24302401/179888115-0a9a6f0f-464a-489c-9229-0e96896189d1.png)


## Run the app in dev mode

    npm run start:dev

## Run the app in production mode

    npm run start

# REST API

The REST API Middleware to the example app is described below.

## Get list of Things

### Request

`GET /`

curl --location --request GET 'http://localhost:3000/api/pokemon'

### Response

`GET /`


## Create a new Thing

### Request

`POST /thing/`

    curl -i -H 'Accept: application/json' -d 'name=Foo&status=new' http://localhost:7000/thing

### Response

```json
{
    "ok": true,
    "result": {
        "count": 1154,
        "next": null,
        "previous": null,
        "results": [
            {
                "name": "bulbasaur",
                "url": "https://pokeapi.co/api/v2/pokemon/1/"
            },
            {
                "name": "ivysaur",
                "url": "https://pokeapi.co/api/v2/pokemon/2/"
            },
            {
                "name": "venusaur",
                "url": "https://pokeapi.co/api/v2/pokemon/3/"
            }...
        ]
    }
}
```

## Query By Name

### Request

`GET /search/{pokemonNAme}`

    curl --location --request GET 'http://localhost:3000/api/search/mew'

### Response

```
{
    "ok": true,
    "result": {
        "abilities": [
            {
                "ability": {
                    "name": "synchronize",
                    "url": "https://pokeapi.co/api/v2/ability/28/"
                },
                "is_hidden": false,
                "slot": 1
            }
        ],
        ...
}
```

