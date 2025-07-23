import { type CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_KEY;

function GoogleLoginButton({ setInfo }: { setInfo: (r: CredentialResponse) => void }) {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <GoogleLogin
        onSuccess={(response) => {
          setInfo(response);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </GoogleOAuthProvider>
  );
}

export default GoogleLoginButton;
