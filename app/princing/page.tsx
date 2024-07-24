import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Princing Page",
  description: "Esta en la pagina de precios de mi servicio",
};

export default function PrincingPage() {
  return (
    <>
      <span className="text-7xl">Princing Page</span>
    </>
  );
}
