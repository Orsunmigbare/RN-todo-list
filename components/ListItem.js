import React, { Component } from 'react';
import { View, Text, Image ,StyleSheet} from 'react-native';
import Styles, {text, colors, normalize} from '../styles'

class BaseItem extends Component {
    render() {
        let { task, progress, completed } = this.props;
        return (
            <View>
                <Image style={[styles.check_icon]} />
                <Text>
                    {task}
              </Text>
                <Text style={text.text_primary} > {progress}</Text>
            </View>
        );
    }
}

export const TaskItem = ({ task, completed }) => (
    <View>
        <Image style={[styles.check_icon]} />
        <Text style={text.text_primary}>
            {task}
        </Text>
    </View>
)


const styles = StyleSheet.create({

})
export default ListItem;