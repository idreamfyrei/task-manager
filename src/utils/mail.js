import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async(options) => {
    const mailGenerator = new Mailgen({
    theme: 'default',
    product: {
       
        name: 'Task Manager',
        link: 'https://mailgen.js/'
    }
});
const emailText = mailGenerator.generatePlaintext(options.mailGenContent);

const emailHTML = mailGenerator.generate(options.mailGenContent); 
};

const emailVerificationMailGenContent = (username, verificartionURL) => {
    return {
        body: {
            name: username,
            intro: 'Welcome to App! We\'re very excited to have you on board.',
            action:{
                instructions: 'To get started with out App, please click here:',
            button: {
                color: '#22BC66', // Optional action button color
                text: 'Verify your email',
                link: verificartionURL,
            },
            }, 
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    }
}

export {sendEmail, emailVerificationMailGenContent}