const skills = [
	{id: 123, skill: 'HTML', proficient: true},
	{id: 213, skill: 'CSS', proficient: false},
	{id: 321, skill: 'JS', proficient: true}
  ];

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.proficient = false;
    skills.push(skill);
  }

  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1)
  }