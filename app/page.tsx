"use client";

import Image from "next/image";
import { PiHamburgerLight } from "react-icons/pi";
import { Changa_One } from "next/font/google";
import { Inter } from "next/font/google";
import { FaBurger } from "react-icons/fa6";
import products from "../products.json";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaMotorcycle } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { CiPhone, CiMapPin } from "react-icons/ci";

import { BsList } from "react-icons/bs";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const changa = Changa_One({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export interface Item {
  id: number;
  nome: string;
  descricao: string;
  valor: number;
  imagem: string;
  tipo: string;
}

export interface Menu {
  cardapio: Item[];
}

export default function Home() {
  const [filtro, setFiltro] = useState("Todos");

  const optionsMenu = [
    { Nome: "Todos" },
    { Nome: "Lanches" },
    { Nome: "Bebidas" },
    { Nome: "Sobremesas" },
  ];

  const reviewsUsers = [
    {
      id: 1,
      nome: "Marta",
      foto: "/pessoa1.png",
      review:
        "Passei lá e me surpreendi! Atendimento rápido, vibe incrível e o lanche… simplesmente impecável. A melhor cebola caramelizada que já provei na vida.",
    },
    {
      id: 2,
      nome: "Rafael",
      foto: "/pessoa2.jpg",
      review:
        "Urban Burguer virou parada obrigatória pra mim. Lanche suculento, pão leve e sabor bem acima da média. Dá pra sentir que cada detalhe é pensado.",
    },
    {
      id: 3,
      nome: "Letícia",
      foto: "/pessoa3.jpg",
      review:
        "Ambiente moderno, equipe simpática e um sabor marcante. O milkshake de Oreo é absurdo de bom — já voltei duas vezes só por causa dele!",
    },
  ];

  const menu: Menu = products;

  const itensFiltrados =
    filtro === "Todos"
      ? menu.cardapio
      : menu.cardapio.filter(
          (item) => item.tipo === filtro.toLowerCase().slice(0, -1)
        );

  const itensPorCategoria = itensFiltrados.reduce<Record<string, Item[]>>(
    (acc, item) => {
      const cat = item.tipo;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    },
    {}
  );

  return (
    <div className={`${inter.className} w-full`}>
      <header className="fixed z-50 py-8 w-full h-24 flex justify-center items-center bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
        <div className="w-full sm:max-w-[700px] lg:max-w-[1012px] 2xl:max-w-[1380px] flex justify-between items-center">
          <a
            href="#"
            className="group flex gap-2 text-xl items-center cursor-pointer hover:scale-105 duration-800"
          >
            <PiHamburgerLight className="text-6xl p-1 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-transform duration-700" />
            <h1 className={`${changa.className} font-bold`}>
              URBAN <span className="text-orange-600">BURGUER</span>
            </h1>
          </a>

          <div className="mr-8 mt-[3px] lg:hidden">
            <Sheet>
              <SheetTrigger>
                <BsList className="text-4xl text-orange-600" />
              </SheetTrigger>
              <SheetContent className="bg-zinc-100 p-6">
                <SheetHeader>
                  <SheetTitle
                    className={`${changa.className} font-bold text-3xl mt-8 mb-2`}
                  >
                    URBAN <span className="text-orange-600">BURGUER</span>
                  </SheetTitle>
                </SheetHeader>

                {/* Navegação em coluna */}
                <nav className="flex flex-col gap-6 mt-4">
                  <a
                    href="#"
                    className="text-zinc-800 active:text-orange-600 font-semibold text-xl transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="#cardapio"
                    className="text-zinc-800 active:text-orange-600 font-semibold text-xl transition-colors"
                  >
                    Cardápio
                  </a>
                  <a
                    href="#avaliacoes"
                    className="text-zinc-800 active:text-orange-600 font-semibold text-xl transition-colors"
                  >
                    Avaliações
                  </a>
                  <a
                    href="#contato"
                    className="text-zinc-800 active:text-orange-600 font-semibold text-xl transition-colors"
                  >
                    Contato
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 text-zinc-400">
              <li>
                <a href="#cardapio" className="hover:text-black cursor-pointer">
                  Cardápio
                </a>
              </li>
              <li>
                <a
                  href="#avaliacoes"
                  className="hover:text-black cursor-pointer"
                >
                  Avaliações
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-black cursor-pointer">
                  Contato
                </a>
              </li>
              <a
                href="#cardapio"
                className="group flex items-center gap-2 p-3 bg-orange-600 border-2 border-orange-600 text-white rounded-sm hover:bg-transparent hover:text-black hover:rounded-tl-3xl hover:rounded-br-3xl hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer"
              >
                Peça agora
                <FaBurger className="text-2xl group-hover:text-orange-600" />
              </a>
            </ul>
          </nav>
        </div>
      </header>

      <main className="bg-zinc-100 w-full flex flex-col items-center">
        <div className="relative flex items-center my-28 sm:my-7 lg:my-14 2xl:my-0 sm:h-[50vh] lg:h-screen sm:max-w-[700px] lg:max-w-[1012px] 2xl:max-w-[1380px] w-full lg:bg-[url('/img.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-linear-to-l from-zinc-100 via-transparent to-zinc-100"></div>
          <div className="relative z-40 2xl:mb-24 mx-4 sm:mx-0">
            <h1
              className={`${changa.className} font-bold text-5xl 2xl:text-8xl`}
            >
              URBAN{" "}
              <span className="text-white px-4 bg-orange-600">BURGUER</span>
              <br /> não é só um burger.
            </h1>

            <h2 className="text-black mt-6 text-sm w-full sm:text-lg sm:w-[400px]">
              É o lugar onde sabor, experiência e personalidade se encontram — e
              transformam cada burger em uma experiência que fica na memória.
            </h2>

            <a
              href="#cardapio"
              className="group w-[155px] flex justify-center items-center mt-4 gap-2 p-3 bg-orange-600 border-2 border-orange-600 text-white rounded-sm hover:bg-transparent hover:text-black hover:rounded-tl-3xl hover:rounded-br-3xl hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer"
            >
              Peça agora
              <FaBurger className="text-2xl group-hover:text-orange-600" />
            </a>
          </div>
        </div>

        <div
          id="cardapio"
          className="sm:max-w-[700px] lg:max-w-[1012px] 2xl:max-w-[1380px] w-full"
        >
          <div className="2xl:my-16 mx-4 sm:mx-0">
            <h1
              className={`${changa.className} font-bold text-4xl 2xl:text-5xl`}
            >
              VEJA NOSSO <span className="text-orange-600">CARDÁPIO</span>
            </h1>

            <div className="2xl:my-8 space-y-4">
              <p className="text-zinc-600 2xl:mx-2">
                Aplique filtros para facilitar sua busca
              </p>

              <div className="flex gap-2">
                {optionsMenu.map((opt) => {
                  const ativo = filtro === opt.Nome;

                  return (
                    <button
                      key={opt.Nome}
                      onClick={() => setFiltro(opt.Nome)}
                      className={`border-2 p-2 2xl:mx-2 rounded-md transition-all ease-in-out duration-400 cursor-pointer
                        ${
                          ativo
                            ? "bg-orange-600 border-orange-600 text-white"
                            : "border-orange-600 hover:bg-orange-600 hover:text-white hover:rounded-tr-3xl hover:rounded-bl-3xl hover:scale-110"
                        }
                      `}
                    >
                      {opt.Nome}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="w-full my-12 space-y-24">
              {Object.keys(itensPorCategoria).map((categoria) => (
                <section key={categoria}>
                  <h2
                    className={`${changa.className} font-bold text-4xl text-orange-600 capitalize my-6`}
                  >
                    {categoria}
                  </h2>

                  <div className="w-[99%] sm:w-full flex flex-col gap-10 sm:flex-row sm:flex-wrap 2xl:gap-20">
                    {itensPorCategoria[categoria].map((item: Item) => (
                      <div
                        key={item.id}
                        className="group sm:w-[47%] lg:w-1/5 h-auto bg-white shadow-xl rounded-tl-2xl rounded-br-2xl border-b-4 border-transparent
                        hover:border-b-orange-600 hover:scale-105 transition-all duration-300 cursor-pointer"
                      >
                        <Image
                          src={item.imagem}
                          alt="imagem produto"
                          height={400}
                          width={400}
                          className="rounded-tl-2xl object-contain"
                        />

                        <div className="px-4 py-6">
                          <h1
                            className={`${changa.className} font-bold text-2xl group-hover:text-orange-600`}
                          >
                            {item.nome}
                          </h1>
                          <p className="font-semibold mt-1">
                            R$: {item.valor.toFixed(2)}
                          </p>
                          <h2 className="text-gray-500 mt-2">
                            {item.descricao}
                          </h2>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>

        <div
          id="avaliacoes"
          className="w-full bg-white flex justify-center relative"
        >
          <div className="text-orange-600 text-8xl flex-col gap-4 opacity-10 absolute top-3 right-60 z-10 hidden lg:flex">
            <FaBurger />
            <FaBurger />
            <FaBurger />
            <FaBurger />
            <FaBurger />
          </div>
          <div className="text-orange-600 text-8xl flex-col gap-4 opacity-10 absolute top-3 right-90 z-10 hidden lg:flex">
            <FaBurger />
            <FaBurger />
            <FaBurger />
            <FaBurger />
            <FaBurger />
          </div>
          <div className="text-orange-600 text-8xl flex-col gap-4 opacity-10 absolute top-3 right-120 z-10 hidden lg:flex">
            <FaBurger />
            <FaBurger />
            <FaBurger />
            <FaBurger />
            <FaBurger />
          </div>
          <div className="text-orange-600 text-8xl flex-col gap-4 opacity-10 absolute top-3 right-150 z-10 hidden lg:flex">
            <FaBurger />
            <FaBurger />
            <FaBurger />
            <FaBurger />
            <FaBurger />
          </div>
          <div className="text-orange-600 text-8xl flex-col gap-4 opacity-10 absolute top-3 right-180 z-10 hidden lg:flex">
            <FaBurger />
            <FaBurger />
            <FaBurger />
            <FaBurger />
            <FaBurger />
          </div>

          <div className="sm:max-w-[700px] lg:max-w-[1012px] 2xl:max-w-[1380px] w-full my-16 z-40 flex flex-col justify-center items-center">
            <h1
              className={`${changa.className} font-bold text-6xl mx-4 2xl:mx-0 2xl:text-5xl`}
            >
              VEJA NOSSOS <span className="text-orange-600">CLIENTES</span>{" "}
              SATISFEITOS
            </h1>

            <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row gap-8 justify-between items-center w-full py-10">
              {reviewsUsers.map((review) => (
                <div
                  key={review.id}
                  className="w-[90%] bg-zinc-100 border-2 border-transparent py-8 px-2 2xl:px-4 hover:-translate-y-1 hover:shadow-xl hover:border-b-orange-600
                transition-all duration-300"
                >
                  <div className="flex gap-4 items-center">
                    <Avatar>
                      <AvatarImage src={review.foto} className="object-cover" />
                      <AvatarFallback>NF</AvatarFallback>
                    </Avatar>
                    <h1
                      className={`${changa.className} font-bold text-xl 2xl:text-3xl`}
                    >
                      {review.nome}
                    </h1>
                  </div>
                  <p className="text-zinc-800 text-sm 2xl:w-[400px] mt-2">
                    {review.review}
                  </p>
                  <div className="mt-2 flex text-yellow-500 text-xl gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="mt-4 text-zinc-400 text-sm">
                    Realizada a 4 dias
                  </p>
                </div>
              ))}
            </div>
            <button className="group flex items-center mt-4 gap-2 p-3 bg-orange-600 border-2 border-orange-600 text-white rounded-sm hover:bg-transparent hover:text-black hover:rounded-tl-3xl hover:rounded-br-3xl hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer">
              Deixe sua avaliação
              <FaBurger className="text-2xl group-hover:text-orange-600" />
            </button>
          </div>
        </div>

        <div className="sm:max-w-[700px] lg:max-w-[1380px] w-full bg-zinc-100 relative my-4">
          <div className="text-orange-600 text-8xl flex-col gap-4 opacity-10 absolute top-0 left-0 z-10 hidden lg:flex">
            <FaMotorcycle />
            <FaMotorcycle />
            <FaMotorcycle />
            <FaMotorcycle />
          </div>
          <div className="text-orange-600 text-8xl flex-col gap-4 opacity-10 absolute top-0 left-30 z-10 hidden lg:flex">
            <FaMotorcycle />
            <FaMotorcycle />
            <FaMotorcycle />
            <FaMotorcycle />
          </div>
          <div className="text-orange-600 text-8xl flex-col gap-4 opacity-10 absolute top-0 left-60 z-10 hidden lg:flex">
            <FaMotorcycle />
            <FaMotorcycle />
            <FaMotorcycle />
            <FaMotorcycle />
          </div>
          <div className="text-orange-600 text-8xl flex-col gap-4 opacity-10 absolute top-0 left-90 z-10 hidden lg:flex">
            <FaMotorcycle />
            <FaMotorcycle />
            <FaMotorcycle />
            <FaMotorcycle />
          </div>
          <div className="w-full flex flex-col my-24 2xl:mx-0 justify-center items-center gap-4">
            <h1
              className={`${changa.className} font-bold text-3xl sm:text-5xl`}
            >
              FICOU COM<span className="text-orange-600"> FOME</span> ?
            </h1>

            <p className="text-sm text-center sm:text-lg mt-2 text-zinc-900 lg:w-2/5">
              A gente prepara o burger do jeito que você gosta: rápido,
              suculento e com aquele toque urbano que faz a diferença. Explore o
              cardápio, combine sabores e peça sem complicação. Seu próximo
              lanche incrível começa aqui.
            </p>

            <a
              href="#cardapio"
              className=" group flex items-center mt-4 gap-2 p-3 bg-orange-600 border-2 border-orange-600 text-white rounded-sm hover:bg-transparent hover:text-black hover:rounded-tl-3xl hover:rounded-br-3xl hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer"
            >
              Realize seu pedido!
              <FaBurger className="text-2xl group-hover:text-orange-600" />
            </a>
          </div>
        </div>
      </main>

      <footer
        id="contato"
        className="w-full bg-white text-black py-20 px-6 border-t border-zinc-200"
      >
        <div className="sm:max-w-[700px] lg:max-w-[1380px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* LOGO + TEXTO */}
          <div className="flex flex-col gap-4">
            <h2 className={`${changa.className} text-4xl font-bold`}>
              URBAN <span className="text-orange-600">BURGUER</span>
            </h2>
            <p className="text-zinc-600">
              Sabor urbano, ingredientes selecionados e uma experiência feita
              pra quem leva burger a sério.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-orange-600">Navegação</h3>

            <ul className="flex flex-col gap-2 text-zinc-700">
              <li className="hover:text-orange-600 cursor-pointer transition">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-orange-600 cursor-pointer transition">
                <a href="#cardapio">Cardápio</a>
              </li>
              <li className="hover:text-orange-600 cursor-pointer transition">
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-orange-600">Horários</h3>

            <ul className="flex flex-col gap-2 text-zinc-700">
              <li>Seg a Sex — 17h às 23h</li>
              <li>Sábado — 16h às 00h</li>
              <li>Domingo — 18h às 23h</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-orange-600">Contato</h3>

            <ul className="flex flex-col gap-2 text-zinc-700">
              <li className="flex gap-2">
                <CiPhone className="text-xl" /> (11) 90000-0000
              </li>
              <li className="flex gap-2">
                <CiMapPin className="text-xl" /> Rua Urban, 404 — Centro
              </li>
            </ul>

            <div className="flex gap-4 mt-4">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:scale-105 transition cursor-pointer text-white">
                <FaInstagram />
              </div>
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:scale-105 transition cursor-pointer text-white">
                <FaFacebook />
              </div>
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:scale-105 transition cursor-pointer text-white">
                <FaWhatsapp />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-zinc-200 mt-16 pt-6 text-center text-zinc-500">
          © {new Date().getFullYear()} Urban Burguer — Todos os direitos
          reservados.
        </div>
      </footer>
    </div>
  );
}
