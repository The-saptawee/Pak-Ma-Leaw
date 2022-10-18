const db = require("../models");
const Vondor = db.vondors;
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
  const vondor = {
    name: req.body.name,
    type: req.body.type,
    amount: req.body.amount,
    date: req.body.date,
    price: req.body.price,
    hr_id: req.body.hr_id,
    published: req.body.published ? req.body.published : false,
  };
  console.log(vondor);
  // Save Tutorial in the database
  Vondor.create(vondor)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Vondor.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { title: { [Op.like]: `%${name}%` } } : null;

  Vondor.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Vondor.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Vondor.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Vondor with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Vondor with id=" + id,
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Vondor.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Vondor was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Vondor with id=${id}. Maybe Vondor was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Vondor with id=" + id,
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

  console.log("delete");
  const id = req.params.id;

  Vondor.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Vondor was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Vondor with id=${id}. Maybe Vondor was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Vondor with id=" + id,
      });
    });
};
