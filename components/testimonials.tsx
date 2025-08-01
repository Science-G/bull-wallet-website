export default function Testimonials() {
  return (
    <section className="section-spacing bg-darkgray">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-heading-2-mobile md:text-heading-2 font-bold mb-12 text-center">What Our Customers Say</h2>

        <div className="bg-black p-8 md:p-12">
          <div className="text-center mb-8">
            <p className="text-body-mobile md:text-body italic text-lightgray mb-6">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
              erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor."
            </p>
            <div className="flex items-center justify-center space-x-1 text-charcoal">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="mt-4 text-small-mobile md:text-small font-medium">John D. - Verified Customer</p>
          </div>

          <p className="text-center text-small-mobile md:text-small text-lightgray">Powered by Trustpilot</p>
        </div>
      </div>
    </section>
  )
}
