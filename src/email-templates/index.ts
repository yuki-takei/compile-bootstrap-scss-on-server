import sass from 'sass';

import path from 'path';

export class EmailTemplate {

  getEmailCss() {
    const customBootstrapStyleFilePath = path.resolve(__dirname, './styles/index.scss');
    const compiled = sass.compile(customBootstrapStyleFilePath);
    return compiled;
  }

}

export const emailTemplate = new EmailTemplate();

