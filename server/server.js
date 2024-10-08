const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const { firstName, lastName, phoneNumber } = req.body;

    // CRM sistemine veri gönderme işlemi burada yapılacak
    // Örneğin, bir CRM API'sine istek yapabilirsiniz

    console.log('Received data:', req.body);
    res.json({ message: 'Başvurunuz başarıyla alındı!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
