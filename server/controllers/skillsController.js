const skills = require('../models/skillsModel');

module.exports = {
  addSkills: (req, res) => {
    skills.add((error, results) => {
      if (error) res.status(500).send(error);
      else res.status(200).json(results);
    }, req.body.skill);
  },
  getAll: (req, res) => {
    skills.get((error, results) => {
      if (error) res.status(500).send(error);
      else res.status(200).json(results);
    });
  },
};
