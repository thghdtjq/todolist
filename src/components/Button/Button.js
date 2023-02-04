import * as S from "./style";

function Button(props){
    const { variant, shape, size, children, ...rest } = props;
    // ...rest는 나머지 매개 변수형을 의미한다

    return (<S.Button variant={variant} shape={shape} size={size} {...rest}>{children}</S.Button>)
}

export default Button;