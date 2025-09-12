import dados from "./..models/dados.js"

const { animais } = dados;

const getAllanimais = (req, res) => {
    res.status(200).json({
        total: animais.length,
        animais: animais

    })
}

const getanimaisById = (req, res) => {
    const id = parseInt(req.params.id)

    const animal = animais.find(b => b.id === id);

    res.status(200).json({
        total : animal.length,
        animal: animal
    })
}