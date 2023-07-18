const express = require("express");
const app = express();

const cors = require("cors");
const connection = require("./db");

const fetch_from_youtube = require("./fetch_new_data");
const data = require("./routes/data.routes");

app.use(cors());
app.use(express.json());

app.use("/", data);

setInterval(() => {
    fetch_from_youtube()
}, 1000*60*2);

app.use((err, req, res,next)=>{
    res.status(500).send("Internal Server Error");
})

app.listen(4500, async (req, res) => {
    try {
        await connection;
        console.log(`server is running at port ${process.env.PORT}`);
    } catch (error) {
        console.log(`server is not running : ${error.message}`);
    }
});
