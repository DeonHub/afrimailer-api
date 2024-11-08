const currentYear = new Date().getFullYear();

const csrInterviewTemplate = ({ firstname, personalize }) => `
  <html>
          <head>
            <style>
              @media only screen and (max-width: 600px) {
                .u-row-container, .u-col-100, .v-container-padding-padding {
                  width: 100% !important;
                  padding: 10px !important;
                }
                img {
                  width: 100% !important;
                  height: auto !important;
                }
                .v-button {
                  width: 80% !important;
                }
              }
            </style>
          </head>

          <body style="background-color: white; margin: 0; padding: 0">
            <table style="margin: 0 auto; width: 100%; max-width: 600px;">
              <tbody>
                <tr>
                  <td style="word-break: break-word; vertical-align: top;">
                    <div style="padding: 0; background-color: transparent; text-align:left;">
                    
                      <div style="margin: 0 auto; min-width: 320px; max-width: 100%; background-color: #fff; padding: 0 20px;">
                        
                        <!-- Header Section -->
                        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="padding-top: 20px; margin-bottom:-10%;">
                          <tr>
                            <td align="left">
                              <p style="font-size: 15px; font-weight: normal; margin-bottom:-20%;">Hello ${personalize ? firstname ? firstname : "" : ""}!</p>
                            </td>
                          </tr>
                        </table>

                        <!-- Body Section -->
                        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tr>
                            <td align="left">
                              <p style="font-size:15px; margin-bottom:10px;">Thank you for applying for the Customer Service Representative position with Afriam. After reviewing your application, we are pleased to invite you to the next stage of the hiring process-an interview.</p>

                <p style="font-size:15px;"><strong>Interview Details:</strong><br>
                <p style="font-size:15px;">
                <strong>Date:</strong> November 7, 2024.<br>
                <strong>Time:</strong> 9:00am<br>
                <strong>Location:</strong> Impact Hub 5AAP, Accra
                </p>

                <p style="font-size:15px;">During the interview, we will discuss your experience and how it aligns with the
                responsibilities of the role, as well as give you the opportunity to learn more about our company and the position. Kindly note that there will be a virtual one via Zoom another day; you will be
                communicated back for the day and time after you attend the one-on-one. Please reply to this number (233 559 717 966) on WhatsApp to confirm your availability for the interview.</p><br>

                <p style="font-size:15px; font-weight:semi-bold">We look forward to meeting with you.</p><br>
                <p style="font-size:15px; font-weight:semi-bold">Best regards, <br> Amanda</p>
                            </td>
                          </tr>
                        </table>
                      
                        
                        
                      </div>

                      <!-- Footer Section -->
                      <div style="text-align: center; color: #000; margin: 5% 0;">
                        <p>&copy; 2019 - ${currentYear} AfriMailer. All Rights Reserved.</p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </body>
          </html>
`;

module.exports = csrInterviewTemplate;
