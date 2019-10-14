import React, { Component ,useState, useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import Header from '../components/Header';
import {allSubtasks,createSubtask,updateSubtask,deleteSubtask} from '../actions/subtask.action'
import  { TaskItem, AddSubtask } from '../components/ListItem';
import Styles from '../styles';
import Modal from '../components/Modal'

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


function Task  ({subtasks,navigation, allSubtasks, createSubtask, updateSubtask}) {
   const [modalVisible, setModalVisible] = useState(false)
   const [routeParams,setParams] = useState({id: '', title: ''})

    useEffect(()=>{
      console.log(subtasks)
      if (routeParams.id) return
       let id = navigation.getParam('id'),
      title = navigation.getParam('title')
      allSubtasks(id)
      setParams({id,title})
      
    })

  
    addSubtask = (title)=>{
      createSubtask({taskId: routeParams.id,title,completed: 'false', subtaskId: Date.now().valueOf()})
      setModalVisible(false)
    }
    removeSubtask = (subtaskId)=>{
      deleteSubtask({taskId: routeParams.id, subtaskId})
    }
    completeSubtask = (id,completed)=>{
      console.log(id, completed)
      updateSubtask({taskId: routeParams.id,subtaskId : id , completed: completed === 'true' ? 'false': 'true'})
    }
    hideModal =  ()=>{
      setModalVisible(false);
    }
    renderTask = ({item})=>(
        <TaskItem action={()=>{this.removeSubtask(item.subtaskId)}} id = {item.subtaskId} completed = {item.completed} task={item.title} toggleComplete = {this.completeSubtask}/>
    )
        return (
          <>
            <Modal title={'Title'} placeHolder = {'Add title'} visible={modalVisible} hide={this.hideModal} action = {this.addSubtask}  />
          <View style={[Styles.container]}> 
           <Header icon title ={routeParams.title} icon click_handler = {()=>{this.props.navigation.goBack()}}/>
           <FlatList
            style = {[styles.container]}
            data={subtasks} 
            renderItem={this.renderTask}
            keyExtractor={item => item.id}
            />
            <AddSubtask action = {()=>{setModalVisible(true)}}/>
           </View>
           </>
        );
    }


const styles = StyleSheet.create({
    container : {
        marginTop: 124,
        
    }
})
const mapStateToProps = state => {
  return {subtasks: state.subtask.subtasks}
 }
 export default  connect (
   mapStateToProps,
   {
     allSubtasks,
     createSubtask,
     updateSubtask,
     deleteSubtask
   }
 )(Task);