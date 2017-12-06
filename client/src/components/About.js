import React from 'react';
import { Header } from 'semantic-ui-react';
import { Footer } from 'react-materialize';



class About extends React.Component{


  render(){
    return(
        <div className="about-bg">
<div id="ten" className="imageback">
            <div>
              <div className="container center">
                  <Header id="meet-the-team" textAlign="center" as="h1" className="title"> Meet the Team </Header>
                <div className="row">

                  <div className="col s12 m4 l4">
                    <div className="card-panel z-depth-3">
                   
                      <img id="icon"  alt="he's_the_real_JASON!" src="http://i1028.photobucket.com/albums/y348/f1nalfortune/jason_zpsz80soyue.jpg" />
                      <h5 className="card-title center crd">Chris</h5>
                      <span className="black-text">
                        Coming from Technical support/helpdesk background, excited to start a new journey to software developer. Food enthusiast, Netflix binger! 
                      </span>
                      <br/>
                      <a className="fa fa-github fa-2x" href="https://github.com/F1nalFortune" ></a>
                      <a className="fa fa-linkedin-square fa-2x" href="https://www.linkedin.com/in/phelpsb92" ></a>
                      <br/>
                      <a className="" href="gausc1@southernct.edu">gausc1@southernct.edu</a>
                    </div>
                  </div>



                  <div className="col s12 m4 l4">
                    <div className="card-panel white z-depth-3">
                      <img id="icon" className="fifty" alt="watch_out_for_this_guy!" src="http://i1028.photobucket.com/albums/y348/f1nalfortune/anon_mask_zpsjihwnkpb.png" />
                      <h5 className="card-title center salt black-text crd">Naim</h5>
                      <span className="black-text"> 
                        The other day the grass was brown, now it’s green because I ain’t give up. Never surrender. Lion! Wraith talk. Look at the sunset, life is amazing, life is beautiful, life is what you make it. The key is to drink coconut, fresh coconut, trust me.
                      </span>
                      <br/>
                      <a className="fa fa-github fa-2x" href="https://github.com/F1nalFortune"></a>
                      <a className="fa fa-linkedin-square fa-2x" href="https://www.linkedin.com/in/phelpsb92"></a>
                      <br/>
                      <a className="" href="hossainm2@southernct.edu">hossainm2@southernct.edu</a>
                    </div>
                  </div>

                  <div className="col s12 m4 l4">
                    <div className="card-panel z-depth-3">
                      <img id="icon" src="http://i1028.photobucket.com/albums/y348/f1nalfortune/scream_zpsehg713l0.png" />
                      <h5 className="card-title center salt crd">Fisnick</h5>
                      <span className="black-text">
                        Fisnick is always looking to improve, be it at coding or everyday life. He’s positive about most things 
                        but can easily stress himself out. Enjoys playing games, rock climbing, and drawing.
                      </span>
                      <br/>
                      <a className="fa fa-github fa-2x" href="https://github.com/F1nalFortune"></a>
                      <a className="fa fa-linkedin-square fa-2x" href="https://www.linkedin.com/in/phelpsb92" ></a>
                      <br/>
                      <a className="" href="demirif1@southernct.edu">demirif1@southernct.edu</a>
                    </div>
                  </div>

                  <div className="col s12 m4 l4">
                    <div className="card-panel white z-depth-3">
                      <img id="photo-id" className="fifty" src="http://cliparting.com/wp-content/uploads/2017/02/Ninja-clipart-kid-4.png" alt="great_looking_guy" />
                      <h5 className="card-title center salt black-text crd">Brian Phelps</h5>
                      <span className="black-text"> 
                        Avid computer coder and reddit reader! Software developer and studying network security. Enjoys music♩♩.
                      </span>
                      <br/>
                      <a className="fa fa-github fa-2x" href="https://github.com/F1nalFortune"></a>
                      <a className="fa fa-linkedin-square fa-2x" href="https://www.linkedin.com/in/phelpsb92"></a>
                      <br/>
                      <a className="" href="phelpsb92@gmail.com">phelpsb92@gmail.com</a>
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
