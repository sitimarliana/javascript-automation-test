const request = require('supertest')
const baseUrl = require('../../env')

describe('Get Request Test', () => {
    it('Find Pets by list', async () => {
        const response = request(baseUrl())
        .get('/api/unknown/2')
        console.log((await response).status)
        console.log((await response).body)
    });
})