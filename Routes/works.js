/** @format */

const express = require('express');
const works = express.Router();
const WorksModel = require('../Models/works');

works.get('/works', async (req, res) => {
  try {
    const work = await WorksModel.find();

    res.status(200).send({
      statusCode: 200,
      message: 'Get successfuly',
      work,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: 'Error internal server',
      error: message.error,
    });
  }
});

works.post('/works/create', async (req, res) => {
  const newsWork = new WorksModel({
    img: req.body.img,
    title: req.body.title,
    description: req.body.description,
    source: req.body.source,
  });

  try {
    const work = await newsWork.save();

    res.status(200).send({
      statusCode: 200,
      message: 'POST successfuly',
      work,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: 'Error internal server',
      error: message.error,
    });
  }
});

module.exports = works;
