import React , {Component} from 'react';
import {View,Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native'
import Styles, {text, colors, normalize, SCREEN_WIDTH} from '../styles';

export default class Header extends Component{
    render(){ 
        let {base,title, icon, click_handler} = this.props;
        return(
            <View style={[styles.header,Styles.flex_row, Styles.justify_content_center,Styles.align_items_center, {backgroundColor: base ? colors.color_primary : '#fff'}]}> 
               { icon && <TouchableWithoutFeedback onPress = {click_handler}>
                <Image
                source = {require('../assets/images/icons/icon-back.png')}
                style = {[styles.back_icon, Styles.align_self_start]}
                />
                 </TouchableWithoutFeedback>}
                <Text style={[text.h1, {color : base ? '#fff' : colors.color_primary}, Styles.align_self_center]}> {title} </Text>
               
            </View>
        )
    }
}


const styles = StyleSheet.create({
    header : {
        height : normalize(75),
        width: SCREEN_WIDTH,
        position: 'absolute',
        backgroundColor : colors.color_primary,
        paddingTop: normalize(25)
    },
    back_icon: {
        width: 21,
        height: 15,
        position: 'absolute',
        left : 20,
        bottom: 15
    }

})