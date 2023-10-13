// import React from 'react'
// import { StatusBar, TouchableOpacity, ImageBackground } from 'react-native'
// import { Container, View, Text } from 'native-base'

// import NavigationService from '@Service/Navigation'

// import Styles from '@Screen/Public/Intro/Style'

// export default class extends React.Component {
//   render () {
//     return (
//       <Container>
//         <StatusBar backgroundColor='#111' animated barStyle='light-content' />
//         <ImageBackground source={{ uri: 'https://images.pexels.com/photos/1667274/pexels-photo-1667274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }} style={Styles.introImg}>
//           <View style={Styles.introView}>
//             <Text style={Styles.introText}>cinegorntheme</Text>
//           </View>
//           <TouchableOpacity style={Styles.introBtn} onPress={() => {
//             NavigationService.navigate('PublicHome')
//           }}>
//             <Text style={Styles.introBtnText}>Book Now</Text>
//           </TouchableOpacity>
//         </ImageBackground>
//       </Container>
//     )
//   }
// }

import React from 'react';
import { StatusBar, TouchableOpacity, ImageBackground, View, Text } from 'react-native';
import { Container } from 'native-base';
import Styles from './Style';

function Intro({ navigation }) {
  return (
    <Container>
      <StatusBar backgroundColor="#111" animated barStyle="light-content" />
      <ImageBackground
        source={{
          // uri: 'https://images.pexels.com/photos/1667274/pexels-photo-1667274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          uri: 'https://previews.123rf.com/images/artemfurman/artemfurman1501/artemfurman150100033/35185955-empty-cinema-auditorium-with-screen-and-seats.jpg'
        }}
        style={Styles.introImg}>
        <View style={Styles.introView}>
          <Text style={Styles.introText}>cinegorntheme</Text>
        </View>
        <TouchableOpacity
          style={Styles.introBtn}
          onPress={() => {
            navigation.navigate('PublicHome');
          }}
        >
          <Text style={Styles.introBtnText}>Book Now</Text>
        </TouchableOpacity>
      </ImageBackground>
    </Container>

  );
}

export default Intro;
