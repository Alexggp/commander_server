import express from 'express';
import helmet from 'helmet';

import bussinesRoutes from './services/bussines/routes.js';
import mongodb from './database/database.js';

const PORT = process.env.PORT || 5000;


const app = express();
app.use(helmet());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
});

app.use('/',bussinesRoutes);

app.use('/',(req, res)=>{res.send("hola mundo")});

app.listen(PORT, () => {
  mongodb();
  console.log(`Server starterd at port ${PORT}`);
});

export default app;