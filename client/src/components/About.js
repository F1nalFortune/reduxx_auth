import React from 'react';
import { Header } from 'semantic-ui-react';
import { Parallax } from 'react-materialize';
import { Footer } from 'react-materialize';



class About extends React.Component{


  render(){
    return(
        <div className="about-bg">
<div id="ten" className="imageback">
            <div className="z-depth-5">
              <div className="container center">
                  <h1 className=" sitefont center white-text"> Meet the Team </h1>
                <div className="row">

                  <div className="col s12 m4 l4">
                    <div className="card-panel z-depth-3">
                   
                      <img src="" border="0" alt="" />
                      <h5 className="card-title center crd">Edwin</h5>
                      <span className="black-text">
                        Coming from Technical support/helpdesk background, excited to start a new journey to software developer. Food enthusiast, Netflix binger! 
                      </span>
                      <br/>
                      <a className="fa fa-github fa-2x" href="https://github.com/edsant1" ></a>
                      <a className="fa fa-linkedin-square fa-2x" href="https://www.linkedin.com/in/edwinsantizo" ></a>
                      <br/>
                      <a className="" href="edwins10329@gmail.com">edwins10329@gmail.com</a>
                    </div>
                  </div>



                  <div className="col s12 m4 l4">
                    <div className="card-panel white z-depth-3">
                      <img id="image-id" className="fifty" src="/images/brian.jpg" />
                      <h5 className="card-title center salt black-text crd">Brian Phelps</h5>
                      <span className="black-text"> 
                        After receiving a diploma with a focus on business marketing, I became reaquainted with computers. 
                        I have been interested in them since I was very young, and wish to use the skills I earned at DevPoint 
                        Labs in the field! I enjoy music, coding, playing sports, and learning.
                      </span>
                      <br/>
                      <a className="fa fa-github fa-2x" href="https://github.com/F1nalFortune"></a>
                      <a className="fa fa-linkedin-square fa-2x" href="https://www.linkedin.com/in/phelpsb92"></a>
                      <br/>
                      <a className="" href="phelpsb92@gmail.com">phelpsb92@gmail.com</a>
                    </div>
                  </div>

                  <div className="col s12 m4 l4">
                    <div className="card-panel z-depth-3">
                      <img id="image-id" className="hundred" src="/images/josh.jpg" />
                      <h5 className="card-title center salt crd">Josh</h5>
                      <span className="black-text">
                        Josh is always looking to improve, be it at coding or everyday life. He’s positive about most things 
                        but can easily stress himself out. Enjoys playing games, rock climbing, and drawing.
                      </span>
                      <br/>
                      <a className="fa fa-github fa-2x" href="https://github.com/sonicspeed123"></a>
                      <a className="fa fa-linkedin-square fa-2x" href="https://www.linkedin.com/in/sahagunjoshua" ></a>
                      <br/>
                      <a className="" href="joshuasahagun1996@yahoo.com">joshuasahagun1996@yahoo.com</a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <Footer 
            copyrights={ <i className="fa fa-copyright" aria-hidden="true">BananaBoltProductions</i>}
            className='footer-override border-top'
          >
            <div className="">
                <div className="col s3 m3 l3 center bold">
                  <a className="bold footer-link" href="/">Home</a>
                </div>
                <div className="col s3 m3 l3 center">
                  <a className="bold footer-link" href="/Game">Game</a>
                </div>
                <div className="col s3 m3 l3 center">
                  <a className="bold footer-link" href="/Ladder">Ladder</a>
                </div>
                <div className="col s3 m3 l3 center">
                  <a className="bold footer-link" href="/About">About</a>
                </div>
            </div>
          </Footer>
 
        </div>


        

    )
  }
}

export default About;
