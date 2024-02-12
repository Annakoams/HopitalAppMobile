import React from 'react';
import { View, Text, ScrollView, Image, FlatList } from 'react-native';
import DashboardStyles from './styleHome.js';
import { FakeActivity } from '../../fakeData/FakeActivity.js'
import Activity from '../../components/ActivityItems/Activity.js';
const Home = () => {

  return (
    <ScrollView>
      {/* debut de header */}
      <View style={DashboardStyles.header}>
        <Text style={DashboardStyles.userName}>John Doe</Text>
        <Image source={require('../../assets/photo_profile.jpeg')} style={DashboardStyles.userImg} />
      </View>
      {/* fin de header */}

      {/* Liste des activités */}
      <FlatList
        data={FakeActivity}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={DashboardStyles.scrollableList}
        renderItem={({ item }) => {
          return (
            <Activity item={item} />)
        }}
      />
      {/* Fin de la liste des activités */}
      {/* liste de symptoms */}
      <View styles={DashboardStyles.title}>
        <Text styles={DashboardStyles.titleBold}>Quells symptoms present vous ?</Text>
      </View>
      <FlatList
        data={FakeActivity}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={DashboardStyles.scrollableList}
        renderItem={({ item }) => {
          return (
            <Activity item={item} />)
        }}
      />
    </ScrollView>
  );
}

export default Home;