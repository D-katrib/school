import React, { useState } from 'react';
import { StyleSheet, ScrollView, Image, TouchableOpacity, Switch } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';

// Mock user data - replace with actual user from auth context in a real app
const MOCK_USER = {
  id: '123',
  name: 'Alex Smith',
  email: 'alex.smith@example.com',
  role: 'Student',
  grade: '11th Grade',
  avatar: null, // In a real app, this would be a URL to the user's avatar
  enrollmentYear: '2021',
  studentId: 'S20210123',
};

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(colorScheme === 'dark');

  const toggleNotifications = () => {
    setNotificationsEnabled(previousState => !previousState);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled(previousState => !previousState);
    // In a real app, this would update the app's theme
  };

  // Logout function placeholder
  const handleLogout = () => {
    // In a real app, this would clear auth tokens and navigate to login
    console.log('Logging out...');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Profile</ThemedText>
      </ThemedView>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ThemedView style={styles.profileSection}>
          {MOCK_USER.avatar ? (
            <Image source={{ uri: MOCK_USER.avatar }} style={styles.avatar} />
          ) : (
            <ThemedView style={styles.avatarPlaceholder}>
              <ThemedText type="title">
                {MOCK_USER.name.charAt(0)}
              </ThemedText>
            </ThemedView>
          )}
          <ThemedText type="title" style={styles.name}>{MOCK_USER.name}</ThemedText>
          <ThemedText style={styles.role}>{MOCK_USER.role} • {MOCK_USER.grade}</ThemedText>
        </ThemedView>

        <ThemedView style={styles.infoSection}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Personal Information</ThemedText>
          
          <ThemedView style={styles.infoRow}>
            <MaterialIcons name="email" size={20} color="#888" />
            <ThemedText style={styles.infoText}>{MOCK_USER.email}</ThemedText>
          </ThemedView>
          
          <ThemedView style={styles.infoRow}>
            <MaterialIcons name="school" size={20} color="#888" />
            <ThemedText style={styles.infoText}>Enrolled: {MOCK_USER.enrollmentYear}</ThemedText>
          </ThemedView>
          
          <ThemedView style={styles.infoRow}>
            <MaterialIcons name="badge" size={20} color="#888" />
            <ThemedText style={styles.infoText}>ID: {MOCK_USER.studentId}</ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.settingsSection}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Settings</ThemedText>
          
          <ThemedView style={styles.settingRow}>
            <ThemedView style={styles.settingTextContainer}>
              <MaterialIcons name="notifications" size={20} color="#888" />
              <ThemedText style={styles.settingText}>Notifications</ThemedText>
            </ThemedView>
            <Switch
              value={notificationsEnabled}
              onValueChange={toggleNotifications}
            />
          </ThemedView>
          
          <ThemedView style={styles.settingRow}>
            <ThemedView style={styles.settingTextContainer}>
              <MaterialIcons name="dark-mode" size={20} color="#888" />
              <ThemedText style={styles.settingText}>Dark Mode</ThemedText>
            </ThemedView>
            <Switch
              value={darkModeEnabled}
              onValueChange={toggleDarkMode}
            />
          </ThemedView>
          
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={20} color="#fff" />
            <ThemedText style={styles.logoutText}>Logout</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  scrollContent: {
    padding: 16,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    marginVertical: 8,
  },
  role: {
    color: '#888',
  },
  infoSection: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  settingsSection: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoText: {
    marginLeft: 12,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  settingTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    marginLeft: 12,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F44336',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
}); 