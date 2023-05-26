import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export default function Test() {
    const [count, setCount] = useState(0);
    const [varAny, setVarAny] = useState('');

    useEffect( () =>
        function test() {
            setVarAny('sla')
            setCount(count + 1)
        }, []
    )

    return (
        <View>
            <Text>{count}</Text>
            <TextInput style={styles.input} onChangeText={setVarAny} placeholder="insert text"></TextInput>
            <Text>{varAny}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: '10%',
    },
})