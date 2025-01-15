import React from 'react';
import { Link } from 'react-router-dom';

const collections = [
  {
    name: 'New Arrivals',
    href: '/shop?category=new',
    imageSrc: '/images/new-arrivals.jpg',
  },
  {
    name: 'Summer Collection',
    href: '/shop?category=summer',
    imageSrc: '/images/summer.jpg',
  },
  {
    name: 'Basics',
    href: '/shop?category=basics',
    imageSrc: '/images/basics.jpg',
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative">
  <div className="relative">
    <img
      className="absolute inset-0 h-full w-full object-cover"
      src="/hero.png"
      alt="Model wearing minimalist clothing"
    />
    <div className="relative z-10 bg-black/50">
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8 lg:py-56">
        <div className="mx-auto max-w-2xl text-center text-white lg:mx-0 lg:max-w-xl lg:text-left">
          <h1 className="text-4xl font-serif tracking-tight sm:text-6xl">
            Elevate Your Style
          </h1>
          <p className="mt-6 text-lg leading-8">
            Discover our collection of timeless pieces designed for the modern minimalist.
          </p>
          <div className="mt-10 flex justify-center gap-x-6 lg:justify-start">
            <Link
              to="/shop"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* about us section*/}
<div className="bg-black text-white py-16">
  <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
    {/* Text Section */}
    <div className="lg:w-1/2">
      <h2 className="text-4xl font-serif tracking-tight sm:text-5xl">Who We Are</h2>
      <p className="mt-6 text-lg leading-8">
        Mintmade Online offers a well-curated range of fashion items for men and women.
      </p>
      <p className="mt-4 text-lg leading-8">
        We aim to provide an enjoyable shopping experience for all our customers.
      </p>
    </div>
    {/* Image Section */}
    <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-12">
      <img
        src="/about.png"
        alt="Two models wearing fashion items"
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
</div>


{/* What we offer*/}
<div className="bg-black text-white py-20">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-serif text-center lg:text-left">
      What <span className="italic">We Offer</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {/* Card 1 */}
      <div className="relative">
        <img
          src="/1.png"
          alt="Clothes for Her"
          className="rounded-md shadow-lg"
        />
        <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black via-transparent to-transparent p-6">
          <p className="text-xl font-serif">Clothes for Her</p>
        </div>
      </div>
      {/* Card 2 */}
      <div className="relative">
        <img
          src="/4.png"
          alt="Clothes for Him"
          className="rounded-md shadow-lg"
        />
        <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black via-transparent to-transparent p-6">
          <p className="text-xl font-serif">Clothes for Him</p>
        </div>
      </div>
      {/* Card 3 */}
      <div className="relative">
        <img
          src="/3.png"
          alt="Accessories"
          className="rounded-md shadow-lg"
        />
        <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black via-transparent to-transparent p-6">
          <p className="text-xl font-serif">Accessories</p>
        </div>
      </div>
    </div>
  </div>
</div>




      {/* Collections section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-3xl font-serif text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {collections.map((collection) => (
              <div key={collection.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={collection.imageSrc}
                    alt={collection.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link to={collection.href}>
                    <span className="absolute inset-0" />
                    {collection.name}
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">{collection.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}