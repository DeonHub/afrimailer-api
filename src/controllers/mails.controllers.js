require("dotenv").config();
const sendMailx = require("../utils/sendMailx");
const fs = require('fs');
const csvParser = require('csv-parser');
const path = require('path');


// Function to send email
const sendBulkEmail = async (req, res, next) => {
    const { subject, recipients, message, template, useTemplate, personalize } = req.body;
    const csvFile = req.file?.path; // Check if a file is provided

    const emails = [];
    const firstnames = [];

    if (csvFile) {
        // Read the CSV file and parse the "Email Address" and "First Name" columns if a file is provided
        fs.createReadStream(csvFile)
            .pipe(csvParser())
            .on('data', (data) => {
                const email = data["Email Address"];
                const firstname = data["First Name"];
                if (email) emails.push(email);
                if (firstname) firstnames.push(firstname);
            })
            .on('end', async () => {
                await processAndSendEmails();
            })
            .on('error', (err) => {
                console.error('Error reading CSV file:', err);
                next(err);
            });
    } else {
        // If no file is provided, process directly
        await processAndSendEmails();
    }

    async function processAndSendEmails() {
        const mails = emails.length > 0 ? emails : recipients.split(",");
        const results = mails.map((email, index) => ({
            email,
            firstname: firstnames[index] || "there"
        }));

        // Send email to each recipient
        try {
            await Promise.all(
                results.map(({ email, firstname }) =>
                    sendMailx(
                        email,
                        subject,
                        message,
                        useTemplate,
                        template,
                        firstname,
                        personalize
                    )
                )
            );
            console.log("Emails sent successfully");
            res.status(200).json({ success: true, message: "Emails sent successfully" });
        } catch (error) {
            console.error("Error sending emails:", error);
            res.status(500).json({ success: false, message: "Error sending emails" });
        }
    }
};

module.exports = {
    sendBulkEmail
}