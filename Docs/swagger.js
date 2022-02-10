const swaggerAutogen = require('swagger-autogen')();

const outputFile = './Docs/swagger_output.json';
const endpointsFiles = ['./src/index.js'];

swaggerAutogen(outputFile, endpointsFiles);