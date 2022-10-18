const db = require("../models");
const Materails = db.materails;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  console.log("hihi");
  // Create a Tutorial
  const materail = {
    name: req.body.name,
    type: req.body.type,
    date: req.body.date,
    hr_id: req.body.hr_id,
    published: req.body.published ? req.body.published : false,
  };
  console.log(materail);
  // Save Tutorial in the database
  Materails.create(materail)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Materails.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { title: { [Op.like]: `%${name}%` } } : null;

  Materails.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Materails.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Materails.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Materails with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Materails with id=" + id,
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Materails.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Materails was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Materails with id=${id}. Maybe Materails was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Materails with id=" + id,
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

  console.log("delete");
  const id = req.params.id;

  Materails.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Materails was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Materails with id=${id}. Maybe Materails was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Materails with id=" + id,
      });
    });
};
