import {Text, View, Image} from 'react-native';
import React from 'react';
// import './style';
import styles from './style';
import Icon from 'react-native-vector-icons/Entypo';

export default function HeaderMain() {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={{uri: 'https://cdn.getir.com/misc/emoji/house.png'}}
        />

        <View style={styles.headerOneView}>
          <Text
            style={{fontWeight: 'bold', fontSize: 16, paddingHorizontal: '3%'}}>
            Ev
          </Text>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 12,
              color: 'gray',
              paddingHorizontal: '3%',
            }}>
            Alpay Blv. MehmetAkif Mahallesi..
          </Text>
          <Icon name="chevron-down" size={24} color="black" />
        </View>
        <View style={styles.headerTwo}>
          <Text style={{fontSize: 13, fontWeight: '400', color: '#5D3EBD'}}>
            TVS
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              color: '#5D3EBD',
              marginVertical: '6%',
            }}>
            <Text style={{fontSize: 20}}>13</Text>dk
          </Text>
        </View>
      </View>

      <View></View>
    </View>
  );
}
