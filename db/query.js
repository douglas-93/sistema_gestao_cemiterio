import connectionDB from './connection.js'

class Query {
    async find_all() {
        const result = await connectionDB.query(`SELECT * FROM cemiterios`)
        return result.rows;
    }

    async insert_und(Unidade) {
        const unidade = [
            Unidade.unitName,
            Unidade.address,
            Unidade.district,
            Unidade.city,
            Unidade.state,
            Unidade.responsible
        ]
        const sql = `INSERT INTO SGCUNIDADES
                    (
                        UNDCOD,
                        UNDNAME,
                        UNDADDRESS,
                        UNDDISTRICT,
                        UNDCITY,
                        UNDESTATE,
                        UNDRESPONSIBLE
                    ) VALUES ($1,$2,$3,$4,$5,$6,$7);`
        const result = await connectionDB.query(sql, unidade)
        return result
    }
}

export default new Query()