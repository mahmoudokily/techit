import { Flex, Typography } from "../../../_shared/UI"
import VerticalScrollContainer from "../../../_shared/UI/VerticalScrollContainer"
import { countries } from "../../../_shared/utils/data/countries"
import { Field, type FieldProps } from "./Field"

const contactInputs: FieldProps[] = [
  {
    label: "image",
    name: "image",
    required: false,
    placeholder: "add a photo to your cv (optional)",
    type: "image"
  },
  {
    label: "first name",
    name: "firstName",
    required: true,
    placeholder: "mario",
    type: "text"
  },
  {
    label: "last name",
    name: "lastName",
    required: true,
    placeholder: "rosso",
    type: "text"
  },
  {
    label: "position",
    name: "position",
    required: false,
    placeholder: "senior front end",
    type: "text"
  },
  {
    label: "email",
    name: "email",
    required: true,
    placeholder: "mario.rosso@gmail.com",
    type: "text"
  },

  {
    label: "website",
    name: "website",
    required: false,
    placeholder: "www.mario-rosso.com",
    type: "text"
  },
  {
    label: "birthday",
    name: "birthday",
    required: false,
    placeholder: "21/06/1993",
    type: "date"
  },
  {
    label: "driving license",
    name: "drivingLicense",
    required: false,
    placeholder: "A , B",
    type: "text"
  },
  {
    label: "gender",
    name: "gender",
    required: false,
    placeholder: "gender",
    type: "select",
    options: ["male", "female"]
  },
  {
    label: "Phone number",
    name: "mobile",
    required: false,
    placeholder: "123456789",
    type: "text"
  },
  {
    label: "address",
    name: "address",
    required: false,
    placeholder: "via cesare balbo",
    type: "text"
  },
  {
    label: "country",
    name: "country",
    required: false,
    placeholder: "country",
    type: "select",
    options: countries
  },

  {
    label: "about",
    name: "about",
    required: false,
    placeholder: "about me ",
    type: "textarea"
  }
]

const ContactDetails = () => {
  return (
    <Flex fullSize style={{ gap: "30px 30px" }}>
      <Flex pl={4} pt={4}>
        <Typography variant={"title30"}>Enter your Contact Details</Typography>
        <Typography> provide your contact information</Typography>
      </Flex>
      <VerticalScrollContainer height="100%" width="100%">
        <Flex
          px={4}
          flexDirection={"row"}
          flexWrap={"wrap"}
          style={{ gap: "20px" }}
        >
          {" "}
          {contactInputs.map((field) => (
            <Field {...field} />
          ))}
        </Flex>
      </VerticalScrollContainer>
    </Flex>
  )
}

export default ContactDetails
