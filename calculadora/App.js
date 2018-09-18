import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calc } from './src/components/screens/'

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Calc />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
