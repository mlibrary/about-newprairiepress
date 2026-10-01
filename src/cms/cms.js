import CMS from 'decap-cms-app';
import LinkFileComponent from "./components/linkFileComponent"
import LinkFileButtonComponent from "./components/linkFileButtonComponent"

CMS.registerEditorComponent(LinkFileComponent);
CMS.registerEditorComponent(LinkFileButtonComponent);

const branch = process.env.GATSBY_CMS_BRANCH || "main";

CMS.init({
  config: {
    backend: {
      name: 'github',
      repo: 'mlibrary/about-newprairiepress',
      branch,
    }
  }
});
