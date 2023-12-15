/** @format */

const mongoose = require('mongoose');

const WorksSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, strict: true }
);

module.exports = mongoose.model('WorksModel', WorksSchema, 'works');
