import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
export default class AccountInfo extends React.Component {
    static navigationOptions = {
        tabBarVisible:false,
        headerStyle: {
            borderBottomWidth: 0,
            elevation: 0,
        },
        headerTitle: (
            <Text style={{ flex: 1, textAlign: 'center' }}>消息中心</Text>
          ),
          headerRight: (<View>
              <Text style={{textAlign: 'center',fontSize:14,color:"#333",paddingRight:16 }}>全部已读</Text>
          </View>)
      };
      constructor(props) {
        super(props);
        this.state = {
          error: false,
          page: 1,
          refreshing: false,
          data: [{name:"555",id:1}],
          totalPage:1
        };
  
        this.requestData();
    };
    
      handleRefresh2 = () => {
        this.setState({
          page: (this.state.page+1),
          refreshing: true
        }, () => {
          this.requestData();
        });
      };
      requestData = () => {
          this.setState({
            data: [...this.state.data,{id:new Date().getTime().toString().substring(13 - 5),name:"asdada"}],
            error: false,
            refreshing: false,
            totalPage:2
          });
      }
    render() {
        return (
            <ScrollableTabView
            onChangeTab={(obj) => {
                console.log('index:' + obj.i);
                }
            }
           
            tabBarUnderlineStyle={{backgroundColor:'#F23030',height:2,width:"20%",left:"16%"}}
            tabBarBackgroundColor='#fff'
            tabBarActiveTextColor='#333'
            tabBarInactiveTextColor='#999'
            tabBarTextStyle={{fontSize: 14}}
            >
                <FlatList
                 ItemSeparatorComponent={
                    ()=>(
                          <View style={{backgroundColor:'#EBEBEB',height:8}}>
                
                         </View>
                    )
                }
                 tabLabel='系统消息'
                 keyExtractor={item => item.id}
                 data={this.state.data}
                 onEndReached={this.handleRefresh2}
                 onEndReachedThreshold={0.5}
                    renderItem={({item}) => <View>{item.name}</View>}
                    />
               
                <Text tabLabel='个人消息'>
                
                </Text>
            </ScrollableTabView>
        );
    };
    
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