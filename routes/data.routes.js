const express = require("express");
const { YoutubeModel } = require("../module/Youtube.model");
const data = express.Router();

data.get("/", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 10;
    const data = await YoutubeModel.find()
      .sort({ publishedAt: -1 })
      .skip((page - 1) * limit);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ error_data: error.message });
  }
});

data.get("/search", async (req, res) => {
  try {
    const search = req.query.search;
    const data = await YoutubeModel.find({
      $or: [
        { title: { $regex: search, $option: "i" } },
        { description: { $regex: search, $option: "i" } },
      ],
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({error_search:error.message})
  }
});

module.exports = data;
