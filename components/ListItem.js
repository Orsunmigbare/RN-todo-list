import React, { Component } from 'react';
import { View, Text, Image ,StyleSheet} from 'react-native';
import Styles, {text, colors, normalize} from '../styles'
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
class BaseItem extends Component {
    render() {
        let { task, progress, completed, click_handler } = this.props;
        return (
            <TouchableNativeFeedback onPress={click_handler}> 
            <View style = {[Styles.flex_row, Styles.justify_content_space_between, Styles.align_items_center, styles.list_item]}>
                <View style={[Styles.flex_row, Styles.align_items_center]}>
                <View style={[styles.check_icon_container]}>
                <Image  style={[styles.check_icon]} source={require('../assets/images/icons/checked.png')} />
                </View>
                
                <Text style={[text.text_primary]}>
                    {task}
                </Text>
                </View>
                <Text style={[text.text_primary, {fontSize : normalize(13)}]} > {progress}%</Text>
            </View>
            </TouchableNativeFeedback>
        );
    }
}

export const TaskItem = ({ task, completed }) => (
    <View style = {[Styles.flex_row, Styles.justify_content_start, Styles.align_items_center, styles.list_item]}>
       <View style={[styles.check_icon_container, {position: 'absolute', left: normalize(15)}]}>
                {/* <Image  style={[styles.check_icon]} source={require('../assets/images/icons/checked.png')} /> */}
                </View>
        <Text style={[text.text_primary,Styles.text_align_center, {flex: 1}]}>
            {task}
        </Text>
    </View>
)


export const AddSubtask = () => (
    <View style = {[Styles.flex_row, Styles.justify_content_start, Styles.align_items_center, styles.list_item, styles.add_subtask]}>
                <Image  style={[styles.add_subtask_icon]} source={require('../assets/images/icons/info-add.png')} />
                <Text style={[text.text_info]}>
                    Add Subtask
                </Text>
    </View>
)


const styles = StyleSheet.create({
    list_item  : {
        borderBottomWidth : .3,
        borderBottomColor : '#dbdbdb',
        paddingVertical: normalize(16),
        backgroundColor: '#fff',
        paddingHorizontal : normalize(16)
    },
  check_icon : {
        height: 15,
        width: 15,    
        position: 'absolute',
        top: 0,
        right: 0
    },
    check_icon_container :{
        height: 17,
        width: 17,
        marginRight: normalize(33),
        borderRadius : 8.5,
        borderColor: colors.color_primary,
        borderWidth: 1,
    },
    add_subtask :{
        paddingLeft : 50
    },
    add_subtask_icon : {
        height: 16,
        width : 16,
        marginRight: 25
    }
})
export default BaseItem;