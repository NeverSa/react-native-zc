/*
 * 导入视图
 */
import React from 'react';
import {
    Image
} from 'react-native';
import GenerIndex from '../view/GenerIndex'
import Home from '../view/Home'
import Personcenter from '../view/Personcenter'
import Team from '../view/Team'
import AccountInfo from '../view/accountInfo'
import {
    createAppContainer,
    createStackNavigator,
    StackActions,
    NavigationActions,
    createBottomTabNavigator
} from 'react-navigation';
/*

    --- 路由配置 ---

   * 所有组件都必须在这里注册
   * 在这里设置的navigationOptions的权限 > 对应页面里面的 static navigationOptions的设置 > StackNavigator()第二个参数里navigationOptions的设置
   * 该配置文件会在App.js里的StackNavigator(导航组件)里使用。

*/
const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({
            navigation
        }) => ({
            header: null
        })
    },
    AccountInfo:{
        screen: AccountInfo,
    }
});
const GenerIndexStack = createStackNavigator({
    GenerIndex: {
        screen: GenerIndex,
        navigationOptions: ({
            navigation
        }) => ({
            header: null,
            gesturesEnable: true
        })
    },
}, );

const PersoncenterStack = createStackNavigator({
    Personcenter: {
        screen: Personcenter,
        navigationOptions: ({
            navigation
        }) => ({
            header: null,
            gesturesEnable: true
        })
    },
});

const TeamStack = createStackNavigator({
    Team: {
        screen: Team,
        navigationOptions: ({
            navigation
        }) => ({
            header: null,
            gesturesEnable: true
        })
    }
});
//除首层外隐藏tabbar
const Stacks = [HomeStack, GenerIndexStack, TeamStack,PersoncenterStack]
Stacks.forEach((item) => {
  item.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (navigation.state.index > 0) {
      tabBarVisible = false
    }
    return {
      tabBarVisible,
    }
  }
})


export default createAppContainer(
    createBottomTabNavigator({
        Home: {
            screen: HomeStack,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({
                    tintColor,
                    focused
                }) => {
                    if (focused) {
                        return <Image source = {
                            {
                                uri: 'https://agency-h5.oss-cn-beijing.aliyuncs.com/home-on.png'
                            }
                        }
                        style = {
                            {
                                width: 20,
                                height: 20
                            }
                        }
                        />
                    } else {
                        return <Image source = {
                            {
                                uri: 'https://agency-h5.oss-cn-beijing.aliyuncs.com/home-h.png'
                            }
                        }
                        style = {
                            {
                                width: 20,
                                height: 20
                            }
                        }
                        />
                    }
                }

            }
        },
        Team: {
            screen: TeamStack,
            navigationOptions: {
                tabBarLabel: '团队',
                tabBarIcon: ({
                    tintColor,
                    focused
                }) => {
                    if (focused) {
                        return <Image source = {
                            {
                                uri: 'https://agency-h5.oss-cn-beijing.aliyuncs.com/team-on.png'
                            }
                        }
                        style = {
                            {
                                width: 20,
                                height: 20
                            }
                        }
                        />
                    } else {
                        return <Image source = {
                            {
                                uri: 'https://agency-h5.oss-cn-beijing.aliyuncs.com/team-h.png'
                            }
                        }
                        style = {
                            {
                                width: 20,
                                height: 20
                            }
                        }
                        />
                    }
                }
            }
        },
        GenerIndex: {
            screen: GenerIndexStack,
            navigationOptions: {
                tabBarLabel: '推广',
                tabBarIcon: ({
                    tintColor,
                    focused
                }) => {
                    if (focused) {
                        return <Image source = {
                            {
                                uri: 'https://agency-h5.oss-cn-beijing.aliyuncs.com/tuig-on.png'
                            }
                        }
                        style = {
                            {
                                width: 20,
                                height: 20
                            }
                        }
                        />
                    } else {
                        return <Image source = {
                            {
                                uri: 'https://agency-h5.oss-cn-beijing.aliyuncs.com/tuig-h.png'
                            }
                        }
                        style = {
                            {
                                width: 20,
                                height: 20
                            }
                        }
                        />
                    }
                }
            }
        },
        Personcenter: {
            screen: PersoncenterStack,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({
                    tintColor,
                    focused
                }) => {
                    if (focused) {
                        return <Image source = {
                            {
                                uri: 'https://agency-h5.oss-cn-beijing.aliyuncs.com/my-on.png'
                            }
                        }
                        style = {
                            {
                                width: 20,
                                height: 20
                            }
                        }
                        />
                    } else {
                        return <Image source = {
                            {
                                uri: 'https://agency-h5.oss-cn-beijing.aliyuncs.com/my-h.png'
                            }
                        }
                        style = {
                            {
                                width: 20,
                                height: 20
                            }
                        }
                        />
                    }
                }
            }
        },
    }, { //option
        initialRouteName: 'Home',
        defaultNavigationOptions: ({
            navigation
        }) => ({
            tabBarIcon: ({
                focused,
                horizontal,
                tintColor
            }) => {
                const {
                    routeName
                } = navigation.state;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#F23030',
            inactiveTintColor: '#7d7e80',
        },
    })
);