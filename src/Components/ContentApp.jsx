import React from "react";

// category images (ye import sahi hai)
import category1 from "../images/pharmacy-WEB.avif";
import category2 from "../images/Pet-Care_WEB.avif";
import category3 from "../images/babycare-WEB.avif";

export default function ContentApp() {
  return (
    <>
      <section className="py-5">
        <div className="max-w-7xl mx-auto px-4">

          {/* 🔹 CATEGORY */}
          <div className="flex flex-wrap -mx-2">
            {[category1, category2, category3].map((img, i) => (
              <div key={i} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                <div className="bg-white rounded-lg shadow">
                  <img src={img} className="w-full h-40 rounded-md" />
                </div>
              </div>
            ))}
          </div>

          {/* 🔹 PRODUCTS GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-8">
            {[
              "Slice-11.avif",
              "Slice-12.avif",
              "Slice-13.avif",
              "Slice-14.avif",
              "Slice-15.avif",
              "Slice-17.avif",
              "Slice-19.avif",
              "Slice-20.avif",
              "Slice-2_10.avif",
              "Slice-7-1_0.avif",
              "Slice-4_9.avif",
              "Slice-5_4.avif",
              "Slice-8_4.avif",
            ].map((img, i) => (
              <div key={i} className="bg-white shadow p-3 rounded">
                <img
                  src={`/images/${img}`}
                  className="w-full h-28 object-contain"
                  alt="product"
                />
              </div>
            ))}
          </div>

          {/* 🔹 ROLLING PRODUCTS */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">
              Rolling Paper & Tobacco
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "roll1.avif",
                "roll2.avif",
                "roll3.avif",
                "roll4.avif",
                "roll5.avif",
                "roll6.avif",
              ].map((img, i) => (
                <div key={i} className="bg-white shadow p-3 rounded">
                  <img
                    src={`/images/${img}`}
                    className="w-full h-32 object-contain"
                  />
                  <p className="text-sm mt-2">Brown Rolling Paper</p>
                  <p className="text-sm">Pack of 1</p>

                  <div className="flex justify-between items-center mt-2">
                    <span>₹120</span>
                    <button className="border border-green-500 px-2 rounded text-green-500">
                      ADD
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}