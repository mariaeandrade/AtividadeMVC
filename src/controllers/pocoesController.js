import dados from "./..models/dados.js"

const { pocoes } = dados;

const getAllpocoes = (req, res) => {
    res.status(200).json({
        total: pocoes.length,
        pocoes: pocoes

    })
}

const getpocoesById = (req, res) => {
    const id = parseInt(req.params.id)

    const pocao = pocoes.find(b => b.id === id);

    res.status(200).json({
        total : pocao.length,
        pocao: pocao
    })
}