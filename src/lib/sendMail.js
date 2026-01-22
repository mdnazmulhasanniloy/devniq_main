import nodemailer from 'nodemailer';

export const sendEmail = async (to, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com.',
      port: 587,
      secure: config.NODE_ENV === 'production',
      auth: {
        user:  process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    await transporter.sendMail({
      from: 'nurmdopu428@gmail.com',
      to,
      subject,
      text: '',
      html,
    });
  } catch (error) {
    console.log(error);
  }
};
