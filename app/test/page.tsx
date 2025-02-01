import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.API_KEY);
const what = () => {
  return NextResponse.json({ hashas: "asas" });
};
