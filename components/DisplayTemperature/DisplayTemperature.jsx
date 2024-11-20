import { Text } from "react-native";
import { styles } from "./DisplayTemperature.style";


export function DisplayTemperature({ temperature, unit }){
    return (
        <Text style={styles.temperatureTxt}>{temperature} {unit}</Text>
    )
}