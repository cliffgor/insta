import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

export default StyleSheet.create({
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
      color: colors.black,
    },
    threeDots: {
      marginLeft: 'auto',
      color: colors.black,
    },
    iconContainer: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    icon: {
      marginHorizontal: 5,
      color: colors.black,
    },
    footer: {
      padding: 10,
    },
    text: {
      color: colors.black,
      lineHeight: 18,
    },
    bold: {
      fontWeight: fonts.weight.bold,
      color: colors.black,
    },
    comment: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    commentText: {
      color: colors.black,
      flex: 1,
      lineHeight: 18,
    },
  });
  