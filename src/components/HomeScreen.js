import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.menuNavi}>
            <Button title="Login" onPress={() => navigation.navigate('LoginScreen')}/>
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
