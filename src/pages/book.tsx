'use client';

import { Dialog } from '@headlessui/react';

interface FactoryTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FactoryTourModal({ isOpen, onClose }: FactoryTourModalProps) {
  if (!isOpen) return null; // don't render if closed

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
    >
      <Dialog.Panel className="max-w-2xl w-full bg-white rounded-2xl p-6 relative shadow-xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
          aria-label="Close modal"
        >
          &times;
        </button>

        <Dialog.Title
          as="h3"
          className="text-2xl font-bold text-center mb-6 text-[rgba(38,27,108,1)]"
        >
          Book A Factory Tour
        </Dialog.Title>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Name of Organisation" className="bg-gray-100 p-3 rounded" />
          <input placeholder="Name of Contact Person" className="bg-gray-100 p-3 rounded" />
          <input placeholder="Organization Address" className="bg-gray-100 p-3 rounded" />
          <input placeholder="Organization’s Resident Town" className="bg-gray-100 p-3 rounded" />
          <input placeholder="Contact Person’s Telephone" className="bg-gray-100 p-3 rounded" />
          <input placeholder="Contact Person’s E-mail" className="bg-gray-100 p-3 rounded" />
          <input placeholder="Date of Visit" className="bg-gray-100 p-3 rounded" type="date" />
          <input placeholder="Number of Participants" className="bg-gray-100 p-3 rounded" type="number" />
          <input placeholder="Age Range of Participants" className="bg-gray-100 p-3 rounded md:col-span-2" />

          <div className="md:col-span-2 mt-4 space-y-2 text-sm text-gray-700">
            <p>
              Plant Visit <a href="#" className="text-blue-600 underline">Terms & Conditions</a> &nbsp;|&nbsp;
              Plant Visit <a href="#" className="text-blue-600 underline">Safety Regulations</a>
            </p>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>
                Your organisation agrees to the submission of this application and confirms all information is accurate.
              </span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Have read the safety regulations.</span>
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#B2904C] text-white py-3 rounded mt-4 hover:bg-[#a58344] transition-colors duration-300 md:col-span-2"
          >
            SUBMIT
          </button>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
}

