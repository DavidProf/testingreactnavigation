// In App.js in a new project

import * as React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CustomLinkHome } from '../../components/CustomLinkHome/CustomLinkHome'

const Tab = createBottomTabNavigator()

function Init() {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>About Screen</Text>
            <CustomLinkHome />
        </View>
    )
}

function Me() {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>Page: Me</Text>
        </View>
    )
}

function You() {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>Page: You</Text>
        </View>
    )
}

export function About() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelPosition: 'beside-icon', // to deal with icons
                tabBarIconStyle: { display: 'none' },
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Init"
                component={Init}
                options={{
                    title: 'About',
                }}
            />
            <Tab.Screen name="About Me" component={Me} />
            <Tab.Screen name="About You" component={You} />
        </Tab.Navigator>
    )
}
