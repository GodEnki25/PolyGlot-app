import AsyncStorage from '@react-native-async-storage/async-storage';

export interface UserProfile {
  name?: string;
  targetLanguage: 'spanish' | 'french' | 'english';
  skillLevel: 'beginner' | 'intermediate' | 'expert';
  hasCompletedOnboarding: boolean;
  createdAt: string;
}

const USER_PROFILE_KEY = '@polyglot_user_profile';

export const saveUserProfile = async (profile: UserProfile): Promise<void> => {
  try {
    await AsyncStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
  } catch (error) {
    console.error('Error saving user profile:', error);
  }
};

export const getUserProfile = async (): Promise<UserProfile | null> => {
  try {
    const profileJson = await AsyncStorage.getItem(USER_PROFILE_KEY);
    return profileJson ? JSON.parse(profileJson) : null;
  } catch (error) {
    console.error('Error getting user profile:', error);
    return null;
  }
};

export const updateUserProfile = async (updates: Partial<UserProfile>): Promise<void> => {
  try {
    const currentProfile = await getUserProfile();
    if (currentProfile) {
      await saveUserProfile({ ...currentProfile, ...updates });
    }
  } catch (error) {
    console.error('Error updating user profile:', error);
  }
};

export const clearUserProfile = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(USER_PROFILE_KEY);
  } catch (error) {
    console.error('Error clearing user profile:', error);
  }
};