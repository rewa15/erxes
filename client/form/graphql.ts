export const connectMutation = `
  mutation formConnect($brandCode: String!, $formCode: String!) {
    formConnect(brandCode: $brandCode, formCode: $formCode) {
      form {
        _id
        title
        description
        themeColor
        callout
      }
      integration {
        _id
        name
        formData
      }
    }
  }
`;

export const saveFormMutation = `
  mutation saveForm($integrationId: String!, $formId: String!, $submissions: [FieldValueInput], $browserInfo: JSON!) {
    saveForm(integrationId: $integrationId, formId: $formId, submissions: $submissions, browserInfo: $browserInfo) {
      status
      messageId
      errors {
        fieldId
        code
        text
      }
    }
  }
`;

export const sendEmailMutation = `
  mutation sendEmail($toEmails: [String], $fromEmail: String, $title: String, $content: String) {
    sendEmail(toEmails: $toEmails, fromEmail: $fromEmail, title: $title, content: $content)
  }
`;

export const increaseViewCountMutation = `
  mutation formIncreaseViewCount($formId: String!) {
    formIncreaseViewCount(formId: $formId)
  }
`;
