module.exports = (sequelize, Sequelize, Endereco) => {
    const Orgao = sequelize.define("orgao", {
        id: {
            type: Sequelize.INTEGER
        },

        address_id: {
            type: Endereco.id
        }
    });

    return Orgao;
};