import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert, TextInput } from "react-native";
import * as LocalAuthentication from 'expo-local-authentication'

export default function Login() {
    const [isBiometricSupported, setIsBiometricSupported] = useState();

    useEffect( () =>
        async function handleBiometricAuth() {
            const types = await LocalAuthentication.supportedAuthenticationTypesAsync().then((res) => console.log(res))
            const compatible = await LocalAuthentication.hasHardwareAsync().then((res) => console.log(res))
            setIsBiometricSupported(compatible)
        }, []
    )

    function theresIsBiometricAuth() {
        biometrics = LocalAuthentication.isEnrolledAsync().then((res) => console.log(res))
        biometrics ? log() : 
                            Alert.alert(
                                "Não foi encontrado nenhuma biometria cadastrada",
                                "Faça login utilizando sua senha padrão",
                                "Voltar"
                            )
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