
import python_fournaise from "../img/python-de-la-forunaise.jpg";

function About() {
    return (
      <>
        <div className="box">
          <div className="hgroup-space-arround">
            <div style={{"maxWidth":"30rem"}}>
              <p>Convinced that a person's worth is not measured by who they are but by the 
                  energy they use to improve themselves, I am passionate about learning and sharing.</p>
              <p>Particularly interested in new technology and finance, I'm a graduate of a 
                  research master's degree in finance, and I'm constantly learning related fields. 
                  From data sciences to blockchain.</p>
            </div>
              <img 
              className="img"
              src={python_fournaise} 
              style={{"width": "24rem","height": "30rem"}} 
              alt="python de la forunaise" 
              title="Python de la Forunaise, Ile de la Reunion, France"/>
          </div>
        </div>
        <div className="box about">

          <section>
            <h3>Experiences</h3>
            <article>
              <header>
                <div style={{"minWidth":"13rem"}}>June - December 2019</div>
                <div><strong>Internship Quantitative Research Multi Asset</strong></div>
                <div className="company_name">Candriam</div> 
              </header>   
              <ul>
                <li>Developing Python package providing a backtesting framework,</li>
                <li>Creation of tools to analyse investment strategy,</li>
                <li>Development of investment strategies (stocks, options and futures),</li>
                <li>Study of alternative data for investment purposes (textual data).</li>
              </ul>
            </article>

            <article>
              <header>
                <div style={{"minWidth":"13rem"}}>September - March 2018</div>
                <div><strong>Internship Operations and Investing</strong></div>
                <div className="company_name">Montpensier Finance</div>
              </header>
              <ul>
                <li>Update and development of risk monitoring reporting (liquidity, currency, issuer, etc.) and performance,</li>
                <li>Provide support to managers using Bloomberg and Factset databases,</li>
                <li>Update of the dashboards and take part in the preparation of the management committees,</li>
                <li>Control and validation of net asset values of UCIs,</li>
                <li>Checking the consistency of position and security transaction data,</li>
                <li>Development of data analysis and backtest tools.</li>
              </ul>
            </article>
            
          </section>

          <section>
            <h3>Education and Training</h3>
            <article>
              <header>
                <div>2018 - 2019</div>
                <div><strong>Msc Research in Finance (104)</strong></div>
                <div className="company_name">Paris IX Dauphine University</div>
                <div><small>(2nd year)</small></div>
              </header>
              <ul>
                <li>Master’s degree thesis: <i>"Capital Heterogeneity and The Cross-section of Expected Returns"</i></li>
                <li>Term structure / Asset Pricing / Credit Risk / Stochastic Calculus / Market Microstructure /
                    Macroeconomics / Machine Leaning / Behavioral Finance …</li>
              </ul>
            </article>

            <article>
              <header>
                <div>2016 - 2017</div>
                <div><strong>Msc Research in Finance (104)</strong></div>
                <div className="company_name">Paris IX Dauphine University</div>
                <div><small>(1st year)</small></div>
              </header>
              <ul>
                <li>Master’s degree thesis: <i>"Is the profitability of Pairs-Trading still relevant and if so, how does it differ from one stock market/economic sector to another?"</i></li>
                <li>Investment and financial markets / Portfolio Management / Derivative markets / Fixed income /
                    Financial analysis / Econometrics / Corporate finance / Financial modelling / Probabilistic tools /
                    Investment strategy …</li>
              </ul>
            </article>

            <article>
              <header>
                <div>2014 - 2015</div>
                <div><strong>Licence’s Degree in Economic Sciences</strong></div>
                <div className="company_name">Montpellier 1 University</div>
              </header>
            </article>
          </section>

          <section>
            <h3>Skills</h3>
          </section>

          <section>
            <h3>Miscellaneous</h3>
            <article>
              <header>
                <div>January 2019</div>
                <div><strong>Hackathon</strong></div>
                <div>
                  <span className="company_name">Paris IX Dauphine University</span>, 
                  <span className="company_name"> ENSAE</span>,
                  <span className="company_name"> QMI</span>,
                  <span className="company_name"> Addstones-GFI</span>,
                  <span className="company_name"> LFIS</span>
                </div>
                
              </header>
              <ul>
                <li>Machine Learning and Asset Management Industry: US opening prices model based on EU closing states</li>
              </ul>
            </article>
          </section>
          
          
          
        </div>
      </>

    )
  }
  
  export default About