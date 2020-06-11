module.exports = (sequelize, Sequelize, Endereco) => {
    const Vara = sequelize.define("vara", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        address_id: {
            type: Sequelize.INTEGER,
            reference: {
                model: 'endereco',
                key: 'id'
            }
        }
    });

    return Vara;
};