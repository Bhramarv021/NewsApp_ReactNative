import React, { useEffect } from "react"
import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native"
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons"

const NewsItem = ({navigation, route}) => {
    console.log("Route params : ",route.params);
    const {title, content, newsDate, image, author} = route.params;

    useEffect(()=>{
        navigation.setOptions({headerTitle: title})
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <MaterialDesignIcons name="house" color="#ff0000" size={20} />
            <Image source={{uri: image}} style={styles.imgStyle} />
            <View style={styles.dateNAuthor}>
                <Text>{author}</Text>
                <Text>{newsDate}</Text>
            </View>
            <Text style={styles.contentStyle}>{content}</Text>
        </SafeAreaView>
    )
}

export default NewsItem;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 10
    },
    imgStyle: { 
        alignSelf: 'center',
        width: '100%', 
        height: 200,
        borderRadius: 10
    },
    dateNAuthor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'center',
        paddingBottom: 10,
    },
    contentStyle: {
        marginTop: 10,
        fontSize: 14,
        textAlign: 'justify'
    }
})