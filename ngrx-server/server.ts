import * as express from 'express';
import { Application } from 'express';
import { login } from './login.route';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/login').post(login);

app.listen(8090, () => {
  console.log('서버 8090 포트 작동중...');
});
