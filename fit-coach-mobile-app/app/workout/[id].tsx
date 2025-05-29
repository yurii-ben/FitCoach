import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../contexts/ThemeContext';
import { useWorkout } from '../../contexts/WorkoutContext';

const WorkoutDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { colors } = useTheme();
  const { workouts, startWorkout, completeExercise } = useWorkout();
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isWorkoutActive, setIsWorkoutActive] = useState(false);
  const [timer, setTimer] = useState(0);

  const workout = workouts.find(w => w.id.toString() === id);

  useEffect(() => {
    let interval;
    if (isWorkoutActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (timer === 0 && isWorkoutActive) {
      // Exercise completed
      Alert.alert('Exercise Complete!', 'Great job! Ready for the next one?', [
        {
          text: 'Next Exercise',
          onPress: () => {
            completeExercise(workout.id, currentExerciseIndex);
            if (currentExerciseIndex < workout.exercises.length - 1) {
              setCurrentExerciseIndex(currentExerciseIndex + 1);
              setTimer(workout.exercises[currentExerciseIndex + 1].duration);
            } else {
              setIsWorkoutActive(false);
              Alert.alert('Workout Complete!', 'Amazing work! 🎉');
            }
          },
        },
      ]);
    }
    return () => clearInterval(interval);
  }, [isWorkoutActive, timer]);

  const handleStartWorkout = () => {
    startWorkout(workout.id);
    setIsWorkoutActive(true);
    setTimer(workout.exercises[0].duration);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!workout) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.errorText, { color: colors.text }]}>
          Workout not found
        </Text>
      </SafeAreaView>
    );
  }

  const renderExercise = ({ item, index }) => (
    <View style={[
      styles.exerciseCard,
      { backgroundColor: colors.card },
      index === currentExerciseIndex && isWorkoutActive && styles.activeExercise
    ]}>
      <View style={styles.exerciseHeader}>
        <Text style={[styles.exerciseName, { color: colors.text }]}>
          {item.name}
        </Text>
        <Text style={[styles.exerciseDuration, { color: colors.textSecondary }]}>
          {formatTime(item.duration)}
        </Text>
      </View>
      <Text style={[styles.exerciseDescription, { color: colors.textSecondary }]}>
        {item.description}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>
          {workout.name}
        </Text>
        <View style={{ width: 24 }} />
      </View>

      {isWorkoutActive && (
        <View style={[styles.timerContainer, { backgroundColor: colors.primary }]}>
          <Text style={styles.timerText}>{formatTime(timer)}</Text>
          <Text style={styles.currentExercise}>
            {workout.exercises[currentExerciseIndex]?.name}
          </Text>
        </View>
      )}

      <FlatList
        data={workout.exercises}
        renderItem={renderExercise}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />

      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.startButton,
            { backgroundColor: isWorkoutActive ? colors.error : colors.primary }
          ]}
          onPress={isWorkoutActive ? () => setIsWorkoutActive(false) : handleStartWorkout}
        >
          <Text style={styles.startButtonText}>
            {isWorkoutActive ? 'Stop Workout' : 'Start Workout'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  timerContainer: {
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  currentExercise: {
    fontSize: 16,
    color: 'white',
    marginTop: 8,
  },
  listContainer: {
    padding: 20,
    paddingTop: 0,
  },
  exerciseCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  activeExercise: {
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  exerciseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: '600',
  },
  exerciseDuration: {
    fontSize: 14,
  },
  exerciseDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    padding: 20,
  },
  startButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  startButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 100,
  },
});

export default WorkoutDetailScreen;