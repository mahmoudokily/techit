import React, { useCallback } from "react"

import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View
} from "@react-pdf/renderer"
import styled from "styled-components"
Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
  fontWeight: "normal"
})
const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "row"
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    textAlign: "left",
    fontFamily: "Oswald",
    textTransform: "capitalize",
    color: "white"
  },
  position: {
    fontSize: 14,
    color: "white"
  },
  text: {
    fontSize: 12,
    lineHeight: 1.2,
    textTransform: "capitalize",
    fontWeight: "normal"
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: "50%",
    textAlign: "left"
  },
  header: {
    fontSize: 12,
    marginBottom: 10,
    textAlign: "left",
    color: "grey"
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "left",
    color: "grey"
  },
  resume_left: {
    borderRight: "1px solid #eee",
    width: "250px",
    textAlign: "left",
    paddingTop: 25,
    paddingBottom: 0,
    paddingHorizontal: 25,
    backgroundColor: "#122967",
    color: "white"
  },
  resume_right: {
    flex: 1,
    paddingTop: 25,
    paddingBottom: 0,
    paddingHorizontal: 20
  },
  title: {
    marginBottom: 10,
    textAlign: "left"
  },
  icon: {
    width: 25,
    height: 25,
    backgroundColor: "#0bb5f4",
    borderRadius: "50%",
    marginRight: 10
  },
  li: {
    textAlign: "left",
    paddingBottom: 5
  },
  socialText: {
    fontSize: 12
  },
  socialTitle: {
    fontSize: 14
  },
  resume_item: {
    padding: "10px 0",
    borderBottom: "1px solid #eee"
  },
  bold: {
    fontWeight: "bold",
    textTransform: "capitalize"
  },
  resume_work: {},
  date: {
    fontSize: "12px",
    fontWeight: 500,
    marginBottom: 5
  },
  info: {
    marginBottom: "5px"
  },
  semiBold: {
    fontWeight: 500,
    fontSize: "14px",
    textTransform: "capitalize"
  },
  resume_education: {
    fontSize: "14px",
    fontWeight: 600
  },
  desc: {
    fontSize: "12px"
  },
  skills: {
    display: "flex",
    flexDirection: "row",
    gap: "5px",
    textAlign: "left",
    flexWrap: "wrap"
  },
  skill: {
    fontSize: 12,
    textTransform: "capitalize"
  },
  languages: {
    display: "flex",
    flexDirection: "row",
    gap: "5px",
    textAlign: "left",
    flexWrap: "wrap",
    textTransform: "capitalize"
  },
  languagesTitle: {
    fontWeight: "bold",
    marginBottom: "5px"
  },
  languageLang: {
    fontSize: "12px",
    fontWeight: "bold",
    flex: 1
  },
  LanguageLevel: {
    fontSize: "12px",
    flex: 1
  },
  languageContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "5px",
    textAlign: "left",
    flexWrap: "wrap",
    textTransform: "capitalize",
    width: "100%"
  },
  preferences: {
    display: "flex",
    gap: "5px",
    textAlign: "left",
    flexWrap: "wrap"
  },
  row: {
    display: "flex",
    flexDirection: "row"
  },
  flex_1: {
    flex: 1
  }
})

