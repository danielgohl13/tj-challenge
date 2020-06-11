module.exports = (sequelize, Sequelize,Juiz, Orgao, Partes) => {
    const Processo = sequelize.define("processo", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        num_processo: {
            type: Sequelize.STRING
        },
        
        peticao:{
            type: Sequelize.STRING
        },


        assunto: {
            type: Sequelize.STRING
        },

        descricao: {
            type: Sequelize.STRING
        },

        //chave estrangeira
        partes_id: {
            type: Sequelize.INTEGER,
            reference: {
                model: 'partes',
                key: 'id'
            }
        },

        orgao_id: {
            type: Sequelize.INTEGER,
            reference: {
                model: 'orgao',
                key: 'id'
            }
        },

        juiz_id: {
            type: Sequelize.INTEGER,
            reference: {
                model: 'juiz',
                key: 'id'
            }
        }

    });

    return Processo;
};