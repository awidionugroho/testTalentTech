const User = require("../models/User");
const { userSchema } = require("../validations/userValidation");

class UserRepository {
  async getAll() {
    return User.findAll();
  }

  async getById(id) {
    return User.findByPk(id);
  }

  async create(user) {
    return User.create(user);
  }

  async update(id, userData) {
    const user = await User.findByPk(id);
    if (user) {
      return await user.update(userData);
    }
    return null;
  }

  async delete(id) {
    const user = await User.findByPk(id);
    if (user) {
      return await user.destroy();
    }
    return null;
  }
}

module.exports = new UserRepository();
