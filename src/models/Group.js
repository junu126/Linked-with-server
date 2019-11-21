module.exports = (sequelize, DataTypes) => {
    const Group = sequelize.define('Group', {
        creator: {
            field: 'creator',
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        title: {
            field: 'title',
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        description: {
            field: 'description',
            type : DataTypes.STRING(500),
            allowNull: false,
        },
        detailInfo: {
            field: 'detailInfo',
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        allMembers: {
            field: 'allMembers',
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            field: 'price',
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        buyStartDate: {
            field: 'buyStartDate',
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        buyEndDate: {
            field: 'buyEndDate',
            type: DataTypes.DATE,
            allowNull: false,
        },
        profileImg: {
            field: 'profileImg',
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        joinedUser: {
            field: 'joinedUser',
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        roomStatus: {
            field: 'roomStatus',
            type: DataTypes.ENUM('recruiting', 'payment', 'paymentComplete'),
            allowNull: false,
        }
    }, {
        timestamps: false,
    });

    return Group;
}