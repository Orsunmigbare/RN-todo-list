import React , {Component} from 'react';
import {View,Text} from 'react-native'
import Styles, {text, colors, normalize} from '../styles'

class BaseHeader extends Component{
    render(){ 
        let {base,title} = this.props;
        return(
            <View style={[styles.header, Styles.justify_content_center,Styles.align_items_center, {backgroundColor: base ? colors.color-primary : '#fff'}]}> 
                <Text style={text.h1, {color : base ? '#fff' : colors.color_primaryfit}}> {title} </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    header : {
        height : normalize(75),
        position: 'absolute',
        background : colors.primary,
        paddingTop: normalize(25)
    }

})