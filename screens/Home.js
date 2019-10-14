import React, { Component, useState , useEffect} from 'react';
import {FlatList, StyleSheet, Image, View,TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import {allTasks,createTask,updateTask,deleteTask} from '../actions/task.action'
import Header from '../components/Header';
import BaseItem from '../components/ListItem';
import Styles from '../styles';
import { Button, Text, Layout } from 'react-native-ui-kitten';
import Modal from '../components/Modal'


const DATA = [
    {
      completed : true,
      task: 'First Item',
      progress : '50',
      id : '1'
    },
    {
      completed:true,
      task: 'Second Item',
      progress : '50',
      id : '10'
    },
    {
     completed:true,
      task: 'Third Item',
      progress : '50',
      id : '14'
    },
  ];



function Home ({tasks,createTask,allTasks,navigation}) {
  const [modalVisible, setModalVisible] = useState(false)
  const [data, setData] = useState()
 

  useEffect(()=>{
    if(tasks.length) return
    allTasks()
  })
    renderTask = ({item})=>(
        <BaseItem  click_handler= {()=>{navigation.navigate('Task', {id: item.id, title: item.title})}} checked= {item.completed.toString()} progress = {item.progress} task = {item.title} />
    )

    addTask= (title)=>{
        createTask({title, id: Date.now().valueOf()})
        setModalVisible(false)
    }
    hideModal =  ()=>{
      setModalVisible(false);
    }

        return (
            <> 
            <Modal title={'Title'} placeHolder = {'Add title'} visible={modalVisible} hide={this.hideModal} action = {this.addTask}  />
            <View style={[Styles.container]}> 
           <Header base title ={'Tasks'} />
           <FlatList
            data={tasks}
            style = {[styles.container]}
            renderItem={this.renderTask}
            keyExtractor={item => item.id}
            />
           </View>
           {!modalVisible && < TouchableNativeFeedback
           onPress = {()=>{setModalVisible(true)}}
           style = {{backgroundColor: 'yellow'}}
           >
           <Image
            style = {[styles.icon_add, {zIndex: 100}]}
            source = {require('../assets/images/icons/icon-add.png')}
            />
            </ TouchableNativeFeedback>}
           </>
        );
 }


const styles = StyleSheet.create({
    container : {
        marginTop: 124,

    },
    icon_add: {
        position: 'absolute',
        bottom: 23,
        height: 50,
        width: 50,
        alignSelf: 'center'
    }
})

const mapStateToProps = state => {
 return {tasks: state.task.tasks.reverse()}
}
export default  connect (
  mapStateToProps,
  {
    allTasks,
    createTask,
    updateTask,
    deleteTask
  }
)(Home);