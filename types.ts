import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type Props = NativeStackScreenProps<RootStackParamList>;

export type RootStackParamList = {
    EnterPhone: undefined; // No parameters for this screen
    EnterCode: { phone: string }; // 'phone' is required for this screen
    // Add other screens here as needed
};