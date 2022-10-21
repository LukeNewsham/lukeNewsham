const express = require('express');
require('dotenv').config();

//Set up express server
const app = express();
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});

//Run index file in public
app.use(express.static('public'));