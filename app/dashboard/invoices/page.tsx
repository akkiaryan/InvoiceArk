import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { InvoiceList } from "@/app/components/InvoiceList";

export default function InvoicesRout(){
    return(
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="text-2xl font-bold" >Invoices</CardTitle>
                        <CardDescription>Manage you invoices right here</CardDescription>
                    </div>
                    <Link href="" 
                    className={buttonVariants()}>
                    <PlusIcon /> Create Invoice
                    </Link>
                </div>
            </CardHeader>
            <CardContent>
                <InvoiceList />
            </CardContent>
        </Card>
    )
}