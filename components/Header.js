import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/colors';


const Header = props => {
    return(
        <View style={styles.header}>
            <FontAwesome name="question" size={25} style={{ color: 'black' }} />
            <Text style={styles.headerTitle}>
                {props.title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,

    }
});


export default Header;