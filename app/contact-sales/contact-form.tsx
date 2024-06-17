'use client'

import {useState} from 'react'

import {zodResolver} from '@hookform/resolvers/zod'

import {useForm} from 'react-hook-form'

import * as z from 'zod'

// import { Computer, ScreenShare, Share, Smile } from "lucide-react";

import Image from 'next/image'

import {Checkbox} from '@/components/ui/checkbox'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {Button} from '@/components/ui/button'

import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  // FormMessage,
} from '@/components/ui/form'

import {Input} from '@/components/ui/input'

import {useToast} from '@/components/ui/use-toast'

import {Textarea} from '@/components/ui/textarea'
import {PiCheckLight} from 'react-icons/pi'

const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  job_title: z.string(),
  company_name: z.string(),
  help: z.enum([
    'Evaluate Sendtype for my company',
    'Learn More',
    'Get a Quote',
    'How to use Sendtype',
    'Other',
  ]),
  company_size: z.enum([
    '1-10',
    '11-50',
    '51-200',
    '201-500',
    '501-1000',
    '1000+',
  ]),
  info: z.string(),
})

type FormValues = {
  first_name: string
  last_name: string
  email: string
  job_title: string
  company_name: string
  help:
    | 'Evaluate Sendtype for my company'
    | 'Learn More'
    | 'Get a Quote'
    | 'How to use Sendtype'
    | 'Other'
  company_size: '1-10' | '11-50' | '51-200' | '201-500' | '501-1000' | '1000+'
  info: string
  terms: boolean
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const {toast} = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      job_title: '',
      company_name: '',
      help: 'Learn More',
      company_size: '1-10',
      info: '',
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error('Something went wrong')
      }

      setSubmitted(true)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="justify-center  px-8 pt-20 md:flex"
    >
      <div>
        <div className="w-2/3 text-5xl font-medium">Contact our sales team</div>
        <div
          className="
              
              py-4
              text-gray-500
                    "
        >
          Let&apos;s talk about how Sendtype can help your team work better.
        </div>

        <div className="my-4 space-y-6 rounded-lg bg-[#f6f5f4] p-4 md:w-4/5">
          <div className="flex gap-4 border-b ">
            <PiCheckLight className="text-2xl " />

            <div className=" w-80 pb-4 font-normal">
              One flexible tool for your entire company to share knowledge, ship
              projects, and collaborate.
            </div>
          </div>

          <div className="flex gap-4 border-b ">
            <PiCheckLight className="text-2xl " />

            <div className=" w-80 pb-4 font-normal">
              Enterprise features to securely manage user access and security.
            </div>
          </div>

          <div className="flex gap-4  ">
            <PiCheckLight className="text-2xl " />

            <div className=" w-80 pb-4 font-normal">
              Dedicated support to work with you on your setup and help you
              build the best plan for your company.
            </div>
          </div>
        </div>
      </div>

      <Form {...form}>
        {!submitted ? (
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mb-6 space-y-4"
          >
            <div className="items-center gap-6 md:flex ">
              <FormField
                control={form.control}
                name="first_name"
                render={({field}) => (
                  <FormItem className="w-full items-center  justify-center">
                    <FormLabel className="text-sm ">First name *</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="last_name"
                render={({field}) => (
                  <FormItem className="w-full items-center  justify-center">
                    <FormLabel className="w-60 text-sm ">Last name *</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem className="w-full items-center  justify-center">
                  <FormLabel className=" text-sm   ">Work email *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company_name"
              render={({field}) => (
                <FormItem className="w-full items-center  justify-center">
                  <FormLabel className="w-60 text-sm">Company name *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company_size"
              render={({field}) => (
                <FormItem className="w-full items-center justify-center">
                  <FormLabel className="w-60 text-sm ">Company size*</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <div className="flex gap-4">
                        <SelectItem value="1-10">1-10</SelectItem>
                      </div>
                      <SelectItem value="11-50">11-50</SelectItem>
                      <SelectItem value="51-200">51-200</SelectItem>
                      <SelectItem value="501-1000">501-1000</SelectItem>
                      <SelectItem value="1000+">1000+</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="help"
              render={({field}) => (
                <FormItem className="w-full items-center  justify-center">
                  <FormLabel className="w-60 text-sm   ">
                    How can we help ?
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <div className="flex gap-4">
                        <SelectItem value="Evaluate Sendtype for my company">
                          Evaluate Sendtype for my company
                        </SelectItem>
                      </div>
                      <SelectItem value="Learn More">Learn More</SelectItem>
                      <SelectItem value="Get a Quote">Get a Quote</SelectItem>
                      <SelectItem value="How to use Sendtype">
                        How to use Sendtype
                      </SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="info"
              render={({field}) => (
                <FormItem className="w-full items-center justify-center">
                  <FormLabel className="w-60 text-sm   ">
                    Anything else ?
                  </FormLabel>
                  <FormControl>
                    <Textarea style={{height: '100px'}} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex items-center gap-4">
              <div>
                <Checkbox className="text-[#6c6684]" />
              </div>
              <div className="mb-1 text-xs  font-light md:w-3/4">
                I agree to Sendtype&apos; sending marketing communications
                related to Sendtype
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                type="submit"
                className="
                            text-sm
                            font-light
                        
                            "
                disabled={loading}
                onClick={() => form.handleSubmit(onSubmit)}
              >
                Submit
              </Button>
            </div>
          </form>
        ) : (
          <>
            <div
              className="
        flex 
        flex-col 
        items-center 
        justify-center
        px-8
        text-xl
        

 
        md:text-2xl

        "
            >
              <div className="w-80">
                <Image
                  src="/assets/MeditatingDoodle.svg"
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="mx-auto"
                />

                <div className="mx-auto justify-center  py-10 text-center font-light text-gray-500">
                  We&apos;ve received your inquiry and will be contacting you
                  via email shortly.
                </div>
              </div>
            </div>
          </>
        )}
      </Form>
    </div>
  )
}
