import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import ReadStoryScreen from './screens/ReadStoryScreen'
import WriteStoryScreen from './screens/WriteStoryScreen'

export default class App extends React.Component{

  render(){
    return (
        <AppContainer/>
      );
    }
  }

  const TabNavigator=createBottomTabNavigator({
    WriteStoryScreen:{screen:WriteStoryScreen},
    ReadStoryScreen:{screen:ReadStoryScreen}
  },
  {
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon:({})=>{
      const routeName = navigation.state.routeName
      if(routeName==='WriteStoryScreen'){
        return(
          <Image style={{width:40,height:40}}
            source={require('./PRO+C70+Images/write.png')}
          />
        )
      } else if(routeName==='ReadStoryScreen'){
        return(
          <Image style={{width:40,height:40}}
            source={require('./PRO+C70+Images/read.png')}
          />
        )
      }
    }
  })
}
  )
  
  const AppContainer = createAppContainer(TabNavigator);

