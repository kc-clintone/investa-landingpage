export const FAQs = () => {
  return (
    <div className="container mx-auto py-12 px-6 flex flex-col items-center gap-8">
      <h2 className="text-3xl font-bold text-[#4B0082]">Frequently Asked Questions</h2>
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h3 className="text-xl font-semibold text-[#4B0082] mb-2">What is Investa?</h3>
          <p className="text-gray-700">Investa is a platform that helps you find the best investment opportunities based on your preferences and risk tolerance.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h3 className="text-xl font-semibold text-[#4B0082] mb-2">How does Investa work?</h3>
          <p className="text-gray-700">Investa uses advanced algorithms to analyze market data and match you with investment opportunities that align with your goals and risk profile.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h3 className="text-xl font-semibold text-[#4B0082] mb-2">Is Investa free to use?</h3>
          <p className="text-gray-700">Yes, Investa offers a free tier with basic features. We also have premium plans with additional benefits for advanced users.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h3 className="text-xl font-semibold text-[#4B0082] mb-2">How can I get started?</h3>
          <p className="text-gray-700">Getting started is easy! Just sign up for an account, complete your profile, and start exploring investment opportunities tailored to you.</p>
        </div>
      </div>
    </div>
  )
}
