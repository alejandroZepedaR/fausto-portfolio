import { ContactForm } from "@/components/ui/contact-form";
import { MdMovie } from "react-icons/md";
export default function ContactPage() {
  return (
    <div className="h-dvh ">
      <div className="text-center py-5">
        <h1 className="text-lg md:text-3xl font-oswald font-bold mb-4">
          Quiet on the set, Roll Camera... ACTION!
        </h1>
      </div>
      <div className="flex h-3/4 items-center justify-center">
        <ContactForm />
      </div>
    </div>
  );
}
