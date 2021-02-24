const express = require("express");
const path = require("path");

const app = express();

app.use("/assets", express.static(path.resolve(__dirname, "public", "assets")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(process.env.PORT || 3060, () => console.log("Server running..."));