import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const WorkoutScreen = () => {
  const router = useRouter();
  const dates = [5, 6, 7, 8, 9, 10, 11];
  const currentDate = 8;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Morning, Christina</Text>
        </View>

        {/* Fitness Journal */}
        <View style={styles.journalCard}>
          <View style={styles.journalHeader}>
            <Text style={styles.journalTitle}>Fitness journal</Text>
            <TouchableOpacity style={styles.monthView}>
              <Text style={styles.monthViewText}>Month View</Text>
              <Ionicons name="chevron-forward" size={16} color="#666" />
            </TouchableOpacity>
          </View>

          <View style={styles.dateSlider}>
            {dates.map((date) => (
              <View key={date} style={styles.dateItem}>
                {date === currentDate ? (
                  <View style={styles.currentDateCircle}>
                    <Text style={styles.currentDateText}>Today{'\n'}{date} Jul</Text>
                  </View>
                ) : (
                  <>
                    <Ionicons 
                      name="barbell-outline" 
                      size={20} 
                      color={date < currentDate ? "#666" : "#ddd"} 
                    />
                    <Text style={[
                      styles.dateText,
                      { color: date < currentDate ? "#666" : "#ddd" }
                    ]}>{date}</Text>
                  </>
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Training Program Card */}
        <TouchableOpacity 
          onPress={() => router.push('/workout/program')}
        >
          <ImageBackground
            source={require('../../assets/images/workout-banner.jpg')}
            style={styles.programCard}
            imageStyle={{ borderRadius: 16 }}
          >
            <View style={styles.programContent}>
              <Text style={styles.programTitle}>Your personalized{'\n'}training program</Text>
              <View style={styles.seeMore}>
                <Text style={styles.seeMoreText}>See more</Text>
                <Ionicons name="chevron-forward" size={16} color="#fff" />
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        {/* Log Exercise Button */}
        <TouchableOpacity style={styles.logButton}>
          <Text style={styles.logButtonText}>Log Exercise</Text>
          <Ionicons name="add" size={24} color="#666" />
        </TouchableOpacity>

        {/* Weight Progress */}
        <View style={styles.weightCard}>
          <Text style={styles.weightTitle}>Weight Progress</Text>
          <View style={styles.weightContent}>
            <View>
              <Text style={styles.weightLabel}>Weight, kg</Text>
              <Text style={styles.weightValue}>57</Text>
              <Text style={styles.weightGoal}>Weight Goal: 51 kg</Text>
            </View>
            <View style={styles.weightGraph}>
              <Image 
                source={require('../../assets/images/weight-progress.jpeg')}
                style={styles.weightProgressImage}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>

        {/* Technique Improvement */}
        <View style={styles.techniqueSection}>
          <Text style={styles.techniqueTitle}>Technique Improvement</Text>
          <TouchableOpacity style={styles.exerciseCard}>
            <View style={styles.exerciseImageContainer}>
              <Image 
                source={require('../../assets/images/exercise.jpg')}
                style={styles.exerciseImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.exerciseInfo}>
              <Text style={styles.exerciseTitle}>Deadlift Form</Text>
              <View style={styles.exerciseStats}>
                <View style={styles.exerciseStat}>
                  <Ionicons name="time-outline" size={16} color="#666" />
                  <Text style={styles.exerciseStatText}>12 min</Text>
                </View>
                <View style={styles.exerciseStat}>
                  <Ionicons name="play-circle-outline" size={16} color="#666" />
                  <Text style={styles.exerciseStatText}>Video</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
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
  header: {
    padding: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
  },
  journalCard: {
    backgroundColor: '#F5F5F5',
    margin: 20,
    borderRadius: 16,
    padding: 16,
  },
  journalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  journalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  monthView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthViewText: {
    fontSize: 14,
    color: '#666',
    marginRight: 4,
  },
  dateSlider: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateItem: {
    alignItems: 'center',
  },
  currentDateCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#666',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentDateText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  dateText: {
    marginTop: 4,
    fontSize: 12,
  },
  programCard: {
    height: 160,
    margin: 20,
    borderRadius: 16,
    overflow: 'hidden',
  },
  programContent: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'space-between',
  },
  programTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  seeMore: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeMoreText: {
    fontSize: 14,
    color: '#fff',
    marginRight: 4,
  },
  logButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E5E5',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  logButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  weightCard: {
    margin: 20,
    padding: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
  },
  weightTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  weightContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weightLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  weightValue: {
    fontSize: 32,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  weightGoal: {
    fontSize: 12,
    color: '#666',
  },
  weightGraph: {
    flex: 1,
    marginLeft: 20,
    height: 120,
    borderRadius: 8,
    overflow: 'hidden',
  },
  weightProgressImage: {
    width: '100%',
    height: '100%',
  },
  techniqueSection: {
    margin: 20,
  },
  techniqueTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  exerciseCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  exerciseImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 16,
  },
  exerciseImage: {
    width: '100%',
    height: '100%',
  },
  exerciseInfo: {
    flex: 1,
  },
  exerciseTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  exerciseStats: {
    flexDirection: 'row',
    gap: 16,
  },
  exerciseStat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  exerciseStatText: {
    fontSize: 14,
    color: '#666',
  },
});

export default WorkoutScreen; 