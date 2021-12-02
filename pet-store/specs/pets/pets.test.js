'use strict';

const superagent = require('superagent');
require('superagent-retry')(superagent);
const request = require('supertest');
const testData = require('../../testdata/pets.json');
const config = require('../../configuration/config.json');

describe('Pets API Test', () => {

	let post_request = testData.create_pet_request;
	let put_request = testData.update_pet_request;
	let unknown_request = testData.unavaiable_pet_request;

	test('Create a Pet with valid data should result 200', async () => {
		const response = await request(config.baseUrl)
			.post('pet')
			.set('Content-Type', 'application/json')
			.send(post_request)
			.retry(3)
		await expect(response.statusCode).toBe(200);
	});

	test('Update existing Pet with valid data should result 200', async () => {
		const response = await request(config.baseUrl)
			.put('pet')
			.set('Content-Type', 'application/json')
			.send(put_request)
			.retry(3);
		await expect(response.statusCode).toBe(200);
	});

	test('Update non-existing Pet should result 404', async () => {
		const response = await request(config.baseUrl)
			.put('pet')
			.set('Content-Type', 'application/json')
			.send(unknown_request)
			.retry(3);
		await expect(response.statusCode).toBe(404);
	});

	test('Fetch pet with valid id should result 200', async () => {
		const response = await request(config.baseUrl)
			.get('pet/'+ post_request.id)
			.set('Content-Type', 'application/json')
			.retry(3)
		await expect(response.statusCode).toBe(200);
	});

	test('Fetch pet with invalid id should result 400', async () => {
		const response = await request(config.baseUrl)
			.get('pet/test')
			.set('Content-Type', 'application/json')
			.retry(3)
		await expect(response.statusCode).toBe(400);
	});

	test('Fetch pet with non-existing id should result 404', async () => {
		const response = await request(config.baseUrl)
			.get('pet/56789')
			.set('Content-Type', 'application/json')
			.retry(3)
		await expect(response.statusCode).toBe(404);
	});

	test('Update existing Pet with valid id using form data should result 200', async () => {
		const response = await request(config.baseUrl)
			.post('pet/' + post_request.id)
			.set('Content-Type', 'application/json')
			.query({ name: "pet" })
			.query({ status: "available" })
			.retry(3);
		await expect(response.statusCode).toBe(200);
	});

	test('Update existing Pet with invalid id using form data should result 400', async () => {
		const response = await request(config.baseUrl)
			.post('pet/xyz')
			.set('Content-Type', 'application/json')
			.query({ name: "pet" })
			.query({ status: "available" })
			.retry(3);
		await expect(response.statusCode).toBe(400);
	});

	test('Fetch pets by querying with status should result 200', async () => {
		const response = await request(config.baseUrl)
			.get('pet/findByStatus/')
			.query({ status: "available" })
			.set('Content-Type', 'application/json')
			.retry(3)
		await expect(response.statusCode).toBe(200);
	});

	test('Fetch pets by querying with multiple status should result 200 with Empty response', async () => {
		const response = await request(config.baseUrl)
			.get('pet/findByStatus/')
			.query({ status: "available" })
			.query({status: "sold" })
			.set('Content-Type', 'application/json')
			.retry(3)
		await expect(response.statusCode).toBe(200);
		await expect(response.body).toStrictEqual([]);
	});

	test('Fetch pets by querying with wrong status should result 400', async () => {
		const response = await request(config.baseUrl)
			.get('pet/findByStatus/')
			.query({status: "abc" })
			.set('Content-Type', 'application/json')
			.retry(3)
		await expect(response.statusCode).toBe(400);
	});

	test('Fetch pets by querying with valid tags should result 200', async () => {
		const response = await request(config.baseUrl)
			.get('pet/findByTags/')
			.query({ tags: "tag1" })
			.query({tags: "tag2" })
			.set('Content-Type', 'application/json')
			.retry(3)
		await expect(response.statusCode).toBe(200);
	});

	test('Fetch pets by querying with unavailable tags should result 200 with Empty response', async () => {
		const response = await request(config.baseUrl)
			.get('pet/findByTags/')
			.query({ tags: "tagxyz" })
			.query({tags: "tagabc" })
			.set('Content-Type', 'application/json')
			.retry(3)
		await expect(response.statusCode).toBe(200);
		await expect(response.body).toStrictEqual([]);
	});


})

