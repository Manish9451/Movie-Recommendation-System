import { View, Text, Platform, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Bars3BottomLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import TreandingMovies from '../components/treandingMovies';
import MovieList from '../components/movieList';
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/loading';


const ios = Platform.OS == 'ios';

export default function HomeScreen() {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-neutral-800">

      <SafeAreaView className={ios ? "-mb-2" : 'mb-3'}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">

          <Bars3BottomLeftIcon size="30" strokeWidth={2} color="white" />

          <Text className="text-white text-3xl font-bold">
            <Text style={{ color: 'yellow' }}>M</Text>ovies
          </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Search')}>
            <MagnifyingGlassIcon size='30' strokeWidth={2} color={"white"} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {
        loading?(
          <Loading/>
        
        ):(
          <ScrollView showVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
  
  
          <TreandingMovies data={trending} />
  
          <MovieList title="Upcoming" data={upcoming} />
  
          <MovieList title="Top Rated" data={topRated} />
        </ScrollView>

        )
      }
    

    </View>
  );
}