import TodoCard from "./Card/Card";
function TodoList(){
    
    const TODO_LIST =[
        {
            id:1,
            title: 'example1',
            content:'content1',
            state:true,
            edit:false,
        },
        {
            id:2,
            title: 'example2',
            content:'content2',
            state:false,
            edit:false,
        },
        {
            id:3,
            title: 'example3',
            content:'content3',
            state:false,
            edit:false,
        },
        {
            id:4,
            title: 'example4',
            content:'content4',
            state:false,
            edit:false,
        }
    ]
//el/jstl || forEach || for
    return(
        <div>
            {TODO_LIST.map((todo)=>(
                <TodoCard todo={todo}/>
            ))}
            {
                /*
                ex)todo(key)={todo}(value)
                상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하기 위해
                props(속성)을 이용하여 데이터 전달
                */
            }
            
            {/*
            
            map으로 디버깅하기 => ()를 {}만들고 return,console.log() 추가 
            {TODO_LIST.map((todo)=>{
                console.log(todo);
                return <TodoCard/>
            })}*/}
        </div>
    );
}
export default TodoList;