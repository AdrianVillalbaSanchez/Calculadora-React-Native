import React from "react";
import { View, StyleSheet, TextInput, SafeAreaView } from "react-native";

class Calc extends React.Component {
    constructor() {
        super()
        this.state = {
            inputText: "" // "no queremos controlar el valor sino mantenerlo"
        };

        //class variable, numeros que se usan
        this.validKeys = [
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
            "+", "-", "/", "*", "=" // son strings ya que el textinput solo acepta strings.
        ]

        // Estos "numeros" y "signos" tenemos que convertirlos a números de verdad, 
        // solo aceptar la introducción de estos.
    }

    handleInput(text) {
        this.setState({
            inputText: text
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TextInput
                    onChangeText={this.handleInput.bind(this)} // qué hacer cuando cambia el textinput
                    value={this.state.inputText} // valor por defecto
                    style={styles.input} />

                <View style={{ flex: 1, backgroundColor: "blue" }} />
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