module.exports = (sequelize, Sequelize,Juiz, Orgao, Partes) => {
    const Processo = sequelize.define("processo", {
        id: {
            type: Sequelize.INTEGER
        },

        num_processo: {
            type: Sequelize.STRING
        },
        
        juiz_id: {
            type: Juiz.id
        },

        assunto: {
            type: Sequelize.STRING
        },

        descricao: {
            type: Sequelize.STRING
        },

        partes_id: {
            type: Partes.id
        },

        orgao_id: {
            type: Orgao.id
        },

        peticao:{
            type: Sequelize.STRING
        }
    });

    return Processo;
};