const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Flak-Jacket',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Kunai',
  },
  {
    category_name: 'Ninja-Head-Band',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;