import { Text, View, Dimensions, Platform, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import MovieList from '../components/movieList';
import Loading from '../components/loading';

var { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';
verticalMargin = ios ? '' : 'my-3';

export default function PersonScreen() {
    const navigation = useNavigation();
    const [isFavorite, toggleFavorite] = useState(false);
    const [personMovies, setPersonMovies] = useState([1, 2, 3]);
    const [loading, setLoading] = useState(false);

    return (
        <ScrollView className="flex-1 bg-neutral-900 " contentContainerStyle={{ paddingBottom: 20 }}>

            <SafeAreaView className={" z-20 w-full flex-row justify-between items-center px-4" + verticalMargin}>

                <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: 'yellow' }} className="rounded-xl p-1" >

                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="black" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
                    <HeartIcon size="35" color={isFavorite ? "red" : "white"}></HeartIcon>
                </TouchableOpacity>

            </SafeAreaView>
            {
                loading ? (
                    <Loading />
                ) : (
                    <View>
                        <View style={styles.shadow} className="flex-row justify-center">
                            <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500  ">
                                <Image
                                    source={require('../assets/images/poster_1.jpeg')}
                                    style={{ width: width * 0.79, height: height * 0.43 }}

                                ></Image>
                            </View>
                        </View>

                        <View className="mt-6">
                            <Text className="text-3xl text-white font-bold text-center">Keanu Reeves</Text>
                            <Text className="text-base text-neutral-500 text-center">Londan, United Kingdom</Text>
                        </View>

                        <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">

                            <View className="border-r-2 border-neutral-400 px-2 items-center">
                                <Text className="text-white font-semibold">Gender</Text>
                                <Text className="text-white font-semibold">Female</Text>

                            </View>
                            <View className="border-r-2 border-neutral-400 px-2 items-center">
                                <Text className="text-white font-semibold">Birthday</Text>
                                <Text className="text-white font-semibold">15-07-1998</Text>

                            </View>
                            <View className="border-r-2 border-neutral-400 px-2 items-center">
                                <Text className="text-white font-semibold">known for</Text>
                                <Text className="text-white font-semibold">Acting</Text>

                            </View>
                            <View className=" px-2 items-center">
                                <Text className="text-white font-semibold">Popularity</Text>
                                <Text className="text-white font-semibold">64.6</Text>

                            </View>
                        </View>
                        <View className="mt-6 mx-4 space-y-2">
                            <Text className="text-white text-lg">Biography</Text>
                            <Text className="text-neutral-400 tracking-wide">Keanu Charles Reeves is a Canadian actor. Born in Beirut and raised in Toronto, Reeves began acting in theatre productions and in television films before making his feature film debut in Youngblood.</Text>
                        </View>

                        <MovieList title={'Movies'} hideSeeAll={true} data={personMovies} />

                    </View>


                )
            }

        </ScrollView>
    )

}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'white',
        shadowRadius: 40,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
    }
})