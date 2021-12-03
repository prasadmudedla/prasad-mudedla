'use strict';

const superagent = require('superagent');
require('superagent-retry')(superagent);
const request = require('supertest');
const testData = require('../../testdata/users.json');
const config = require('../../configuration/config.json');

describe('Users API Test', () => {

	let create_user_request = testData.create_user_request;
	let create_users_with_list = testData.create_users_with_list;
	let update_user_request = testData.update_user_request;

	test('Create a User with valid data should result 200', async () => {
		const response = await request(config.baseUrl)
			.post('user')
			.type('application/json')
			.send(create_user_request)
			.retry(3);
		await expect(response.statusCode).toBe(200);
	});

	test('Create users with list should result 200', async () => {
		const response = await request(config.baseUrl)
			.post('user/createWithList')
			.type('application/json')
			.send(create_users_with_list)
			.retry(3);
		await expect(response.statusCode).toBe(200);
	});

	test('Fetch user by username should result 200', async () => {
		const response = await request(config.baseUrl)
			.get( 'user/' + create_user_request.username )
			.type('application/json')
			.retry(3);
		await expect(response.statusCode).toBe(200);
	});

	test('Fetch user by unavailable username should result 404', async () => {
		const response = await request(config.baseUrl)
			.get('user/123456')
			.type('application/json')
			.retry(3);
		await expect(response.statusCode).toBe(404);
	});

	test('Update existing User with valid data should result 200', async () => {
		const response = await request(config.baseUrl)
			.put( 'user/' + create_user_request.username )
			.type('application/json')
			.send(update_user_request)
			.retry(3);
		await expect(response.statusCode).toBe(200);
	});

	test('Delete User should result 200', async () => {
		const response = await request(config.baseUrl)
			.delete( 'user/' + create_user_request.username )
			.type('application/json')
			.retry(3);
		await expect(response.statusCode).toBe(200);
	});

	test('Delete unavailable username should result 200', async () => {
		const response = await request(config.baseUrl)
			.delete( 'user/' + create_user_request.username )
			.type('application/json')
			.retry(3);
		await expect(response.statusCode).toBe(200);
	});

})

