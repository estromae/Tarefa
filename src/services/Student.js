import db from "./SQLiteDataBase"

// executeSql(
//     sqlStatement: string,
//     args?: (number | string | null)[],
//     callback?: SQLStatementCallback,
//     errorCallback?: SQLStatementErrorCallback
//   ): void;

function tableCreate() {
    try {
        console.log("Criar tabela...")
        db.transaction(tx => {
            tx.executeSql("CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, media REAL);", 
            null,
            (transactionCurrent, resultSet) => console.log(resultSet),
            (transactionCurrent, error) => console.log(error) )
        })
    } catch (ex) {
        console.log("Erro ao criar tabela: " + ex)
    }
}

function create(name, media) {
    try {
        console.log("Adicionar registro na tabela...")
        db.transaction( tx => {
            tx.executeSql(
                "INSERT INTO students (name, media) values (?, ?);", 
                [name, media], 
                (transactionCurrent, resultSet) => {
                    console.log(resultSet.rows)
                },
                (transactionCurrent, error) => console.log(error)
            )
        })
    } catch (ex) {
        console.log("Erro ao adicionar aluno: " + ex)
    }
}

function remove(id) {
    try {
        db.transaction(tx => { 
            tx.executeSql("DELETE FROM students WHERE id = ?", 
            [id],
            (transaction, resultSet) => {},
            (transaction, error) => console.log(error)
        )
    })
    } catch (ex) {
        console.log("Erro ao remover registro: " + ex)
        
    }
}

// async function listStudents() {
//     return new Promise((resolve, reject) => {
//         try {
//             console.log("Consultar lista de estudantes...")
//             db.transaction( tx => {
//                 tx.executeSql("SELECT * FROM students", 
//                 null,
//                 (transactionCurrent, resultSet) => {
//                     // console.log(JSON.stringify(resultSet.rows))
//                     // console.log(resultSet.rows)
//                     const { rows } = resultSet
//                     const students = rows._array
//                     resolve(students)
//                 },
//                 (transactionCurrent, error) => reject(error))
//             },
//             //error in transaction
//             (error) => console.log(error),
//             () => console.log("success transaction"))
//         } catch (ex) {
//             console.log("Erro ao consultar lista de estudantes: " + ex)
//         }
//     })
// }

export {tableCreate, create, remove }