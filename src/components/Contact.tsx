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

    // Your email address
    const myEmail = "manikanthreddykandadi583@gmail.com";

    // Encode subject and message
    const encodedSubject = encodeURIComponent(subject);
    const encodedMessage = encodeURIComponent(message);

    // Gmail compose URL
    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${myEmail}` +
      `&su=${encodedSubject}` +
      `&body=${encodedMessage}`;

    // Open Gmail
    window.open(gmailUrl, "_blank");

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

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get In Touch
          </h2>

          <p className="mt-4 text-gray-500 dark:text-slate-400">
            Have a project, opportunity, or idea? Let's connect.
          </p>
        </div>

        {/* Form */}
        <Card className="mx-auto w-full max-w-2xl border-gray-200 dark:border-slate-800 dark:bg-slate-900">
          
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

              {/* Subject */}
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

              {/* Message */}
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

              {/* Submit */}
              <Button
                type="submit"
                className="w-full"
              >
                Send Message →
              </Button>

            </form>

          </CardContent>
        </Card>

      </div>
    </section>
  );
}

export default Contact;

