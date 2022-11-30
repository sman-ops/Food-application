import express from 'express';
import cors from 'cors';
import { sample_foods } from './data';

// Now this app is an express application
const app = express();
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:4200'],
  })
);

app.get('/api/foods', (req, res) => {
  res.send(sample_foods);
});

app.get('/api/foods/search/:searchTerm', (req, res) => {
  const { searchTerm } = req.params;
  const foods = sample_foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  res.send(foods);
});

const port = 4000;
app.listen(port, () => {
  console.log('website served on  http://localhost:' + port);
});
