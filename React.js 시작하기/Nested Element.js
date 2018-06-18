/* 에러 발생 코드 */

render(){
  return(
    <h1>Hi</hi>
    <h2>I am Error</h2>
  )
}

/* 컴포넌트에서 여러 Element를 렌더링 할 때 꼭 container element 안에 포함시켜주세요 */

render(){
  return(
    <div>
    <h1>Hi</h1>
    <h2>Yay! Error is gone.</h2>
    </div>
  )
}
