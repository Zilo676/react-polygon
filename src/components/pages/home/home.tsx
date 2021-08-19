import React from 'react';
import { useState } from 'react';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

const Home = () => {

  const [user, setUser] = useState<GoogleLoginResponse>();

  const handleOnSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if (response && response['profileObj']) {
      setUser(response as GoogleLoginResponse);
    }
    console.log(response);
  }

  return (
    <div>
      <h3>Home</h3>
      <GoogleLogin
        clientId={'869619158112-f9rc4h822lo4mba2g7tql6ks8q31k8jb.apps.googleusercontent.com'}
        buttonText={'Login'}
        onSuccess={handleOnSuccess}
        onFailure={handleOnSuccess}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />

      {user &&
        <div>
          {user.profileObj.email}
        </div>}
    </div>
  );
}

export { Home }