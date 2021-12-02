'use strict';

const superagent = require('superagent');
require('superagent-retry')(superagent);
// const request = require('supertest');
// const testData = require('../../testdata/pets.json');
// const config = require('../../configuration/config.json');

describe('Pets API Test', () => {

	test('Create a new Pet', async () => {
		// const response = await request(config.baseUrl).get('pet')
		// 	.query
		// 	.set('Content-Type', 'application/json')
		// 	.retry(3);
		// await expect(response.statusCode).toBe(200);
	});

})
