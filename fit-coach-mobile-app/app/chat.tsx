import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const ChatScreen = () => {
  const router = useRouter();

  const messages = [
    {
      text: 'Hi, my name is Sam! I would be your personal coach.',
      time: '14:38',
      isMe: false,
    },
    {
      text: "Let's discuss your training plan.",
      time: '14:38',
      isMe: false,
    },
    {
      text: 'How do you feel about the suggested exercises?',
      time: '14:38',
      isMe: false,
    },
    {
      text: 'The exercises look good, but I might need help with proper form.',
      time: '14:39',
      isMe: true,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.headerButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
        
        <View style={styles.profileInfo}>
          <Image 
            source={require('../assets/images/coach.jpg')}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.profileName}>Tillie Larson</Text>
            <Text style={styles.profileStatus}>Online</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="ellipsis-horizontal" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <ScrollView 
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
      >
        {messages.map((message, index) => (
          <View 
            key={index} 
            style={[
              styles.messageWrapper,
              message.isMe ? styles.myMessageWrapper : null
            ]}
          >
            <View style={[
              styles.message,
              message.isMe ? styles.myMessage : null
            ]}>
              <Text style={[
                styles.messageText,
                message.isMe ? styles.myMessageText : null
              ]}>{message.text}</Text>
            </View>
            <Text style={[
              styles.messageTime,
              message.isMe ? styles.myMessageTime : null
            ]}>{message.time}</Text>
          </View>
        ))}

        {/* Video Message */}
        <View style={[styles.messageWrapper]}>
          <View style={styles.videoMessage}>
            <Image 
              source={require('../assets/images/workout-video.jpg')}
              style={styles.videoThumbnail}
            />
            <View style={styles.playButton}>
              <Ionicons name="play" size={24} color="#fff" />
            </View>
            <View style={styles.videoTime}>
              <Text style={styles.videoTimeText}>14:37</Text>
              <Ionicons name="volume-mute" size={16} color="#fff" />
            </View>
          </View>
          <Text style={styles.messageTime}>14:37</Text>
        </View>
      </ScrollView>

      {/* Input Area */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputContainer}
      >
        <TouchableOpacity style={styles.inputButton}>
          <Ionicons name="attach" size={24} color="#666" />
        </TouchableOpacity>
        
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Type message..."
            placeholderTextColor="#999"
          />
        </View>

        <TouchableOpacity style={styles.inputButton}>
          <Ionicons name="mic" size={24} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="play" size={20} color="#fff" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  profileStatus: {
    fontSize: 14,
    color: '#666',
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 16,
    gap: 16,
  },
  messageWrapper: {
    alignItems: 'flex-start',
    maxWidth: '80%',
  },
  myMessageWrapper: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  message: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 16,
    borderTopLeftRadius: 4,
  },
  myMessage: {
    backgroundColor: '#333',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 4,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  myMessageText: {
    color: '#fff',
  },
  messageTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  myMessageTime: {
    alignSelf: 'flex-end',
  },
  videoMessage: {
    width: 240,
    height: 320,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  videoThumbnail: {
    width: '100%',
    height: '100%',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -20 }, { translateY: -20 }],
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoTime: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  videoTimeText: {
    color: '#fff',
    fontSize: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  inputButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputWrapper: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChatScreen; 