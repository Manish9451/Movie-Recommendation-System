import { View, Text, ScrollView, TouchableOpacity,Image } from 'react-native'
import React, { } from 'react'


export default function Cast({ navigation,cast}) {
    let personName='keanu Reevs';
    let characterName='John wick';
    return (
        <View style={{ marginTop: 6 }}>
            <Text style={{ color: 'white', fontSize: 18, marginLeft: 4, marginBottom: 5 }}>TopCast</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}

            >
                {cast && cast.map((person, index) => {

                    return (
                        <TouchableOpacity 
                            key={index}
                            style={{ marginRight: 10, alignItems: 'center' }}
                            onPress={() => navigation.navigate('Person', { person })}
                        > 
                          
                        <Image
                            source={require('../assets/images/poster_1.jpeg')}
                            style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 2, borderColor: 'white' }}
                        />
                            <Text style={{ color: 'white', marginTop: 5, fontSize: 15 }}>
                                {characterName.length > 10 ? characterName.slice(0, 10) + '...' : characterName}
                            </Text>
                            <Text style={{ color: 'white', marginTop: 5, fontSize: 15 }}>
                                {personName.length > 10 ? personName.slice(0, 10) + '...' : personName}
                            </Text>
                        </TouchableOpacity>
                    );
                })

                }


            </ScrollView>
        </View>
    )
}