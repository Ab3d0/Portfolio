const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/contact', (req, res) =>{
    const {name, email, phone, subject, message } = req.body;
    console.log("Formulaire reçu", {name, email, phone, subject, message});
    res.status(200).json({ message: 'Formulaire soumis avec succés'});

});

app.listen(port, () => {
    console.log(`API en écoute sur http://localhost:${port}`);
});