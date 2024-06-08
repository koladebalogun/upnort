"use client";
import { useEffect, useRef, useState } from "react";
import style from "./style.module.css";


export default function ContactForm() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   console.log("sent");

  //   emailjs
  //     .sendForm(
  //       process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  //       process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  //       form.current,
  //       process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         console.log("message sent");
  //         setMessageSent(true);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  // if (messageSent) {
  //   toast.success("Message Sent!", {
  //     theme: "colored",
  //   });
  // }

  return (
    <div>
      <div className={style.contact_wrapper}>
        <h1 className={style.header}>Get Started Today</h1>
        <div className={style.contact_inner_wrapper}>
          <div className={style.left_card}>
            <p>
              Ready to fuel your growth through innovative marketing strategies? Partner
              with UPNORT Marketing Agency and experience the ease of success. Let
              us amplify your story and captivate your audience.
            </p>

            {/* <h4>
              PrimeCare Properties - Where Your Investment Flourishes and Your
              Peace of Mind Prevails.
            </h4> */}

            <div className={style.contact_info}>
              <p>Call us on: +44 ----</p>
              <p>Email: -----</p>
            </div>
          </div>

          <div className={style.right_card}>
            <h2>Alternatively, you can fill the form below</h2>
            <form ref={form}  className={style.form}>
              <label className={style.label}>Name</label>
              <input className={style.input} type="text" name="user_name" />
              <label className={style.label}>Email</label>
              <input className={style.input} type="email" name="user_email" />
              <label className={style.label}>Message</label>
              <textarea className={style.textarea} name="message" />
              <input className={style.submit} type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
