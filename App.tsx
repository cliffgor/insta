import { StyleSheet, View } from 'react-native';

import FeedPost from './src/components/FeedPost/FeedPost';
import colors from './src/theme/colors';

const App = () => {
  return (
    <View style={styles.app}>
      <FeedPost/>
    </View>
  
  )
};

const styles = StyleSheet.create({
  app :{
    flex: 1,
    backgroundColor: colors.white,
  }
});

export default App;
