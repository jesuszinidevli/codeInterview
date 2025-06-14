import express from 'express';

const app = express();

const PORT = 3000;
const DB_CONNECTION_STRING = 'mongodb://localhost:27017/mydb';

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Connected to database: ${DB_CONNECTION_STRING}`);
});
