import { Button } from "components/Button/style";
import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "styles/common";
import TodoList from "./components/List/TodoList";
import TodoFormModal from "./components/Modal/TodoForm";
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer,toast} from 'react-toastify';

export const print = ()=>{
    console.log('안녕하세요');
}

function TodoPage(){

  const onAddTodo = new Promise((resolve)=>{
    setTimeout(()=>resolve('todo',3000))
  });

  const showToastMessage = ()=>{
    
    toast.promise(onAddTodo,{
      pending: 'Todo Loading',
      success: 'Todo Success',
      error: 'Todo Error',
    });
  }

    return(
    <>
      <TodoFormModal showToastMessage={showToastMessage}/>
        <S.Wrapper>
            <S.Container>
              <S.Title>List</S.Title>
                <S.Content>
                    <TodoList/>
                </S.Content>
                <S.ButtonBox>
                    <Button variant={'primary'} size={'full'}>
                        추가
                    </Button>
                </S.ButtonBox>
            </S.Container>
            <ToastContainer autoClose={2000} theme="colored"/>
        </S.Wrapper>
    </>
    );
}

export default TodoPage;

//{}는 키값을 통해 가져오는것, default는 기본값이 있기 때문에 그것을 통해 가져오는것
//default가 설정 되어 있다면 import할 때 이름을 맘대로 설정할 수 있다.
//익명 함수 또한 default를 걸어 export를 하게 되면 import할 수 있다.

// export default 되어 있는 경우 경로만 맞으면 내마음대로 이름을 정해서 가져올 수 있다.
// export 되어 있는 경우는 {} 구조분해할당을 통해 해당 export된 변수명 혹은 함수명 등을 이용하여 key값으로 가지고 온다
// 랜더링 최적화 -> 유지보수 최적화

//emotion, routing, hook함수, styled components 검색할것

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter};
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: ${({ theme }) => theme.PALETTE.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h1`
  background-color: ${({ theme }) => theme.PALETTE.primary[300]};
  color: ${({ theme }) => theme.PALETTE.fontColor};
  padding-left: 32px;
  height: 32px;
  ${flexAlignCenter};
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 32px);
  padding-bottom: 64px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const S = {
  Wrapper,
  Container,
  Title,
  ButtonBox,
  Content,
};