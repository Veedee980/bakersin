'use client';

import { Dialog, Transition, TransitionChild, DialogPanel, DialogTitle } from '@headlessui/react';
import { Fragment, useState } from 'react';

interface ProductDonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDonationModal({ isOpen, onClose }: ProductDonationModalProps) {
  const [formData, setFormData] = useState({
    organisationName: '',
    contactName: '',
    contactPosition: '',
    organisationAddress: '',
    telephone: '',
    email: '',
    eventDate: '',
    useOfDonation: '',
    numberOfAttendants: '',
    productLookingFor: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    onClose();
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" open={isOpen} onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
                >
                  &times;
                </button>

                <DialogTitle as="h3" className="text-2xl font-bold text-center mb-6 text-[rgba(38,27,108,1)]">
                  Request Product Donations
                </DialogTitle>

                <p className="text-sm text-center mb-4 text-gray-700">
                  You can apply for product donations by completing this form, we will contact you should your application be successful.
                  Please bear in mind that we will need at least 3 weeks notice to the date of your event.
                </p>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    name="organisationName"
                    value={formData.organisationName}
                    onChange={handleChange}
                    placeholder="Name of Organisation"
                    className="bg-gray-100 p-3 rounded"
                    required
                  />
                  <input
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="Name of Contact Person"
                    className="bg-gray-100 p-3 rounded"
                    required
                  />
                  <input
                    name="contactPosition"
                    value={formData.contactPosition}
                    onChange={handleChange}
                    placeholder="Contact Person Position"
                    className="bg-gray-100 p-3 rounded"
                  />
                  <input
                    name="organisationAddress"
                    value={formData.organisationAddress}
                    onChange={handleChange}
                    placeholder="Organization Address"
                    className="bg-gray-100 p-3 rounded"
                    required
                  />
                  <input
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="Contact Person’s Telephone"
                    className="bg-gray-100 p-3 rounded"
                    required
                  />
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Contact Person’s E-mail"
                    type="email"
                    className="bg-gray-100 p-3 rounded"
                    required
                  />
                  <input
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    placeholder="Date of Event"
                    type="date"
                    className="bg-gray-100 p-3 rounded"
                    required
                  />

                  <select
                    name="useOfDonation"
                    value={formData.useOfDonation}
                    onChange={handleChange}
                    className="bg-gray-100 p-3 rounded"
                    required
                  >
                    <option value="">Intended Use of Donation</option>
                    <option value="Community Event">Community Event</option>
                    <option value="Charity Drive">Charity Drive</option>
                    <option value="School Program">School Program</option>
                  </select>

                  <select
                    name="numberOfAttendants"
                    value={formData.numberOfAttendants}
                    onChange={handleChange}
                    className="bg-gray-100 p-3 rounded"
                    required
                  >
                    <option value="">Number of Attendants</option>
                    <option value="0-50">0-50</option>
                    <option value="51-100">51-100</option>
                    <option value="100+">100+</option>
                  </select>

                  <select
                    name="productLookingFor"
                    value={formData.productLookingFor}
                    onChange={handleChange}
                    className="bg-gray-100 p-3 rounded"
                    required
                  >
                    <option value="">What Product Are You Specifically Looking For?</option>
                    <option value="Product A">Product A</option>
                    <option value="Product B">Product B</option>
                    <option value="Product C">Product C</option>
                  </select>

                  <button
                    type="submit"
                    className="bg-[#B2904C] text-white py-3 rounded mt-4 hover:bg-[#a58344] transition-colors duration-300 md:col-span-2"
                  >
                    SUBMIT APPLICATION
                  </button>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}





