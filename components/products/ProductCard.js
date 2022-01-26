import React from 'react';
import Link from 'next/link';

export default function ProductCard({ permalink, image, name, description, price, soldOut}) {
  return (
    <Link href="/product/[permalink]" as={`/product/${permalink}`}>
      <a className="mb-5 d-block font-color-black cursor-pointer" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div
          className="mb-3"
          style={{
            paddingBottom: '125%',
            background: `url("${image}") center center/cover`,
            height: '260px',
            width: '210px',
          }}
        >
          {soldOut && <div className="product-card--overlay-text">SOLD OUT</div>}
        </div>
        <div className="d-flex flex-column" style={{alignItems:'center', justifyContent:'center'}}>
        <p className="font-size-subheader mb-2 font-weight-medium" >
          {name}
        </p>
        <p className="mb-2 font-color-medium">Materials</p>
        <p className="font-size-subheader font-weight-medium pb-2 borderbottom border-color-black">
          {price}
        </p>
        </div>
      </a>
    </Link>
  );
}
