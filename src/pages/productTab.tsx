'use client';

import { useState } from 'react';
import Image from 'next/image';

const tabs = ['Bread', 'Meat Pies', 'Scones', 'Donuts'];

export default function ProductsTabs() {
  const [activeTab, setActiveTab] = useState('Bread');

  return (
    <section className="bg-[#fdfcf9] py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#261b6c] mb-6">Our Products</h2>

        <div className="flex justify-center space-x-6 border-b border-gray-300 mb-10">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-lg pb-2 font-medium transition-colors ${
                activeTab === tab ? 'text-[#261b6c] border-b-4 border-[#b2904c]' : 'text-gray-500 hover:text-[#261b6c]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'Bread' && (
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-4 rounded-lg shadow">
              <Image src="/Images/bread1.png" alt="Premium Soft White Loaf" width={150} height={200} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#261b6c] mb-2">Premium Soft White Loaf</h3>
              <p className="text-gray-700 text-sm">
                Delightfully soft, fresh and delicious. Fortified with vitamins and minerals. Standard loaf has 18 slices.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Image src="/Images/yellow.png" alt="Family Loaf High Energy Brown" width={150} height={200} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#261b6c] mb-2">Family Loaf High Energy Brown</h3>
              <p className="text-gray-700 text-sm">
                A great source of fibre and energy, fortified with vitamins and minerals. Family loaf has 21 slices.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Image src="/Images/red.png" alt="Family Loaf Soft White" width={150} height={200} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#261b6c] mb-2">Family Loaf Soft White</h3>
              <p className="text-gray-700 text-sm">
                Soft, fresh and delicious, fortified with vitamins and minerals. Family loaf has 21 slices.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'Meat Pies' && (
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-4 rounded-lg shadow">
              <Image src="/Images/pie.png" alt="Beef Pie" width={150} height={150} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#261b6c] mb-2">Beef Pie</h3>
              <p className="text-gray-700 text-sm">
                A flaky pastry filled with savory, seasoned beef for a satisfying snack or meal on the go.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Image src="/Images/pie.png" alt="Chicken Pie" width={150} height={150} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#261b6c] mb-2">Chicken Pie</h3>
              <p className="text-gray-700 text-sm">
                Deliciously seasoned chicken wrapped in a golden, buttery crust. Perfectly convenient and hearty.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Image src="/Images/pie.png" alt="Mince Pie" width={150} height={150} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#261b6c] mb-2">Mince Pie</h3>
              <p className="text-gray-700 text-sm">
                A comforting classic, our mince pie offers rich, savory flavor in a crisp, flaky pastry.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'Scones' && (
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-4 rounded-lg shadow">
              <Image src="/Images/scone.png" alt="Plain Scone" width={150} height={150} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#261b6c] mb-2">Plain Scone</h3>
              <p className="text-gray-700 text-sm">
                Freshly baked, soft and fluffy scones perfect for tea time or a light breakfast.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Image src="/Images/scone.png" alt="Raisin Scone" width={150} height={150} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#261b6c] mb-2">Raisin Scone</h3>
              <p className="text-gray-700 text-sm">
                A sweet twist on a classic, these scones are studded with juicy raisins for extra flavor.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Image src="/Images/scone.png" alt="Cheese Scone" width={150} height={150} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#261b6c] mb-2">Cheese Scone</h3>
              <p className="text-gray-700 text-sm">
                Savory scones made with real cheese, offering a perfect snack for any time of the day.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'Donuts' && (
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-4 rounded-lg shadow">
              <Image src="/Images/side.png" alt="Glazed Donut" width={150} height={150} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#261b6c] mb-2">Glazed Donut</h3>
              <p className="text-gray-700 text-sm">
                Soft, fluffy donuts coated with a sweet glaze for the perfect treat.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Image src="/Images/mid.png" alt="Chocolate Donut" width={150} height={150} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#261b6c] mb-2">Chocolate Donut</h3>
              <p className="text-gray-700 text-sm">
                Indulgent chocolate-covered donuts, ideal for satisfying your sweet tooth.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Image src="/Images/side.png" alt="Sugar Donut" width={150} height={150} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#261b6c] mb-2">Sugar Donut</h3>
              <p className="text-gray-700 text-sm">
                Classic sugar-dusted donuts that are light, fluffy, and delicious.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


