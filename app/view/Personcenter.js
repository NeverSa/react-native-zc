import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class Home extends React.Component {

    render() {
        return (
            <View style={styles.container}>
              <Text>我的</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        width: 120,
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4398ff',
    }
});