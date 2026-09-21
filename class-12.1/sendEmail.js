const nodemailer = require('nodemailer')
const sendEmail = async(to,subject,text)=>{
    const transporter = nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:'jainabhi90980@gmail.com',
            pass:'tscz cybf tkjn nufs'
        },
    });
    const mailOptions={
        from:'jainabhi90980@gmail.com',
        to,
        subject,
        text,

    };
    await transporter.sendMail(mailOptions);
}
module.exports= {sendEmail};