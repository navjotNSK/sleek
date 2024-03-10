
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="bg-white p-6 rounded-md shadow-md">
    {/* <div className="mb-6">
      <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
        Email address
      </label>
      <input
        type="email"
        id="email"
        className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="name@example.com"
      />
    </div> */}
    {/* <div className="mb-6">
      <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
        Message
      </label>
      <textarea
        id="message"
        rows="3"
        className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Your message..."
      />
    </div> */}
    <label htmlFor="input-text" className="block text-sm font-semibold text-gray-900">
      Enter your prompt:
    </label>
    <textarea
      id="input-text"
      name="input-text"
      rows="5"
      className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    ></textarea>
    <div className="mt-6 flex items-center justify-end gap-x-6">
      {/* <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
        Cancel
      </button> */}
      <button
        type="submit"
        className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </div>
  </form>
  </div>
  </div>
  )
}

  