"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { SubmitButton } from "./SubmitButtons";


export function CreateInvoice(){
    const [selectedDtate, setSelectedDate] = useState(new Date())
    return(
        <Card className="w-full max-w-4xl mx-auto">
            <CardContent className="p-6">
                <div className="flex flex-col gap-1 w-fit mb-6">
                <div className="flex items-center gap-4">
                    <Badge variant="secondary">Draft</Badge>
                    <Input placeholder="Test123"/> 
                </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-6">

                <div>
                    <Label>Invoice No.</Label>
                    <div className="flex">
                        <span className="px-3 border broder-r-0 rounded-l-md bg-muted flex items-center ">#</span>
                        <Input className="rounder-l-none" placeholder="1234"/>
                    </div>
                </div>
                            <div>
                        <Label>Currency</Label>
                        <Select defaultValue="INR">
                            <SelectTrigger>
                                <SelectValue placeholder="select currency"></SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="INR">₹ (Indian Rupee)</SelectItem>
                                <SelectItem value="USD">$ (United State Dollar) </SelectItem>
                                <SelectItem value="EUR">£ (Euro) </SelectItem>
                            </SelectContent>
                        </Select>
                            </div>
                                    </div>
                            
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label>From</label>
                                    <div className="space-y-2">
                                        <Input placeholder="Your Name"/>
                                        <Input placeholder="Your Email"/>
                                        <Input placeholder="Your Address"/>
                                    </div>
                                </div>
                                <div>
                                    <Label>To</Label>
                                    <div className="space-y-2">
                                        <Input placeholder="Client Name"/>
                                        <Input placeholder="Client Email"/>
                                        <Input placeholder="Client Address"/>
                                    </div>
                                </div>
                            </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    
                    <div>
                        <div>
                            <Label>Date</Label>
                        </div>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant ="outline" className="w-[280px] text-left justify-start">
                                     <CalendarIcon />
                                     {selectedDtate ? (
                      new Intl.DateTimeFormat("en-US", {
                        dateStyle: "long",
                      }).format(selectedDtate)
                    ) : (
                      <span>Pick a Date</span>
                    )}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <Calendar selected={selectedDtate} onSelect={(date) => setSelectedDate(date || new Date)} mode ="single" fromDate={new Date} />
                            </PopoverContent>
                        </Popover>
                    </div>
                        <div>
                            <Label>Invoice Due</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder ="Select the due date"/>
                                    <SelectContent>
                                        <SelectItem value="0"> Due on Reciept  </SelectItem>
                                        <SelectItem value="15"> Net 15  </SelectItem>
                                        <SelectItem value="30"> Net 30  </SelectItem>
                                    </SelectContent>
                                </SelectTrigger>
                            </Select>
                        </div>
                </div>
         
         <div className="grid grid-cols-12 gap-4 mb-2 font-medium">

            <p className="col-span-6">Description</p>
            <p className="col-span-2">Quantity</p>
            <p className="col-span-2">Rate</p>
            <p className="col-span-2">Amount</p>

         </div>

               <div className="grid grid-cols-12 gap-4 mb-4">
                <div className="col-span-6">
                    <Textarea placeholder="Item name & descrription" />
                </div>
                <div className="col-span-2">
                    <Input type="number" placeholder="0" />
                    </div>
                    <div className="col-span-2">
                    <Input type="number" placeholder="0" />
                    </div>
                    <div className="col-span-2">
                    <Input type="number" placeholder="0" disabled />
                    </div>
                    </div>

                    <div className="flex justify-end">
                        <div className="w-1/3">
                                <div className="flex justify-between py-2">
                                    <span>Subtoatl</span>
                                    <span>₹100.00</span>
                                </div>
                                <div className="flex justify-between py-2 border-t ">
                                        <span>Total (INR) </span>
                                        <span className="font-medium underline underline-offset-2"> ₹100.00 </span>
                                </div>
                        </div>

                    </div>

                        <div>
                            <Label>Note</Label>
                            <Textarea placeholder="Add a note to your invoice"/>
                        </div>
                        <div className="flex items-center justify-end mt-6">
                      <div>      
                        <SubmitButton text="Save Invoice to Client" />
                      </div>
                            </div>

            </CardContent>
        </Card>
    );
}