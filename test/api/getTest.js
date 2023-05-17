const request = require('supertest')

describe('Get Request Test', () => {
    it('Find Pets by list', async () => {
        const response = request('https://reqres.in/')
        .get('api/unknown/2')
        console.log((await response).status)
        console.log((await response).body)
    });
})