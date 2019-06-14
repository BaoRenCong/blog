// // node 后端服务器

// const userApi = require('./api/userApi');
// const fs = require('fs');
// const path = require('path');
// const bodyParser = require('body-parser');
// const express = require('express');
// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

// // 后端api路由
// app.use('/api/user', userApi);

// // 监听端口
// app.listen(3000);
// console.log('success listen at port:3000......');



const routerApi = require('./router');
const bodyParser = require('body-parser'); // post 数据是需要
const express = require('express');
const app = express();

app.use(bodyParser.json());

// 后端api路由
app.use('/api', routerApi);

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');