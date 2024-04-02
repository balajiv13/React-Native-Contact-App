import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'

const Container = ({style, children}: any) => {
  return (
    <ScrollView style={[styles.wrapper, style ]}>
    <View>
      {children}
    </View>
    </ScrollView>
  )
}

export default Container