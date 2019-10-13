import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import Home from '../screens/Home';
import Task from '../screens/Task';

const mainStack = createStackNavigator(
    {
        Home : Home,
        Task : Task
    },
    { 
        initialRouteName : 'Home',
        defaultNavigationOptions : {
            headerStyle: {
                display: 'none'
            }
        }
    }
)

export default mainNavigation = createAppContainer(mainStack)