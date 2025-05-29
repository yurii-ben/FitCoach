import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Exercise {
  name: string;
  description: string;
  duration: number; // in seconds
}

interface Workout {
  id: number;
  name: string;
  description: string;
  duration: number; // in minutes
  exercises: Exercise[];
}

interface UserStats {
  completedWorkouts: number;
  currentStreak: number;
  totalMinutes: number;
}

interface WorkoutContextType {
  workouts: Workout[];
  userStats: UserStats;
  startWorkout: (workoutId: number) => void;
  completeExercise: (workoutId: number, exerciseIndex: number) => void;
  completeWorkout: (workoutId: number) => void;
}

const defaultWorkouts: Workout[] = [
  {
    id: 1,
    name: 'Upper Body Strength',
    description: 'Build upper body strength with targeted exercises',
    duration: 25,
    exercises: [
      {
        name: 'Push-ups',
        description: 'Classic push-ups to build chest and arm strength',
        duration: 60,
      },
      {
        name: 'Plank',
        description: 'Hold a plank position to strengthen your core',
        duration: 45,
      },
      {
        name: 'Mountain Climbers',
        description: 'Dynamic exercise for cardio and core strength',
        duration: 30,
      },
      {
        name: 'Tricep Dips',
        description: 'Target your triceps using a chair or bench',
        duration: 45,
      },
    ],
  },
  {
    id: 2,
    name: 'Full Body HIIT',
    description: 'High-intensity interval training for full body',
    duration: 20,
    exercises: [
      {
        name: 'Burpees',
        description: 'Full-body explosive movement',
        duration: 30,
      },
      {
        name: 'Jump Squats',
        description: 'Explosive squats for leg power',
        duration: 30,
      },
      {
        name: 'High Knees',
        description: 'Running in place with high knees',
        duration: 30,
      },
      {
        name: 'Rest',
        description: 'Take a short break',
        duration: 30,
      },
    ],
  },
  {
    id: 3,
    name: 'Lower Body Focus',
    description: 'Strengthen your legs and glutes',
    duration: 30,
    exercises: [
      {
        name: 'Squats',
        description: 'Basic squats for leg strength',
        duration: 60,
      },
      {
        name: 'Lunges',
        description: 'Forward lunges for leg and glute strength',
        duration: 60,
      },
      {
        name: 'Wall Sit',
        description: 'Isometric exercise against the wall',
        duration: 45,
      },
      {
        name: 'Calf Raises',
        description: 'Stand on toes to strengthen calves',
        duration: 30,
      },
    ],
  },
];

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export const WorkoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [workouts] = useState<Workout[]>(defaultWorkouts);
  const [userStats, setUserStats] = useState<UserStats>({
    completedWorkouts: 0,
    currentStreak: 0,
    totalMinutes: 0,
  });

  useEffect(() => {
    loadUserStats();
  }, []);

  const loadUserStats = async () => {
    try {
      const savedStats = await AsyncStorage.getItem('userStats');
      if (savedStats) {
        setUserStats(JSON.parse(savedStats));
      }
    } catch (error) {
      console.log('Error loading user stats:', error);
    }
  };

  const saveUserStats = async (stats: UserStats) => {
    try {
      await AsyncStorage.setItem('userStats', JSON.stringify(stats));
    } catch (error) {
      console.log('Error saving user stats:', error);
    }
  };

  const startWorkout = (workoutId: number) => {
    console.log(`Starting workout ${workoutId}`);
  };

  const completeExercise = (workoutId: number, exerciseIndex: number) => {
    console.log(`Completed exercise ${exerciseIndex} in workout ${workoutId}`);
  };

  const completeWorkout = (workoutId: number) => {
    const workout = workouts.find(w => w.id === workoutId);
    if (workout) {
      const newStats = {
        ...userStats,
        completedWorkouts: userStats.completedWorkouts + 1,
        totalMinutes: userStats.totalMinutes + workout.duration,
        currentStreak: userStats.currentStreak + 1,
      };
      setUserStats(newStats);
      saveUserStats(newStats);
    }
  };

  return (
    <WorkoutContext.Provider
      value={{
        workouts,
        userStats,
        startWorkout,
        completeExercise,
        completeWorkout,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => {
  const context = useContext(WorkoutContext);
  if (context === undefined) {
    throw new Error('useWorkout must be used within a WorkoutProvider');
  }
  return context;
};