const express = require("express");
const { google } = require("googleapis");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

require("dotenv").config();
const key = process.env.YOUTUBE_KEY;

const youtube = google.youtube({ version: "v3", auth: key });
app.get("/", async (req, res) => {
  try {
    let data = await youtube.search.list({
      part: ["snippet"],
      q: "dogs",
      type: 'video',
      order: 'date',
      publishedAfter: "2023-01-01T00:00:00Z",
    });
    data = data.data.items.map((el)=>{
        const details = el.snippet;
        return {
            title:details?.title,
            description:details?.description,
            thumbnails:details?.thumbnails?.default?.url || details?.thumbnails?.medium?.url,
            publishedAt:details?.publishedAt
        }
    })
    await YoutubeModel.insertMany(data);
    res.send(data)
  } catch (error) {
    res.status(400).send({error_api:error.message})
  }
});

app.listen(4500, async (req, res) => {
  console.log(`server is running at port ${process.env.PORT}`);
});
