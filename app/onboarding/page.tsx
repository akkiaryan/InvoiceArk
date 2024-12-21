"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SubmitButton } from "../components/SubmitButtons"
import { useActionState } from "react";
import { onboardUser } from "../verify/actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { onboardingSchema } from "../utils/zodSchemas";
export default function Onboarding(){
    const [lastResult, action] = useActionState(onboardUser, undefined);
    const [form,fields] = useForm({
        lastResult,
        onValidate({formData}){
            return parseWithZod(formData,{
                schema: onboardingSchema,
            });
        },
        shouldValidate: 'onBlur',
        shouldRevalidate: 'onInput',
    });
    return (
        <div className="min-h-screen w-screen flex items-center justify-center">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
        <Card className="max-w-sm mx-auto">
             <CardHeader>
                  <CardTitle className="text-xl">You are almost finished!</CardTitle>
                  <CardDescription>Enter your informantion to create an account</CardDescription>
             </CardHeader>
             <CardContent>   
                <form className="grid gap-4" action={action} id ={form.id} onSubmit= {form.onSubmit} noValidate>
                    <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <Label>First Name</Label>
                        <Input name={fields.firstName.name} key={fields.firstName.key} defaultValue={fields.firstName.initialValue} placeholder="Akki"/>
                        <p className="text-red-500 text-sm">{fields.firstName.errors}</p>
                    </div>
                    <div className="grid gap-2">
                        <Label>Last Name</Label>
                        <Input name={fields.lastName.name} key={fields.lastName.key} defaultValue={fields.lastName.initialValue} placeholder="Aryan"/>
                        <p className="text-red-500 text-sm">{fields.lastName.errors}</p>
                    </div>
                    </div>
                     <div className="grid gap-2">
                     <Label>Adress</Label>
                     <Input name={fields.address.name} key={fields.address.key} defau