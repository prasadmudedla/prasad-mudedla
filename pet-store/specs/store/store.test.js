'use strict';

const superagent = require('superagent');
require('superagent-retry')(superagent);
const request = require('supertest');
const testData = require('../../testdata/store.json');
const config = require('../../configuration/config.json');

describe('Store API Test', () => {

	let create_order_request = testData.create_order_request;
	let create_store_with_missing_parameter = testData.create_store_with_missing_parameter;

	test('Create a Order with valid data should result 200', async () => {
		const response = await request(config.baseUrl)
			.post('store/order')
			.set('Content-Type', 'application/json')
			.send(create_order_request)
			.retry(3)
		await expect(response.statusCode).toBe(200);
	});

	test('Create a Order with missing data should result 200', async () => {
		const response = await request(config.baseUrl)
			.post('store/order')
			.set('Content-Type', 'application/json')
			.send(create_store_with_missing_parameter)
			.retry(3)
		await expect(response.statusCode).toBe(200);
	});

	test('Create a Order with empty data should result 200', async () => {
		const response = await request(config.baseUrl)
			.post('store/order')
			.set('Content-Type', 'application/json')
			.send({})
			.retry(3)
		await expect(response.statusCode).toBe(200);
	});

	test('Fetch order from store by id should result 200', async () => {
		const response = await request(config.baseUrl)
			.get('store/order/' + create_order_request.id)
			.retry(3)
		await expect(response.statusCode).toBe(200);
	});

	test('Fetch order from store by non-existing id should result 404', async () => {
		const response = await request(config.baseUrl)
			.get('store/order/3456789')
			.retry(3)
		await expect(response.statusCode).toBe(404);
	});

	test('Fetch order from store by invalid id should result 400', async () => {
		const response = await request(config.baseUrl)
			.get('store/order/xyz')
			.retry(3)
		await expect(response.statusCode).toBe(400);
	});

	test('Delete order from store by id should result 200', async () => {
		const response = await request(config.baseUrl)
			.get('store/order/' + create_order_request.id)
			.retry(3)
		await expect(response.statusCode).toBe(200);
	});

	test('Delete order from store by non-existing id should result 404', async () => {
		const response = await request(config.baseUrl)
			.get('store/order/3456789')
			.retry(3)
		await expect(response.statusCode).toBe(404);
	});

	test('Delete order from store by invalid id should result 400', async () => {
		const response = await request(config.baseUrl)
			.get('store/order/xyz')
			.retry(3)
		await expect(response.statusCode).toBe(400);
	});

})

