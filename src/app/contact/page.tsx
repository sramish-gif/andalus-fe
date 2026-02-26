import React from 'react';

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-32 px-6 pb-24">
            <div className="container mx-auto max-w-3xl">
                <div className="mb-12">
                    <h1 className="text-5xl md:text-6xl font-serif font-medium mb-4 leading-tight">
                        Let&apos;s connect
                    </h1>
                    <p className="text-lg text-brand-gray leading-relaxed">
                        Whether you are a founder, clinician, or co-investor, we would love to hear from you.
                    </p>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white/60 p-10 backdrop-blur-sm shadow-sm">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-foreground">
                                    First Name
                                </label>
                                <input
                                    id="firstName"
                                    type="text"
                                    placeholder="Jane"
                                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-foreground">
                                    Last Name
                                </label>
                                <input
                                    id="lastName"
                                    type="text"
                                    placeholder="Doe"
                                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="jane@example.com"
                                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
                            />
                        </div>

                        <div>
                            <label htmlFor="organization" className="mb-2 block text-sm font-medium text-foreground">
                                Organization
                            </label>
                            <input
                                id="organization"
                                type="text"
                                placeholder="Your company or institution"
                                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                placeholder="Tell us about your opportunity or inquiry..."
                                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-black/10 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/80 active:scale-[0.98]"
                        >
                            Send Message →
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
