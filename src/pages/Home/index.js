import React from 'react';

import './styles.css';

import svgMelhoresTecnologias from '../../assets/melhores-tecnologias.svg';
import banner1 from '../../assets/banner.jpg';
import svgComunidade from '../../assets/comunidade-home.svg';
import svgStarter from '../../assets/icons/starter.svg';

const Home = () => (
  <main>
    <div class='container fix-padding py-5'>
      <div class='row mx-md-n5 text-gray text-blue'>
        <div class='col'>
          <h2 className='text-gray-dark'>
            As melhores tecnologias em apenas um clique.
          </h2>
          <p>
            No meio de tanta informação e da quantidade de ferramentas que
            surgem todos os dias, você precisa de alguém que te leve na direção
            certa.
          </p>
          <a href='#!' className='btn btn-primary px-2 py-2 bg-blue '>
            Agendar uma reunião
          </a>
        </div>
        <div class='col'>
          <figure className='text-right' class='banner-1'>
            <img src={banner1} alt='' />
          </figure>
        </div>
      </div>
    </div>

    <div className='destaque bg-blue py-5'>
      <div class='container fix-padding pt-5'>
        <div class='row mx-md-n5 text-white'>
          <div class='col'>
            <figure>
              <img src={svgMelhoresTecnologias} alt='' />
            </figure>
          </div>
          <div class='col'>
            <h2 className='text-white'>Produtos Solusoft</h2>
            {/* <h3>Facebook, Microsoft, Nubank e Netflix</h3> */}
            <p>
              Soluções inovadoras e escalaveis para o seu negócio. <br />
              Deste a criação de Websites, Aplicações Web e Mobile,
              Infra-estrutura de Redes e CCTV, HelpDesk, Auditoria de sistemas
              informáticos. e Suporte em tempo Real.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className='py-5'>
      <div class='container fix-padding'>
        <div class='row mx-md-n5 text-gray'>
          <div class='col'>
            <h3 className='text-gray-dark'>
              <img src={svgStarter} alt='' />
              Websites
            </h3>
            <p>
              Desenvolvimento de Websites com tecnologias modernas: <br />
              HTML5, CSS3, JAVASCRIPT, BOOTSTRAP 5, MATERIAL UI, BULMA, REACT
              JS, VUE JS, WORDPRESS
            </p>
            <a href='#!' className='btn btn-primary px-2 py-2 bg-blue '>
              Solicitar
            </a>
          </div>
          <div class='col'>
            <h3 className='text-gray-dark'>
              <img src={svgStarter} alt='' />
              Applicações Web e Mobile
            </h3>
            <p>
              Desenvolvimento de Apps Web e Mobile com tecnologias modernas e
              escalaveis: JAVASCRIPT COM NODE JS, REACT JS e REACT NATIVE, DART
              COM FLUTTER, RUBY ON RAILS, PYTHON COM DJANGO, JAVA COM SPRING
              MVC, PHP COM LARAVEL, .NET C# COM ASPNET MVC 5 e muito mais...
            </p>
            <a href='#!' className='btn btn-primary px-2 py-2 bg-blue '>
              Solicitar
            </a>
          </div>
        </div>

        <div class='row mx-md-n5 text-gray py-5'>
          <div class='col'>
            <h3 className='text-gray-dark'>
              <img src={svgStarter} alt='' />
              Infra-estrutura de Redes e CCTV
            </h3>
            <p>
              Montagem de Infra-estrutura de Redes usando padrões e normas e
              Instalação de Sistemas de Controlo de Vigilancias.
            </p>
            <a href='#!' className='btn btn-primary px-2 py-2 bg-blue '>
              Solicitar
            </a>
          </div>
          <div class='col'>
            <h3 className='text-gray-dark'>
              <img src={svgStarter} alt='' />
              HelpDesk
            </h3>
            <p>Manutenção, update e upgrade de Equipamentos informáticos.</p>
            <a href='#!' className='btn btn-primary px-2 py-2 bg-blue '>
              Solicitar
            </a>
          </div>
        </div>

        <div class='row mx-md-n5 text-gray'>
          <div class='col'>
            <h3 className='text-gray-dark'>
              <img src={svgStarter} alt='' />
              Auditoria de Sistemas Informáticos
            </h3>
            <p>Analise de checagem de dados em uma rede de computadores.</p>
            <a href='#!' className='btn btn-primary px-2 py-2 bg-blue '>
              Solicitar
            </a>
          </div>
          <div class='col'>
            <h3 className='text-gray-dark'>
              <img src={svgStarter} alt='' />
              Suporte em Tempo Real
            </h3>
            <p>Assistência técnica 24h/24h usando sistemas de acesso remoto.</p>
            <a href='#!' className='btn btn-primary px-2 py-2 bg-blue '>
              Solicitar
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class='py-5 bg-blue-light'>
      <div className='container fix-padding '>
        <div class='row mx-md-n5 text-blue'>
          <div class='col'>
            <h2 className='text-gray-dark'>
              Acelere a sua evolução. Participe do nosso Bootcamp.
            </h2>
            <p>
              Potencialize o seu aprendizado, destaque-se entre os programadores
              e ganhe prêmios exclusivos.
            </p>
            <a href='#!' className='btn btn-primary px-2 py-2 bg-blue '>
              Inscreva-se
            </a>
          </div>
          <div class='col'>
            <figure className='text-right'>
              <img src={svgComunidade} alt='' />
            </figure>
          </div>
        </div>
      </div>
    </div>

    <div className='py-5'>
      <div class='container fix-padding'>
        <div class='row mx-md-n5 text-gray'>
          <div class='col'>
            <h3 className='text-gray-dark'>
              <img src={svgStarter} alt='' />
              Starter
            </h3>
            <p>
              Treinamento focado em iniciantes, capacitando o formando em:
              <br />
              Tecnias de Programação e Algoritmo, HTML5, CSS3, JAVASCRIPT e
              PYTHON.
            </p>
            <a href='#!' className='btn btn-primary px-2 py-2 bg-blue '>
              Solicitar
            </a>
          </div>
          <div class='col'>
            <h3 className='text-gray-dark'>
              <img src={svgStarter} alt='' />
              Bootcamp
            </h3>
            <p>
              Treinamento focado em intermediarios, capacitando o formando em:
              <br />
              Tecnias de Programação e Algoritmo, HTML5, CSS3, JAVASCRIPT, NODE
              JS, REACT JS, EXPRESS, TYPESCRIPT, RUBY ON RAIL e PYTHON com
              DJANGO.
            </p>
            <a href='#!' className='btn btn-primary px-2 py-2 bg-blue '>
              Solicitar
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className='destaque bg-blue py-5'>
      <div class='container fix-padding pt-5'>
        <div class='row mx-md-n5 text-white'>
          <div class='col'>
            <figure>
              <img src={svgMelhoresTecnologias} alt='' />
            </figure>
          </div>
          <div class='col'>
            <h2 className='text-white'>
              As mesmas tecnologias utilizadas por empresas como:
            </h2>
            <h3>Nubank, Netflix, Uber, Instagram e Airbnb</h3>
            <p>
              Imagine você dominando as mesmas tecnologias adotadas pelos
              melhores times do mundo, construindo aplicações de alta
              performance e se destacando entre os maiores programadores.
            </p>
          </div>
        </div>
      </div>
    </div>

    <footer className='pt-3'>
      <div class='container fix-padding'>
        <div class='row mx-md-n5 text-gray'>
          <div class='col-md-5'>
            <p>
              <strong>Solusoft</strong> © {new Date().getFullYear()} - Todos os
              direitos reservados
            </p>
          </div>
          <div class='col-md-7'>
            <p>
              <a href='#!'>Direitos autorais</a> -{' '}
              <a href='#!'>Termos de uso</a> -{' '}
              <a href='#!'>Política de privacidade</a> -{' '}
              <a href='#!'>Consulta de certificados</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </main>
);

export default Home;
