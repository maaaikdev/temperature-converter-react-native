import { TouchableOpacity, Text } from "react-native"
import { styles } from "./ButtonConvert.style"

export function ButtonConvert({ unit, onPress }){
    return <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Convert to {unit}</Text>
    </TouchableOpacity>
}