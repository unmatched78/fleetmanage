"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Send, Minimize2, User, Bot, Clock, CheckCircle2 } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "agent"
  timestamp: Date
  status?: "sent" | "delivered" | "read"
}

const QUICK_RESPONSES = [
  "How does pricing work?",
  "Can I get a demo?",
  "What integrations do you offer?",
  "How do I get started?",
]

const AGENT_RESPONSES = {
  "How does pricing work?":
    "Our pricing is simple and transparent! We offer three tiers: Starter ($49/month), Professional ($149/month), and Enterprise (custom pricing). Each plan includes different features based on your fleet size and needs.",
  "Can I get a demo?":
    "I'd be happy to schedule a personalized demo for you. What's the best time to reach you? You can also click 'Schedule Demo' on our homepage to book directly.",
  "What integrations do you offer?":
    "We integrate with most major fleet management systems, accounting software, and GPS providers. Our API also allows custom integrations. What specific systems are you looking to connect?",
  "How do I get started?":
    "Getting started is easy! You can sign up for a free trial right now - no credit card required. The setup takes less than 10 minutes, and our team will help you get everything configured.",
  default:
    "Thanks for your message! I'm here to help you with any questions about FleetConnect. Our team typically responds within 2-3 minutes during business hours.",
}

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there! 👋 Welcome to FleetConnect. I'm Sarah from our support team. How can I help you today?",
      sender: "agent",
      timestamp: new Date(),
      status: "read",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0)
      inputRef.current?.focus()
    }
  }, [isOpen])

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
      status: "sent",
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate agent response
    setTimeout(
      () => {
        setIsTyping(false)
        const responseText = AGENT_RESPONSES[text as keyof typeof AGENT_RESPONSES] || AGENT_RESPONSES.default

        const agentMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: responseText,
          sender: "agent",
          timestamp: new Date(),
          status: "read",
        }

        setMessages((prev) => [...prev, agentMessage])

        if (!isOpen) {
          setUnreadCount((prev) => prev + 1)
        }
      },
      1500 + Math.random() * 1000,
    ) // Random delay between 1.5-2.5 seconds
  }

  const handleQuickResponse = (response: string) => {
    handleSendMessage(response)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setIsMinimized(false)
    }
  }

  const minimizeChat = () => {
    setIsMinimized(true)
  }

  const maximizeChat = () => {
    setIsMinimized(false)
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
          <Button
            onClick={toggleChat}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110"
          >
            <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            {unreadCount > 0 && (
              <Badge className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                {unreadCount}
              </Badge>
            )}
          </Button>
        </div>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 left-4 sm:left-auto z-50">
          <Card
            className={`w-full sm:w-96 bg-white/95 backdrop-blur-lg border-white/20 shadow-2xl transition-all duration-300 ${
              isMinimized ? "h-14 sm:h-16" : "h-[500px] sm:h-[600px]"
            }`}
          >
            {/* Chat Header */}
            <CardHeader className="flex flex-row items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">FleetConnect Support</CardTitle>
                  <div className="flex items-center space-x-1 text-sm opacity-90">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {!isMinimized && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={minimizeChat}
                    className="text-white hover:bg-white/20 w-8 h-8 p-0"
                  >
                    <Minimize2 className="w-4 h-4" />
                  </Button>
                )}
                {isMinimized && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={maximizeChat}
                    className="text-white hover:bg-white/20 w-8 h-8 p-0"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleChat}
                  className="text-white hover:bg-white/20 w-8 h-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>

            {!isMinimized && (
              <CardContent className="flex flex-col h-[436px] sm:h-[536px] p-0">
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-[80%] ${message.sender === "user" ? "order-2" : "order-1"}`}>
                        <div
                          className={`px-4 py-2 rounded-2xl ${
                            message.sender === "user"
                              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                        </div>
                        <div
                          className={`flex items-center mt-1 space-x-1 ${
                            message.sender === "user" ? "justify-end" : "justify-start"
                          }`}
                        >
                          <span className="text-xs text-gray-500">{formatTime(message.timestamp)}</span>
                          {message.sender === "user" && message.status && (
                            <CheckCircle2 className="w-3 h-3 text-blue-500" />
                          )}
                        </div>
                      </div>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.sender === "user"
                            ? "order-1 ml-2 bg-gradient-to-r from-blue-500 to-purple-600"
                            : "order-2 mr-2 bg-gray-200"
                        }`}
                      >
                        {message.sender === "user" ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Bot className="w-4 h-4 text-gray-600" />
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <Bot className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="bg-gray-100 px-4 py-2 rounded-2xl">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Responses */}
                {messages.length === 1 && (
                  <div className="px-4 py-2 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {QUICK_RESPONSES.map((response, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuickResponse(response)}
                          className="text-xs bg-white hover:bg-gray-50 border-gray-200"
                        >
                          {response}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input Area */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <Input
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleSendMessage(inputValue)
                        }
                      }}
                      placeholder="Type your message..."
                      className="flex-1 border-gray-200 focus:border-blue-500"
                    />
                    <Button
                      onClick={() => handleSendMessage(inputValue)}
                      disabled={!inputValue.trim()}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    Typically replies in 2-3 minutes
                  </p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      )}
    </>
  )
}