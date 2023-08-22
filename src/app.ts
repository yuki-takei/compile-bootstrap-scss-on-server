import express from 'express';
import { emailTemplate } from './email-templates';

const app = express();

app.get('/', (_req, res) => {
  const emailCss = emailTemplate.getEmailCss();

  console.log({ emailCss });

  res.send(emailCss);
});

app.listen(3000);
console.log('listening on http://localhost:3000/');
