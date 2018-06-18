JSX 안에서 주석을 작성 할 때는
{ /*...*/}
형식으로 작성해야합니다.

주의 하실점은 이 역시 Nested Element 부분에 설명했던것과 같이 container element 안에 주석이 작성되어야합니다.

render(){
  return(
    <div>
    {/*This is How You Comment */}
    {/*Multi-line
      Testing */}
      React CodeLab
    </div>
  );
}