export type PDFProps = {
  age?: number | null
  imgSrc?: string
  position?: string
  email?: string
  mobile?: string
  website?: string
  address: string
  country: string
  about?: string
  firstName: string
  lastName: string
  gender?: { label: string; value: string }
  birthday?: string
  licenseDrive?: string
  skills?: { label: string; value: string }[]
  preferences?: { label: string; value: string }[]
  languages?: {
    language: { label: string; value: string }
    level: { label: string; value: string }
  }[]
  publications?: { title: string; desc: string; id: number }[]
  jobs: {
    id: number
    title: string
    description: string
    from: string
    to: string
    worknow: boolean
    employer: string
  }[]
  educations?: any[]
}
export const PDF: React.FC<PDFProps> = ({
  imgSrc,
  position,
  website,
  address,
  country,
  mobile,
  email,
  jobs,
  lastName,
  firstName,
  about,
  languages,
  skills,
  preferences,
  publications,
  educations,
  gender,
  birthday,
  age
}) => {
  console.log(jobs)
  return (
    <Document language="arabic">
      <Page style={styles.body} minPresenceAhead={20} orientation="portrait">
        <View style={styles.resume_left}>
          <View style={styles.resume_item}>
            {!!imgSrc && (
              <View style={styles.imgContainer}>
                <Image style={styles.image} src={imgSrc} />
              </View>
            )}
            <View style={styles.title}>
              <Text style={styles.name}>{firstName + " " + lastName}</Text>
              <Text style={styles.position}>{position}</Text>
            </View>
            <View style={styles.li}>
              <Text style={[styles.text, styles.bold]}>E-mail</Text>
              <Text style={styles.text}>{email}</Text>
            </View>

            {(age || gender) && (
              <View
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                {gender && (
                  <View style={[styles.li, styles.flex_1]}>
                    <Text style={[styles.text, styles.bold]}>Gender</Text>
                    <Text style={styles.text}>{gender.value}</Text>
                  </View>
                )}
                {age && (
                  <View style={[styles.li, styles.flex_1]}>
                    <Text style={[styles.text, styles.bold]}>Age</Text>
                    <Text style={styles.text}>{age}</Text>
                  </View>
                )}
              </View>
            )}

            {address && (
              <View style={styles.li}>
                <Text style={[styles.text, styles.bold]}>Address</Text>
                <Text style={styles.text}>
                  {address}
                  {country ? `, ${country}` : ""}
                </Text>
              </View>
            )}

            <View style={styles.li}>
              <Text style={[styles.text, styles.bold]}>WWW</Text>
              <Text style={styles.text}>{website}</Text>
            </View>

            <View style={styles.li}>
              <Text style={[styles.text, styles.bold]}>Mobile</Text>
              <Text style={styles.text}>{mobile}</Text>
            </View>
          </View>

          {languages && (
            <View style={[styles.languages, styles.resume_item]}>
              {
                <View>
                  <Text style={styles.languagesTitle}>Languages</Text>
                  {languages.map((language, index) => {
                    return (
                      <View style={styles.languageContainer} key={index}>
                        <Text style={styles.languageLang}>
                          {language.language?.value}
                        </Text>
                        <Text style={styles.LanguageLevel}>
                          {language.level?.value}
                        </Text>
                      </View>
                    )
                  })}
                </View>
              }
            </View>
          )}
          {preferences && (
            <View style={[styles.languages, styles.resume_item]}>
              {
                <View>
                  <Text style={styles.languagesTitle}>Preferences</Text>
                  {preferences.map((preference, index) => {
                    return (
                      <View style={styles.preferences} key={index}>
                        <Text style={styles.text}>{preference.value}</Text>
                      </View>
                    )
                  })}
                </View>
              }
            </View>
          )}
        </View>
        <View style={styles.resume_right}>
          {about && (
            <View style={[styles.resume_item]}>
              <View style={styles.title}>
                <Text style={styles.bold}>About Me</Text>
              </View>
              <View>
                <View style={styles.info}>
                  <Text style={styles.desc}>{about}</Text>
                </View>
              </View>
            </View>
          )}
          <View style={[styles.resume_item, styles.resume_work]}>
            <View style={styles.title}>
              <Text style={styles.bold}>Work Experience</Text>
            </View>
            <View>
              {jobs?.map((job) => {
                return (
                  <View>
                    <Text style={styles.date}>
                      {job.from} - {job?.worknow ? "Now" : job.to}
                    </Text>
                    <View style={styles.info}>
                      <Text style={styles.semiBold}>
                        {job.title} [ {job.employer} ]
                      </Text>
                      <Text style={styles.desc}>{job.description}</Text>
                    </View>
                  </View>
                )
              })}
            </View>
          </View>
          {skills && (
            <View style={[styles.resume_item]}>
              <View style={styles.title}>
                <Text style={styles.bold}>Key Skills</Text>
              </View>
              <View style={styles.skills}>
                {skills?.map((sk, index) => {
                  return (
                    <Text style={styles.skill} key={index}>
                      {sk.label}
                    </Text>
                  )
                })}
              </View>
            </View>
          )}
          {educations && educations.length > 0 && (
            <View style={[styles.resume_item, styles.resume_education]}>
              <View style={styles.title}>
                <Text style={styles.bold}>Education</Text>
              </View>
              <View>
                {educations.map((edu) => {
                  return (
                    <View>
                      <View style={styles.date}>
                        <Text>
                          {edu?.graduationDate} - {edu?.graduationDate}
                        </Text>
                      </View>
                      <View style={styles.info}>
                        <Text style={styles.semiBold}>
                          {edu?.course} ({edu?.nameOfInstitution})
                        </Text>
                        <Text style={styles.desc}>{edu?.description}</Text>
                      </View>
                    </View>
                  )
                })}
              </View>
            </View>
          )}
          {publications && (
            <View style={[styles.resume_item]}>
              <View style={styles.title}>
                <Text style={styles.bold}>Publications</Text>
              </View>
              <View style={styles.skills}>
                {publications?.map((publication, index) => {
                  return (
                    <View>
                      <Text style={styles.semiBold}>{publication.title}</Text>
                      <Text style={styles.skill} key={index}>
                        {publication?.desc}
                      </Text>
                    </View>
                  )
                })}
              </View>
            </View>
          )}
        </View>
      </Page>
    </Document>
  )
}
