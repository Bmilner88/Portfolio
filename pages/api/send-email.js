import NodeMailer from "nodemailer";

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  const transporter = NodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Verify transporter connection before sending notification
    await transporter.verify();

    const mailOptions = {
      from: `Portfolio Form <bm.contact623@gmail.com>`,
      to: process.env.EMAIL,
      subject: `Portfolio Form Message from ${name}`,
      text: `
      ${message}
      
      Email: ${email}`,
    };

    const send = await transporter.sendMail(mailOptions);

    return res.status(200).json({
      status: "success",
      data: send,
    });
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
}