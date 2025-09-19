import dados from "./../models/dados.js"


const { bruxos } = dados;

const getAllBruxos = (req, res) => {
    let resultado = bruxos;

    res.status(200).json({
        total: bruxos.length,
        bruxos: bruxos

    })
}

const getBruxosById = (req, res) => {
    const id = parseInt(req.params.id)

    const bruxo = bruxos.find(b => b.id === id);
    
    if (bruxo) {
        res.status(200).json({
            success:true,
            message: `Bruxo ${bruxo.nome} encontrado`,
            data: bruxo
        })
    } else {
        res.status(404).json({
            success:false,
            message:`Nenhum bruxo com id ${id} encontrado`,
            codigo: "WIZARD_NOT_FOUND"
        })
    }
};

export { getAllBruxos, getBruxosById};