import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as LocalAuthentication from 'expo-local-authentication'

export default function Login() {

    function log() {
        LocalAuthentication.authenticateAsync({
            promptMessage: "Acesso",
            cancelLabel: "Cancelar",
            disableDeviceFallback: false,
            fallbackLabel: "Senha padrão"
        }).then((res) => console.log(res))
    }

    return (
        <View style={styles.menu}>
            <TouchableOpacity style={styles.logBtn} onPress={() => log()}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    menu: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logBtn: {
        backgroundColor: 'orange',
    },
})