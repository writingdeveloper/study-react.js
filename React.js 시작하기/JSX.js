class Codelab extends React.Component {
  render(){
    return(
    <div>CodeLab</div>
    );
  }
}

class App extends React.Component{
  render(){
    return(
    <Codelab/>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
