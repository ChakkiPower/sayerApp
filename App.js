import { Navigation } from "react-native-navigation";
import MainScreen from './screens/MainScreen';
import CommentsScreen from './screens/CommentsScreen';
import AddItemScreen from './screens/AddItemScreen';

Navigation.registerComponent(`empeekTestApp.MainScreen`, () => MainScreen);
Navigation.registerComponent(`empeekTestApp.CommentsScreen`, () => CommentsScreen);
Navigation.registerComponent(`empeekTestApp.AddItemScreen`, () => AddItemScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: `empeekTestApp.MainScreen`,
            },
          },
        ],
      },
    },
  });
});
