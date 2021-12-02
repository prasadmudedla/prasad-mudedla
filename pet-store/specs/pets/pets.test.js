'use strict';

const superagent = require('superagent');
require('superagent-retry')(superagent);
const request = require('supertest');
const testData = require('../../testdata/pets.json');
const config = require('../../configuration/config.json');

describe('Pets API Test', () => {

	/*let pet_status;*/
	let post_request = testData.create_pet_request;
	let put_request = testData.update_pet_request;

	test('Create a Pet', async () => {
		const response = await request(config.baseUrl)
			.post('pet')
			.set('Content-Type', 'application/json')
			.send(post_request)
			.retry(3)
		await expect(response.statusCode).toBe(200);
	});

	test('Update existing Pet', async () => {
		const response = await request(config.baseUrl)
			.put('pet')
			.set('Content-Type', 'application/json')
			.send(put_request)
			.retry(3);
		await expect(response.statusCode).toBe(200);
	});

})

