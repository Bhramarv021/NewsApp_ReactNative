import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LatestNews from "../components/screens/LatestNews";
import AllNews from "../components/screens/AllNews";
import NewsItem from "../components/screens/NewsItem";
import { Text, View } from "react-native";
import { StatusBar } from "react-native/types_generated/index";
import { AppScreens, AppStackContainers } from "../utils/constants";
import MIcon from "@react-native-vector-icons/material-design-icons"
// import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons"
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const NavigationController = () => {
    return(
        <NavigationContainer>
            <TabNavigators />
        </NavigationContainer> 
    )
};

const TabNavigators = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen options={{tabBarIcon: (props) => <MIcon {...props} name="new-release" />}} name={AppStackContainers.LatestNewsStack} component={LatestNewsStack}/>
            <Tab.Screen name={AppStackContainers.AllNewsStack} component={AllNewsStack}/>
        </Tab.Navigator>
    )
};

const LatestNewsStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: 'red'}}}> 
            <Stack.Screen name={AppScreens.LatestNews} component={LatestNews} />
            <Stack.Screen name={AppScreens.NewsItem} component={NewsItem} />
        </Stack.Navigator>
    )
}

const AllNewsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={AppScreens.AllNews} component={AllNews} />
            <Stack.Screen name={AppScreens.NewsItem} component={NewsItem} />
        </Stack.Navigator>
    )
}

export default NavigationController;