import express from "express"
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World from Aryan!</h1>');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
