const express = require('express');
const bodyParser = require('body-parser');
const openPixRoutes = require('./routes/openix');
const rajaRoutes = require('./routes/raja');

const dotnet = require("dotenv");
dotnet.config({ path: ".env" });
const app = express();
const PORT = process.env.PORT || 3000;

let ALLOWED_ORIGINS = [
    "https://fortivault.io",
    "https://www.fortivault.io",
    "https://fortivault.vercel.app",
    "http://localhost:5173",
    "http://localhost:3001",
    "http://localhost:3002",
    "http://localhost:3003",
    "http://127.0.0.1:5503",
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
// Middleware
app.use(bodyParser.json());
app.use('/api/openpix', openPixRoutes);
app.use('/api/raja', rajaRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
