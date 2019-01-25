/*
 * 导入视图
 */
import GenerIndex from '../view/GenerIndex'
import Home from '../view/Home'
import Personcenter from '../view/Personcenter'
import Team from '../view/Team'
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
        navigationOptions: ({navigation}) => ({header: null})
    },
});
const GenerIndexStack = createStackNavigator({
    GenerIndex: {
        screen: GenerIndex,
        navigationOptions: ({navigation}) => ({header: null, gesturesEnable: true})
    },
});

const PersoncenterStack = createStackNavigator({
    Personcenter: {
        screen: Personcenter,
        navigationOptions: ({navigation}) => ({header:null, gesturesEnable:true})
    },
});

const TeamStack = createStackNavigator({
    Team: {
        screen: Team,
        navigationOptions: ({navigation}) => ({header: null, gesturesEnable: true})
    }
});

export default createAppContainer(
    createBottomTabNavigator({
        Home: {
            screen: HomeStack
        },
        GenerIndex: {
            screen: GenerIndexStack
        },
        Team: {
            screen: TeamStack
        },
        Personcenter: {
            screen: PersoncenterStack
        },
    }, )
);