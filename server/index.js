const app = require('./app.js');
const connection = require('./db/index.js');
const port = 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
