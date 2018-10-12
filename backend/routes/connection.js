const express = require("express");

const app = express();

const Connection = require("../models/Connection");
const User = require("../models/User");

app.get("/connected/:user", async (req, res, next) => {
  let userId = req.params.user;

  try {
    connections = await Connection.find({
      $or: [{ userOne: userId }, { userTwo: userId }]
    })
      .populate("userOne", "name")
      .populate("userTwo", "name");

    connections = connections.map(connection => {
      let user = connection.userTwo;

      if (String(connection.userTwo._id) === userId) {
        user = connection.userOne;
      }
      return {
        connection: connection.connection,
        user: user
      };
    });

    res.status(200).json({
      ok: true,
      connections: connections
    });
  } catch (e) {
    return next(e);
  }
});

app.get("/connection/:user", async (req, res, next) => {
  let userId = req.params.user;

  try {
    let connections = await Connection.find({
      $or: [{ userOne: userId }, { userTwo: userId }]
    })
      .populate("userOne", "name")
      .populate("userTwo", "name");

    connections = connections.map(connection => {
      let user = connection.userTwo;

      if (String(connection.userTwo._id) === userId) {
        user = connection.userOne;
      }

      return user;
    });

    let users = await User.find({ _id: { $ne: userId } });

    if (connections.length !== 0) {
      users = connections.map(user => {
        let res = users.filter(u => {
          return u._id.toString() !== user._id.toString();
        });
        users = res;
        return res;
      })[connections.length - 1];
    }

    return res.status(200).json({
      ok: true,
      users: users
    });
  } catch (e) {
    return next(e);
  }
});

app.post("/connection", async (req, res, next) => {
  let body = req.body;

  if (body.userOne == body.userTwo) {
    let error = new Error(
      "Not allowed that UserOne and UserTwo are the same value"
    );
    error.status = 409;
    return next(error);
  }

  let connection = new Connection({
    connection: body.connection,
    userOne: body.userOne,
    userTwo: body.userTwo
  });

  try {
    connectionDB = await connection.save();

    res.status(200).json({
      ok: true,
      users: connectionDB
    });
  } catch (e) {
    return next(e);
  }
});

module.exports = app;
