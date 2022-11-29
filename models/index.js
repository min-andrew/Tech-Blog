const User = require('./User');
const Blog = require('./Blogs');
const { BelongsTo } = require('sequelize');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Blog };
