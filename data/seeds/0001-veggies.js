
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('veggies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('veggies').insert(generateData());
    });
};

function generateData(){
 return [
    {
    name: 'broccoli',
    color: 'green',
    tasty: true
  },
  {
    name: 'asparagus',
    color: 'green',
    tasty: true
  },
  {
    name: 'eggplant',
    color: 'purple',
    tasty: false
  },
  {
    name: 'yellow peppers',
    color: 'yellow',
    tasty: true
  },
]
}