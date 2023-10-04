import { readSchedule } from "@/utils/db/read-scheduled";
import { textLog } from "@/utils/db/text-log";
import { NextRequest, NextResponse } from "next/server";
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_ID;
import { headers } from "next/headers";

/*
- Someone requests to be notified (need to confirm they own the number)
- Store a number into a db
- Cron job fires api
- api reads numbers from DB, and sends message
*/

/*
  time = 1 (1 day before event)
  time = 2 (30 minutes before event)
  time = 3 (Event has started)
*/

interface ScheduledText {
  id: string;
  created_at: string;
  name: string;
  phoneNumber: string;
  timeZone: string;
  event: string;
}

export async function POST(req: NextRequest, res: NextResponse) {
  const info = await req.json();
  const headersList = headers();

  // Check if authorized
  if (headersList?.get("pass") === "work") {
    try {
      const result: any = await readSchedule();

      // Check if scheduled texts have been read from db successfully
      if (result.message === "success") {
        const schedule: ScheduledText[] = result.scheduled_text;

        // Reminder 1 day before event
        if (info?.time === "1") {
          // Loop through all the scheduled events
          for (let i = 0; i < schedule.length; i++) {
            // Checks specific event and sends text for that event
            if (schedule?.[i]?.event === "Virtual Bible Study") {
              const message = await client.messages.create({
                body: "Just a friendly reminder that the Virtual Bible Study will is tomorrow! Make sure you make time and don't miss it!",
                messagingServiceSid: messagingServiceSid,
                from: "+17576459906",
                to: schedule[i]?.phoneNumber,
              });

              if (message) {
                await textLog(
                  "+17576459906",
                  schedule[i]?.phoneNumber,
                  "Just a friendly reminder that the Virtual Bible Study will is tomorrow! Make sure you make time and don't miss it!"
                );
              }
            }
          }

          return NextResponse.json({ status: "Scheduled", schedule });
        }

        // Reminder 30 minutes before event
        if (info?.time === "2") {
          for (let i = 0; i < schedule.length; i++) {
            if (schedule?.[i]?.event === "Virtual Bible Study") {
              const message = await client.messages.create({
                body: "Just a friendly reminder that our virtual bible study is in 30 minutes. Excited to see you there!",
                messagingServiceSid: messagingServiceSid,
                from: "+17576459906",
                to: schedule[i]?.phoneNumber,
              });

              if (message) {
                await textLog(
                  "+17576459906",
                  schedule[i]?.phoneNumber,
                  "Just a friendly reminder that our virtual bible study is in 30 minutes. Excited to see you there!"
                );
              }
            }
          }

          return NextResponse.json({ status: "Scheduled", schedule });
        }

        // Reminder when event start
        if (info?.time === "3") {
          for (let i = 0; i < schedule.length; i++) {
            if (schedule?.[i]?.event === "Virtual Bible Study") {
              const message = await client.messages.create({
                body: "Virtual Bible Study has started. See you there!",
                messagingServiceSid: messagingServiceSid,
                from: "+17576459906",
                to: schedule[i]?.phoneNumber,
              });

              if (message) {
                await textLog(
                  "+17576459906",
                  schedule[i]?.phoneNumber,
                  "Virtual Bible Study has started. See you there!"
                );
              }
            }
          }

          return NextResponse.json({ status: "Scheduled", schedule });
        }

        return NextResponse.json({ status: "No Schedule" });
      } else {
        // Handle the case when reading schedule data fails
        return NextResponse.json({ status: "Failed", error: result.error });
      }
    } catch (error) {
      console.log(error);
      return NextResponse.json({ status: "Failed", error });
    }
  } else {
    return NextResponse.json({ status: "Not Authorized" });
  }
}
