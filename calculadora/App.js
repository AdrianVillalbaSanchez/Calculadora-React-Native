import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculadora from './src/components/screens/'

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Hola </Text>
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