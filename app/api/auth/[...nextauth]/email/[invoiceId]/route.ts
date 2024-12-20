import prisma from "@/app/utils/db";
import { requireUser } from "@/app/utils/hooks";
import { emailClient } from "@/app/utils/mailtrap";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ invoiceId: string }>;
  }
) {
  try {
    const session = await requireUser();

    const { invoiceId } = await params;

    const invoiceData = await prisma.invoice.findUnique({
      where: {
        id: invoiceId,
        userId: session.user?.id,
      },
    });

    if (!invoiceData) {
      return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
    }

    const sender = {
        email: "hello@demomailtrap.com",
        name: "Akki Aryan",
      };

      emailClient.send({
        from: sender,
        to: [{email: 'akki.aryan2022@vitstudent.ac.in'}],
        template_uuid: "e0a5e125-e334-448a-b566-c16a4b7156a8",
    template_variables: {
        first_name: invoiceData.clientName,
        company_info_name: "InvoiceArk",
      company_info_address: "Sector 4 Branch",
      company_info_city: "B.S.City",
      company_info_zip_code: "827004",
      company_info_country: "India"
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send Email reminder" },
      { status: 500 }
    );
  }
}