import React from 'react';
import { Header } from 'semantic-ui-react';
import { Parallax } from 'react-materialize';
import { Footer } from 'react-materialize';



class Game extends React.Component{


  render(){
    return(
        <div>
          <Header textAlign="center" as="h1" className="title">Game</Header>
          <div className="information">
            <span>
            It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? Wraith 
            talk. You smart, you loyal, you a genius. Hammock talk come soon. We don’t see them, we will never see them. The 
            other day the grass was brown, now it’s green because I ain’t give up. Never surrender. Find peace, life is like 
            a water fall, you’ve gotta flow. The ladies always say Khaled you smell good, I use no cologne. Cocoa butter is 
            the key. We don’t see them, we will never see them. Fan luv. Surround yourself with angels.
            </span>
          </div>
          <br />
          <p className="center"><a id="play-button" href="http://www.bananabolt.com" target="_blank">Click Here to Play!</a></p>
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

export default Game;
