import EditProfileScreen from "../Screens/account/EditProfileScreen";
import AccountScreen from "../Screens/AccountScreen";
import CheckMailScreen from "../Screens/auth/CheckMailScreen";
import EmergencyContactScreen from "../Screens/auth/EmergencyContactScreen";
import EmergencyScreen from "../Screens/auth/EmergencyScreen";
import ForgetPasswordScreen from "../Screens/auth/ForgetPasswordScreen";
import LoadingScreen from "../Screens/auth/LoadingScreen";
import LoginScreen from "../Screens/auth/LoginScreen";
import NewPasswordScreen from "../Screens/auth/NewPasswordScreen";
import SignupScreen from "../Screens/auth/SignupScreen";
import CartScreen from "../Screens/CartScreen";
import ChatScreen from "../Screens/home/ChatScreen";
import ChildReportScreen from "../Screens/home/ChildReportScreen";
import EnvironmentalReportScreen from "../Screens/home/EnvironmentalReportScreen";
import HomeScreen from "../Screens/home/HomeScreen";
import SecurityBookingsFormScreen from "../Screens/home/SecurityBookingsFormScreen";
import SecurityBookingsScreen from "../Screens/home/SecurityBookingsScreen";
import WelcomeScreen from "../Screens/auth/WelcomeScreen";
import ChildAbuseScreen from "../Screens/home/ChildAbuseScreen";
import SafetyScreen from "../Screens/home/SafetyScreen";
import CreateNewFileScreen from "../Screens/home/CreateNewFile";
import MissingPeopleScreen from "../Screens/home/MissingPeopleScreen";

const LoadingStackScreen =({ navigation })=> <LoadingScreen navigation={navigation}/>
const WelcomeStackScreen =({ navigation })=> <WelcomeScreen navigation={navigation}/>
const EmergencyStackScreen =({ navigation })=> <EmergencyScreen navigation={navigation}/>
const EmergencyContactStackScreen =({ navigation })=> <EmergencyContactScreen navigation={navigation}/>
const SignupStackScreen =({ navigation })=> <SignupScreen navigation={navigation}/>
const LoginStackScreen =({ navigation })=> <LoginScreen navigation={navigation}/>
const ForgetPasswordStackScreen =({ navigation })=> <ForgetPasswordScreen navigation={navigation}/>
const NewPasswordStackScreen =({ navigation })=> <NewPasswordScreen navigation={navigation}/>
const CheckMailStackScreen =({ navigation })=> <CheckMailScreen navigation={navigation}/>
        
  const HomeStackScreen=({ navigation,route }) =><HomeScreen navigation={navigation} route={route}/>
  const AccountStackScreen=({ navigation,route }) =><AccountScreen navigation={navigation} route={route}/>
  const EditProfileStackScreen=({ navigation,route }) =><EditProfileScreen navigation={navigation} route={route}/>
  const ChildReportStackScreen=({ navigation,route }) =><ChildReportScreen navigation={navigation} route={route}/>
  const ChildAbuseStackScreen=({ navigation,route }) =><ChildAbuseScreen navigation={navigation} route={route}/>
  const EnvironmentalReportStackScreen=({ navigation,route }) =><EnvironmentalReportScreen navigation={navigation} route={route}/>
  const SecurityBookingsStackScreen=({ navigation,route }) =><SecurityBookingsScreen navigation={navigation} route={route}/>
  const SecurityBookingsFormStackScreen=({ navigation,route }) =><SecurityBookingsFormScreen navigation={navigation} route={route}/>
  const CartStackScreen=({ navigation,route }) =><CartScreen navigation={navigation} route={route}/>
  const ChatStackScreen=({ navigation,route }) =><ChatScreen navigation={navigation} route={route}/>
  const CreateNewFileStackScreen=({ navigation,route }) =><CreateNewFileScreen navigation={navigation} route={route}/>
  const SafetyStackScreen=({ navigation,route }) =><SafetyScreen navigation={navigation} route={route}/>
  const MissingPeopleStackScreen=({ navigation,route }) =><MissingPeopleScreen navigation={navigation} route={route}/>
 


    
    
    
  export default{
    AccountStackScreen,
    CartStackScreen,
    ChatStackScreen,
    ChildReportStackScreen,
    EditProfileStackScreen,
    EmergencyStackScreen,
    EmergencyContactStackScreen,
    EnvironmentalReportStackScreen,
    LoadingStackScreen,
    WelcomeStackScreen,
    SignupStackScreen,
    LoginStackScreen,
    ForgetPasswordStackScreen,
    NewPasswordStackScreen,
    CheckMailStackScreen,
    HomeStackScreen,
    SecurityBookingsStackScreen,
    SecurityBookingsFormStackScreen,
    ChildAbuseStackScreen,
    SafetyStackScreen,
    CreateNewFileStackScreen,
    MissingPeopleStackScreen
  }