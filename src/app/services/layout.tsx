import "../globals.css";
import { serviceImages } from "../shared/Images";

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mt-20 lg:mt-24">
      <section
        className="flex items-center min-h-36 lg:h-96 w-full bg-cover bg-center"
        style={{ 
          backgroundImage:`url(${serviceImages.src})` }}
      >
        <div className="text-center flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
        <h1 className="text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] text-2xl font-poppins font-bold md:text-6xl">
            Our Services
          </h1>
        </div>
      </section>
      {children}
    </main>
  );
}
