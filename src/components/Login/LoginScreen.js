import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import * as LocalAuthentication from 'expo-local-authentication'

export default function Login() {

    function theresIsBiometricAuth() {
        biometrics = LocalAuthentication.isEnrolledAsync()
        if (biometrics) {
            log()
        } else {
            Alert.alert(
                "Não foi encontrado nenhuma biometrica cadastrada",
                "Faça login utilizando sua senha padrão",
                "Voltar"
            )
        }
    }

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
            <TouchableOpacity style={styles.logBtn} onPress={() => theresIsBiometricAuth()}>
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