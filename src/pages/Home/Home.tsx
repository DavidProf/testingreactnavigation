// In App.js in a new project

import * as React from 'react'
import { View, Text, Button } from 'react-native'

export function Home({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: '16px',
            }}
        >
            <Text>Home Screen</Text>
            <Button
                title="About"
                onPress={() => navigation.navigate('About')}
            />
            <Button
                title="About Me"
                onPress={() =>
                    navigation.navigate('About', {
                        screen: 'About Me',
                    })
                }
            />
            <Button
                title="About Me"
                onPress={() =>
                    navigation.navigate('About', {
                        screen: 'About You',
                    })
                }
            />
        </View>
    )
}
