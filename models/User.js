module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        min: 8
      }
    },
  });
  User.associate = function(models) {
    User.hasMany(models.Posts, {
      onDelete: "cascade"
    });
  };
  return User;
};
