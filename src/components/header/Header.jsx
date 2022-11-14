import React from "react";
import './Header.css';
import ME from '../../assets/project-1.png'

const Header = () => {
  return (
      <header>
          <div className="container">
              <div className="col-1">
                <h5>Hello I'm</h5>
                <h1>Selaelo Lemekoana</h1>
                <h5 className="text-light">
                    Developer, Designer and Writer
                </h5> 
              </div>
              <div className="col-2">
                  <img src={ME} alt="Black woman illustration" />
              </div>
          </div>
    </header>
  )
}

export default Header