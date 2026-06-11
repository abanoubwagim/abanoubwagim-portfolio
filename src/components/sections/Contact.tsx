import { useState, type FormEvent } from 'react';
import { useFadeIn } from '../../hooks/useFadeIn';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import Container from '../layout/Container';

const FORMSPREE_URL = 'https://formspree.io/f/xpqerlwg';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const inputBase =
  'w-full bg-transparent border-b border-outline-variant focus:border-primary px-0 py-2 font-inter text-body-md text-on-background transition-colors placeholder:text-on-surface-variant/50';

export default function Contact() {
  const ref = useFadeIn<HTMLElement>();

  const [form, setForm]           = useState<FormState>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.currentTarget;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    form.name,
          email:   form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="fade-in-up py-16 md:py-[120px]"
    >
      <Container>
        <div className="max-w-3xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="font-geist text-display-mobile md:text-display-lg text-on-background mb-4">
              Get in Touch
            </h2>
            <p className="font-inter text-body-md text-on-surface-variant">
              Interested in collaboration or have a project in mind? Let's discuss backend solutions.
            </p>
          </div>

          {/* Success state */}
          {submitted ? (
            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-8 text-center space-y-4">
              <Icon name="check_circle" size={48} filled className="text-primary mx-auto" />
              <p className="font-geist text-headline-md text-on-background">Message sent!</p>
              <p className="font-inter text-body-md text-on-surface-variant">
                Thanks for reaching out. I'll get back to you soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="font-mono text-label-mono text-primary hover:underline mt-2"
              >
                Send another message
              </button>
            </div>

          ) : (
            /* Form */
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-surface-container-lowest p-8 border border-outline-variant rounded-lg"
            >
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-mono text-label-mono text-on-surface-variant mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-label-mono text-on-surface-variant mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputBase}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-mono text-label-mono text-on-surface-variant mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your backend system, API, or project requirements…"
                  className={`${inputBase} resize-none`}
                />
              </div>

              {/* Error */}
              {error && (
                <div className="flex items-center gap-2 text-error font-inter text-[13px]">
                  <Icon name="error" size={16} />
                  {error}
                </div>
              )}

              {/* Submit row */}
              <div className="pt-4 flex justify-between items-center">
                <span className="font-mono text-xs text-on-surface-variant italic">
                  Open to backend engineering opportunities.
                </span>
                <Button
                  as="button"
                  type="submit"
                  variant="primary"
                  disabled={loading}
                  className={loading ? 'opacity-60 cursor-not-allowed' : ''}
                >
                  {loading ? (
                    <>
                      <Icon name="progress_activity" size={18} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message <Icon name="send" size={18} />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}

        </div>
      </Container>
    </section>
  );
}