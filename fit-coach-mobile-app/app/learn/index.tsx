import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const SCREEN_PADDING = 20;
const GRID_GAP = 16;
const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = (SCREEN_WIDTH - SCREEN_PADDING * 2 - GRID_GAP) / 2;

const categories = [
  {
    id: 'food',
    title: 'Food',
    image: require('../../assets/images/food.jpg'),
  },
  {
    id: 'sleep',
    title: 'Sleep',
    image: require('../../assets/images/sleep.jpg'),
  },
  {
    id: 'macros',
    title: 'Macros',
    image: require('../../assets/images/macros.jpg'),
  },
  {
    id: 'recovery',
    title: 'Recovery',
    image: require('../../assets/images/recovery.jpg'),
  },
];

const LearnScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Learn</Text>
        
        <View style={styles.grid}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              onPress={() => router.push(`/learn/${category.id}`)}
              style={styles.card}
            >
              <ImageBackground
                source={category.image}
                style={styles.cardBackground}
                imageStyle={styles.cardImage}
                resizeMode="cover"
              >
                <View style={styles.cardOverlay}>
                  <Text style={styles.cardTitle}>{category.title}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    padding: SCREEN_PADDING,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: SCREEN_PADDING,
    gap: GRID_GAP,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#F5F5F5',
  },
  cardBackground: {
    width: '100%',
    height: '100%',
  },
  cardImage: {
    borderRadius: 16,
  },
  cardOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
    padding: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
});

export default LearnScreen; 