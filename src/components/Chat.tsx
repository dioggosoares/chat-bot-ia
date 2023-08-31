'use client'

import { useChat } from 'ai/react'

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ScrollArea } from './ui/scroll-area';

export interface ChatProps {}

export function Chat(props: ChatProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat'
  })

  return (
    <Card className='w-[440px]'>
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <ScrollArea className="h-[600px] w-full pr-4">
            {messages.map((message) => {
              return (
              <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">
                {message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback>DS</AvatarFallback>
                    <AvatarImage src="https://github.com/dioggosoares.png" />
                  </Avatar>
                )}
                {message.role === 'assistant' && (
                  <Avatar>
                    <AvatarFallback>DS</AvatarFallback>
                    <AvatarImage src="https://github.com/ecovolts.png" />
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === 'user' ? 'Usuário' : 'AI'}:
                  </span>
                  {message.content}
                </p>
              </div>
              )
            })}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form className="flex w-full gap-2" onSubmit={handleSubmit}>
            <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />
            <Button type='submit'>Send</Button>
          </form>
        </CardFooter>
      </Card>
  )
}