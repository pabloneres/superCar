import {
    KeyboardAvoidingView,
    Platform,
    View,
    ViewStyle,
    StatusBar,
} from "react-native"

interface ViewScreenComponentProps {
    children: React.ReactNode
    enableStatusBar?: boolean
    hasForm?: boolean
    style?: ViewStyle
}

export default function ViewScreenComponent({
    children,
    enableStatusBar = false,
    hasForm = false,
    style,
}: ViewScreenComponentProps) {
    const ComponentView = hasForm ? KeyboardAvoidingView : View

    let viewProps: any = {
        style: {
            flex: 1,
            backgroundColor: "#fff",
            ...style,
        },
    }

    const isIos = Platform.OS === "ios"

    if (isIos && hasForm) {
        viewProps = {
            ...viewProps,
            behavior: isIos ? "padding" : "height",
            contentContainerStyle: {
                flex: 1,
            },
        }
    }

    return (
        <ComponentView {...viewProps}>
            {enableStatusBar && (
                <View
                    style={{
                        height: 20 + 5,
                    }}
                />
            )}
            {enableStatusBar && <StatusBar translucent />}
            {children}
        </ComponentView>
    )
}
