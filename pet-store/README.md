# Pet Store Automation Test Suite

In API testing we check the following aspects:
----------------------
- Validation : To ensure correct development against the stated user needs and requirements (like correct environemnt integration and adherence to standards).
- Functional - To check how the API techincally works. We will cover Testing the schema of request & response, response codes, error handling, edge cases, redirections and consistent results (reliability).
- Load Testing - To check if the API can handle large amount of calls.
- Security Testing - To check if the API has defined security requirements including authentication, authoriation (permissions and access controls).
- Usability - To check how easy it is to use the API.
- Documentation - To check the API documentation is clear and easy to refer.


Proposed Test cases for Automation:
----------------------
**Pet Endpoint**
- Update an existing pet
- Create a new pet
- Fetch pets by status
- Fetch pets by tags
- Fetch pet by given id
- Update pet with form data by given id
- Delete a pet by given id
- upload image by given id

**Store Endpoint**
- Fetch the inventory status
- Place a new order
- Fetch the given order by ID
- Delete an newly created order

**User Endpoint**
- Create a User
- Create Users with list
- Log the user into the system
- Log out the current active session
- Fetch user by given username
- Update user by given username
- Delete user by given username


Instructions to run Swagger Petstore - OpenAPI 3.0 locally:
----------------------
- Clone this project (https://github.com/swagger-api/swagger-petstore)
- Follow instructions from the project's readme file


## Running the tests

```bash
git clone git@github.com:prasadmudedla/prasad-mudedla.git
cd prasad-mudedla/pet-store
npm install
npm run test

# Reports will be available in Reports folder.

```
## Linting the Code

```
npm run lint
```

## Vulnerability Check(for Dependencies)

```
npm run vulnerabilityCheck
```

## Built With

* [Jest](https://github.com/facebook/jest) - Runner and Assertions
* [Jest Html Reporter](https://github.com/Hargne/jest-html-reporter) - To Generate HTML reports
* [Supertest](https://github.com/visionmedia/supertest) - The library used for HTTP calls. Super-agent driven library for testing node.js HTTP servers using a fluent API
* [Superagent retry](https://github.com/segmentio/superagent-retry) - To add retry functionlaity to supertest.
Extends the node version of visionmedia/superagent's Request, adds a .retry method to add retrying logic to the request. Calling this will retry the request however many additional times you'd like.
* [Superagent](https://github.com/visionmedia/superagent) - Prerequisite for  superagent retry
* [ES Lint](https://github.com/eslint/eslint) - For Linting purpose. Using airbnb linting for this project.
