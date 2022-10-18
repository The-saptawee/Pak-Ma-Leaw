const db = require("../models");
const Packing = db.packing;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.transport) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  console.log("hihi");
  // Create a Tutorial
  const packings = {
    transport: req.body.transport,
    arrived: req.body.arrived,
    published: req.body.published ? req.body.published : false,
  };
  console.log(packings);
  // Save Tutorial in the database
  Packing.create(packings)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Packing.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { title: { [Op.like]: `%${name}%` } } : null;

  Packing.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Packing.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Packing.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Packing with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Packing with id=" + id,
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Packing.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Packing was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Packing with id=${id}. Maybe Packing was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Packing with id=" + id,
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

  console.log("delete");
  const id = req.params.id;

  Packing.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Packing was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Packing with id=${id}. Maybe Packing was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Packing with id=" + id,
      });
    });
};
