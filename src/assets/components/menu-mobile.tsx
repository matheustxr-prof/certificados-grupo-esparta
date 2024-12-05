import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';

import logo from '../images/logo-esparta.png';

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const headerDrawer = () => {
    return (
        <div className='w-full flex justify-between'>
            <a 
                href="https://grupoespartapatos.com.br/login"
                className='w-2/3'
            >
                Login - Cadastre-se
            </a>

            <button onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path className='text-red-600' strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    )
  }

  const widthScreen = window.innerWidth;

  return (
    <>
        <header>
            {
                widthScreen >= 1280 ?
                <div className="bg-[#670101] p-5">
                    <div className="flex justify-around items-center">
                        <a href="https://grupoespartapatos.com.br/" className="w-full max-w-[200px]">
                            <img src={logo} alt="Logo da empresa Grupo Esparta" className="w-full" />
                        </a>

                        <nav className="mb-0 flex items-center gap-5 text-lg text-white">
                            <a href="https://grupoespartapatos.com.br/" className="text-white hover:underline">Home</a>
                            <a href="https://grupoespartapatos.com.br/sobre/" className="text-white hover:underline">Sobre</a>
                            <a href="https://grupoespartapatos.com.br/cursos/" className="text-white hover:underline">Cursos</a>
                            <a href="https://grupoespartapatos.com.br/noticias/" className="text-white hover:underline">Notícias</a>
                            <a href="https://grupoespartapatos.com.br/contato/" className="text-white hover:underline">Contato</a>
                            <a href="https://grupoespartapatos.com.br/certificados/" className="px-2 py-4 bg-[#7e2727] rounded-lg">
                                Certificados
                            </a>
                        </nav>

                        
                        <a 
                            href="mailto:contatogrupoesparta@gmail.com" 
                            className="bg-white py-2.5 px-5 w-[200px] text-center rounded "
                        >
                            Sua conta
                        </a>
                    </div>
                </div>
                :
                <div>
                    <Space className='w-full p-5 flex justify-between bg-[#670101]'>
                        <a 
                            href="https://grupoespartapatos.com.br/"
                            className='w-full'
                        >
                            <img 
                                src={logo}
                                alt="Logo da empresa Grupo Esparta" 
                                className='w-full max-w-[150px] '
                            />
                        </a>

                        <Button onClick={showDrawer} className='bg-transparent border-none'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path className='text-white' strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </Button>
                    </Space>
                    <Drawer
                        title={headerDrawer()}
                        placement="left"
                        closable={false}
                        onClose={onClose}
                        open={open}
                    >
                            <a 
                                href="https://grupoespartapatos.com.br/" 
                                className="px-[18px] py-5 "
                            >
                                Home
                            </a>

                            <a 
                                href="https://grupoespartapatos.com.br/sobre/" 
                                className="px-[18px] py-5 "
                            >
                                Sobre
                            </a>

                            <a 
                                href="https://grupoespartapatos.com.br/cursos/" 
                                className="px-[18px] py-5 "
                            >
                                Cursos
                            </a>

                            <a 
                                href="https://grupoespartapatos.com.br/noticias/" 
                                className="px-[18px] py-5 "
                            >
                                Notícias
                            </a>

                            <a 
                                href="https://grupoespartapatos.com.br/contato/" 
                                className="px-[18px] py-5 "
                            >
                                Contato
                            </a>
                            
                            
                            <a 
                                href="https://grupoespartapatos.com.br/certificados/" 
                                className="px-[18px] py-5 bg-[#fff1f2] text-[#980101] rounded "
                            >
                                Cetificados
                            </a>

                            <hr className="my-3" />

                            <p>Contato</p>

                            <a 
                                href="mailto:contatogrupoesparta@gmail.com" 
                                className="mb-3"
                            >
                                contatogrupoesparta@gmail.com
                            </a>

                            <a 
                                href="tel:+553498937919"
                            >
                                34 9893-7919
                            </a>
                    </Drawer>
                </div>
            }
        </header>
    </>
  );
};

export default Menu;