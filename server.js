const express = require('express');
const app = express();
const PORT = 3000;
let alunos = [
    {id:1, nome: 'jonh'},
    {id:2, nome: 'japa'}
]

app.use(express.json());


app.get('/', (req, res) => {
    res.send("Minha aplicação Node JS com Express esta funcionando")
});

app.get('/alunos', (req, res) => {
    res.json(alunos);
});

app.post('/alunos', (req, res) => {
    novoAluno = {id: (alunos.length +1), nome: req.body.nome};
    alunos.push(novoAluno);
    res.status(201).json(novoAluno);
});

app.delete('/alunos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    alunos = alunos.filter(aluno => aluno.id !== id);
    res.status(204).json(id);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando http://localhost:${PORT}`)
});
