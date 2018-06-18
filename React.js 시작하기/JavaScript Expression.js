/* JSX 안에서 JavaScript를 표현하는 방법은 간단합니다. /*
/* 그냥 { } 로 Wrapping 하면 됩니다. */

render(){
  let text = "Hello World";
  return (
    <div>{text}</div>
  );
}

// If Else 문은 JSX에서 사용불가
// 이에 대한 대안은 Tenary Expression
// condition ? true : false

render(){
  return (
    <p>{ 1 == 1 ? 'True':'False'}</p>
  );
}
