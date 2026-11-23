import conexao from "../config/conexao.js"

export async function cadastrar(maquina) {
    const sql = 'INSERT INTO maquinas(codigo, nome, setor, status) VALUES (?, ?, ?, ?)'
    const [resultado] = await conexao.execute(sql,[
        codigo, nome, setor, status
    ])
    return resultado;
}

export async function listar() {
    const sql = 'select * from maquinas'
    const [resultado] = await conexao.execute(sql)
    return resultado[0];
}

export async function buscarPorId(id) {
    const sql = 'select * from maquinas where id = ?'
    const [resultado] = await conexao.execute(sql,[id])
    return resultado[0];
}

export async function atualizar(id, maquina) {
    const sql = 'UPDATE maquinas SET codigo = ?, nome = ?, setor = ?, status = ? WHERE id = ?'
    const [resultado] = await conexao.execute(sql,[
        codigo, 
        nome, 
        setor,
        status, 
        id
    ]);
    return resultado.affectedRows;
}

export async function deletar(id) {
    const sql = 'DELETE * FROM maquinas WHERE id = ?'
    const [resultado] = await conexao.execute(sql,[id])
    return resultado.affectedRows;
}
