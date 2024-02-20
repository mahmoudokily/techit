import React from "react"
import "./cvStyle.css"
import {
  FaBook,
  FaEnvelope,
  FaFacebookSquare,
  FaGamepad,
  FaLinkedinIn,
  FaMapSigns,
  FaMobileAlt,
  FaMusic,
  FaPagelines,
  FaTwitterSquare,
  FaWeebly,
  FaYoutubeSquare
} from "react-icons/fa"

import { useFormContext } from "react-hook-form"

const Template2 = () => {
  const { watch } = useFormContext()
  const file = watch("image")

  let imgSrc: string = ""
  if (file && file[0]) {
    imgSrc = URL.createObjectURL(file[0])
  }
  return (
    <div className="resume">
      <div className="resume_left">
        {!!imgSrc && (
          <div className="resume_profile">
            <img height={100} width={100} src={imgSrc} alt="cv" />
          </div>
        )}
        <div className="resume_content">
          <div className="resume_item resume_info">
            <div className="title">
              <p className="bold">{watch("name")}</p>
              <p className="regular">{watch("currentPosition")}</p>
            </div>
            <ul>
              {watch("address") && (
                <li>
                  <div className="icon">
                    <FaMapSigns />
                  </div>
                  <div className="data">
                    {watch("address")} {watch("country")?.value}
                  </div>
                </li>
              )}
              {watch("mobile") && (
                <li>
                  <div className="icon">
                    <FaMobileAlt />
                  </div>
                  <div className="data">{watch("mobile")}</div>
                </li>
              )}
              {watch("email") && (
                <li>
                  <div className="icon">
                    <FaEnvelope />
                  </div>
                  <div className="data">{watch("email")}</div>
                </li>
              )}
              {watch("website") && (
                <li>
                  <div className="icon">
                    <FaWeebly />
                  </div>
                  <div className="data">{watch("website")}</div>
                </li>
              )}
            </ul>
          </div>
          <div className="resume_item resume_social">
            <div className="title">
              <p className="bold">Social</p>
            </div>
            <ul>
              <li>
                <div className="icon">
                  <FaFacebookSquare />
                </div>
                <div className="data">
                  <p className="semi-bold">Facebook</p>
                  <p>Stephen@facebook</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <FaTwitterSquare />
                </div>
                <div className="data">
                  <p className="semi-bold">Twitter</p>
                  <p>Stephen@twitter</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <FaYoutubeSquare />
                </div>
                <div className="data">
                  <p className="semi-bold">Youtube</p>
                  <p>Stephen@youtube</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <FaLinkedinIn />
                </div>
                <div className="data">
                  <p className="semi-bold">Linkedin</p>
                  <p>Stephen@linkedin</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="resume_right">
        <div className="resume_item resume_work">
          <div className="title">
            <p className="bold">Work Experience</p>
          </div>
          <ul>
            <li>
              <div className="date">2013 - 2015</div>
              <div className="info">
                <p className="semi-bold">Lorem ipsum dolor sit amet.</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, voluptatibus!
                </p>
              </div>
            </li>
            <li>
              <div className="date">2015 - 2017</div>
              <div className="info">
                <p className="semi-bold">Lorem ipsum dolor sit amet.</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, voluptatibus!
                </p>
              </div>
            </li>
            <li>
              <div className="date">2017 - Present</div>
              <div className="info">
                <p className="semi-bold">Lorem ipsum dolor sit amet.</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, voluptatibus!
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="resume_item resume_education">
          <div className="title">
            <p className="bold">Education</p>
          </div>
          <ul>
            <li>
              <div className="date">2010 - 2013</div>
              <div className="info">
                <p className="semi-bold">Web Designing (Texas University)</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, voluptatibus!
                </p>
              </div>
            </li>
            <li>
              <div className="date">2000 - 2010</div>
              <div className="info">
                <p className="semi-bold">Texas International School</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, voluptatibus!
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="resume_item resume_hobby">
          <div className="title">
            <p className="bold">Hobby</p>
          </div>
          <ul>
            <li>
              <FaBook size={25} />
            </li>
            <li>
              <FaGamepad size={25} />
            </li>
            <li>
              <FaMusic size={25} />
            </li>
            <li>
              <FaPagelines size={25} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Template2
