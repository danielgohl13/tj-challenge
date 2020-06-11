module.exports = (sequelize, Sequelize, Defesa) => {
    const Partes = sequelize.define("partes", {
        id: {
            type: Sequelize.INTEGER
        },

        id_pessoa: {
            type: Pessoa.id
        },
        
        defesa_id: {
            type: Defesa.id
        },

        id_pessoa_reu: {
            type: Pessoa.id
        },

        defesa_reu_id: {
            type: Defesa.id
        }
    });

    return Partes;
};