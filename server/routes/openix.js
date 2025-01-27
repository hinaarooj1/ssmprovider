const express = require('express');
const axios = require('axios');
require('dotenv').config();
// const uuidv4 = require('uuid');
const router = express.Router();

// Create Charge
router.post('/create-charge', async (req, res) => {
    console.log("aja");
    const { name, taxID, email, phone } = req.body;


    // let correlationID = uuidv4();
    const correlationID = `550e8400-e29b-41d4-a716-446655440000-${Date.now()}`
    console.log(' req.body: ', req.body);
    try {
        const response = await axios.post(
            'https://api.openpix.com.br/api/v1/charge?return_existing=false',
            {
                correlationID,
                value: 990, // Amount in cents
                type: 'DYNAMIC',
                comment: 'Pacote Iniciante - 100 Seguidores do Instagram',
                identifier: `order-${Date.now()}`,
                expiresIn: 3600, // 1 hour
                customer: { name, taxID, email, phone },
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `${process.env.OPENPIX_API_KEY}`,
                },
            }
        );
        res.status(200).json(response.data);
    } catch (error) {
        console.log('error: ', error);
        console.log(process.env.OPENPIX_API_KEY);
        res.status(500).json({ error: error.response.data });
    }
});

module.exports = router;
