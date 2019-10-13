import React, { Component } from 'react';
import {FlatList, StyleSheet, Image, View} from 'react-native'
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



class Home extends Component {
   state = {
     modalVisible : false
   }
    renderTask = ({item})=>(
        <BaseItem  click_handler= {()=>{this.props.navigation.navigate('Task')}} checked= {item.completed} progress = {item.progress} task = {item.task} title={item.title}/>
    )

    render() {
        return (
            <>
            <Modal title={'Title'} placeHolder = {'Add title'} visible={this.state.modalVisible}/>
            <View style={[Styles.container]}> 
           <Header base title ={'Tasks'} />
           <FlatList
            data={DATA}
            style = {[styles.container]}
            renderItem={this.renderTask}
            keyExtractor={item => item.id}
            />
           </View>
           <Image 
            style = {[styles.icon_add]}
            source = {require('../assets/images/icons/icon-add.png')}
            />
           </>
        );
    }
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
export default Home;