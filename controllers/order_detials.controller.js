const db = require("../models");
const Order_detials = db.order_detials;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.date) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  console.log("hihi");
  // Create a Tutorial
  const order_detial = {
    date: req.body.date,
    amount: req.body.amount,
    order_id: req.body.order_id,
    product_id:req.body.product_id,
    published: req.body.published ? req.body.published : false,
  };
  console.log(order_detial);
  // Save Tutorial in the database
  Order_detials.create(order_detial)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Order_detials.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { title: { [Op.like]: `%${name}%` } } : null;

  Order_detials.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Order_detials.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Order_detials.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Order_detials with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Order_detials with id=" + id,
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Order_detials.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Order_detials was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Order_detials with id=${id}. Maybe Order_detials was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Order_detials with id=" + id,
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

  console.log("delete");
  const id = req.params.id;

  Order_detials.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Order_detials was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Order_detials with id=${id}. Maybe Order_detials was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Order_detials with id=" + id,
      });
    });
};
