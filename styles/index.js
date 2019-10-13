import {  PixelRatio } from 'react-native';

export function normalize(size) {
    return Math.round(PixelRatio.roundToNearestPixel(size))
}

export const colors = {
    color_primary : '#2D79E6',
    text_primay : '#000',
    text_secondary : '#6a6a6a',
    bg_primagy :  '#fbfcfe',
    header_prmiary : colors.color_primary,
    header_secondary : '#053476'
}

export const text = {
    base_font : {
        fontFamily : 'Rounded Mplus 1c',
    },
    h1 : {
        fontFamily : text.base_font,
        fontSize : normalize(21)
    },
    text_primary : {
        fontFamily : text.base_font,
        fontSize : normalize(17),
        color : colors.text_primary,
        lineHeight : normalize(17)
    },
    h2 : {
        fontFamily : text.base_font,
        fontSize : normalize(17)
    }

}

export default  Styles= {
        flex_column: {
            flexDirection: 'column'
        },
        flex_row: {
            flexDirection: 'row'
        },
        flex_wrap_true: {
            flexWrap: 'wrap'
        },
        flex_wrap_none: {
            flexWrap: 'no-wrap'
        },
        align_items_center: {
            alignItems: 'center'
        },
        align_self_center: {
            alignSelf: 'center'
        },
        align_items_start: {
            align_items: 'flex-start'
        },
        justify_content_space_around: {
            justifyContent: 'space-around'
        },
        justify_content_space_between: {
            justifyContent: 'space-between'
        },
        justify_content_space_evenly: {
            justifyContent: 'space-evenly'
        },
        justify_content_center: {
            justifyContent: 'center'
        },
        text_align_center: {
            textAlign : 'center'
        },
}
