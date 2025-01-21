import {google} from 'googleapis';
import {NextResponse} from 'next/server';

export async function POST(req: Request) {
  try {
    // Parse dữ liệu từ request body
    const body = await req.json();

    // Tạo JWT client
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

    // Khởi tạo Google Forms API client
    const glSheets = google.sheets({version: 'v4', auth: glAuth});

    // Gửi yêu cầu cập nhật form
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

    return NextResponse.json({success: true, data: data.data});
  } catch (error) {
    console.error('Error updating form:', error);
    return NextResponse.json({success: false, error: error});
  }
}
