const { role } = require("../models");
const db = require("../models");
const Hrs = db.hrs;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const hrs = {
    name: req.body.name,
    password: req.body.password,
    address: req.body.address,
    contact: req.body.contact,
    education: req.body.education,
    email: req.body.email,
    policy: req.body.policy,
    salary: req.body.salary,
    date: req.body.date,
    visit: req.body.visit,
    train: req.body.train,
    role_id: req.body.role_id,
    published: req.body.published ? req.body.published : false,
  };

  Hrs.create(hrs)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the hrs.",
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { title: { [Op.like]: `%${name}%` } } : null;

  Hrs.findAll({ include: [role] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving hrs.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Hrs.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Hrs.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update hrs with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating hrs with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Hrs.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete hrs with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete hrs with id=" + id,
      });
    });
};
