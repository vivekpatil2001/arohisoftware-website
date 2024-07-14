"use client";
import "./OurPartners.css";
import Gowaza from "./../../../public/assets/gowaza.jpg";

const companies = [
  {
    id: 1,
    name: 'VS Tech Horizon',
    logo: 'https://yt3.googleusercontent.com/DhdYxWD2LwcnzHdPBIBtrKq8M2AHL39yekLoalqR09vX18rKX29GYfJaIW2FUaGjUbZ70sLxSg=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 2,
    name: 'GrowAro TNP',
    logo: 'https://media.licdn.com/dms/image/D560BAQHGYF5tCSi_uQ/company-logo_200_200/0/1695197584351?e=2147483647&v=beta&t=s2DN3cuT_ej1GYgKNRvHj4ttOXgHv3uAsLQ6hObjQm4',
  },
  {
    id: 3,
    name: 'GROWAZA',
    logo: Gowaza.src,
  },
];

function Companies() {
  return (
    <div className="py-12 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
          Our Partners
        </h1>
        <div className="overflow-hidden">
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-24 lg:gap-36 animate-scroll">
            {companies.map((company, index) => (
              <div key={index} className="flex flex-col items-center w-40 sm:w-48 md:w-64 mt-9">
                <img src={company.logo} alt={company.name} className="h-16 sm:h-20 md:h-24 w-auto object-contain mb-4" />
                <p className="text-white text-lg sm:text-xl md:text-2xl text-center">{company.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Companies;
