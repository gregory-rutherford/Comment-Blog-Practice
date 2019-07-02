module.exports = function(sequelize, DataTypes) {
  var Posts = sequelize.define("Posts", {
    post: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
  Posts.associate = function(models) {
    Posts.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Posts;
};
