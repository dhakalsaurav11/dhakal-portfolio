import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#FBFBFA] flex items-center justify-center px-6">
      <div className="text-center max-w-md space-y-6">
        <h1 className="font-serif text-3xl text-[#111111] tracking-[-0.02em]">
          Thanks for reaching out
        </h1>
        <p className="text-[#787774] leading-relaxed">
          Your message has been received. I will get back to you within
          24&ndash;48 hours.
        </p>
        <Link
          href="/"
          className="inline-flex h-10 items-center justify-center bg-[#111111] text-white text-sm font-semibold px-6 rounded-md hover:bg-[#333333] transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
