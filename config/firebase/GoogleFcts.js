import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const _signInWithGoogle = async () => {
  try {
    GoogleSignin.configure({
      webClientId: '297567209629-sf7apr2ttopif59bqknijajtokle4l40.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });

    await GoogleSignin.hasPlayServices();

    const { idToken, user } = await GoogleSignin.signIn(); // Call it once

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    await auth().signInWithCredential(googleCredential); // Use await here

    return user; // Return the user info
  } catch (error) {
    console.log({ error });
  }
};


export const _signOut = async () => {
  console.log("SignOut ......");
    try {
        // await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        await auth().signOut();
    } catch (error) {
        console.error(error);
    }
    };