import { View, Text, TextInput } from 'react-native'
import React,{} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoginScreen = () => {
return (
    <View className="flex-1  bg-neutral-800">
            <SafeAreaView>
             
            <Text className="text-slate-200 top-4 font-bold left-5 text-4xl  ">Login Form</Text>

            <Text className="text-cyan-200 top-8 font-semibold left-5 text-lg italic ">Register Here to Explore this Application</Text>

            <View className="top-16 left-5">

                <Text className="text-cyan-50 font-semibold text-lg">Enter Your Name Here</Text>

                <TextInput className=" rounded-lg text-cyan-50 border-white "></TextInput>

            </View>

            </SafeAreaView>
        
    </View>
)
}

export default LoginScreen