import { Redirect } from "expo-router";
import { Fragment } from "react";
import { Text } from "react-native";

export default function Page() {
    return (
        <Redirect
            href={"(auth)/login"}
        />
    )
}