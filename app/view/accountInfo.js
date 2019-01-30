import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class AccountInfo extends React.Component {
    static navigationOptions = {
        tabBarVisible:false,
        headerTitle: (
            <Text style={{ flex: 1, textAlign: 'center' }}>账户信息</Text>
          ),
          headerRight: <View/>
      };
    render() {
        return (
            <View style={styles.container}>
              <Text>账户信息</Text>
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