import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculadora from './src/components/screens/Calc'

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <Calculadora />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default App;