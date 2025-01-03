import React from "react";


export default function Footer() {
  return (
    <footer className=" w-full bg-rose-100  mt-12">
      <section className=" px-6 xs:px-8 sm:px-12  lg:px-16 xl:px-24 2xl:px-32 py-4 flex flex-col sm:flex-row justify-center items-center ">
        <div>
          <p className="text-base text-light">
            © 2024 <span className="text-light font-bold">&nbsp;MARYAM</span>
            <span className="text-rose-500 font-bold">
              SHAHID&nbsp;
            </span>{" "}
            All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
