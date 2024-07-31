"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { info } from "@/constants";
import { motion } from "framer-motion";
import { useFormState } from "react-dom";
import { sendEmailServise } from "../action";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
export default function Contact() {
  const { toast } = useToast();

  const [state, formAction] = useFormState(sendEmailServise, {
    errors: {
      email: undefined,
      f_name: undefined,
      l_name: undefined,
      message: undefined,
      phone: undefined,
      service: undefined,
    },
  });
  useEffect(() => {
    if (state?.errors)
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `your email message can't be sent please fill all input `,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    else {
      toast({
        title: "your messagge has been sent",
        description: "we will replay as soon as possible",
      });
    }
  }, [state, toast]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounde-xl"
              action={formAction}
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Have a project in mind? Let's build something amazing together.
                Get in touch!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    placeholder="First name"
                    name="f_name"
                    className={`${
                      state?.errors.f_name ? "border-red-600" : ""
                    } w-full`}
                  />
                  {state?.errors.f_name && (
                    <p className="text-red-500">{state?.errors.f_name}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Last name"
                    name="l_name"
                    className={`${
                      state?.errors.l_name ? "border-red-600" : ""
                    } w-full`}
                  />
                  {state?.errors.l_name && (
                    <p className="text-red-500">{state?.errors.l_name}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email address"
                    name="email"
                    className={`${
                      state?.errors.email ? "border-red-600" : ""
                    } w-full`}
                  />
                  {state?.errors.email && (
                    <p className="text-red-500">{state?.errors.email}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="phone"
                    placeholder="Phone number"
                    name="phone"
                    className={`${
                      state?.errors.phone ? "border-red-600" : ""
                    } w-full`}
                  />
                  {state?.errors.phone && (
                    <p className="text-red-500">{state?.errors.phone}</p>
                  )}
                </div>
              </div>
              <Select name="service">
                <SelectTrigger
                  className={`${
                    state?.errors.service ? "border-red-600" : ""
                  } w-full`}
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="front end">Front End</SelectItem>
                    <SelectItem value="back end">Back End</SelectItem>
                    <SelectItem value="freelance">FreeLance</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {state?.errors.service && (
                <p className="text-red-500">{state?.errors.service}</p>
              )}
              <Textarea
                name="message"
                className={`${
                  state?.errors.message ? "border-red-600" : ""
                } w-full h-[200px]`}
                placeholder="Type Your message here."
              />
              {state?.errors.message && (
                <p className="text-red-500">{state?.errors.message}</p>
              )}
              <Button className="max-w-40" size={"md"} type="submit">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className=" flex flex-col gap-3">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">
                      <item.icon />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.describtion}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
