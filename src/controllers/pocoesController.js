import dados from "./../models/dados.js"


const { pocoes } = dados;

const getAllpocoes = (req, res) => {

    res.status(200).json({
        total: pocoes.length,
        pocoes: pocoes

    })
}

const getpocoesById = (req, res) => {
    const id = parseInt(req.params.id)

    const pocao = pocoes.find(p => p.id === id);

    if (pocao) {
        res.status(200).json({
            success:true,
            message: `Poção ${pocao.nome} encontrada`,
            data: pocao
        });
    } else {
        res.status(404).json({
            error: `Poção não encontrada`,
            message: `Nenhuma poção com id ${id} encontrada`,
            codigo: "POTION_NOT_FOUND"
        });
    }
};

export { getAllpocoes, getpocoesById}