import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, TabActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import Restaurants from '../screens/Restaurants'
import Favorites from '../screens/Favorites'
import TopRestaurants from '../screens/TopRestaurants'
import Search from '../screens/Search'
import Account from '../screens/Account'


const Tab = createBottomTabNavigator()


export default function Navigation() {
    const screenOptions = (route, color) =>{
        let iconName 
        switch (route.name) {
            case "restaurants":
                iconName="compass-outline"
                break;
            case "favorites":
                    iconName="heart-outline"
                    break;
            case "top-restaurants":
                    iconName="star-outline"
                    break;
            case "search":
                    iconName="magnify"
                    break;
            case "account":
                    iconName="home-outline"
                    break;
        
        }
        return (
            <Icon
                type="material-community"
                name={iconName}
                size={22}
                color={color}
            />
        )
    
    }


  return (
    <NavigationContainer>
        <Tab.Navigator
                initialRouteName="restaurants"
                tabBarOptions={{
                    inactiveTintColor: "#a17dc3",
                    activeTintColor: "#442484" 
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color)
                })}
            >
            <Tab.Screen 
                name="restaurants"
                component={Restaurants}
                options={{ title: "Restaurantes" }} 
            
            />

        <Tab.Screen 
                name="favorites"
                component={Favorites}
                options={{ title: "Favoritos" }} 
            
            />
        
        <Tab.Screen 
                name="top-restaurants"
                component={TopRestaurants}
                options={{ title: "Top 5" }} 
            
            />

         <Tab.Screen 
                name="search"
                component={Search}
                options={{ title: "Buscar" }} 
            
            />
        
        <Tab.Screen 
                name="account"
                component={Account}
                options={{ title: "Perfil" }} 
            
            />


        </Tab.Navigator>
    </NavigationContainer>
  
  )
}