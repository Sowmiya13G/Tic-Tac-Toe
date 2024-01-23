import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import theme from '../../constants/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
backgroundColor:'white',
  },
  button: {
    padding: 10,
    backgroundColor: theme.backgroundColor.fillingBlue,
    borderRadius: 5,
    margin: 15,
  },
  buttonText: {
    color: 'black',
  },
  status: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  board: {
    borderWidth: 1,
    borderColor: 'black',
  },
  row: {
    flexDirection: 'row',
    color: 'black'
  },
  square: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  squareText: {
    fontSize: 24,
    color: 'black'
  },
});