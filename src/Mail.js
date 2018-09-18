import React from 'react';
export default function Mail(props){
return (
  <div className="mail-box" show={props.show}>
    <p>Hi <span>{props.info[0]}</span>,</p>
    <p className="content">We have added your phone number to your account with company name <span>{props.info[2]}</span>, as you asked. Your phone number <span>{props.info[3]} </span>will be used if you forgot your password and for important account message. Your phone number must be verified. <br/><br/>We have got these information out of the form you have filled and same will be updated to your account:
    <ul>
      <li>Name: <span>{props.info[0]}</span></li>
      <li>email: <span>{props.info[1]}</span></li>
      <li>company: <span>{props.info[2]}</span> </li>
      <li>phone: <span>{props.info[3]}</span> </li>
      <li>message: <span>{props.info[4]}</span> </li>
    </ul>
    </p>
    <p>Regards,</p>
    <p><strong>Minimal Form Team</strong></p>
  </div>
);
}
