import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

export const safeSchema = z.object({
  firstname: z.string().trim().min(2, "Prénom trop court").max(30, "Prénom trop long"),
  lastname: z.string().trim().min(2, "Nom trop court").max(30, "Nom trop long"),
  phone: z.string().trim().regex(/^[0-9+\s()-]+$/, "Format invalide").min(8, "Numéro trop court").max(20, "Numéro trop long"),
  message: z.string().trim().min(1, "Message requis").max(300, "Message trop long").optional(),
});

export type Contact = z.infer<typeof safeSchema>;

export async function POST(req:NextRequest){

    try{

    const body = await req.json();
    const result = safeSchema.safeParse(body);

    // Validate the form

    if(!result.success){
        return NextResponse.json({message : 'Invalid Form', error : result.error.flatten()}, {status:400});
    }

    // APPSCRIPT
    if (!process.env.APPSCRIPT_URL) {
        return NextResponse.json({ message: "APPSCRIPT_URL is missing" },{ status: 500 });
    }
    const url = process.env.APPSCRIPT_URL;
    const response = await fetch(url, {
        method : 'POST',
        headers: {'Content-Type' : 'application/json'},
        body:JSON.stringify(result.data)
    })

    const rawAppScriptData = await response.text()
    let appScriptData:unknown
    try{
        appScriptData = JSON.parse(rawAppScriptData)
    }
    catch{
        appScriptData = rawAppScriptData
    }
    if(!response.ok){
        console.error(appScriptData);
        return NextResponse.json({ message: "Apps Script request failed", details: appScriptData },{ status: 502 });
    }

    // Resend
    if (!process.env.RESEND_API_KEY) {
        return NextResponse.json({ message: "RESEND_API_KEY is missing" },{ status: 500 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: 'AZMANA <new-message@azmana.fr>',
      to: ['bensadondavidn@gmail.com'],
      subject: 'New Message Azmana',
      html: `
        <h1>Nouveau message Azmana</h1>
        <p>De : ${result.data.firstname} ${result.data.lastname}</p>
        <p>Téléphone : ${result.data.phone}</p>
        <p>Message : ${result.data.message ?? "Aucun message"}</p>
        `
    });
     if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({message : "Success", resendData : data , appScriptData}, {status:200});

    }
    catch(error){
        console.error(error);
        return NextResponse.json({ message: "Internal server error" },{ status: 500 });
    }
}