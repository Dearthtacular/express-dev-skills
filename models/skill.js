const skills = [
	{id: 123, skill: 'HTML', proficient: true},
	{id: 213, skill: 'CSS', proficient: false},
	{id: 321, skill: 'JS', proficient: true}
  ];

  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }