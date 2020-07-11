import React from 'react';
import { ReactComponent as Bg } from '../img/bg.svg';

const TestBody = () => {
  return (
    <div className="mx-16 flex items-center flex-col">
      <div className="flex justify-between">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl">AMAZING PORTFOLIO SITE</h1>
          <h2 className="text-indigo-700 font-semibold text-3xl">
            POWERED BY REACTJS & <br /> TAILWIND CSS
          </h2>
        </div>
        <div className="ml-10">
          <Bg className="w-56 h-56" />
        </div>
      </div>

      <div className="flex items-center justify-between mx-40 max-w-5xl text-xl">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugit
          sed eos mollitia pariatur corrupti earum ex sapiente suscipit! Itaque,
          veritatis quia? Maiores voluptates voluptate assumenda dolores
          obcaecati corporis, fugiat illo cupiditate vero harum praesentium
          dolorum voluptas! Perspiciatis, laudantium commodi ex maiores sapiente
          odit asperiores explicabo ad sit ducimus quibusdam rerum porro laborum
          vel saepe veniam alias ipsum. Laboriosam ullam cupiditate placeat.
          Quaerat deserunt recusandae asperiores corrupti pariatur, dicta su sed
          autem quas placeat repudiandae, sint laudantium voluptatem, illum
          dignissimos neque!
        </p>
      </div>
    </div>
  );
};

export default TestBody;
