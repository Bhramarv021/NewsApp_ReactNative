import React from "react"
import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native"

const NewsItem = ({navigation, route}) => {
    console.log("Route params : ",route.params);
    const {title, content, newsDate, id, image, author} = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <Image source={{uri: image}} style={styles.imgStyle} />
            <View style={styles.dateNAuthor}>
                <Text>{author}</Text>
                <Text>{newsDate}</Text>
            </View>
        </SafeAreaView>
    )
}

export default NewsItem;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
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
        justifyContent: 'space-between'
    }
})