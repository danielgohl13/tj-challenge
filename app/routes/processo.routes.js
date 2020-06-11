const { processo } = require("../models/index.js");

module.exports = app => {
    const processo = require("../controllers/processo.controller.js");
  
    var router = require("express").Router();
  
    // Cria novo processo
    router.post("/", processo.create);
  
    // Retorna todos os processos
    router.get("/", processo.findAll);
  
    // Retorna unico processo (por id)
    router.get("/:id", processo.findOne);
  
    // atualiza processo (por id)
    router.put("/:id", processo.update);
  
    // deleta processo (por id)
    router.delete("/:id", processo.delete);
  
    // deleta todos os processos
    router.delete("/", processo.deleteAll);
  
    app.use('/api/processos', router);
  };