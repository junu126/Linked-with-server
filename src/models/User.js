module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            field: 'email',
            type: DataTypes.STRING(500),
            allowNull: false,
            unique: true,
        },
        nickname: {
            field: 'nickname',
            type: DataTypes.STRING(500),
            allowNull: false,
            unique: true,
        },
        password: {
            field: 'password',
            type : DataTypes.STRING(500),
            allowNull: false,
        },
        phoneNum: {
            field: 'phoneNum',
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        star: {
            field: 'star',
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    }, {
        timestamps: false,
    });

    User.createUser = (data) => User.create(data);

    User.checkUser = (email) => User.findOne({
        where: {
            email: email,
        }
    });

    User.patchStar = (email, star) => User.update(
        {
            star: star
        },
        {
            where: {
                email: email,
            }
        }
    )

    return User;
}