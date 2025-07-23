import type { CredentialResponse } from '@react-oauth/google';
import GoogleLoginButton from './components/GoogleLoginButton';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

function App() {
  const [info, setInfo] = useState<CredentialResponse | null>(null);

  const handleClickCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast('복사가 완료되었습니다.');
    });
  };

  return (
    <div
      style={{
        paddingTop: 30,
      }}
    >
      <ToastContainer />
      <GoogleLoginButton setInfo={setInfo} />
      {info && (
        <div>
          <div>
            <h3>select_by</h3>
            <p style={{ marginLeft: 12 }}>{info.select_by}</p>
          </div>
          <div>
            <h3>credential</h3>
            <p style={{ marginLeft: 12 }}>{info.credential}</p>
            <button onClick={() => handleClickCopy(info.credential ?? '')}>복사</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
