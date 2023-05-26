import React, { useEffect, useState } from "react"
import { Text, TextInput, View, Alert, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList, StyleSheet } from "react-native"
import { tableCreate, create, remove } from "../../services/Student"

import db from "../../services/SQLiteDataBase"

export default function AverageStudents() {
    const [nameStudent, setNameStudent] = useState('')
    const [resultAverage, setResultAverage] = useState(0)
    const [students, setStudents] = useState([])

    useEffect( () => 
        {
            tableCreate()
            getStudents()
        },
    [])

    function callCreate(name, average) {
        create(name, average)
        getStudents()
    }

    function callRemove(id) {
        remove(id)
        getStudents()
    }
      
    function getStudents() {
        try {
            console.log("Consultar lista de estudantes...")
            db.transaction( tx => {
                tx.executeSql("SELECT * FROM students", 
                null,
                (transactionCurrent, resultSet ) => {
                    const students = resultSet.rows
                    console.log(students)
                    setStudents(students)
                },
                (transactionCurrent, error) => console.log(error))
            },
            // Erro em transaction
            (error) => console.log(error),
            () => console.log("success transaction"))
        } catch (ex) {
            console.log("Erro ao consultar lista de estudantes: " + ex)
        }
    }

    function boxMessageAlert(){
        Vibration.vibrate()
        Alert.alert("Atenção", "Preencha todos os campos")
    }

    function validateInput(nameStudent, resultAverage){
        if (nameStudent != null && resultAverage != null){
            callCreate(nameStudent, resultAverage)
        } else {
            boxMessageAlert()
        }
    }

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.viewCalculator}>
            <View>
                <TextInput style={styles.input} 
                    placeholder="Nome do aluno..." 
                    keyboardType="default" 
                    onChangeText={setNameStudent}
                />
                <TextInput style={styles.input}
                    placeholder="Média..." 
                    keyboardType="numeric" 
                    onChangeText={setResultAverage}
                />
                <TouchableOpacity style={styles.addBtn} onPress={() => validateInput(nameStudent, resultAverage)}>
                    <Text style={styles.textButton}>Adicionar</Text>
                </TouchableOpacity>
                <FlatList
                    data={students}
                    renderItem={({item}) => 
                        <View style={{flex: 1, alignItems: "flex-end"}}>
                            <Text>
                                Nome: {item.name} Média: {item.media}
                            </Text>
                            <TouchableOpacity style={styles.removeBtn} onPress={() => callRemove(item.id)}>
                                <Text style={styles.textButton}>Remover</Text>
                            </TouchableOpacity>
                        </View>}
                />
            </View>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    viewCalculator: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    input: {
      borderWidth: 1,
    },
  
    messageAlert: {
      color: 'red'
    },
  
    addBtn: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },

    removeBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        padding: 5,
        borderRadius: 4,
        backgroundColor: 'red',
    },
      
    textButton: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
})

