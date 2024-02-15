import React from 'react';
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import DashboardStyles from './styleHome.js';
import { FakeActivity } from '../../fakeData/FakeActivity.js'
import { FakeSymptomes } from '../../fakeData/FakeSymptome.js';
import { FakeDoctor } from '../../fakeData/FakeDoctor.js';
import Activity from '../../components/ActivityItems/Activity.js';
import Symptomes from '../../components/SympomesItems/Symptomes.js';
const Home = () => {

  const [showAllDoctors, setShowAllDoctors] = React.useState(false);

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
      <View style={DashboardStyles.title}>
        <Text style={DashboardStyles.titleBold}>Quells symptoms present vous ?</Text>
      </View>

      <FlatList
        data={FakeSymptomes}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={DashboardStyles.scrollableList}
        renderItem={({ item }) => {
          return (
            <Symptomes item={item} />)
        }}
      />
      {/*fin de liste de symptoms */}
      {/* Docteur List */}
      <View style={DashboardStyles.title_space_between}>
        <Text style={DashboardStyles.titleBold}>Nos Docteurs</Text>
        <TouchableOpacity onPress={() => setShowAllDoctors(!showAllDoctors)}>
          <Text style={DashboardStyles.link}>{showAllDoctors ? 'Afficher moins' : 'Afficher tout'}</Text>
        </TouchableOpacity>
      </View>

      <View style={DashboardStyles.doctorsContainer}>

        {
          showAllDoctors ?
            FakeDoctor.map((doctor, index) => {
              return (
                <TouchableOpacity key={doctor.id} style={DashboardStyles.doctorCart}>
                  <Image
                    source={{ uri: `${doctor.img}` }}
                    style={DashboardStyles.doctorImg} />
                  <View style={DashboardStyles.doctorInfo}>
                    <Text style={DashboardStyles.doctorName}>{doctor.fullName}</Text>
                    <Text style={DashboardStyles.doctorSpec}>{doctor.speciality}</Text>
                  </View>

                </TouchableOpacity>
              )
            }) :
            FakeDoctor.slice(0, 3).map((doctor, index) => {
              return (
                <TouchableOpacity key={doctor.id} style={DashboardStyles.doctorCart}>
                  <Image
                    source={{ uri: `${doctor.img}` }}
                    style={DashboardStyles.doctorImg} />
                  <View style={DashboardStyles.doctorInfo}>
                    <Text style={DashboardStyles.doctorName}>{doctor.fullName}</Text>
                    <Text style={DashboardStyles.doctorSpec}>{doctor.speciality}</Text>
                  </View>

                </TouchableOpacity>
              )
            })


        }
      </View>
      {/*fin de  Docteur List */}
    </ScrollView>
  );
}

export default Home;