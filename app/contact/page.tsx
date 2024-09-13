import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-black text-2xl font-bold mb-6 text-center">Contactez-nous</h1>
        <h2 className="text-lg font-light mb-4 text-center">N'hésitez pas à nous contacter pour toute question ou demande.</h2>
        <form
          action="https://formspree.io/f/xwpejoyq"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Votre email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Votre message:
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows={4}
              placeholder="Votre message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
