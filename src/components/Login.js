import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailFocused,setEmailFocused] = useState(false);
  const [pwFocused,setPwFocused] = useState(false);
  const [emailError,setEmailError] = useState(false);
  const [pwError,setPwError] = useState(false);
  const [isCode,setIsCode] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event)=>{
    event.preventDefault();
  }
  return (
    <div className="login">
      <div className="login-popup">
        <p className="close" onClick={()=>{navigate("/")}}>ⓧ</p>
        <h2>로그인</h2>
        <form onSubmit={handleSubmit}>
          <label className={`${emailFocused ? "focused":""} ${emailError ? "error":""}`}>
            <span>이메일 주소 또는 휴대폰 번호</span>
            <input type="text" 
              onFocus={()=>{
                setEmailFocused(true);
                setEmailError(false);
              }}
              onBlur={(e)=>{
                if(e.target.value === ""){
                  setEmailFocused(false);
                  setEmailError(true);
                }
              }}
            />
          </label>
          {
            emailError && <p className="email-error">ⓧ 정확한 이메일 주소나 전화번호를 입력하세요.</p>
          }
          {
            !isCode && (<label
              className={`${pwFocused ? "focused":""} ${pwError ? "error":""}`}>
              <span>비밀번호</span>
              <input type="password"
                onFocus={()=>{
                  setPwFocused(true);
                  setPwError(false);  
                }}
                onBlur={(e)=>{
                  if(e.target.value=== ""){
                  setPwFocused(false);
                  setPwError(true);
                }
              }}
            />
            </label>)
          }
          {
            pwError && <p className="email-error">ⓧ 비밀번호는 4~60자 사이여야 합니다.</p>
          }
          {
            isCode && <p>문자 또는 데이터 요금이 부과될 수 있습니다.</p>
          }
          <button type="submit">
            {isCode ? "로그인 코드 받기":"로그인"}</button>
          <p>또는</p>
          <button onClick={()=>{
            setIsCode(!isCode);
            setEmailError(false);
            setPwError(false);
            }}>
            {isCode ? "비밀번호 사용하기": "로그인 코드 사용하기"}</button>
          <a href="#">{isCode ? "이메일 주소나 전화번호를 잊으셨나요?":"비밀번호를 잊으셨나요?"}</a>
        </form>
        <div className="login-box">
          <label>
            <input type="checkbox"/>
            <span>로그인 정보 저장</span>
          </label>
        <p>Netflix 회원이 아닌가요?<a href="#">지금 가입하세요.</a></p>
        <p>이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.
        <a href="#">자세히 알아보기</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;