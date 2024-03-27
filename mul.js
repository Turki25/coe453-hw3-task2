// mul.js
const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  try {
    const data = req.body;
    if (!data || !data.X || !data.Y) {
      res.status(400).send('Invalid JSON format or missing X/Y values.');
      return;
    }

    data.Result = parseInt(data.X) * parseInt(data.Y);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
