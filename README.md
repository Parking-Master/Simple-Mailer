# Simple-Mailer
A simple and secure client-side JavaScript library for mailing to specific email addresses (HTML supported).

Imagine if emailing someone with pure JavaScript was this easy:
```javascript
email("someone@example.com", "Subject", "Message");
```
_Well now it is._

## Setup
```html
<script src="https://cdn.jsdelivr.net/gh/Parking-Master/Simple-Mailer@latest/mailer.min.js"></script>
```

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

## License
MIT
