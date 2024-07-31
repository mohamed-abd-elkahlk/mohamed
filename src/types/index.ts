export interface FormErrors {
  [key: string]: string | undefined;
}

export type EmailProps = {
  from: string;
  phone: string;
  message: string;
  name: string;
  service: "front end" | "back end" | "freelance";
};
