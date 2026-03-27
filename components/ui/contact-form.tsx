"use client";
import { SOCIALMEDIA } from "@/lib/constants";
import { FiMail } from "react-icons/fi";
import { SocialMediaButton } from "./social-media-button";

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <div className="p-5 bg-base-200">
      <h3 className="text-xs text-muted mb-2">
        Have a question or want to work together?
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <input className="input" type="text" placeholder="First Name" />
        <input className="input" type="text" placeholder="Last Name" />
        <label className="input validator">
          <FiMail />
          <input type="email" placeholder="Email" required />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>
        <textarea className="textarea" placeholder="Message"></textarea>
        <button className="btn btn-primary" type="submit">
          Send Message
        </button>
        <div>
          {SOCIALMEDIA.map((social, i) => (
            <SocialMediaButton key={i} socialMedia={social} />
          ))}
        </div>
      </form>
    </div>
  );
};
