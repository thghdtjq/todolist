import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBan, faPen } from "@fortawesome/free-solid-svg-icons";
import { flexAlignCenter, flexCenter } from "styles/common";

function TodoCard(props){
    /** props의 데이터 적을 때는 매개변수에 구조분해 할당 */
    console.log('props',props);
    console.log('example',props.example);
    /** props의 데이터가 많다면 컴포넌트 안에서 구조분해할당 변수/상수 선언 */
    
    const {example,todo} = props;
    const { state, title, content} = todo;

    return(
        <S.Wrapper state={state}>
            <S.Header>
                <S.StateBox state={state}>
                    <FontAwesomeIcon icon={faCheck}/>
                </S.StateBox>
                <S.Title state={state}>
                    {title}
                    <>
                        <FontAwesomeIcon icon={faPen}/>
                        <FontAwesomeIcon icon={faBan}/>
                    </>
                </S.Title>
            </S.Header>
            <S.Content state={state}>
                {content}
            </S.Content>
        </S.Wrapper>
    );
}
export default TodoCard;

// fontawesome
// styled-component || emotion
/*

css-in-js
    js 파인 안에 csss를 정의 가능
    css를 모듈단위로 나누어 관리할 수 있다는 장점과 
    하나의 js파일 안에 css를 관리할 수 있다는 장점

    많은 개발자들이 사용하고 있는 이유
        - 가독성이 매우 좋음
        - reactJS나 vueJS와 같은 js 프론트엔드 프레임워크를
          사용할 경우는 scss보다는 css-in-js를 많이 사용

*/

const Wrapper = styled.li`
  width: 100%;
  background-color: ${({ theme }) => theme.PALETTE.white};
  border: 1px solid #999;
  margin: 16px 0;
  list-style: none;
  border-radius: 8px;
  background-color: ${({ state, theme }) =>
    state ? theme.PALETTE.gray[100] : theme.PALETTE.white};
`;

const Header = styled.div`
  border-bottom: 1px dotted #999;
  ${flexAlignCenter};
  padding: 8px 16px;
  height: 48px;
`;

const Title = styled.h1`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  text-decoration: ${({ state }) => (state ? 'line-through' : 'none')};
  & svg {
    cursor: pointer;
    margin-left: 16px;
    :hover {
      transform: scale(1.2);
    }
  }
`;

const StateBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
  ${flexCenter};
  color: ${({ state }) => (state ? '#3CB371' : '#999')};
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;

const Content = styled.div`
  padding: 16px;
  text-decoration: ${({ state }) => (state ? 'line-through' : 'none')};
  & textarea {
    width: 100%;
    height: 100%;
    border: 1px dotted #999;
    outline: none;
    resize: none;
  }
`;

const S = {
  Wrapper,
  Header,
  StateBox,
  Title,
  Content,
};