import { google } from "googleapis";
import path from "path";

export async function POST(req) {
    try {
        const { name, email, phone, message } = await req.json();

        const auth = new google.auth.GoogleAuth({
            credentials: {
                type: process.env.GOOGLE_TYPE,
                project_id: process.env.GOOGLE_PROJECT_ID,
                private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                client_id: process.env.GOOGLE_CLIENT_ID,
                auth_uri: process.env.GOOGLE_AUTH_URI,
                token_uri: process.env.GOOGLE_TOKEN_URI,
                universe_domain: process.env.GOOGLE_UNIVERSE_DOMAIN
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

        const range = "A:D";

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: "RAW",
            requestBody: {
                values: [[name, email, phone, message]],
            },
        });

        return new Response(
            JSON.stringify({ message: "Contact information saved to Google Sheets!" }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Error saving to Google Sheets:", error);
        return new Response(
            JSON.stringify({ message: "Error saving to Google Sheets" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
