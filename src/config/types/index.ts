import {StackNavigationProp} from '@react-navigation/stack';

// Route Types
export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  MainApp: undefined;
  Transaction: undefined;
  CollectionDrag: undefined;
  ModalTransaction: undefined;
};

// Route Navigation Types
type ScreenNavigationProps<ScreenName extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, ScreenName>;
export interface ScreenProps<ScreenName extends keyof RootStackParamList> {
  navigation: ScreenNavigationProps<ScreenName>;
}

export type LoginProps = ScreenProps<'Login'>;
export type MainAppProps = ScreenProps<'MainApp'>;
export type SplashProps = ScreenProps<'Splash'>;
export type TransactionProps = ScreenProps<'Transaction'>;
export type CollectionDragProps = ScreenProps<'CollectionDrag'>;
export type ModalTransactionProps = ScreenProps<'ModalTransaction'>;
