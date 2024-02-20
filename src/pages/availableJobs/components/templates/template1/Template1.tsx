import "./template1.style.css"
import Photo from "./cvimage.jpg"
export const Template1 = () => {
  return (
    <div id="drag" className="cv instaFade wrap">
      <div className="mainDetails">
        <div id="headshot" className="">
          <img src={Photo} title="Mahmoud Okily" alt="Mahmoud Okily" />
        </div>

        <div id="name">
          <h1 className="quickFade delayTwo">Mahmoud Okily</h1>
          <h4 className="quickFade delayThree">Senior Software Developer</h4>
          <h4 className="quickFade delayThree">
            Busto arsizio , Varese 21052 Italy{" "}
          </h4>
        </div>

        <div id="contactDetails" className="quickFade delayFour">
          <ul>
            <li>
              <a href="#yourlink" title="LinkedIn">
                <i className="fa fa-print" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#yourlink" title="LinkedIn">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#yourlink" title="LinkedIn">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="clear"></div>
      </div>

      <div id="mainArea" className="quickFade delayFive">
        <section>
          <article>
            <div className="sectionTitle">
              <h1>Personal Profile</h1>
            </div>

            <div className="sectionContent">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, eos labore quisquam aspernatur ipsum sed quod velit
                ratione sit numquam illo cupiditate deserunt blanditiis ad
                accusamus aliquam voluptatem ipsa quae Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Laudantium quam, reiciendis
                qui quibusdam rerum dolores dolorem at sed, sequi, ab animi!
                Consequatur libero ex modi a ipsum, ad nesciunt illo.
              </p>
            </div>
          </article>
          <div className="clear"></div>
        </section>

        <section>
          <div className="sectionTitle">
            <h1>Work Experience</h1>
          </div>

          <div className="sectionContent">
            <article>
              <h2>Senior Software Developer</h2>
              <h3>bepower | Eni </h3>
              <p className="subDetails">06/2002 - Present</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus, est repellat inventore enim placeat blanditiis fuga
                atque minus molestiae laborum animi harum recusandae saepe!
                Numquam sed quibusdam tempore voluptates corrupti?
              </p>
              <p>
                Plans to reduce space transportation costs to enable people to
                colonize Mars.
              </p>
              <p>
                Developed the Falcon 9 spacecraft which replaced the space
                shuttle it retired in 2011.
              </p>
            </article>

            <article>
              <h2>Founder</h2>
              <h3>The Boring Company</h3>
              <p className="subDetails">12/2016 - Present</p>
              <p>Raised $10m by selling 20.000 flamethrowers in 4 days.</p>
              <p>Raised $1m by selling 50.00 baseball caps.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                officiis perferendis officia dolore ratione! Illum ratione vero
                voluptatibus quo obcaecati necessitatibus totam velit
                architecto, maxime sapiente odit reiciendis quis delectus?
              </p>
            </article>

            <article>
              <h2>CEO and Product Architect</h2>
              <h3>Tesla inc.</h3>
              <p className="subDetails">2004 - Present</p>
              <p>Global sales passed 250,000 units in September 2017.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias dignissimos eum facilis. Dolore, consequatur explicabo
                provident doloribus nisi placeat necessitatibus incidunt culpa
                maxime ipsum quas dolores quos fugit tenetur ea!
              </p>
              <p>
                Topped Consumer Reports Annual Owner Satisfaction Survey at 91%
                in 2016.
              </p>
            </article>

            <article>
              <h2>Co-founder and Former Chairman</h2>
              <h3>SolarCity (subsidiary of Tesla Inc.)</h3>
              <p className="subDetails">06/2006 - Present</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
                soluta cum facere, sit incidunt repudiandae reiciendis eveniet
                accusamus tempore commodi at facilis aliquid nisi. Doloribus vel
                distinctio corporis? Pariatur, non.
              </p>
              <p>
                In 2015, installed 870MW of solar power, approximately 28% of
                non-utility solar installation in the U.S. that year.
              </p>
            </article>

            <article>
              <h2>Founder & CEO</h2>
              <h3>Neurolink</h3>
              <p className="subDetails">07/2016 - Present</p>
              <p>
                A company aims to make devices to treat serious brain diseases
                in the short-term, with the eventual goal of human enhancement.
              </p>
            </article>
          </div>

          <div className="clear"></div>
        </section>

        <section>
          <div className="sectionTitle">
            <h1>Key Skills</h1>
          </div>

          <div className="sectionContent">
            <ul className="keySkills">
              <li>Micromanagement</li>
              <li>Marketing</li>
              <li>Leadership</li>
              <li>Creativity</li>
              <li>Time Management</li>
              <li>Persistence</li>
              <li>Resiliency</li>
              <li>Long-term thinking</li>
            </ul>
          </div>
          <div className="clear"></div>
        </section>

        <section id="Education">
          <div className="sectionTitle">
            <h1>Education</h1>
          </div>

          <div className="sectionContent">
            <article>
              <h2>Bachelor’s of Science in Economics</h2>
              <p className="subDetails">
                Wharton School of the University of Pennsylvania
              </p>
              <p>09/1992 - 06/1995</p>
            </article>

            <article>
              <h2>Bachelor of Science in Physics</h2>
              <p className="subDetails">Penn's college of Arts and Sciences</p>
              <p>09/1992 - 06/1995</p>
            </article>
          </div>
          <div className="clear"></div>
        </section>

        <section>
          <article>
            <div className="sectionTitle">
              <h1>Publications</h1>
            </div>

            <div className="sectionContent">
              <p> Your text here</p>
            </div>

            <div className="sectionContent">
              <p>Your text here.</p>
            </div>

            <div className="sectionContent">
              <p>Your text here</p>
            </div>
          </article>
          <div className="clear"></div>
        </section>
      </div>
    </div>
  )
}
