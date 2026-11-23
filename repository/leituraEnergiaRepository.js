import conexao from "../config/conexao.js"

export async function cadastrar(leitura) {
    const sql = 'INSERT INTO leituras_energia(maquina_id, data_leitura, consumo_kwh, horas_operacao) VALUES (?, ?, ?, ?)'
    const [resultado] = await conexao.execute(sql,[
        maquina_id,
        data_leitura,
        consumo_kwh,
        horas_operacao,
    ]);
    return resultado;
}

export async function listar() {
    const sql = 'select * from leituras_energia'
    const [resultado] = await conexao.execute(sql);
    return resultado[0];
}

export async function listarDetalhadas() {
    const sql = 'select * from leituras_energia'
    const [resultado] = await conexao.execute(sql);
    return resultado[0];
} // nao sabia fazer essa parte, entao deixei dessa forma mesmo

export async function buscarPorId(id) {
    const sql = 'SELECT * FROM leituras_energia WHERE id = ?'
    const [resultado] = await conexao.execute(sql, [id]);
    return resultado;
}

export async function atualizar(id, leitura) {
    const sql = 'UPDATE leituras_energia SET maquina_id = ?, data_leitura = ?, consumo_kwh = ?, horas_operacao = ? WHERE id = ?'
    const [resultado] = await conexao.execute(
        sql,[
            maquina.id,
            data_leitura,
            consumo_kwh,
            horas_operacao,
            id
        ]
    );
    return resultado.affectedRows; // como ta especificando eu nao coloquei affected Rows
}

export async function deletar(id) {
    const sql = 'DELETE FROM leituras_energia WHERE id = ?'
    const [resultado] = await conexao.execute(sql,[id])
    return resultado.affectedRows;
}
