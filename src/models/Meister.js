module.exports = (sequelize, DataTypes) => {
    const meister = sequelize.define('meister', {
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

    return meister;
}