const { UserService } = require("../services");
const UserRepository = require("../repositories/UserRepositories");

class UserController {
  async getAllUsers(req, res) {
    // const users = UserService.getAllUsers();
    // res.json(users);
    try {
      const users = await UserRepository.getAll();
      res.json(users);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async getUserById(req, res) {
    // const user = UserService.getUserById(req.params.id);
    // if (!user) {
    //   return res.status(404).json({ message: "User not found" });
    // }
    // res.json(user);
    const { id } = req.params;
    try {
      const user = await UserRepository.getById(id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).send("User not found");
      }
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async createUser(req, res) {
    // const { name, email, age, bod } = req.body;
    // const user = UserService.createUser(name, email, age, bod);
    // res.status(201).json({
    //   message: "User created successfully",
    //   user,
    // });
    const { name, email, age, bod } = req.body;
    try {
      const user = await UserRepository.create({ name, email, age, bod });
      res.status(201).json(user);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async updateUser(req, res) {
    // const user = UserService.update(req.params.id, req.body);
    // if (!user) {
    //   return res.status(404).json({ message: "User not found" });
    // }
    // res.json(user);
    const { name, email, age, bod } = req.body;
    try {
      const user = await UserRepository.update(req.params.id, {
        name,
        email,
        age,
        bod,
      });
      if (user) {
        res.json(user);
      } else {
        res.status(404).send("User not found");
      }
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async deleteUser(req, res) {
    // const user = UserService.deleteUser(req.params.id);
    // if (!user) {
    //   return res.status(404).json({ message: "User not found" });
    // }
    // res.json({ message: "User deleted successfully" });

    const { id } = req.params;
    try {
      const user = await UserRepository.delete(id);
      if (user) {
        //res.status(204).send();
        res.json({ message: "User deleted successfully" });
      } else {
        res.status(404).send("User not found");
      }
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

module.exports = new UserController();
