# Mocha API Test Starter

A simple starter pack for API testing with **Mocha**, **Chai**, and **Supertest**.

This project includes the following dev dependencies:
```bash
npm install mocha chai supertest --save-dev
npm install dotenv
```

⚠️ **Note:** If you encounter an error when running tests, try downgrading `chai` to version `4.2.0`.

## Getting Started

1. **Clone this repository**
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run all test cases** in the `test/` folder:
   ```bash
   npm test
   ```

---

## Configuration Steps

1. **Set your API base URL**  
   Create a `.env` file in the root directory and add your API base URL:
   ```env
   BASE_URL=https://your-api-url.com
   ```

2. **Add your test files**  
   Place your test files inside the `test/` directory. You can organize them by feature or endpoint, for example:
   ```
   test/
   ├── users/
   │   └── getUsers.test.js
   ├── posts/
   │   └── addPost.test.js
   ```

3. **Exclude the example file**  
   By default, this template includes `example.test.js`. Rename or delete it so it won’t be executed during test runs.

4. **Run your tests**  
   Run all test cases in the `test/` folder with:
   ```bash
   npm test
   ```
   Or customize your test command in `package.json` to target specific files or folders:
   ```json
   "scripts": {
     "test": "mocha",
    "example": "npx mocha test/example.test.js",
    "example-folder": "npx mocha test/api-example/*js"
   }
   ```


## Example Test Case

The `example.test.js` file demonstrates:

1. **HTTP methods**: 
   - GET
   - POST
   - PUT
   - DELETE

2. **Assertions with Chai (Expect)**:
   - to.equal()
   - to.be.an(data type)
   - to.have.property()
   - to.contain()
   - to.deep.contain()
   - to.be.within()
   - to.include()
   - to.have.lengthOf()
   - to.be.true

Use this file as a reference when writing your own test cases.