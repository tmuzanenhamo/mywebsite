import React from 'react';
import MyNavbar from './MyNavbar';
import Pictures from './Pages/Pictures'

export default function MyProjects() {
  return (
    <div>
    <MyNavbar/>
    <h3 className="frontend">Front End Websites</h3>
    <hr/>
    <div className="row">
      <div className="col-md-6">
        <Pictures source="../Images/dnfLodge.PNG" alt="DnF Lodge" github="https://github.com/tmuzanenhamo/Hotel-Booking-Management-System" deployed="https://react-client-c8aa0.web.app/login?redirect=%2F" />
      </div>
      <div className="col-md-6">
        <Pictures source="../Images/branding.PNG" alt="Universal Branding Solutions" github="" deployed="http://universalbrandingsolutions.co.za/index.html" />
      </div>
    </div>
      
    </div>
  );
}
