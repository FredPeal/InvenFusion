import React, { useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Signin = () => {
  useEffect(() => {
    if (window.AppleID) {
      window.AppleID.auth.init({
        clientId: 'com.example.web', // Reemplaza esto con tu ID de cliente de Apple
        scope: 'name email',
        redirectURI: 'https://example.com/auth/callback', // Reemplaza esto con tu URL de redireccionamiento
        state: 'state',
        usePopup: true // Puedes cambiar esto a false si prefieres redireccionar en lugar de usar un popup
      });
    }
  }, []);

  const handleAppleSignIn = () => {
    window.AppleID.auth.signIn();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h2 className="mb-6 text-xl font-semibold text-gray-700 dark:text-gray-200">Sign In</h2>
        <div className="mb-4">
          <GoogleOAuthProvider clientId="398891135650-bfi8tetpvu5j21tf87t2mb30oa841isf.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={credentialResponse => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
              useOneTap
            />
          </GoogleOAuthProvider>
        </div>
        <div className="mt-4">
          <button
            onClick={handleAppleSignIn}
            style={{
              background: 'black',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%'
            }}
          >
            <img
              src="https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple/images/white_2x.png"
              alt="Apple logo"
              style={{ marginRight: '10px', height: '20px' }}
            />
            Sign in with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
