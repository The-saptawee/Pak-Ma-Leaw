const db = require("../models");
const Order = db.orders;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.customers_id) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  console.log("hihi");
  // Create a Tutorial
  const order = {
    customers_id: req.body.customers_id,
    order_ditials_id: req.body.order_ditials_id,
    published: req.body.published ? req.body.published : false,

  };
  console.log(order);
  // Save Tutorial in the database
  Order.create(order)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Order.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { title: { [Op.like]: `%${name}%` } } : null;

  Order.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Order.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Order.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Order with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Order with id=" + id,
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Order.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Order was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Order with id=${id}. Maybe Order was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Order with id=" + id,
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

  console.log("delete");
  const id = req.params.id;

  Order.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Order was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Order with id=${id}. Maybe Order was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Order with id=" + id,
      });
    });
};
