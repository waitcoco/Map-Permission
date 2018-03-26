const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.response.body = 'Hello World';
};

app.use(main);
app.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');