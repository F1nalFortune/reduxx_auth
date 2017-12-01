import React from 'react';
import { Header } from 'semantic-ui-react';
import { Parallax } from 'react-materialize';
import { Footer } from 'react-materialize';



class Ladder extends React.Component{


  render(){
    return(
        <div>
          <Header textAlign="center" as="h1" className="title">Ladder</Header>

          <Parallax className="border" imageSrc="http://i1028.photobucket.com/albums/y348/f1nalfortune/home_zpskz5vzcvu.jpg?t=1511991916" strength={400}>
          </Parallax>
          <Footer 
            copyrights={ <i className="fa fa-copyright" aria-hidden="true">BananaBoltProductions</i>}
            className='footer-override'
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

export default Ladder;
