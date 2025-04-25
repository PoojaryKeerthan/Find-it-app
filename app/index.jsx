import { View, Text } from 'react-native'
import React from 'react'
const index = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className='text-lg'>index</Text>
      <View>
        <Text>hello</Text>
      </View>
      <Text>this is the index page of the app</Text>
    </View>
  )
}

export default index