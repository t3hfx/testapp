import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {Navigator} from './navigation/navigation';
import {QueryClient, QueryClientProvider} from 'react-query';
import {StyleSheet} from 'react-native';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.flex}>
        <Navigator />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
export default App;
