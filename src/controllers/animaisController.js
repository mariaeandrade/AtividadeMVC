import dados from "./../models/dados.js"

const { animais } = dados;

const getAllanimais = (req, res) => {
    let resultado = animais; 
    res.status(200).json({
        total: animais.length,
        animais: animais

    })
}

const getanimaisById = (req, res) => {
    const id = parseInt(req.params.id)

    const animal = animais.find(b => b.id === id);
    
    if(animal) {
        res.status(200).json({
            success: true,
            message: `Animal ${animal.nome} encontrado`,
            data: animal
        });
    } else {
        res.status(404).json({
            error: "Animal não encontrado",
            message: `Nenhum animal com id ${id} encontrado`,
            codigo: "ANIMAL_NOT_FOUND"
        });
    }
};

export {getAllanimais, getanimaisById}