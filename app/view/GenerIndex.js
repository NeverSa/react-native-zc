import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

export default class Home extends React.Component {

    render() {
        return (
            <View style={styles.container}>
               <Text>12月4日</Text>
               <Text>星期三</Text>
               <Text>图片</Text>
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