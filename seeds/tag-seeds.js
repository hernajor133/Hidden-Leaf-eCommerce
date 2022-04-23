const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Regular Kunai',
  },
  {
    tag_name: 'Chakra Infused Kunai',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'ninja pop culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;