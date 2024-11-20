import { View, TextInput, Text } from "react-native"
import { styles } from "./Input.style"
import { useState } from "react"

export function Input({ defaultValue, onChange, unit }){    

    return (
        <View style={styles.root}>
            <TextInput 
                style={styles.input}
                maxLength={4}
                placeholder="Type tour temperature"
                defaultValue={defaultValue.toString()}
                onChangeText={(text) => {
                    onChange(text)
                }}
            />
            <Text style={styles.unit}>{unit}</Text>
        </View>
    )
}