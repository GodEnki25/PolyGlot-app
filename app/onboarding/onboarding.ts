// types/onboarding.ts
export type LevelType = 'beginner' | 'intermediate' | 'expert';

export interface OnboardingData {
  language: string;
  level: LevelType;
  score: number;
}

export const LEVEL_INFO = {
  beginner: {
    title: 'Beginner',
    emoji: '🌱',
    description: "Perfect! We'll start with the basics and build a strong foundation.",
    color: '#4CAF50',
  },
  intermediate: {
    title: 'Intermediate',
    emoji: '🚀',
    description: "Great! You have a solid base. We'll help you advance your skills.",
    color: '#FF9800',
  },
  expert: {
    title: 'Expert',
    emoji: '⭐',
    description: "Impressive! We'll challenge you with advanced content.",
    color: '#9C27B0',
  },
} as const;