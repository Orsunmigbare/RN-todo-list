import {createStackNavigator} from 'react-navigation-stack';
import {createAppcontainer} from 'react-navigation'
import Home from '../screens/Home';
import Task from '../screens/Task';

const mainStack = createStackNavigator(
    {
        Home : Home,
        Task : Task
    }
)

export default mainNavigation = createAppcontainer(mainStack)