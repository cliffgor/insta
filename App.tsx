import {Image, StyleSheet, Text, View} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';

const App = () => {
  return (
    <View
      style={styles.post}>
    {/* Post Header */}  
    <View style={styles.header}>
      <Image source={{uri: "https://cliffgor.vercel.app/assets/img/ggj.png"}} style={styles.userAvatar}/>
      <Text style={styles.userName}>Cliff Gor</Text>
      <Entypo name="dots-three-horizontal" size={16} style={styles.threeDots}/>
    </View>
    {/* Post Content */}
    <Image source={{uri: "https://cliffgor.vercel.app/assets/img/root/Faceless%20HACKERS.png"}} style={styles.image}/>

    {/* Footer */}
    <View style={styles.footer}>
    <View style={styles.iconContainer}>
      <AntDesign 
        name = {'hearto'}
        size={24}
        style={styles.icon}
      />
      <IonicIcons name="chatbubble-outline" size={25} style={styles.icon}/>
      <Feather name="send" size={24} style={styles.icon}/>
      <Feather name="bookmark" size={24} style={{marginLeft: 'auto'}}/>
    </View>
    {/* Likes */}
    <Text style={styles.text}>
      Liked by {''}
      <Text style={styles.bold}>cliffgor</Text> and {''}
      <Text style={styles.bold}>100 others</Text>
    </Text>
    </View>
    
    {/* Post Description */}
    <Text style={styles.text}>
      <Text style={styles.bold}>cliffgor</Text> {''}
      With all my dedication and always contributing to competitions and hackathons, I have attained considerable wins in various paces in Tech.
    </Text>

    {/* Post Comments */}
    <Text>View all 200 comments</Text>
    <View style={styles.comment}>
    <Text style={styles.commentText}>
      <Text style={styles.bold}>cliffgor</Text> {''}
      Amazing work bro 👏👏👏
    </Text>
    <AntDesign 
        name = {'hearto'}
        style={styles.icon}
      />
    </View>

    {/* Posted Date */}
    <Text>2 HOURS AGO</Text>
   
  </View>
  )
};

const styles = StyleSheet.create({
  post: {
    // backgroundColor: colors.white,
  },

  image: {
    width: '100%',
    aspectRatio: 4/2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.white,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  footer: {
    padding: 10,
  },
  text: {
    color: colors.white,
    lineHeight: 18,
  },
  bold: {
    fontWeight: fonts.weight.bold,
    color: colors.white,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    color: colors.white,
    flex: 1,
    lineHeight: 18,
  },
});

export default App;
