import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button, Card } from "react-native-paper";
import { AppScreens } from "../utils/constants";

const ListItem = ({title, content, date, id, image, author, navigation}) => {
    const newsDate = new Date(date).toLocaleString()
    console.log("d : ",title, content, date, id, image, author);

    const onNewsPress = () => {
        navigation.navigate(AppScreens.NewsItem, {
            title, content, newsDate, id, image, author
        })
    }
    
    return (
        <Card style={styles.cardStyle} onPress={onNewsPress}>
            <Card.Title title={newsDate} />  
            <Card.Title titleStyle={[{marginTop: -30}]} title={author} />  
            <Card.Cover style={[{marginTop: -20}]} source={{ uri: image }} />
            <Card.Title title={title} />
            <Card.Content>
                {/* <Text style={[styles.contentStyle]} variant="bodyMediium">{new Date(date).toLocaleDateString()}</Text>   */}
                <Text style={[styles.contentStyle]} variant="textLarge">{content}</Text>  
            </Card.Content>
        </Card>
    )
}

export default ListItem;

const styles = StyleSheet.create({
    cardStyle: {
        margin: 10,
        padding: 10
    },
    contentStyle: {
        marginTop: -10
    },
})