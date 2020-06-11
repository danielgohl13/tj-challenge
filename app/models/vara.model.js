module.exports = (sequelize, Sequelize, Endereco) => {
    const Vara = sequelize.define("vara", {
        id: {
            type: Sequelize.INTEGER
        },

        address_id: {
            type: Endereco.id
        }
    });

    return Vara;
};