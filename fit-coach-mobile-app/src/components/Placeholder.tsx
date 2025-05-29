import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PlaceholderProps {
  width: number;
  height: number;
  text?: string;
  backgroundColor?: string;
  textColor?: string;
}

export const Placeholder: React.FC<PlaceholderProps> = ({
  width,
  height,
  text,
  backgroundColor = '#F5F5F5',
  textColor = '#666',
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          width,
          height,
          backgroundColor,
        },
      ]}
    >
      {text && <Text style={[styles.text, { color: textColor }]}>{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default Placeholder; 