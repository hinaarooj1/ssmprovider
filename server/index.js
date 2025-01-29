const express = require('express');
const bodyParser = require('body-parser');
const openPixRoutes = require('./routes/openix');
const rajaRoutes = require('./routes/raja');

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
app.use("/", (req, res) => {
    res.send("Hello World")
})
// Middleware
app.use(bodyParser.json());
app.use('/api/openpix', openPixRoutes);
app.use('/api/raja', rajaRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
