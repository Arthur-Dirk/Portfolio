import PropTypes from 'prop-types';
const divstyle={
  'margin-left':"40px",
  'text-align': "center"
}

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return (
      <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Intro</h2>
          
          <p>I am Arthur Dirk and i live in Cape Town and i am a Full Stack Web Developer. I have completed a Fullstack Web Developer Bootcamp Course at
             Hyperion Dev with the Mern stack. (MongoDB, Express, React, and Node.js.)

             I love focusing on the look and feel of what I am developing, but thanks to my full-stack web developer bootcamp,

             I am a competent MERN (MongoDB, ExpressJS, ReactJS, NodeJS) Stack developer. Code has revolutionized my life and I
             want to use it to revolutionize the lives of others.</p>
          <p>Currently i am working at Sanlam Group Technology and Information department for 5 years as a First line Support Team Captain</p>
          <br />
          <h1>Education</h1>
          <ul>
            <li>Full Stack Developer</li>
            <li>A+ Pc Technician</li>
            <li>Cellular Technician</li>
            <li>FAIS</li>
            <li>Human Resource Diploma</li>
          </ul>
         <br></br>
         <h1>WORK HISTORY</h1>
          <ul>
            <li>Sanlam - Information Technology, First line Support - Team Captain</li>
            <li>Santam - Commercial Insurance Consultant</li>
            <li>Old Mutual - Resolutions Administrator</li>
            <li>Direct Axis- Approvals Consultant</li>
            <li>Vodacom - All Service Consultant</li>
          </ul>

          {close}
        </article>

        <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Projects</h2>
         
          <div class="project" style={divstyle}>
          <p>
          <a href="https://stormy-sea-79029.herokuapp.com">
          <img border="0" alt="Weather App" src="static/images/weather.jpg" width="230" height="200"/>
          </a>
          <p>Weather app</p>
          </p>
          
          <p>
          <a href="https://polar-badlands-26721.herokuapp.com">
          <img border="0" alt="tictactoe" src="static/images/tictactoe.png" width="230" height="200"/>
          </a>
          <p>Tic-tact-toe Game</p>
          </p>
          </div>
          {close}
        </article>

        

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <p>Email: Arthur.Dirk@sanlam.co.za</p>
          <p>Contact: 0820815444</p>
          
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main