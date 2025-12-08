import AsyncStorage from '@react-native-async-storage/async-storage';
import { LevelType, OnboardingData } from '../onboarding/onboarding';

const ONBOARDING_KEY = '@onboarding_completed';

export const OnboardingService = {
  async hasCompletedOnboarding(): Promise<boolean> {
    try {
      const value = await AsyncStorage.getItem(ONBOARDING_KEY);
      return value === 'true';
    } catch (error) {
      console.error('Error checking onboarding:', error);
      return false;
    }
  },

  async getUserLevel(): Promise<LevelType | null> {
    try {
      const level = await AsyncStorage.getItem('@user_level');
      // Validate that it's a valid LevelType
      if (level === 'beginner' || level === 'intermediate' || level === 'expert') {
        return level as LevelType;
      }
      return null;
    } catch (error) {
      console.error('Error getting user level:', error);
      return null;
    }
  },

  async getUserLanguage(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem('@user_language');
    } catch (error) {
      console.error('Error getting user language:', error);
      return null;
    }
  },

  async saveOnboardingData(data: OnboardingData): Promise<void> {
    try {
      await AsyncStorage.setItem(ONBOARDING_KEY, 'true');
      await AsyncStorage.setItem('@user_language', data.language);
      await AsyncStorage.setItem('@user_level', data.level);
      await AsyncStorage.setItem('@user_score', data.score.toString());
    } catch (error) {
      console.error('Error saving onboarding:', error);
      throw error;
    }
  },

  async clearOnboarding(): Promise<void> {
    try {
      await AsyncStorage.removeItem(ONBOARDING_KEY);
      await AsyncStorage.removeItem('@user_language');
      await AsyncStorage.removeItem('@user_level');
      await AsyncStorage.removeItem('@user_score');
    } catch (error) {
      console.error('Error clearing onboarding:', error);
    }
  }
};