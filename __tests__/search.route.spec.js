const pokemonRouteSpec = require('../routes/pokemon.route')
const nock = require("nock");
const fixture = require("./fixtures/pokemon-search.response.fixture.json");


/*
    setup 3 min timout for the tests
* */
const timeout = 180 * 1000

describe('testing search route',  ()  => {
    let baseURL = 'https://pokeapi.co/api/v2/pokemon'


    const nockBaseURL  = nock(baseURL)
    const query = '/mew'
    const apiResponse = nockBaseURL.get(query)
        .reply(
            200,
            fixture
        )

    const result = apiResponse.interceptors[0].body
    const body = JSON.parse(result)

    // Happy Path
    test('Should return query', (done) => {
        expect(body.ok).toBeTruthy()
        done()
    }, timeout)


});