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
        // solo aceptar la introducción de estos. Están fuera del state ya que no van
        // a cambiar. CLASS LEVEL VARIABLE. Se puede poner en el state. Es como una constante.
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

                <View style={{ flex: 1, flexDirection: "column" }}>
                    {this.validKeys.map((key, i) => {
                        if (i % 2 == 0) {
                            return;
                        }
                        return (
                            <View style={styles.row}>
                                <View style={styles.button}></View>
                            </View>
                        );
                    })}
                </View>
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
    },

    button: { flex: 1, borderWidth: 1 },

    row: {
        flex: 1,
        flexDirection: 'row'
    }
})

export default Calc;