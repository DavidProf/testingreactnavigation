// In App.js in a new project

import { useNavigation } from '@react-navigation/core'
import * as React from 'react'
import { Text } from 'react-native'

export function CustomLinkHome() {
    const navigation = useNavigation<{ navigate: (page: string) => void }>()
    return (
        <Text
            style={{ color: 'blue' }}
            onPress={() => navigation.navigate('Home')}
        >
            Home
        </Text>
    )
}
