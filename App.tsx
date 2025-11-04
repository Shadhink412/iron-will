
import React, { useState } from 'react';
import HomeScreen from './components/screens/HomeScreen';
import CommunityScreen from './components/screens/CommunityScreen';
import JournalScreen from './components/screens/JournalScreen';
import RelaxScreen from './components/screens/RelaxScreen';
import BottomNav from './components/shared/BottomNav';
import { AppProvider } from './context/AppContext';
import type { View } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('home');

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return <HomeScreen />;
      case 'community':
        return <CommunityScreen />;
      case 'journal':
        return <JournalScreen />;
      case 'relax':
        return <RelaxScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <AppProvider>
      <div className="min-h-screen font-sans text-gray-800 bg-gray-50 dark:bg-gray-900 dark:text-gray-200">
        <div className="max-w-md mx-auto h-screen flex flex-col">
          <main className="flex-1 overflow-y-auto pb-20">
            {renderView()}
          </main>
          <BottomNav activeView={activeView} setActiveView={setActiveView} />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
