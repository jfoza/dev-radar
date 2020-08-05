const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express(); 
mongoose.connect('mongodb+srv://oministack:oministack@cluster0-tvs43.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

    //requeste = "o que vem do FrontEnd"
    //response = "como é devolvida a resposta para o FrontEnd"
    //Métodos HTTP = GET(PEGAR), POST(EDITAR), PUT(CRIAR), DELETE(EXCLUIR)
    //Tipos de parâmetros: 
        // Query Parans(90% das vezes no método GET, req.query = Filtros, ordenação, paginação...)
        // Route Parans(quase sempre nos métodos PUT e DELETE, request.params = identificar um recurso na alteração ou remoção) 
        // Body(quase sempre no POST e PUT, request.body=Dados para criação ou alteração de um registro)
        //MongoDB
app.listen(3333);