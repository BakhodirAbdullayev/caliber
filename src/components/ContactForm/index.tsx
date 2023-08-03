import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../Button";
import { Form, Input, TextArea } from "./ContactForm.styles";

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(new FormData(e.currentTarget));
    e.currentTarget.reset();
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Input required placeholder={t("Your Name")} />
      <Input required placeholder={t("Email Address")} type={"email"} />
      <Input required placeholder={t("Subject")} />
      <TextArea required placeholder={t("Your message") + "..."} />
      <Button variant="secondary" outline={false}>
        {t("Send Message")}
      </Button>
    </Form>
  );
};

export default ContactForm;
