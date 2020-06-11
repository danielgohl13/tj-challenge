const db = require("../models");
const Processo = db.processo;
const Op = db.Sequelize.Op;

// cria e salva novo processo
exports.create = (req, res) => {
    // validação da requisição
    if (!req.body.title) {
        res.status(400).send({
            message: "Conteúdo não pode estar vázio!"
        });
        return;

    }
    
    // Cria um processo
    const processo = {
        num_processo: req.body.num_processo,
        juiz_id: req.body.juiz_id,
        assunto: req.body.assunto,
        descricao: req.body.descricao,
        partes_id: req.body.partes_id,
        orgao_id: req.body.orgao_id,
        peticao: req.body.peticao
    };

    // Salva o processo na base
    Processo.create(processo)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Algum erro ocorreu durante a abertura do processo."
        });
    });
};

// retorna todos os processos
exports.findAll = (req, res) => {
    const num_processo = req.query.num_processo;
    var condition = num_processo ? { num_processo: { [Op.iLike]: `%${num_processo}%` } } : null;

    Processo.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algum erro ocorreu durante a recuperação dos processos."
            });
        });
};

// encontrar processo por id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Processo.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao recuperar o processo de número: " + id
        });
      });
};

// atualiza processo por id na requisição
exports.update = (req, res) => {
    const id = req.params.id;

    Processo.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Processo foi atualizado."
          });
        } else {
          res.send({
            message: `Não foi possível atualizar processo de número:${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao atualizar o processo de número:" + id
        });
      });
};

// deleta um processo com id especifico na requisição
exports.delete = (req, res) => {
    const id = req.params.id;

    Processo.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Processo deletado com sucesso."
          });
        } else {
          res.send({
            message: `Não foi possivel deletar o processo de número:${id}. Talvez não exista`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Não foi possível deletar o processo de número:" + id
        });
      });
};

// deleta todos os processos da base
exports.deleteAll = (req, res) => {
    Processo.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Processos deletados.` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Algo deu errado enquanto você tentava apagar tudo."
          });
        });
};

