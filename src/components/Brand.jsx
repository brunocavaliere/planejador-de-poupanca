import Image from "next/image";

import logoImg from "../assets/logo.svg";

export const Brand = () => {
  return (
    <div className="flex items-center gap-3 mb-11">
      <Image src={logoImg} alt="Logo Carteira Global" />

      <h1 className="font-semibold text-gray-900">Planejador de Poupança</h1>
    </div>
  );
};
