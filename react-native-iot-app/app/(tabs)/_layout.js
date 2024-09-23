import { Tabs, Stack } from "expo-router";
import {FontAwesome} from "@expo/vector-icons"
import ProtectedRoute from "../../component/ProtectedRoute";


export default function RootLayout() {
    return (
      <ProtectedRoute>
        <Tabs screenOptions={{ tabBarActiveTintColor: "#8ac926" }}>
          <Tabs.Screen
            name="index"
            options={{
              headerShown: false,
              title: "Map",
              tabBarIcon: ({ color }) => (
                <FontAwesome name="map" color={color} size={28} />
              ),
            }}
          />

          <Tabs.Screen
            name="visualization"
            options={{
              headerShown: false,
              title: "Visualization",
              tabBarIcon: ({ color }) => (
                <FontAwesome name="line-chart" color={color} size={28} />
              ),
            }}
          />

          <Tabs.Screen
            name="summary"
            options={{
              headerShown: false,
              title: "Summary",
              tabBarIcon: ({ color }) => (
                <FontAwesome name="book" color={color} size={28} />
              ),
            }}
          />
          <Tabs.Screen
            name="exports"
            options={{
              headerShown: false,
              title: "Exports",
              tabBarIcon: ({ color }) => (
                <FontAwesome name="file" color={color} size={28} />
              ),
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              headerShown: false,
              title: "Profile",
              tabBarIcon: ({ color }) => (
                <FontAwesome name="user" color={color} size={28} />
              ),
            }}
          />
        </Tabs>
      </ProtectedRoute>
    );
    
} 