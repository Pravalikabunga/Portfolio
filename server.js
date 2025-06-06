const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Do NOT add any app.get() route here!

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});