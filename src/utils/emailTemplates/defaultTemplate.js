const currentYear = new Date().getFullYear();

const defaultTemplate = () => `
   <html>
  <body>
    <div style="padding: 20px; background-color: #ffeded;">
      <h1 style="color: #d9534f;">Hello</h1>
      <p>world</p>
      <p>This is an important alert notification.</p>
      <footer>&copy; ${currentYear} AfriMailer Alerts</footer>
    </div>
  </body>
  </html>
`;
module.exports = defaultTemplate;
