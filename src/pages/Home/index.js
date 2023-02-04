import { Link } from "react-router-dom";
import styled from 'styled-components';
import { flexCenter } from "../../styles/common";
import LoginForm from "./components/Form/Login/Login";
import SignUpForm from "./components/Form/SingUp/SignUp";
//css-in-js의 위치가 맨밑에 가도 괜찮은 이유는 번들링 때문이다
const Wrapper = styled.div`
    width : 100%;
    height : calc(100hv - 60px);
    padding-bottom:60px;
    ${flexCenter}
    flex-direction: column;
`;

const Header = styled.header`
    background-color: ${({theme})=>theme.PALETTE.primary[300]};
    width: 360px;
    height: 48px;
    position: relative;
    display: flex;

    & > div{
        height: 100%;
        width: 50%;
        ${flexCenter}
        cursor: pointer;
        :hover{
            background-color: #e0e0e0;
        }
    }
`

const LoginSelector = styled.div`
    background-color: ${({mode})=> mode === 'login' ? '#e0e0e0' : '#f5f5f5'};
`;
const SignUpSelector = styled.div`
    background-color: ${({mode})=> mode === 'signUp' ? '#e0e0e0' : '#f5f5f5'};
`;
// styled component와 component 구별법!
// styled component를 객체화하여 한눈에 알아보기 쉽게 만든다
const S = {
    Wrapper,
    Header,
    LoginSelector,
    SignUpSelector,
};
function HomePage(){
    
    let form = 'login';
    const onFormChange = (e)=>{
        const {innerText} = e.target;
        form = innerText.toLowerCase();
        console.log(form);
    };
    
    return(
        <S.Wrapper>
            <S.Header>
                <S.LoginSelector mode={form} onClick={onFormChange}>LOGIN</S.LoginSelector>
                <S.SignUpSelector mode={form} onClick={onFormChange}>SIGN</S.SignUpSelector>
            </S.Header>
            {form ==='login'?<LoginForm/>:<SignUpForm/>}
            {/* <a href="/todo">일반적인 투두페이지 이동 </a>
            <Link to="/todo"> 라우터로 투두페이지 이동</Link> */}
        </S.Wrapper>
    );
}
export default HomePage;