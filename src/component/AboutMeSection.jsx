import React from "react";
import { FaCode, FaCogs } from "react-icons/fa";
import { TbEyeCode } from "react-icons/tb";
import TopSongs from './TopSongs';

function DetailsCard({ icon: Icon ,title, description }) {
    return (
        <div className="flex flex-col justify-start items-start w-1/2 p-4 gap-2">
            <div className="p-1 rounded-md flex justify-center items-center bg-gradient-to-br from-[#d896ff] to-[#7f2dff]">
                {Icon && (
                    <Icon
                        className="w-5 h-5 text-black"
                    />
                )}
            </div>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
            <p className="text-lg text-gray-400">{description}</p>
        </div>
    );
}

function Details(){
    return(
        <div className="flex flex-col justify-center items-center w-full min-h-screen p-6 bg-black text-white">
            <div className="flex h-[300px] w-[70%] border-[1px] border-[#d896ff] rounded-md gap-4 p-4 backdrop-blur-md bg-black/30">
                <DetailsCard 
                    icon={FaCode}
                    title={"FullStack"}
                    description={"Desarrollo de aplicaciones completas, desde el frontend hasta el backend, con un enfoque en soluciones escalables y eficientes."}
                />
                <DetailsCard
                    icon={FaCogs}
                    title={"Resolutivo"}
                    description={"Capacidad para identificar problemas rápidamente y proponer soluciones efectivas, incluso en situaciones desafiantes."}
                />
                <DetailsCard
                    icon={TbEyeCode}
                    title={"Atención al detalle"}
                    description={"Enfoque en la calidad del código y el diseño, asegurando que cada proyecto sea funcional y visualmente atractivo."}
                />
            </div>
            <div className="flex justify-between items-center w-[70%] h-full p-6 bg-black text-white mt-4 gap-4">
                <div className="flex flex-col justify-center items-start w-[50%] h-full p-6 bg-black text-white mt-4 gap-4">
                    <h2 className="text-3xl font-bold text-white">Sobre mí</h2>
                    <p className="text-lg text-gray-400">Hola, soy un desarrollador de software apasionado por la tecnología y la resolución de problemas. Me encanta crear soluciones eficientes y escalables que mejoren la experiencia del usuario. Disfruto enfrentar nuevos desafíos, optimizar procesos y seguir aprendiendo continuamente.</p>
                </div>
                <div>
                    <TopSongs />
                </div>
            </div>
        </div>
    );
}

function AboutMe(){
    return(
        <section className="min-h-screen flex justify-between pt-10 bg-black text-white">
            <Details />
        </section>
    );
}

export {AboutMe, Details, DetailsCard};