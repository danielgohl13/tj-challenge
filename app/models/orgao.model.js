module.exports = (sequelize, Sequelize, Endereco) => {
    const Orgao = sequelize.define("orgao", {
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

    return Orgao;
};