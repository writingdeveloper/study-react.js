// JSX 안에서 style을 설정 할 때는, String 형식을 사용하지 않고 key가 camelCase인 객체가 사용됩니다.

render(){
  let style={
    color:'auqa',
    backgroundColor:'black'
  };

  return(
    <div style={style}>React CodeLab</div>
  );
}

// JSX 안에서 class를 설정 할 때는 class= 가 아닌 className=을 사용해야합니다.
render(){
  return(
    <div className="box">React CodeLab</div>
  )
}
