module.exports = (sequelize, DataTypes) => {
    const joinUser = sequelize.define('joinUser', {
        joinDate: {
            field: 'joinDate',
            type : DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        isRaisePrice: {
            field: 'isRaisePrice',
            type: DataTypes.TINYINT(1),
            allowNull: false,
        },
    }, {
        timestamps: false,
    });

    return joinUser;
}