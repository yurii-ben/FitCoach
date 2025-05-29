import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const ProgressScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        {/* Before & After Section */}
        <View style={styles.section}>
          <Text style={styles.title}>Before & After pictures</Text>
          <View style={styles.timelineButtons}>
            <TouchableOpacity style={[styles.timeButton, styles.timeButtonActive]}>
              <Text style={styles.timeButtonText}>1 month</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeButton}>
              <Text style={styles.timeButtonText}>3 months</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeButton}>
              <Text style={styles.timeButtonText}>6 months</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.photoContainer}>
            <View style={styles.photoWrapper}>
              <Text style={styles.photoDate}>01.10.25</Text>
              <Image 
                source={require('../assets/images/before.jpg')}
                style={styles.photo}
                resizeMode="cover"
              />
            </View>
            <View style={styles.photoWrapper}>
              <Text style={styles.photoDate}>06.10.25</Text>
              <Image 
                source={require('../assets/images/after.jpg')}
                style={styles.photo}
                resizeMode="cover"
              />
            </View>
          </View>
          
          <TouchableOpacity style={styles.addPhotoButton}>
            <Text style={styles.addPhotoText}>Add new photo +</Text>
          </TouchableOpacity>
        </View>

        {/* Measurements Section */}
        <View style={styles.section}>
          <Text style={styles.title}>Measurements</Text>
          <View style={styles.measurementsTable}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>Date:</Text>
              <Text style={styles.tableHeaderText}>12.02.25</Text>
              <Text style={styles.tableHeaderText}>22.04.25</Text>
            </View>
            {[
              { label: 'Waist', values: ['68', '67'] },
              { label: 'Belly', values: ['86', '85.5'] },
              { label: 'Hips', values: ['95', '97'] },
              { label: 'One hip', values: ['54', '55'] },
              { label: 'Arm', values: ['27', '27'] },
            ].map((row, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableLabel}>{row.label}</Text>
                {row.values.map((value, i) => (
                  <Text key={i} style={styles.tableValue}>{value}</Text>
                ))}
              </View>
            ))}
          </View>
        </View>
        
        <Text style={styles.mainTitle}>Exercise Progress</Text>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          {/* Weight Loss Card */}
          <View style={styles.statsCard}>
            <Text style={styles.statsLabel}>Weight Loss</Text>
            <View style={styles.statsContent}>
              <Text style={styles.statsValue}>0,92</Text>
              <Text style={styles.statsUnit}>Kg</Text>
            </View>
            <View style={styles.trophyCircle}>
              <Ionicons name="trophy" size={24} color="#666" />
            </View>
          </View>

          {/* Reps and Sets Card */}
          <View style={styles.statsCard}>
            <Text style={styles.statsLabel}>Reps and Sets</Text>
            <View style={styles.statsContent}>
              <View style={styles.statsGroup}>
                <Text style={styles.statsValue}>540</Text>
                <Text style={styles.statsUnit}>Reps</Text>
              </View>
              <View style={styles.statsGroup}>
                <Text style={styles.statsValue}>34</Text>
                <Text style={styles.statsUnit}>Sets</Text>
              </View>
            </View>
            <View style={styles.trophyCircle}>
              <Ionicons name="trophy" size={24} color="#666" />
            </View>
          </View>
        </View>

        {/* Technique Improvement Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technique that you should improve</Text>
          <TouchableOpacity style={styles.exerciseCard}>
            <View style={styles.exerciseImageContainer}>
              <Image 
                source={require('../assets/images/exercise.jpg')}
                style={styles.exerciseImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.exerciseInfo}>
              <Text style={styles.exerciseTitle}>Exercise 1</Text>
              <View style={styles.exerciseStats}>
                <View style={styles.exerciseStat}>
                  <Ionicons name="time-outline" size={16} color="#666" />
                  <Text style={styles.exerciseStatText}>5 min</Text>
                </View>
                <View style={styles.exerciseStat}>
                  <Ionicons name="flame-outline" size={16} color="#666" />
                  <Text style={styles.exerciseStatText}>120 cal</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.goButton}>
              <Text style={styles.goButtonText}>Go</Text>
            </TouchableOpacity>
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
  section: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  timelineButtons: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    padding: 4,
  },
  timeButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 20,
  },
  timeButtonActive: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  timeButtonText: {
    color: '#666',
    fontSize: 14,
  },
  photoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 35,
  },
  photoWrapper: {
    alignItems: 'center',
    width: 120,
  },
  photoDate: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  photo: {
    width: 120,
    height: 160,
    borderRadius: 10,
  },
  addPhotoButton: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addPhotoText: {
    color: '#666',
    fontSize: 16,
  },
  measurementsTable: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  tableHeaderText: {
    flex: 1,
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  tableLabel: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  tableValue: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 32,
    gap: 16,
  },
  statsCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  statsLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  statsContent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
  },
  statsGroup: {
    marginRight: 16,
  },
  statsValue: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  statsUnit: {
    fontSize: 14,
    color: '#666',
  },
  trophyCircle: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
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
    backgroundColor: '#F5F5F5',
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
  goButton: {
    backgroundColor: '#666',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  goButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ProgressScreen; 