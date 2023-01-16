const flSkills = require('../models/flSkillsModel');

module.exports = {
  addSkills: (req, res) => {
    flSkills.add((error, results) => {
      if (error) res.status(500).send(error);
      else res.status(200).json(results);
    },req.body.fl_id, req.body.skill_id);
  },
  getAll: (req, res) => {
    flSkills.get((error, results) => {
      if (error) res.status(500).send(error);
      else res.status(200).json(results);
    });
  }, 
  getSkills : (req, res) => {
    flSkills.getAll((error, results) => {
      if (error) res.status(500).send(error);
      else res.status(200).json(results);
    },req.params.id);
  }, 
};
