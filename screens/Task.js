import React, { Component } from 'react';
import {FlatList, StyleSheet, View} from 'react-native'
import Header from '../components/Header';
import  { TaskItem, AddSubtask } from '../components/ListItem';
import Styles from '../styles';

const DATA = [
    {
      completed : true,
      title: 'First Item',
      id : '23'
    },
    {
     completed:true,
      title: 'Second Item',
      id : '2'
    },
    {
     completed:true,
      title: 'Third Item',
      id : '22'
    },
  ];


class Home extends Component {
    
    renderTask = ({item})=>(
        <TaskItem  task={item.title}/>
    )

    render() {
        return (
          <View style={[Styles.container]}> 
           <Header icon title ={'First Item'} icon click_handler = {()=>{this.props.navigation.goBack()}}/>
           <FlatList
            style = {[styles.container]}
            data={DATA}
            renderItem={this.renderTask}
            keyExtractor={item => item.id}
            />
            <AddSubtask />
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        marginTop: 124,
        
    }
})
export default Home;