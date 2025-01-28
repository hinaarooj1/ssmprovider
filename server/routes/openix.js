const express = require('express');
const axios = require('axios');
require('dotenv').config();
// const uuidv4 = require('uuid');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { parse } = require('dotenv');

// Create Charge
router.post('/create-charge', async (req, res) => {

    const { username, name, taxID, email, phone, selectedPackage, extra, link, selected, price } = req.body;
    console.log('link: ', link);

    const correlationID = uuidv4();
    let totalPrice = price * 100
    let comment;

    if (selected === "followers") {
        comment = `${selectedPackage.title} - ${selectedPackage.followers} Seguidores do Instagram`;
    } else if (selected === "comments") {
        comment = `${selectedPackage.title} - ${selectedPackage.comments} Comentários no Instagram`;
    } else if (selected === "likes") {
        comment = `${selectedPackage.title} - ${selectedPackage.likes} Curtidas no Instagram`;
    } else if (selected === "reel views" || selected === "story views") {
        comment = `${selectedPackage.title} - ${selectedPackage.likes} Visualizações no Instagram`;
    } else {
        comment = `${selectedPackage.title} - Pacote do Instagram`;
    }
    if (extra && extra.description) {
        comment += ` + ${extra.description}`;
    }
    console.log(comment);
    console.log('totalPrice: ', totalPrice);
    // let correlationID = uuidv4();  
    try {
        const response = await axios.post(
            'https://api.openpix.com.br/api/v1/charge?return_existing=false',
            {
                correlationID,
                value: totalPrice, // Amount in cents
                type: 'DYNAMIC',
                comment,
                identifier: `order-${Date.now()}`,
                expiresIn: 3600, // 1 hour
                customer: { name, taxID, email, phone },
                additionalInfo: [
                    { key: 'InstagramProfile', value: username },
                    { key: 'video Link ', value: link },

                ],

            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `${process.env.OPENPIX_API_KEY}`,
                },
            }
        );
        res.status(200).json({ resposne: response.data, success: true });
    } catch (error) {
        console.log('error: ', error);
        res.status(500).json({ error: error.response.data, success: false });
    }
});

module.exports = router;
