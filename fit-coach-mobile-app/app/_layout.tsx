import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider } from '../contexts/ThemeContext';
import { WorkoutProvider } from '../contexts/WorkoutContext';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <WorkoutProvider>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: '#666',
            tabBarInactiveTintColor: '#999',
            headerShown: false,
            tabBarStyle: {
              height: 80,
              paddingTop: 8,
              paddingBottom: 24,
              backgroundColor: '#FFFFFF',
              borderTopWidth: 1,
              borderTopColor: '#E5E5E5',
            },
            tabBarLabelStyle: {
              fontSize: 12,
              paddingBottom: 4,
            },
          }}
        >
          <Tabs.Screen
            name="workout"
            options={{
              title: 'Workout',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="fitness" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="progress"
            options={{
              title: 'Progress',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="stats-chart" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="chat"
            options={{
              title: 'Chat',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="chatbubble-ellipses" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="learn"
            options={{
              title: 'Learn',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="book" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="settings"
            options={{
              title: 'Settings',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="settings" size={size} color={color} />
              ),
            }}
          />
        </Tabs>
      </WorkoutProvider>
    </ThemeProvider>
  );
}