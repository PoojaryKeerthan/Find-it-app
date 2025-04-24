import { View, Text } from 'react-native'
import React from 'react'

const Logo = () => {
  const ringpadding = useSharedValue(0)
  const ringpadding2 = useSharedValue(0)
  const navigation  = useNavigation<NavigationProp>()
   useEffect(()=>{
    ringpadding.value = 0;
    ringpadding2.value = 0;
    setTimeout(() =>ringpadding.value = withSpring(ringpadding.value+hp(5)),100);
    setTimeout(() =>ringpadding2.value = withSpring(ringpadding2.value+hp(5.5)),300);
    setTimeout(()=>navigation.navigate('Home'),2500)
   })

  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar style='light' />
      <Animated.View className='bg-white/20 rounded-full' style={{padding:ringpadding2}}>
        <Animated.View className='bg-white/20 rounded-full'  style={{padding:ringpadding}}>
          <Image source={require('../../assets/splash-icon.png')}
            style={{ width: hp(20), height: hp(20) }}
          />
        </Animated.View>
      </Animated.View>
      <View className='flex items-center py-5'>
          <Text style={{fontSize:hp(7)}} className='font-bold text-white tracking-widest'>Foody </Text>
          <Text style={{fontSize:hp(2)}} className='font-bold text-white tracking-widest '>Food is always right</Text>
      </View>
    </View>
  )
}

export default Logo