import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mail from './Mail';



class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      loader: 0,
      stage : 1,
      activeIndex: 0,
      info: []
    };


    this.nextStage = this.nextStage.bind(this);
    this.takeInfo = this.takeInfo.bind(this);
  }

nextStage(){
  var changeState = () => {
    this.setState({
      activeIndex : this.state.activeIndex + 1,
      loader : this.state.loader + 20,
      stage: this.state.stage < 6 ? this.state.stage + 1 : this.state.stage
    });
  }

  if(this.state.activeIndex == 0 ) {
    let name = document.getElementById('name');
    if((name.value) == ""){
      name.setAttribute("error", true);
    }
    else{
      changeState();
      var changedInfo = this.state.info.concat(name.value);
      this.setState({
        info : changedInfo
      });
      console.log(this.state.info);
    }
  }
  if(this.state.activeIndex == 1) {
    var email = document.getElementById('email');
    if((email.value) == ""){
      email.setAttribute("error", true);
    }
    else{
      changeState();
      var changedInfo = this.state.info.concat(email.value);
      this.setState({
        info : changedInfo
      });
      console.log(this.state.info);
    }
  }
  if(this.state.activeIndex == 2) {
    var company = document.getElementById('company');
    if((company.value) == ""){
      company.setAttribute("error", true);
    }
    else{
      changeState();
      var changedInfo = this.state.info.concat(company.value);
      this.setState({
        info : changedInfo
      });
      console.log(this.state.info);
    }
  }
  if(this.state.activeIndex == 3) {
    var number = document.getElementById('number');
    if((number.value) == ""){
      number.setAttribute("error", true);
    }
    else{
      changeState();
      var changedInfo = this.state.info.concat(number.value);
      this.setState({
        info : changedInfo
      });
      console.log(this.state.info);
    }
  }
  if(this.state.activeIndex == 4) {
    var message = document.getElementById('message');
    if((message.value) == ""){
      message.setAttribute("error", true);
    }
    else{
      changeState();
      var changedInfo = this.state.info.concat(message.value);
      this.setState({
        info : changedInfo
      });
      console.log(this.state.info);
    }
  }
}

takeInfo(){

}




render(){
  return(
    <React.Fragment>
    <header>
    <a href="indar.xyz" className="logo"><img src={process.env.PUBLIC_URL + '/images/indar-white.png'} alt="logo" /></a>
    <h1>Minimal Form</h1>
    <h2 className={this.state.activeIndex == 5 ? 'show' : ''}>Thanks for filling the form.</h2>
    <ul>
      <li className={this.state.activeIndex === 0 ? 'current' : '' }>
          <label>First Name</label>
          <input type="text" name="Name" id="name" value={this.state.info[0]} onChange={this.takeInfo}  />
          <span className="error">Please provide your name</span>
      </li>
      <li className={this.state.activeIndex === 1 ? 'current' : '' }>
          <label>Email Id</label>
          <input type="email" id="email" value={this.state.info[1]} onChange={this.takeInfo} />
          <span>Please provide your email</span>
      </li>
      <li className={this.state.activeIndex === 2 ? 'current' : '' }>
          <label>Company</label>
          <input type="text" id="company" value={this.state.info[2]} onChange={this.takeInfo} />
          <span>Please provide your company name</span>
      </li>
      <li className={this.state.activeIndex === 3 ? 'current' : '' }>
          <label>Phone Number</label>
          <input type="number" id="number" value={this.state.info[3]} onChange={this.takeInfo} />
          <span>Please provide your contact number</span>
      </li>
      <li className={this.state.activeIndex === 4 ? 'current' : '' }>
          <label>Message</label>
          <input type="text" id="message" value={this.state.info[4]} onChange={this.takeInfo} />
          <span>Please write something for us</span>
      </li>
      <button onClick={this.state.stage <= 5 ? this.nextStage : null}></button>
    </ul>
    <div className={["loader", this.state.loader == 100 ? 'hidden' : ''].join(" ")}>
    <span style={{'width': this.state.loader + '%'}}></span>
    </div>
    <div className={["stage-holder", this.state.stage == 6 ? 'hidden' : ''].join(" ")}>
    <span>{this.state.stage}</span> <i>/</i> <span>5</span>
    </div>
    </header>

    <Mail info={this.state.info} show={this.state.stage == 6 ? 'true' : 'false'} />
  </React.Fragment>

  );
}
}

ReactDOM.render(<App />, document.getElementById('root'));
