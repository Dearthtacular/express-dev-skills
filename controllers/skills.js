const SkillModel = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create
};

function index(req, res) {
    res.render('skills/index', {skills: SkillModel.getAll()});
}

function show(req, res) {
    res.render('skills/show', {skill: SkillModel.getOne(req.params.id)});
}

function newSkill(req, res){
    res.render('skills/new')
}

function create(req, res) {
    SkillModel.create(req.body)
    res.redirect('skills')
}