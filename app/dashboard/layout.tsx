import { ReactNode } from "react";
import { requireUser } from "../utils/hooks";
import Link from "next/link";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { DashboardLinks } from "../components/Dashboard";
import { Menu, User2 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const session = await requireUser();

  return (
    <>
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Sidebar */}
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex flex-col max-h-screen h-full gap-2">
          <div className="h-14 flex items-center border-b px-4 lg:h[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src={Logo} alt="Logo" className="size-7" />
              <p className="text-2xl font-bold">
                Invoice <span className="text-blue-600">Ark</span>
              </p>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <DashboardLinks />
            </nav>
          </div>
        </div>
      </div>

   
      <div className="flex flex-col">

        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h[60px] lg:px-6">
          <Sheet>

            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
               <nav className="grid gap-2 mt-10">
                <DashboardLinks />
                </nav> 
            </SheetContent>
          </Sheet>
        <div className="flex item-center ml-auto">
            <DropdownMenu > 
                <DropdownMenuTrigger asChild>
                <Button className="rounded-full" variant="outline"size="icon">
                   <User2 /> 
                </Button>
                </DropdownMenuTrigger>
               
                <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem asChild >
                    <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/dashboard/invoices">Invoices</Link>
                </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        </header>
      </div>
    </div>
  </>
  );
}