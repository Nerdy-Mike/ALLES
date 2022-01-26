/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

export default function HomeBanner() {
  return (
    <div className="p-5">
      <p
        className="font-size-display1 mt-5 text-center mx-auto text-uppercase"
        style={{ maxWidth: '53rem' }}
      >
        Moisture is the essence of wetness, and wetness is the essence of beauty.
      </p>
      <div className="d-flex align-items-center justify-content-center mt-3 mb-5">
        <Link href="/about">
          <a className="d-flex py-3 align-items-center font-color-black borderbottom border-color-black">
            <p className="mr-3">Find out more</p>
            <Image src="/icon/arrow-long-right.svg" width={25} height={25}/>
          </a>
        </Link>
      </div>
    </div>
  );
}
