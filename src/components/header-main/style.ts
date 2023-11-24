import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerMain: {
    height: Dimensions.get('screen').height * 0.064,
    backgroundColor: '#f7d102',
  },
  headerOne: {
    backgroundColor: 'white',
    width: '80%',
    height: Dimensions.get('screen').height * 0.064,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5.0,
    elevation: 9,
  },
  headerOneView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftColor: '#f3f2fd',
    borderLeftWidth: 3,
    marginLeft: 5,
  },
  image: {
    width: 30,
    height: 30,
  },
  headerTwo: {
    width: '33%',
    height: Dimensions.get('screen').height * 0.064,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
  },
});

export default styles;
