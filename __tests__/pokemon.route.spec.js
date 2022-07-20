const pokemonRouteSpec = require('../routes/pokemon.route')
const nock = require('nock')
const fixture = require('./fixtures/pokemon.response.fixture.json')



/*
    setup 3 min timout for the tests
* */
const timeout = 180 * 1000

describe('testing pokemon route',  ()  => {

    let baseURL = 'https://pokeapi.co/api/v2/pokemon'


    const nockBaseURL  = nock(baseURL)
    let endpoint = '/'
    const apiResponse = nockBaseURL.get(endpoint)
        .reply(
            200,
            fixture
        )


  const result = apiResponse.interceptors[0].body
    const body = JSON.parse(result)


    // Happy Path
    test('Should return all Pokemons', (done) => {
        expect(body.ok).toBeTruthy()
        expect(body.result.results.length).toBeGreaterThan(0)
        done()
    }, timeout)
});