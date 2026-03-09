'use client'

import { useForm, ValidationError } from '@formspree/react'

export default function ContactUs() {
  const [state, handleSubmit] = useForm('mlgpgdny')

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 sm:p-10">

        <div className="mb-8 text-center">
          <div className="text-4xl mb-3">✉️</div>
          <h1 className="text-2xl font-bold text-garden-800 dark:text-white">Contact Us</h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Questions, feedback, or just want to talk plants? We'd love to hear from you.
          </p>
        </div>

        {state.succeeded ? (
          <div className="flex flex-col items-center gap-3 py-10 text-center">
            <div className="text-5xl">🌱</div>
            <h2 className="text-lg font-bold text-garden-800 dark:text-white">Message sent!</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Thanks for reaching out. We'll get back to you soon.
            </p>
          </div>
        ) : (
          <form
            action="https://formspree.io/f/mlgpgdny"
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input id="name" type="text" name="name" required placeholder="Your name"
                className="rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-garden-600 focus:border-transparent transition" />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-600 dark:text-red-400" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
              <input id="email" type="email" name="email" required placeholder="you@example.com"
                className="rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-garden-600 focus:border-transparent transition" />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-600 dark:text-red-400" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
              <select id="subject" name="subject" required
                className="rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-garden-600 focus:border-transparent transition">
                <option value="">Select a topic…</option>
                <option value="General Question">General Question</option>
                <option value="Plant Recommendation">Plant Recommendation</option>
                <option value="Guide Feedback">Guide Feedback</option>
                <option value="Bug Report">Bug Report</option>
                <option value="Partnership / Advertising">Partnership / Advertising</option>
                <option value="Other">Other</option>
              </select>
              <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-xs text-red-600 dark:text-red-400" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea id="message" name="message" required rows={5} placeholder="What's on your mind?"
                className="rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-garden-600 focus:border-transparent transition resize-y" />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-600 dark:text-red-400" />
            </div>

            <ValidationError errors={state.errors} className="text-xs text-red-600 dark:text-red-400" />

            <button type="submit" disabled={state.submitting}
              className="self-start bg-garden-600 hover:bg-garden-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm rounded-xl px-6 py-2.5 transition-colors">
              {state.submitting ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
