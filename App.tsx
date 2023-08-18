import {Text, View} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';

const App = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: colors.white,
      }}>
    <Text style={{color: colors.primary, fontSize: fonts.size.lg}}> Hello World </Text>
 <AntDesign name="home" size={30} color={colors.primary} />
  </View>
  )
};

export default App;
