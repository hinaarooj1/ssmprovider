const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

// Create Service Order
router.post('/create-order', async (req, res) => {
    const { serviceID, link, quantity } = req.body;
    console.log('req.body: ', req.body);

    try {
        const params = new URLSearchParams();
        params.append('key', process.env.RAJA_API_KEY);
        params.append('action', 'add');
        params.append('service', serviceID);
        params.append('link', link);
        params.append('quantity', quantity);

        const response = await axios.post('https://www.smmraja.com/api/v3', params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        // console.log(response);
        res.status(200).json({ response: response.data, success: true });
    } catch (error) {
        res.status(500).json({ error: error.response.data, success: true });
    }
});

module.exports = router;
