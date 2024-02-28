import ContactForm, { formAction } from "../components/ContactForm";

import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact Us | AR Doody Duty" },
    {
      property: "og:title",
      content:
        "Contact Us - Your Trusted Pet Waste Removal Service in North-Central Arkansas",
    },
    {
      property: "og:description",
      content:
        "Get in touch with us for the best pet waste removal services in Beebe, Ward, Cabot, and Searcy. We prioritize cleanliness and customer service. Contact us today!",
    },
    {
      name: "description",
      content:
        "Ready to reclaim your weekends? Contact us today to discuss your pet waste removal needs and schedule a free quote. Serving Beebe, Ward, Cabot, and Searcy in North-Central Arkansas. We're here to help!",
    },
  ];
};
export const action = formAction;

export default function ContactUs() {
  return (
    <section className="">
      <h1 className="my-8 text-center font-serif text-3xl font-extrabold lg:mt-8">
        Contact Us
      </h1>
      {/* add with form, so cta still visible from top of page
      <h4>
        or Get Started With Your <button className="">Free Quote</button>
      </h4> */}
      {/* <p className="my-4 p-4 text-center font-serif text-lg">
        Call&nbsp;
        <span className="hover:underline">
          {import.meta.env.VITE_CONTACT_PHONE}
          <br />
          <br />
        </span>
        Or Send an E-Mail To&nbsp;
        <span className="hover:underline">
          {import.meta.env.VITE_CONTACT_EMAIL}
          <br />
        </span>
        {
          //FORM TO SEND EMAIL, HIDDEN UNTIL WORKED OUT
        }
        <span className="hidden">Or fill out the form below</span>
      </p> */}
      <ContactForm />
    </section>
  );
}
