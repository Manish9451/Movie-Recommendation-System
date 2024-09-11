import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { LinearGradient } from 'react-native-linear-gradient';
import Cast from '../components/cast';
import MovieList from '../components/movieList';
import Loading from '../components/loading';




var { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const topMargin = ios ? '' : 'mt-3';
export default function MovieScreen() {

    const { params: item } = useRoute();
    const [isFavorite, toggleFavorite] = useState(false);
    const navigation = useNavigation();
    const [cast, setCast] = useState([1, 2, 3]);
    const [similarMovies, setSimilarMovies] = useState([1, 2, 3]);
    const [loading, setLoading] = useState(false);
    let movieName = 'BRAVE';

    useEffect(() => {

        //call the Api
        console.log(item);
    }, [item]);

    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            className="flex-1 bg-neutral-900">

            <View className="w-full">

                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4" + topMargin}>

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
                            <Image
                                source={require('../assets/images/poster_1.jpeg')}
                                style={{ width, height: height * 0.55 }}
                            />


                            <LinearGradient

                                colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
                                style={{ width, height: height * 0.40 }}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                                className="absolute bottom-0"

                            ></LinearGradient>
                        </View>

                    )
                }


            </View>


            <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">

                <Text className="text-white text-3xl font-bold text-center tracking-wider">

                    {
                        movieName
                    }
                </Text>

                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Released: 2012 . 170 min
                </Text>

                <View className="flex-row justify-center mx-4 space-x-2">

                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Action .
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Thrill .
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Comedy .
                    </Text>
                </View>
                <Text className="text-neutral-500 mx-4 tracking-wide">
                    Brave is a 2012 American animated fantasy film produced by Pixar Animation Studios and released by Walt Disney Pictures. The film was directed by Mark Andrews and Brenda Chapman (in the former's feature directorial debut), co-directed by Steve Purcell, and produced by Katherine Sarafian, with John Lasseter,

                </Text>
            </View>

            <Cast navigation={navigation} cast={cast} />

            <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies}></MovieList>
        </ScrollView>

    );
}