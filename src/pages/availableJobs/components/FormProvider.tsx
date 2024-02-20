import { PropsWithChildren } from "react"
import { FormProvider as ReactFormProvider, useForm } from "react-hook-form"
import { Button, Flex } from "../../../_shared/UI"

export const FormProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const methods = useForm({
    defaultValues: {
      firstName: "mahmoud",
      lastName: "okily",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,voluptatibus!",
      position: "Software Developer",
      email: "mahmoudokily@gmail.com",
      mobile: "333655423",
      address: "via cesare balbo 10",
      country: {
        value: "italy",
        label: "italy"
      },
      website: "http://www.google.com",
      jobs: [
        {
          employer: "Google",
          from: "18/05/1995",
          to: "02/04/1998",
          id: 1,
          title: "IT Cloud Developer",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,voluptatibus!"
        },
        {
          employer: "Amazon",
          from: "18/05/2015",
          to: "18/05/2017",
          id: 2,
          title: "SoftWare Developer",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,voluptatibus!"
        },
        {
          employer: "Facebook",
          from: "03/07/1995",
          to: "8/05/1999",
          id: 3,
          title: "WEB DESIGNING ",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,voluptatibus!"
        },
        {
          employer: "google",
          from: "18/05/2015",
          to: "18/05/2017",
          id: 4,
          title: "UX Designer",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,voluptatibus!"
        }
      ],
      educations: [
        {
          id: 1,
          institution: "unimi di milano",
          start: "20/01/2015",
          end: "21/04/2015",
          location: "italy",
          degree: "bacalore",
          course: "computer Science",
          description: "Lorem ipsum dolor sit amet consectet"
        }
      ],
      skills: [
        { label: "computer Science", value: "computer Science" },
        { label: "html5", value: "html5" },
        { label: "JavaScript", value: "JavaScript" }
      ],
      gender: { label: "male", value: "male" },
      drivingLicense: "Patenta B"
    }
  })
  const onSubmit = (formData: any) => {
    console.log(formData)
  }

  return (
    <ReactFormProvider {...methods}>
      {/* <form
        onSubmit={methods.handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%"
        }}
      > */}
      {children}
      {/* <Button onClick={methods.handleSubmit(onSubmit)}>submit</Button> */}
      {/* </form> */}
    </ReactFormProvider>
  )
}
