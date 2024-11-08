require("dotenv").config();
const csrInterviewTemplate = require("./emailTemplates/csrInterviewTemplate")
const promotionalTemplate = require("./emailTemplates/promotionalTemplate");
const alertTemplate = require("./emailTemplates/alertTemplate");
const defaultTemplate = require("./emailTemplates/defaultTemplate");

const transporterx = require("./transporterx");
const hostEmail = process.env.EMAIL_HOST_USER;
const baseUrl = process.env.BASE_URL;
const currentYear = new Date().getFullYear();



const sendMailx = (
  userEmail,
  subject,
  message,
  useTemplate,
  template,
  firstname,
  personalize

) => {
  // Define email options

  // Define template selection
  const templateMap = {
    default: defaultTemplate,
    csr: csrInterviewTemplate,
    prom: promotionalTemplate,
    alert: alertTemplate,
  };

  // Select the appropriate template function or default to 'defaultTemplate'
  const selectedTemplate = templateMap[template] || templateMap.default;

  const mailOptions = {
    from: "Afriam International <noreply@clientservicealert.com>",
    to: userEmail,
    subject: subject.toUpperCase(),
    ...( template
      ? { html: selectedTemplate(firstname, personalize) }
      : { text: message }
    ),
  };

  // Send the email
  transporterx.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error occurred:", error.message);
    } else {
      console.log("Email sent successfully:", info.response);
    }
  });
};

module.exports = sendMailx;
