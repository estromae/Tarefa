import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.menuNavi}>
            <Button title="Login" onPress={() => navigation.navigate('LoginScreen')}/>
            <Button title="Média alunos" onPress={() => navigation.navigate('AverageStudentsScreen')}/>
            <Button title="Test" onPress={() => navigation.navigate('TestScreen')}/>
        </View>
    )    
}

const styles = StyleSheet.create({
    menuNavi: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
