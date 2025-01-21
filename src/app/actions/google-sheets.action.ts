'use server';
import {google} from 'googleapis';
import {FormData} from '../[locale]/components/email-submit';

export async function submitSheetData(body: FormData) {
  const glAuth = await google.auth.getClient({
    projectId: process.env.GOOGLE_PROJECT_ID,
    credentials: {
      type: 'service_account',
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      universe_domain: 'googleapis.com',
    },
    scopes: [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  });

  const glSheets = google.sheets({version: 'v4', auth: glAuth});

  //get sheet data
  // const data = await glSheets.spreadsheets.values.get({
  //   spreadsheetId: process.env.GOOGLE_SHEET_ID,
  //   range: 'RANGE',
  // });

  //update sheet data
  const data = await glSheets.spreadsheets.values.append({
    auth: glAuth,
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: 'A1:F1',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        [
          body.fullName,
          body.email,
          body.phone,
          body.address,
          body.service,
          body.note,
        ],
      ],
    },
  });

  return {data};
}
