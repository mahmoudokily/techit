import { useFieldArray, useFormContext } from "react-hook-form"
import { AiOutlineDelete } from "react-icons/ai"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import { GrAdd } from "react-icons/gr"
import {
  Accordion,
  Button,
  Checkbox,
  Flex,
  Input,
  InputLabel,
  Typography
} from "../../../_shared/UI"
import VerticalScrollContainer from "../../../_shared/UI/VerticalScrollContainer"
import { Textarea } from "../../../_shared/styledComponents"

const WorkHistory = () => {
  const { control, register, watch, handleSubmit, setValue } = useFormContext()
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "jobs"
    }
  )

  const toggleAccordion = (name: string) => () => {
    const currentStatus = watch(name)
    setValue(name, !currentStatus)
  }
  return (
    <Flex fullSize style={{ gap: "30px 30px" }}>
      <Flex pl={4} pt={4}>
        <Typography variant={"title30"}>Enter your Work Experience</Typography>
        <Typography>
          {" "}
          and training courses, even if you didn't complete them
        </Typography>
      </Flex>
      <VerticalScrollContainer height="100%" width="100%">
        <Flex px={4} style={{ gap: "10px 10px" }} py={2}>
          {fields.map((field, index: number, fieldsArr) => (
            <Accordion
              toggle={toggleAccordion(`jobs.${index}.isOpen`)}
              status={watch(`jobs.${index}.isOpen`)}
              key={field.id}
              initialStatus={false}
              label={
                <Flex
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  flex={1}
                >
                  {watch(`jobs.${index}`).title ? (
                    <Flex flexDirection={"column"}>
                      {" "}
                      <Typography variant={"title20"}>
                        {watch(`jobs.${index}.title`)}
                      </Typography>
                      <Typography>
                        {watch(`jobs.${index}.from`) &&
                          watch(`jobs.${index}.to`) &&
                          watch(`jobs.${index}.from`) +
                            "-" +
                            watch(`jobs.${index}.to`)}
                      </Typography>
                    </Flex>
                  ) : (
                    `Work ` + Number(index + 1)
                  )}

                  <Flex
                    onClick={(e: any) => {
                      e.stopPropagation()
                    }}
                    flexDirection={"row"}
                    style={{ gap: "10px" }}
                  >
                    <Button
                      $fill={false}
                      withBorder={false}
                      variant="gray"
                      fixedSize
                      onClick={() => remove(index)}
                    >
                      <AiOutlineDelete fontSize={20} />
                    </Button>
                    <Button
                      $fill={false}
                      withBorder={false}
                      variant="gray"
                      onClick={(e) => move(index, Number(index - 1))}
                      disabled={index === 0}
                      fixedSize
                    >
                      <FaAngleUp fontSize={20} />
                    </Button>
                    <Button
                      $fill={false}
                      withBorder={false}
                      variant="gray"
                      onClick={(e: any) => move(index, Number(index + 1))}
                      disabled={index === fieldsArr.length - 1}
                      fixedSize
                    >
                      <FaAngleDown fontSize={20} />
                    </Button>
                  </Flex>
                </Flex>
              }
              maxHeight={380}
            >
              <Flex
                p={3}
                flexDirection={"column"}
                style={{ gap: "20px 20px" }}
                // maxWidth={500}
                display={"flex"}
                position={"relative"}
              >
                <Flex
                  flex={1}
                  flexDirection={"row"}
                  style={{ gap: "20px 20px" }}
                >
                  <Flex mt={3} flex={1}>
                    <InputLabel children="title" required />
                    <Input
                      key={field.id}
                      {...register(`jobs.${index}.title`)}
                      placeholder={`relevant jop #${index + 1} `}
                      variant="secondary"
                      $fill={false}
                    />
                  </Flex>
                  <Flex mt={3} flex={1}>
                    <InputLabel children="Employer" required />
                    <Input
                      key={field.id}
                      {...register(`jobs.${index}.employer`)}
                      placeholder={`ex Google`}
                      variant="secondary"
                      $fill={false}
                    />
                  </Flex>
                </Flex>
                <Flex
                  flex={1}
                  flexDirection={"row"}
                  style={{ gap: "20px 20px" }}
                >
                  <Flex flex={1}>
                    <InputLabel children="Start At" required />
                    <Input
                      key={field.id}
                      {...register(`jobs.${index}.from`)}
                      placeholder={`relevant jop #${index + 1} `}
                      variant="secondary"
                      $fill={false}
                      type="date"
                    />
                  </Flex>
                  <Flex flex={1} flexDirection={"column"}>
                    <InputLabel children="Ended At" required />
                    <Input
                      key={field.id}
                      {...register(`jobs.${index}.to`)}
                      placeholder={`relevant jop #${index + 1} `}
                      variant="secondary"
                      $fill={false}
                      type="date"
                      style={{ marginBottom: "5px" }}
                      disabled={watch(`jobs.${index}.worknow`) ? true : false}
                    />
                    <Checkbox {...register(`jobs.${index}.worknow`)}>
                      Work now
                    </Checkbox>
                  </Flex>
                </Flex>

                <Flex flex={1}>
                  <Textarea
                    label="Role Description"
                    required
                    style={{
                      borderRadius: "3px",
                      border: "1px solid #f5f5f5"
                    }}
                    key={field.id}
                    {...register(`jobs.${index}.description`)}
                    placeholder={`relevant jop #${index + 1} `}
                  />
                </Flex>
              </Flex>
            </Accordion>
          ))}
          <Button
            icon={<GrAdd />}
            height={60}
            fontSize="1em"
            block
            variant="gray"
            onClick={() =>
              append({
                isOpen: true
              })
            }
          >
            Add An Work Experience
          </Button>
        </Flex>
      </VerticalScrollContainer>
    </Flex>
  )
}

export default WorkHistory
