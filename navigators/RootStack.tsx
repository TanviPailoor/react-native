import React, { FunctionComponent } from "react";
import Welcome from "./../screen/Welcome";
import Home from "./../screen/Home";
// react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../component/colors";
import Greeting from "../component/Header/Greeting";
import Profile from "../component/Header/Profile";
import Avi from "../assets/avi/avatar.jpg"
export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList> ();

const RootStack: FunctionComponent = () => {
    return (
			<>
				<NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: colors.graylight,
                            borderBottomWidth: 0,
                            shadowColor: "transparent",
                            shadowOpacity: 0,
                            elevation: 0,
                            height:120,
                        },
                        headerTintColor: colors.secondary,
                        headerRightContainerStyle: {
                            paddingRight:25,
                        },
                        headerLeftContainerStyle: {
                            paddingLeft:10,
                        },
                        headerRight: () => (
                            <Profile
                                img={Avi}
                                imgContainerStyle={{backgroundColor:colors.tertiary}}
                            />
                        )
                    }}
                initialRouteName="Home">
						<Stack.Screen
							name="Welcome"
							component={Welcome}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="Home"
							component={Home}
                        options={{
                            headerTitle: (props) => (
                                <Greeting
                                    mainText="Hey Coby!"
                                    subText="Welcome Back"
                                    {...props}
                                />
                            ),
                            headerLeft:()=><></>,
                        }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</>
		);
}
export default RootStack;