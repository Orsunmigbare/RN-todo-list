import React, { Component } from 'react';
import {FlatList} from 'react-native'
import Header from '../components/Header';
import Tas, { TaskItem } from '../components/ListItem';

const DATA = [
    {
      completed : true,
      title: 'First Item',
      progress : 50
    },
    {
     completed:true,
      title: 'Second Item',
      progress : 50
    },
    {
     completed:true,
      title: 'Third Item',
      progress : 50
    },
  ];


class Home extends Component {
    
    renderTask = ({task})=>(
        <TaskItem checked= {task.completed} progress = {task.progress} title={task.title}/>
    )

    render() {
        return (
            <> 
           <Header  title ={'Tasks'} />
           <FlatList
            data={DATA}
            renderItem={this.renderTask}
            keyExtractor={item => item.id}
            />
           </>
        );
    }
}

export default Home;