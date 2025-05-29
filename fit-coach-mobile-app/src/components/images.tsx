import React from 'react';
import { Placeholder } from './Placeholder';

export const blogImages = {
  food: () => (
    <Placeholder width={160} height={160} text="Food" backgroundColor="#E8F5E9" />
  ),
  sleep: () => (
    <Placeholder width={160} height={160} text="Sleep" backgroundColor="#EDE7F6" />
  ),
  macros: () => (
    <Placeholder width={160} height={160} text="Macros" backgroundColor="#FFF3E0" />
  ),
  recovery: () => (
    <Placeholder width={160} height={160} text="Recovery" backgroundColor="#F3E5F5" />
  ),
};

export const workoutImages = {
  strength: () => (
    <Placeholder width={80} height={80} text="Strength" backgroundColor="#E3F2FD" />
  ),
  recovery: () => (
    <Placeholder width={80} height={80} text="Recovery" backgroundColor="#F3E5F5" />
  ),
}; 