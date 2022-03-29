# Simple-Mailer
A simple and secure client-side JavaScript library for mailing to specific email addresses (HTML supported).

Imagine if emailing someone with pure JavaScript was this easy:
```javascript
email("someone@example.com", "Subject", "Message");
```
_Well now it is._

## Setup
1. Go to simplemailer.loca.lt
2. Click "Signup" at the top right corner or go to simplemailer.loca.lt/signup
3. Signup by entering your Username, Email & Password and check your email inbox
4. Confirm your email and log in to simplemailer.
5. In your home page, take note of your API key or get a new one by clicking the "↺" button
6. Paste the following in your webpage's code:
```html
<script src="https://simplemailer.loca.lt/js/YOUR_API_KEY/mailer.js"></script>
```
(If you get an error on your page, try signing up again)<br>
<br>
&nbsp;&nbsp;7. You have Simple Mailer in your page!<br>
&nbsp;&nbsp;8. To use it, follow the documentation below.<br>

### Documentation
Simple-Mailer uses a _simple_ function called `email`.

It has four arguments:
```javascript
email(TO, NAME, SUBJECT, BODY);
```

  - **TO** \- The email address to send the email to.
  - **NAME** \- The name that appears in the email header (Can be left blank).
  - **SUBJECT** \- The subject of the email (Can be left blank).
  - **BODY** \- The body of the email \- Can include pure HTML5 (Can be left blank).

_Be careful - there is a delay on sending emails. You can only send up to 1 email per minute._
You can also change the function name through your Home Page in Simple Mailer.

## License
MIT

_Note: Simple Mailer's site is hosted with Node.js. Credit to Node.js for helping make this project easier._
