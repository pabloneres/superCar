import { Stack } from "expo-router";

export default function Layout() {
    return <Stack
        initialRouteName="home"
        screenOptions={{
            headerShown: false,
            animationDuration: 1000
        }}
    />
}