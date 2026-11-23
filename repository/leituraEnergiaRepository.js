import conexao from "../config/conexao.js"

export async function cadastrar(leitura) {
    const sql = 'codigo sql aq'

    const [resultado] = await conexao.execute(sql);

    return resultado;
}

export async function listar() {
    const sql = 'select * from x'

    const [resultado] = await conexao.execute(sql);

    return resultado[0];
}

export async function listarDetalhadas() {
    const sql = 'codigo sql aq'

    const [resultado] = await conexao.execute(sql);

    return resultado[0];
}

export async function buscarPorId(id) {
    const sql = 'select * from'

    const [resultado] = await conexao.execute(sql, [id]);

    return resultado;
}

export async function atualizar(id, leitura) {
    const sql = 'UPDATE X SET X = ? WHERE id = ?'

    const [resultado] = await conexao.execute(
        sql,[
            maquina.id,
            data_leitura,
            consumo_kwh,
            horas_operacao,
            id
        ]
    )
    
    return resultado // como ta especificando eu nao coloquei affected Rows
}

export async function deletar(id) {
    const sql = 'DELETE FROM'

    const [resultado] = await conexao.execute(sql,[id])

    return resultado.affectedRows;
}
