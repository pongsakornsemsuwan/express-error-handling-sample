const express = require('express');
const voucherController = require('./controllers/voucherController');
const errorHandler = require('./utils/errorHandler');
const app = express();

app.get('/voucher', voucherController);
app.use(errorHandler);
app.listen(3000, ()=>{
  console.log('listening @ 3000');
});