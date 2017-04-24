import { AuthProviders, AuthMethods } from 'angularfire2';


//firebase
export const firebaseConfig = {
    apiKey: "AIzaSyBbqKJFhX2Hi3o73k8l3jMEGa00ZodtyWQ",
    authDomain: "af2-feed.firebaseapp.com",
    databaseURL: "https://af2-feed.firebaseio.com",
    projectId: "af2-feed",
    storageBucket: "af2-feed.appspot.com",
    messagingSenderId: "573128911748"
};


export const firebaseGoogleAuthentication = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}

export const firebaseGithubAuthentication = {
  provider: AuthProviders.Github,
  method: AuthMethods.Popup
}

export const firebaseFacebookAuthentication = {
  provider: AuthProviders.Facebook,
  method: AuthMethods.Popup
}
