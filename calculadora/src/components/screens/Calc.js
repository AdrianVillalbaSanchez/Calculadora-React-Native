import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

class Calc extends React.Component {

    handleInput(text) {
        this.setState({
            text: text
        })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "red" }}>
                <TextInput
                    onChangeText={this.handleInput.bind(this)} // qué hacer cuando cambia el textinput
                    value={"360"} // valor por defecto
                    style={styles.input} />
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