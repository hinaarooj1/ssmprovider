const express = require('express');
const bodyParser = require('body-parser');
const openPixRoutes = require('./routes/openix');
const rajaRoutes = require('./routes/raja');
const axios = require('axios');
const dotnet = require("dotenv");
dotnet.config({ path: ".env" });
const app = express();
const PORT = process.env.PORT || 3000;

let ALLOWED_ORIGINS = [

    "http://localhost:5173",
    "https://vocemaisengajado.com.br",
    "https://www.vocemaisengajado.com.br",
];
app.use((req, res, next) => {
    let origin = req.headers.origin;
    let theOrigin =
        ALLOWED_ORIGINS.indexOf(origin) >= 0 ? origin : ALLOWED_ORIGINS[0];
    res.header("Access-Control-Allow-Origin", theOrigin);
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );

    res.header("Access-Control-Allow-Credentials", true);

    res.header(
        "Access-Control-Allow-Methods",
        "POST, GET, PUT, PATCH,DELETE, OPTIONS"
    );
    next();
});
app.get('/api/instagram-info', async (req, res) => {
    try {
        const { username } = req.query;

        if (!username) {
            return res.status(400).json({ error: "Username is required" });
        }

        const response = await axios.get('https://instagram-scraper-api2.p.rapidapi.com/v1/info', {
            params: { username_or_id_or_url: username },
            headers: {
                'x-rapidapi-key': process.env.RAPID_API_KEY, // Store API key in .env
                'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com',
            },
        });

        res.status(200).json({ response: response.data, success: true });
    } catch (error) {
        console.error("Error fetching Instagram data:", error.message);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});
app.get('/api/proxy-image', async (req, res) => {
    try {
        const { imageUrl } = req.query;
        if (!imageUrl) {
            return res.status(400).json({ error: "Image URL is required" });
        }

        // Fetch the image from Instagram's CDN
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

        // Set the correct content type for the image
        res.setHeader('Content-Type', response.headers['content-type']);
        res.send(response.data);
    } catch (error) {
        console.error("Error fetching image:", error.message);
        res.status(500).json({ error: "Failed to fetch image" });
    }
});

app.use("/test", (req, res) => {
    res.send("Working")
})
// Middleware
app.use(bodyParser.json());
app.use('/api/openpix', openPixRoutes);
app.use('/api/raja', rajaRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
