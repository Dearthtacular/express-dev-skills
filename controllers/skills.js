const SkillModel = require('../models/skill')

module.exports = {
    index,
    show
};

function index(req, res) {
    res.render('skills/index', {skills: SkillModel.getAll()});
}

function show(req, res) {
    res.render('skills/show', {skill: SkillModel.getOne(req.params.id)});
}
