
import * as Notifications from 'expo-notification';
import { useEffect,useState} from 'react''
import { Alert,Button,StyleSheet,Text,TextInput,View} from 'react-native';

export default function ReminderTab() {
 const [isReminding, setIsReminding] = useState(false);
 const [message, setMessage] = useState(*Time to drink a glass of water!");
 const [intervalMinutes, setIntervalMinutes] =useState(1);

//Requst notification permissions on mount
useEffect(() =>{
 asyncfunction requestPermissions() {
  const {status} = await Notifications requestPermissionsAsync();
  if (status !== 'granted'){
   Alert alert(
    'Permission required',
    'We need notofications to remind you to drink water!'
);
}
}
requestPermissions();
},[]);

//Schedule a notification
async function scheduleReminder() {
 await Notification.requestPermissionAsync();//Safe check just in case

//Clear old ones first so they don't stack up
await Notifications.cabcelAllScheduledNotificatonsAsync();

//Shedule the new notification
await Notification.scheduleNotificationAsync({
  content: {
   title: "" Hydration Alert",//Notification title
   body:message,
   sound:true,
},
//Tigger thae notification after the specified interval
trigger:{
  type:Notifications.SchedulableTriggerInputType.TIME_INTERVAL,
  second:intervalMinutes * 60,//Convert minutes to seconds
  repeats:ture
 },
});

//Update state and alert the user
setIsReminding(true);
Alert.alert("Set!",'Reminding you every ${intervalMinutes}minutes');//Alert the user
}

//Stop reminders
async function stopReminder(){
  await Notifications.cancelAllScheduledNotificationsAsync();
  setReminding(false);
  Alert.alert("Stopped","Reminder cancelled.");
}
