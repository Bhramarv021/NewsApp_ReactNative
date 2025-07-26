import React from "react"
import { View, Text, FlatList, SafeAreaView } from "react-native"
import ListItem from "../ListItem";
import generateFakeNews from "../../data/fakeNews";

const AllNews = ({navigation}) => {
    const news = generateFakeNews(25);
    
    return (
        <SafeAreaView>
            <FlatList
                data={news}
                // renderItem={(d)=>{console.log(d); return (<ListItem title={d.item.title} content={d.item.content} date={d.item.date} id={d.item.id} image={d.item.image} author={d.item.author} />)}}
                renderItem={(d)=><ListItem {...d.item} navigation={navigation} />}
                keyExtractor={(d)=>d.id}
            />
        </SafeAreaView>
    )
}

export default AllNews;