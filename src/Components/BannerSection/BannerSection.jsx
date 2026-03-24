import React from 'react';
import bgImage from '../../assets/bg-shadow.png';
import bannermain from '../../assets/banner-main.png'

const BannerSection = () => {
    return (
        <div>
            <div
      className="hero min-h-screen max-w-11/12 m-auto"
    style={{
       backgroundImage:`url(${bgImage})`,
      
      
      }}
>
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
      <img className='max-w-11/12 m-auto'src={bannermain }></img>
      <h1 className="mb-5 text-3xl font-bold">Assamble your ultimate dream 11 cricket team </h1>
      <p className="mb-5">
        Beyond boundaries , Beyond limits
      </p>
      <button className="btn btn-warning">Claim Free Credits</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BannerSection;