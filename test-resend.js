import { Resend } from "resend";

const resend = new Resend("re_hb1g7FWu_39sPtdmLARyjJfKGh6e9cn2V");

async function test() {
  const { data, error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: ["juleslordet@proton.me", "Maximilien.godeau.off@gmail.com"],
    subject: "Test",
    html: "<p>Test</p>"
  });

  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Success:", data);
  }
}

test();
