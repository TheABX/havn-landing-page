'use client';

import Image from 'next/image';

export default function HAVNLandingPage() {
  return (
    <main className="min-h-screen bg-[#05070A] text-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* HERO SECTION */}
        <section id="hero">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Headline & CTA */}
            <div>
              {/* Eyebrow/Badge */}
              <div className="inline-flex items-center rounded-full border border-slate-700 px-3 py-1 text-xs tracking-[0.18em] uppercase text-slate-300 mb-4">
                ALL-NATURAL SOLID COLOGNE
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-50 mb-4">
                Smell like a man. Not a chemical factory.
              </h1>

              {/* Subheadline */}
              <p className="text-sm md:text-base text-slate-300 mb-6 max-w-xl">
                HAVN is an all-natural solid cologne for men who want a clean, rugged scent without spraying synthetic chemicals onto their skin every day.
              </p>

              {/* Benefit Bullets */}
              <ul className="space-y-2 text-sm md:text-base text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  <span>100% natural ingredients – no endocrine-disrupting chemicals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  <span>Pocket-sized tin – throw it in your jeans, gym bag, or carry-on.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  <span>Warm notes of sandalwood, cedar, amber, and vetiver that actually smell like the outdoors.</span>
                </li>
              </ul>

              {/* CTA Area */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a
                  href="https://shop.yourbrand.com/products/havn-solid-cologne"
                  className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-[#05070A] shadow-lg shadow-amber-500/25 hover:bg-amber-400 transition"
                >
                  Shop HAVN
                </a>
                <a
                  href="#why-natural"
                  className="text-sm font-medium text-slate-300 hover:text-slate-100 underline-offset-4 hover:underline"
                >
                  Why go natural?
                </a>
              </div>
            </div>

            {/* Right: Product Image */}
            <div className="relative h-80 md:h-[460px]">
              <Image
                src="/havn/havn-hero-tin-slate.jpg"
                alt="HAVN all-natural solid cologne tin on dark slate with natural textures"
                fill
                className="object-contain md:object-cover rounded-2xl border border-slate-800 shadow-2xl shadow-black/40"
                priority
              />
            </div>
          </div>
        </section>

        {/* SECTION 2: WHY HAVN / BENEFITS */}
        <section
          id="why-natural"
          className="border-t border-slate-800 bg-[#05070A]"
        >
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="text-xs tracking-[0.18em] uppercase text-amber-400 mb-3">
                WHY HAVN
              </div>
              <h2 className="text-2xl md:text-4xl font-semibold text-slate-50 tracking-tight mb-4">
                The problem with chemical colognes.
              </h2>
              <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
                Most men's colognes are loaded with synthetic fragrances, alcohol, and endocrine-disrupting chemicals. You're spraying this directly onto your skin, where it gets absorbed into your bloodstream. Every. Single. Day.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {/* Benefit 1 */}
              <div className="border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
                <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-50 mb-2">
                  100% Natural Ingredients
                </h3>
                <p className="text-sm text-slate-300">
                  No phthalates, parabens, or synthetic fragrances. Just natural essential oils and plant-based ingredients that work with your body, not against it.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
                <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-50 mb-2">
                  No Alcohol, No Sting
                </h3>
                <p className="text-sm text-slate-300">
                  Solid cologne activates with your body heat. No harsh alcohol spray, no burning sensation, no cloud of fragrance that announces your arrival.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
                <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-50 mb-2">
                  Built for Daily Wear
                </h3>
                <p className="text-sm text-slate-300">
                  Safe enough to use every day without worrying about what's soaking into your skin. Your body deserves better than a chemical cocktail.
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center">
              <a
                href="https://shop.yourbrand.com/products/havn-solid-cologne"
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-[#05070A] shadow-lg shadow-amber-500/25 hover:bg-amber-400 transition"
              >
                Shop HAVN
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 3: BRAND STORY / PHILOSOPHY */}
        <section
          id="story"
          className="border-t border-slate-800 bg-[#05070A]"
        >
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
              {/* LEFT COLUMN (TEXT) */}
              <div>
                {/* Eyebrow */}
                <div className="text-xs tracking-[0.18em] uppercase text-amber-400 mb-3">
                  THE HAVN STORY
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-50 tracking-tight mb-4">
                  Built for men who want a cleaner kind of cologne.
                </h2>

                {/* Lead paragraph */}
                <p className="text-sm md:text-base text-slate-300 mb-4 max-w-xl">
                  Most guys grew up grabbing whatever cologne was on special at the department store. Strong, synthetic, alcohol-heavy sprays that linger in the room long after you've left. They smell harsh, they're loaded with mystery chemicals, and you wear them on the most absorbent parts of your skin every single day.
                </p>

                {/* Second paragraph (HAVN's "why") */}
                <p className="text-sm md:text-base text-slate-300 mb-6 max-w-xl">
                  HAVN was created as the opposite of that. A solid cologne made from natural ingredients, designed to sit quietly in your pocket and work with your body heat. No cloud of synthetic fragrance, no sting, no endocrine-disrupting cocktail – just a grounded, masculine scent you actually feel good putting on.
                </p>

                {/* Short bullet list */}
                <ul className="space-y-2 text-sm md:text-base text-slate-300 mb-6">
                  <li>Formulated as an all-natural solid cologne – not a chemical spray.</li>
                  <li>Warm, woody notes of sandalwood, cedar, amber, and vetiver.</li>
                  <li>Made to be worn daily without worrying what's soaking into your skin.</li>
                </ul>

                {/* Subtle reassurance line */}
                <p className="text-xs md:text-sm text-slate-400">
                  Think of it as the modern upgrade to the kind of cologne your grandfather actually would've approved of.
                </p>
              </div>

              {/* RIGHT COLUMN (IMAGE) */}
              <div className="relative h-64 sm:h-80 md:h-[360px] lg:h-[420px]">
                <Image
                  src="/havn/havn-tin-on-wood-1.jpg"
                  alt="HAVN all-natural solid cologne tin resting on dark wood in low light"
                  fill
                  className="object-cover rounded-3xl border border-slate-800 shadow-2xl shadow-black/40"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: COMPARISON – HAVN VS TYPICAL CHEMICAL COLOGNE */}
        <section
          id="comparison"
          className="border-t border-slate-800 bg-[#05070A]"
        >
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            {/* Eyebrow */}
            <p className="text-xs tracking-[0.18em] uppercase text-amber-400 mb-3">
              HAVN VS TYPICAL COLOGNE
            </p>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-50 tracking-tight mb-4">
              The difference between HAVN and the chemical spray on your shelf.
            </h2>

            {/* Short intro paragraph */}
            <p className="text-sm md:text-base text-slate-300 mb-8 max-w-2xl">
              Most colognes are built for impact, not for your health. Strong synthetic fragrance, harsh alcohol, and potential endocrine disruptors you spray on your neck and wrists every day. HAVN takes the opposite approach – a clean, solid cologne designed to smell rugged without the chemical hit.
            </p>

            {/* Comparison layout */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* LEFT SIDE: HAVN (highlighted, positive) */}
              <div className="rounded-2xl border border-amber-500/60 bg-slate-900/50 p-5">
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-amber-400 mb-2">
                  HAVN – ALL-NATURAL SOLID COLOGNE
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-slate-50 mb-3">
                  Clean, grounded, and built for daily wear.
                </h3>
                <ul className="space-y-2 text-sm md:text-base text-slate-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <span>All-natural solid formula – no synthetic fragrance chemicals.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <span>No known endocrine-disrupting ingredients sprayed onto your skin.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <span>Warm sandalwood, cedar, amber, and vetiver that smell like the outdoors.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <span>Solid tin format – pocket-friendly, travel-safe, no glass bottle to break.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <span>Buildable strength – swipe a little for day, more for nights out.</span>
                  </li>
                </ul>
              </div>

              {/* RIGHT SIDE: Typical chemical cologne (muted, negative but not hysterical) */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-500 mb-2">
                  TYPICAL SPRAY COLOGNE
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-slate-200 mb-3">
                  Loud, synthetic, and built to overpower.
                </h3>
                <ul className="space-y-2 text-sm md:text-base text-slate-400">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                    <span>Loaded with synthetic fragrance chemicals and harsh alcohol.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                    <span>Potential endocrine disruptors sprayed directly onto your neck and wrists.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                    <span>Sharp, artificial scent profiles that can cause headaches or irritation for some people.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                    <span>Bulky glass bottles that are annoying to carry and risky to travel with.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                    <span>One heavy spray sets the strength – you get all or nothing.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Optional subtext */}
            <p className="mt-6 text-xs md:text-sm text-slate-400 max-w-xl">
              HAVN isn't about fear – it's about giving you a cleaner option. If you're going to wear a scent most days, it should be something you actually feel good putting on your skin.
            </p>
          </div>
        </section>

        {/* SECTION 5: TESTIMONIALS / SOCIAL PROOF */}
        <section
          id="testimonials"
          className="border-t border-slate-800 bg-[#05070A]"
        >
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            {/* Eyebrow */}
            <p className="text-xs tracking-[0.18em] uppercase text-amber-400 mb-3">
              WHAT MEN ARE SAYING
            </p>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-50 tracking-tight mb-4">
              Real feedback from real men using HAVN.
            </h2>

            {/* Short reassurance line */}
            <p className="text-sm md:text-base text-slate-300 mb-10 max-w-2xl">
              These aren't paid influencers or staged marketing lines — just honest reactions from guys who swapped their chemical sprays for something cleaner.
            </p>

            {/* Testimonial grid */}
            <div className="grid gap-6 md:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl shadow-black/20">
                <p className="text-sm md:text-base text-slate-200 mb-4">
                  "Finally — a cologne that doesn't smell like a nightclub. Subtle, masculine, and lasts all day."
                </p>
                <p className="text-xs text-slate-400 tracking-wide uppercase">
                  — James T. • Builder
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl shadow-black/20">
                <p className="text-sm md:text-base text-slate-200 mb-4">
                  "My girlfriend said it's the best I've ever smelled — and I've tried everything."
                </p>
                <p className="text-xs text-slate-400 tracking-wide uppercase">
                  — Aaron D. • Firefighter
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl shadow-black/20">
                <p className="text-sm md:text-base text-slate-200 mb-4">
                  "No rash, no headaches, no chemical cloud — just clean confidence."
                </p>
                <p className="text-xs text-slate-400 tracking-wide uppercase">
                  — Matt S. • PT & Runner
                </p>
              </div>
            </div>

            {/* Optional note under grid */}
            <p className="mt-10 text-xs md:text-sm text-slate-400 max-w-xl">
              We'll be adding more reviews as more men switch to natural scents. If you'd like to share your experience with HAVN, reply to your order confirmation email — we read every message.
            </p>
          </div>
        </section>

        {/* SECTION 6: OFFER / PRICING OPTIONS */}
        <section
          id="offer"
          className="border-t border-slate-800 bg-[#05070A]"
        >
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            {/* Eyebrow */}
            <p className="text-xs tracking-[0.18em] uppercase text-amber-400 text-center mb-3">
              CHOOSE YOUR PACK
            </p>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-50 text-center tracking-tight mb-4">
              Clean, rugged scent — with no chemical trade-off.
            </h2>

            {/* Short supporting line */}
            <p className="text-sm md:text-base text-slate-300 text-center mb-10 max-w-2xl mx-auto">
              Choose a single tin to start — or get the 3-pack and save. The bundle is ideal if you want one for home, one for your bag, and one as a gift.
            </p>

            {/* Pricing grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Pricing Card 1 — Single Tin */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col shadow-xl shadow-black/20">
                {/* IMAGE WRAPPER */}
                <div className="relative h-40 sm:h-48 md:h-52 w-full mb-6">
                  <Image
                    src="/havn/havn-tin-on-wood-1.jpg"
                    alt="Single tin HAVN solid cologne on wood"
                    fill
                    className="object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]"
                    priority={false}
                  />
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-slate-50 mb-2">
                  1 Tin — HAVN Solid Cologne
                </h3>

                <p className="text-sm text-slate-400 mb-4">
                  Just the essentials. Great if you want to try HAVN or keep it simple.
                </p>

                <div className="flex items-end gap-2 mb-6">
                  <span className="text-3xl font-semibold text-slate-50">$50</span>
                  <span className="text-xs text-slate-500 line-through">$65</span>
                </div>

                <a
                  href="https://shop.yourbrand.com/products/havn-solid-cologne"
                  className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-[#05070A] shadow-lg shadow-amber-500/25 hover:bg-amber-400 transition"
                >
                  Add to Cart
                </a>
              </div>

              {/* Pricing Card 2 — Best Value (Bundle) */}
              <div className="rounded-2xl border border-amber-500 bg-slate-900/60 p-6 flex flex-col shadow-xl shadow-amber-500/20 relative">
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-[#05070A] text-[10px] font-semibold tracking-[0.18em] uppercase px-3 py-1 rounded-full">
                  Best Value
                </div>

                {/* IMAGE WRAPPER */}
                <div className="relative h-40 sm:h-48 md:h-52 w-full mb-6">
                  <Image
                    src="/havn/havn-triple-tins-wide.jpg"
                    alt="Three HAVN solid cologne tins"
                    fill
                    className="object-contain scale-[0.92] md:scale-100 drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]"
                    priority={false}
                  />
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-slate-50 mb-2">
                  3-Pack — HAVN Solid Cologne
                </h3>

                <p className="text-sm text-slate-400 mb-4">
                  One for home, one for your gym bag, one as a gift — or rotate scents when new ones drop.
                </p>

                <div className="flex items-end gap-2 mb-6">
                  <span className="text-3xl font-semibold text-slate-50">$110</span>
                  <span className="text-xs text-slate-500 line-through">$150</span>
                </div>

                <a
                  href="https://shop.yourbrand.com/cart/ADD_YOUR_VARIANT_IDS"
                  className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-[#05070A] shadow-lg shadow-amber-500/30 hover:bg-amber-400 transition"
                >
                  Add Bundle to Cart
                </a>

                {/* Savings line */}
                <p className="mt-4 text-xs text-amber-400 text-center">
                  Save $40 when you buy 3
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: 30-Day Confidence Guarantee */}
        <section
          id="guarantee"
          className="border-t border-slate-800 bg-[#05070A]"
        >
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-18">
            {/* Badge / label */}
            <p className="mx-auto mb-4 inline-flex items-center rounded-full border border-amber-500/70 bg-slate-900/60 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400">
              30-Day Confidence Guarantee
            </p>

            {/* Heading */}
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-slate-50 tracking-tight mb-4">
              If you don't love HAVN, we'll make it right.
            </h2>

            {/* Supporting paragraph */}
            <p className="text-center text-sm md:text-base text-slate-300 mb-8 max-w-2xl mx-auto">
              HAVN is made to be worn and enjoyed — not left sitting in a drawer. If your order arrives damaged, or if the scent genuinely isn't what you expected, email us within 30 days and we'll fix it with a replacement or a refund.
            </p>

            {/* Key points row */}
            <div className="grid gap-6 sm:grid-cols-3 text-left">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-400 mb-2">
                  No Risk
                </p>
                <p className="text-xs md:text-sm text-slate-300">
                  Try HAVN for 30 days. If it's not for you, we'll sort it out.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-400 mb-2">
                  We Stand Behind It
                </p>
                <p className="text-xs md:text-sm text-slate-300">
                  We use it ourselves. We're not interested in sending out products we don't believe in.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-400 mb-2">
                  Simple Support
                </p>
                <p className="text-xs md:text-sm text-slate-300">
                  Just reply to your order email and our small team will take care of you — no hoops to jump through.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Evidence / Social Proof by Authority */}
        <section
          id="evidence"
          className="border-t border-slate-800 bg-[#05070A]"
        >
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            {/* Eyebrow */}
            <p className="text-xs tracking-[0.18em] uppercase text-amber-400 text-center mb-3">
              BACKED BY A SHIFT IN MEN'S GROOMING
            </p>

            {/* Heading */}
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-slate-50 tracking-tight mb-4">
              You're not the only one rethinking what's in your cologne.
            </h2>

            {/* Subheading */}
            <p className="text-center text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-10">
              More men now want products that smell good — without spraying undisclosed chemicals directly onto their skin.
            </p>

            {/* Authority Grid */}
            <div className="grid gap-6 md:grid-cols-3">
              {/* Tile 1 */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-400 mb-2">
                  Dermatology Research
                </p>
                <p className="text-sm text-slate-300 mb-3">
                  Studies published in dermatology journals identify fragrance ingredients as one of the most frequent triggers of allergic contact dermatitis.
                </p>
                <p className="text-xs text-slate-500">
                  Source: National Institutes of Health (NIH)
                </p>
              </div>

              {/* Tile 2 */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-400 mb-2">
                  Consumer Trends
                </p>
                <p className="text-sm text-slate-300 mb-3">
                  Demand for natural grooming products has surged globally, with search interest for "natural cologne" growing exponentially in the last two years.
                </p>
                <p className="text-xs text-slate-500">
                  Source: Google Trends / Market Reports
                </p>
              </div>

              {/* Tile 3 */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-400 mb-2">
                  Ingredient Transparency
                </p>
                <p className="text-sm text-slate-300 mb-3">
                  The Environmental Working Group notes many synthetic fragrance blends may contain dozens of unlisted chemicals — some classified as potential endocrine disruptors.
                </p>
                <p className="text-xs text-slate-500">
                  Source: EWG Public Ingredient Review
                </p>
              </div>
            </div>

            {/* Closing Identity Line */}
            <p className="text-center text-sm md:text-base text-slate-300 max-w-xl mx-auto mt-12">
              If you've already taken control of what goes into your body, this is simply the next logical step: caring about what goes <span className="underline decoration-amber-500/70 underline-offset-4">on</span> your body too.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

