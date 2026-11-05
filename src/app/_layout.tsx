import * as Notifications from 'expo-notifications';
import {Tabs} from 'expo-router';
import {Text} from 'react-native';

//Global Foreground Handler
Notifications setNotificationHandler({
 handleNotification: async () =>({
  shouldPlaySound:true,
  shouldSetBage: false,
  shouldShowBanner: true,
  shouldShowList: true,
}),
   });

export default function TabLayout() {
 return(
  <Tab screenOptions={{ tabBarActiveTintColor: '#0EA5E9'}}>
   <Tabs Screen
    name="index" //Search Google for clock,tips and about emojis to add to the tabs.
    options={{ title: 'Reminder',tabBarIcon: ()=><Text> </Text>}}
  />
</Tabs>
//Create another two tabs screen: "Tips & About".
);

}

