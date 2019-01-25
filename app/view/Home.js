import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native';

export default class Home extends React.Component {

    render() {
        return (
            <View style={styles.container}>
              <Text>首页</Text>
              <Button
                title="Go to Details"
                onPress={() => this.props.navigation.push('Personcenter')}
                />
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