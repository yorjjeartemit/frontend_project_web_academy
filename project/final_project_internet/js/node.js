const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/verify-captcha', async (req, res) => {
  const secretKey = 'fw23fw';
  const captchaResponse = req.body['g-recaptcha-response'];

  try {
    const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
      params: {
        secret: secretKey,
        response: captchaResponse
      }
    });

    if (response.data.success) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to verify CAPTCHA' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});