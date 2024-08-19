import React from "react";
import "./products.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Products() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="main">
      <div className="head">
        <h1>Product</h1>
      </div>
      <div className="cards">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div className="card" key={index}>
              <div className="myimg">
                {" "}
                <img src={item.image} alt="shoe" />
              </div>
              <div className="contents">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <h3>₹{item.price}.00</h3>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: "Nike Court Royale 2 Low",
    price: 10000,
    image: "/images/shoe-right/shoe1.png",
    description: "This is a description of product 1",
  },
  {
    name: "Nike Dunk Low",
    price: 11895,
    image: "/images/shoe-right/shoe2.png",
    description: "This is a description of product 2",
  },
  {
    name: "Air-force-1-07",
    price: 8195,
    image: "/images/shoe-right/shoe3.png",
    description: "This is a description of product 3",
  },
  {
    name: "Air Jordan 1 Low",
    price: 8295,
    image: "/images/shoe-right/shoe-right4.png",
    description: "This is a description of product 4",
  },
  {
    name: "Nike Pegasus 41 Blueprint",
    price: 7695,
    image: "/images/shoe-right/shoe-right2.png",
    description: "This is a description of product 5",
  },
  {
    name: "Nike Air Max Dn SE",
    price: 15995,
    image: "/images/shoe-right/shoe-right3.png",
    description:
      "Praised by the streets for its classic simplicity and comfort",
  },
  {
    name: "Nike Blazer Low Pro Club",
    price: 8695,
    image: "/images/shoe5.png",
    description:
      "A classic with a twist. This low-top take on the Blazer Mid Pro Club pays homag",
  },
];

export default Products;
