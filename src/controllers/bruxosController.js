import dados from "./..models/dados.js"

const { bruxos } = dados;

const getAllBruxos = (req, res) => {
    res.status(200).json({
        total: bruxos.length,
        bruxos: bruxos

    })
}

const getBruxosById = (req, res) => {
    const id = parseInt(req.params.id)

    const bruxo = bruxos.find(b => b.id === id);

    res.status(200).json({
        total : bruxo.length,
        bruxo: bruxo
    })
}