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
             <View style={{width:"100%",flexDirection:"row",justifyContent:"space-between",paddingTop:5}}>
              <View style={{flexDirection:"row"}}>
               <Text style={{width:65,color:"#333333",fontWeight:"bold",fontSize:17, textAlignVertical: 'center',  }}>1月28</Text>
               <Text style={{fontSize:12,color:"#666666", textAlignVertical: 'center',  }}>星期-</Text>
              </View>
              <View style={styles.toptitle_right}>
               <Text style={{flexDirection:"row"}}>信息</Text>
              </View>
             </View>
             
             <View style={{backgroundColor:"#FA3E45",borderRadius:5,height:175,marginTop:15}}>

             </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft:16,
        paddingRight:16,
    },
    toptitle:{
      flex:1,
      width:"100%",
     justifyContent:"space-between",  
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