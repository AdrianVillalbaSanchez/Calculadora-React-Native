import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

class Calc extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "red" }}>
                <TextInput style={{
                    styles.input
                }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'rgb(41, 41, 41)',
        height: 150,
        color: 'rgb(255,255,255)',
        fontSize: 48,
        textAlign: 'right'
    }
})

export default Calc;