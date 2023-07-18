const { google } = require("googleapis");
const { YoutubeModel } = require("./model/Youtube.model");

require("dotenv").config();

const key = process.env.YOUTUBE_KEY;
const key1 = process.env.YOUTUBE_KEY_1;
const turn =1;
const value = key;
const youtube = google.youtube({ version: "v3"});

const fetch_from_youtube = async () => {
  try {
    let data = await youtube.search.list({
      key:value,
      part: ["snippet"],
      q: "dogs",
      type: "video",
      publishedAfter: "2023-01-01T00:00:00Z",
    });
    data = data.data.items.map((el) => {
      const details = el.snippet;
      return {
        title: details?.title,
        description: details?.description,
        thumbnails:
          details?.thumbnails?.default?.url || details?.thumbnails?.medium?.url,
        publishedAt: details?.publishedAt,
      };
    });
    console.log("data pushed");
    console.log(data);
    await YoutubeModel.insertMany(data);
  } catch (error) {
    if (error.code == "429") {
      // handle key switch
      if(turn==1){
        value=key1;
        turn = 2;
      }else {
        value = key;
        turn = 1;
      }
    }
    console.error({ error_api: error.message });
  }
};

module.exports = fetch_from_youtube;
