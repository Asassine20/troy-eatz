"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { useForm } from "react-hook-form"
import { useToast } from "@/components/ui/use-toast"
import { ReloadIcon } from "@radix-ui/react-icons"

export default function ContactUs() {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting }, reset, } = useForm();
    const form = useRef();
    const { toast } = useToast()

    const onSubmit = async (data: any) => {
        toast({
            title: "Message Sent.",
            description: "Thank you for contacting us. We will get back to you shortly.",
        })
        emailjs.sendForm('service_p9gb36g', 'template_uqbopbj', form.current as any, 'fbXgpdLqo_SRGMh72')
            .then((result) => {
                toast({
                    title: "Message Sent.",
                    description: "Thank you for contacting us. We will get back to you shortly.",
                })
                reset()
            }, (error) => {
                toast({
                    title: "Message Failed.",
                    description: error.text,
                })
                console.log(error.text);
            });

        try {

            const response = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/store-email`, {
                method: "POST",
                body: JSON.stringify({
                    firstName: data?.firstName,
                    lastName: data?.lastName,
                    email: data?.email,
                    message: data?.message,
                    source: "Contact Us"
                })
            })

            const result = await response.json()

            console.log("Response On Submit", result)
            return result
        } catch (error) {
            console.log("Error", error)
            return error
        }

    }
    return (
        <div className="flex items-center justify-center p-2">
            <Card>
                <CardContent>
                    <div className="space-y-8 pt-7">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold">
                                Contact Us
                            </h2>
                            <p className="text-zinc-500 dark:text-zinc-400">
                                Fill out the form below and we&apos;ll get back to you as soon as possible.
                            </p>
                        </div>
                        <form ref={form as any} onSubmit={handleSubmit(onSubmit)}>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4" data-id="9">
                                    <div className="space-y-2">
                                        <Label data-id="11" htmlFor="first-name">
                                            First name
                                        </Label>
                                        <Input {...register("firstName", { required: true })} placeholder="Enter your first name" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label data-id="14" htmlFor="last-name">
                                            Last name
                                        </Label>
                                        <Input {...register("lastName", { required: true })} placeholder="Enter your last name" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label data-id="17" htmlFor="email">
                                        Email
                                    </Label>
                                    <Input {...register("email", { required: true })} placeholder="Enter your email" type="email" />
                                </div>
                                <div className="space-y-2">
                                    <Label data-id="32" htmlFor="message">
                                        Message
                                    </Label>
                                    <Textarea className="min-h-[100px]" {...register("message", { required: true })} placeholder="Enter your message" />
                                </div>
                                <Button disabled={isSubmitting} type="submit">
                                    {isSubmitting && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
                                    Send message
                                </Button>
                            </div>
                        </form>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
