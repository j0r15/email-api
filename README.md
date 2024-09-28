# Simple Http SMTP API

npm i

npm run start


curl -d '{"email_to": "myemail@email.com", "subject": "Test", "message": "my test message"}' -H "Content-Type: application/json" -X POST http://localhost:5000/mail


docker build -t email-api:v1.0.0 .


docker container run -d -p 5000:5000 -e EMAIL_ADDRESS=senderaddress@email.com -e EMAIL_PASSWORD=senderemailpw  -e CLIENT_ORIGIN=http://myclientapp.com --name email-api email-notification-api:v1.0.0


docker container run -d -p 5000:5000 -e EMAIL_ADDRESS=senderaddress@email.com -e EMAIL_PASSWORD=senderemailpw  -e CLIENT_ORIGIN=http://myclientapp.com --name email-api ghcr.io/j0r15/email-api:main


