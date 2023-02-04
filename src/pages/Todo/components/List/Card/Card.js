function TodoCard(props){
    /** props의 데이터 적을 때는 매개변수에 구조분해 할당 */
    console.log('props',props);
    console.log('example',props.example);
    /** props의 데이터가 많다면 컴포넌트 안에서 구조분해할당 변수/상수 선언 */
    
    const {todo} = props;

    return(
        <div>
            {todo.state ? '완료' :'미완료'}
            <h2>{todo.title}</h2>
            <div>{todo.content}</div>
        </div>
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