import React, { Component } from 'react';
import {View, TextInput, Text, StyleSheet, Image, KeyboardAvoidingView} from 'react-native'
import Styles, {text, colors, normalize, SCREEN_WIDTH, fonts} from '../styles';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

class Modal extends Component {
    render() {
        let {title,visible} = this.props;
        return (
           <KeyboardAvoidingView behavior={'padding'} style={[styles.modal, Styles.justify_content_center, Styles.align_items_center,  {opacity: visible ? 1: 0, display: visible ? 'flex': 'none'}]}>
               <View style={[styles.modal_content, Styles.align_self_center, Styles.justify_content_space_between,]}> 
                   <Text style={[text.h2]}>{title}</Text>
                   <Input />
                   <AddBtn />
               </View>
           </KeyboardAvoidingView>
        );
    }
}


const Input = ()=>(
    <View >
    <TextInput 
    style = {[text.text_primary, styles.modal_input]}
    />
    <View style={[styles.input_underline]}/> 
    </View>
)

const AddBtn = ()=>(
    <TouchableNativeFeedback bor>
    <View style={[Styles.flex_row, styles.modal_btn, Styles.align_self_center, Styles.align_items_center]}>
        <Image 
        source = {require('../assets/images/icons/icon-add-light.png')}
        style = {[styles.modal_btn_add]}
        />
        <Text style={[styles.modal_btn_text]}>  Add </Text>
    </View>
    </TouchableNativeFeedback>
)

const styles = StyleSheet.create({
    modal :{
        position: 'absolute',
        zIndex: 100,
        height: '100%',
        width : '100%',
        backgroundColor : '#2d2d2d8f',
    },
    input_underline :{
        marginTop: 5,
        width : '100%',
        height: 1,
        backgroundColor : colors.color_primary
    },
    modal_input : {
        marginTop: 10
    },
    modal_content: {
        backgroundColor: '#fff',
        width: normalize(253),
        borderRadius : 8,
        paddingHorizontal:normalize(13),
        paddingTop: normalize(20),
        paddingBottom: normalize(9)
    },
    modal_btn : {
        backgroundColor: colors.color_primary,
        borderRadius: 7,
        paddingVertical : 4,
        paddingHorizontal : 21,
        marginTop: 27
    },
    modal_btn_add :{
        height : normalize(16),
        width:  normalize(16),
        marginRight : 13
       
    },
    modal_btn_text : {
        fontFamily: fonts.base,
        color: '#fff',
        fontSize: normalize(16)
    }
})
export default Modal;
