/** @format */

import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { TextInput, Section, Textarea } from "../../_shared/styledComponents";
import { Button, Container } from "../../_shared/styledComponents/BaseUi";
import {
  FooterColumn,
  FooterGrid,
  Heading,
  Subtitle,
  TopLine,
} from "../../_shared/styledComponents/ProjectUi";
import { useForm } from "react-hook-form";
import { Alert, Box, Input, InputLabel } from "../../_shared/UI";
import { t } from "i18next";

const CallUs = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; message: string }>({
    defaultValues: {
      email: "",
      message: "",
    },
  });
  const [successSentMessage, setSuccessSentMessage] = useState<boolean>(false);

  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);
  const onSubmitForm = (formData: { email: string; message: string }) => {
    console.log(formData);
    setSuccessSentMessage(true);
  };
  useEffect(() => {
    if (successSentMessage) {
      setTimeout(() => {
        setSuccessSentMessage(false);
      }, 3000);
    }
  }, [successSentMessage]);
  return (
    <Section ref={ref} id="contact">
      <Container>
        <FooterGrid>
          <FooterColumn alignItems="start">
            <TopLine>{t("contact us")}</TopLine>
            <Heading>{t("let's be in touch")}</Heading>
            <Subtitle>
              {t(
                "write your message and we will reply to you as soon as possible"
              )}
            </Subtitle>
          </FooterColumn>
          <FooterColumn>
            {successSentMessage && (
              <Box mb={2}>
                <Alert variant="primary">
                  {t("thank you! , we are received your message")}
                </Alert>
              </Box>
            )}
            <form
              style={{ width: "100%" }}
              onSubmit={handleSubmit(onSubmitForm)}
            >
              <Box mb={3}>
                <InputLabel children={t("email")} required />
                <Input
                  variant="light"
                  type="text"
                  $fill={true}
                  autoFocus
                  placeholder="Mariorosso@gmail.com"
                  {...register("email", {
                    required: {
                      value: true,
                      message: t("required field"),
                    },
                  })}
                  error={errors.email?.message || ""}
                />
              </Box>

              <Textarea
                labelColor="#fff"
                label={t("message")}
                id=""
                rows={5}
                placeholder={t("your message")}
                {...register("message", {
                  required: {
                    value: true,
                    message: t("required field"),
                  },
                })}
                error={errors.message?.message || ""}
              />

              <Button mt={4} inverse>
                Submit
              </Button>
            </form>
          </FooterColumn>
        </FooterGrid>
      </Container>
    </Section>
  );
};
export default CallUs;
