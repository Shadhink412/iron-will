
export interface Addiction {
  id: string;
  name: string;
  startDate: number; // Unix timestamp
}

export interface JournalEntry {
  id: string;
  date: number; // Unix timestamp
  content: string;
  mood: 'great' | 'good' | 'neutral' | 'bad' | 'awful';
}

export type BadgeTier = 'none' | 'bronze' | 'silver' | 'gold' | 'platinum';

export interface ChatMessage {
  id: string;
  sender: string;
  message: string;
  timestamp: number;
  goal: string;
  streakDays: number;
}

export type View = 'home' | 'community' | 'journal' | 'relax';

export interface TimeDuration {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}