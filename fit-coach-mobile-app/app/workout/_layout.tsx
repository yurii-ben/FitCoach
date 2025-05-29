import { Stack } from 'expo-router';

export default function WorkoutLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="exercise/[id]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
} 