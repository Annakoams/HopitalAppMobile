import React from 'react';
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import dashbordStyles from './styleHome.js';
import { FakeActivity } from '../../fakeData/FakeActivity.js'
// import SVG_HOSPITAL from '../../assets/images/svg/undraw_medicine_b-1-ol.svg'

const Home = () => {

  return (
    <ScrollView>
      {/* debut de header */}
      <View style={dashbordStyles.header}>
        <Text style={dashbordStyles.userName}>John Doe</Text>
        <Image source={require('../../assets/photo_profil.jpeg')} style={dashbordStyles.userImg} />
      </View>
      {/* fin de header */}

      {/* Liste des activités */}
      <FlatList
        data={FakeActivity}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={dashbordStyles.scrollableList}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={dashbordStyles.scrollableListItem}>
              {/* <SVG_HOSPITAL width={48} height={48} /> */}
              <Text style={dashbordStyles.mainText}>{item.mainText}</Text>
              <Text style={dashbordStyles.subText}>{item.subText}</Text>
            </TouchableOpacity>)
        }}
      />
      {/* Fin de la liste des activités */}
    </ScrollView>
  );
}

export default Home;