// backend/server.js

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/api/ask', async (req, res) => {
  try {
    const responses = await Promise.all(req.body.experts.map(async (expert) => {
      const response = await axios.post('https://api.openai.com/v4/engines/davinci-codex/completions', {
        prompt: `${expert}: ${req.body.question}`,
        max_tokens: 150,
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      });

      return response.data.choices[0].text.trim();
    }));

    res.json(responses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5010, () => console.log('Server is running on port 5000'));

