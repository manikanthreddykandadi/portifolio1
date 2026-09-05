import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Contact() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!subject.trim() || !message.trim()) {
      return;
    }

    const myEmail = "manikanthreddykandadi583@gmail.com";

    // Encode subject and message
    const encodedSubject = encodeURIComponent(subject.trim());
    const encodedMessage = encodeURIComponent(message.trim());

    // mailto opens the user's default email app
    const mailtoUrl =
      `mailto:${myEmail}` +
      `?subject=${encodedSubject}` +
      `&body=${encodedMessage}`;

    // Open email app
    window.location.href = mailtoUrl;

    // Clear form
    setSubject("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="
        w-full
        bg-white
        px-5
        py-20
        text-gray-900
        dark:bg-slate-950
        dark:text-white
        sm:px-8
        lg:px-12
      "
    >
      <div className="mx-auto max-w-4xl">

        {/* ================= HEADER ================= */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get In Touch
          </h2>

          <p className="mt-4 text-gray-500 dark:text-slate-400">
            Have a project, opportunity, or idea? Let's connect.
          </p>
        </div>

        {/* ================= FORM CARD ================= */}
        <Card
          className="
            mx-auto
            w-full
            max-w-2xl
            border-gray-200
            bg-white
            dark:border-slate-800
            dark:bg-slate-900
          "
        >
          <CardHeader>
            <CardTitle className="text-2xl">
              Send a Message
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* ================= SUBJECT ================= */}
              <div className="space-y-2">
                <Label htmlFor="subject">
                  Subject
                </Label>

                <Input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>

              {/* ================= MESSAGE ================= */}
              <div className="space-y-2">
                <Label htmlFor="message">
                  Message
                </Label>

                <Textarea
                  id="message"
                  placeholder="Write your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={8}
                  required
                />
              </div>

              {/* ================= SEND BUTTON ================= */}
              <Button
                type="submit"
                className="
                  w-full
                  transition-all
                  duration-200
                  hover:scale-[1.01]
                "
              >
                Send Message →
              </Button>

            </form>
          </CardContent>
        </Card>

        {/* ================= EMAIL INFO ================= */}
        <p className="mt-6 text-center text-sm text-gray-500 dark:text-slate-400">
          Clicking "Send Message" will open your email application.
        </p>

      </div>
    </section>
  );
}

export default Contact;
