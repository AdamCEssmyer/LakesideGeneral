import React from "react"

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col
            items-center"></div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"></div>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Welcome to Lakeside General
          <br className="hidden lg:inline-block" />We're here to serve you!
          </h1>
          <p className="mb-8 leading-relaxed">
              Launched in 2017, we are here to serve the community by providing goods and Services
              locally to you.
          </p>
        </section>
    );
}