// App.jsx

import React from 'react';
import './CurriculumVitae.css';
import imagePerfil from '../../foto-perfil.jpg';

const FirstExperience = () => (
  <div>
    <h3>Experiência</h3>
    <p><a href='https://www.stone.com.br/' className='link' target='_blank' rel="noreferrer">Stone</a> - janeiro/2022</p>
    <p className='mt-1'>Desenvolvedor na Stone, na área de Programação Web, desenvolvendo aplicações para 
      clientes internos e externos, utilizando metodologia scrum e com tecnologias de desenvolvimento como Vue, React, Docker, Mongodb e reddis para tratamento de dados, realizando querys em ambiente de produção. Node com os frameworks nest e sails. Cypress para testes automatizados. I18n para traduções. Conhecimento e experiencia em Kubernets e sua arquitetura. Utilizo vários serviços da aws no dia dia, como s3, sqs, ecr, ec2, route53. Utilizo outras tecnologias básicas e essenciais para o dia dia de um desenvolvedor como gitHub, sass, jira e slack.</p>
  </div>
);

const SecondExperience = () => (
  <div>
    <p className='mt-2'><a href='https://www.linx.com.br/' className='link' target='_blank' rel="noreferrer">Linx</a> - janeiro/2021</p>
    <p className='mt-1'>Estágio na Linx, na área de Programação Web, aprendendo a desenvolver aplicações para 
      clientes internos e externos. Foi um momento muito importante para o meu 
      desenvolvimento profissional, aprendi metodologia scrum, aprendi na pratica a utilização de frameworks, desempenhei querys no banco e como melhorar elas com o tempo, entre outros conhecimentos comportamentais.</p>
  </div>
);

const Education = () => (
  <div className='mt-2'>
    <h3>Formação</h3>
    <p>Analise e desenvolvimento de sistemas</p>
    <p className='mt-1'>julho/2020 - julho/2022</p>
    <p className='mt-1'><a href='https://www.sptech.school/' className='link' target='_blank' rel='noreferrer'>SpTech - São Paulo Tech School</a></p>
  </div>
);

const frontendSkills = [
  'React',
  'Vue',
  'JavaScript',
  'HTML5',
  'CSS3',
  'SCSS',
  'cypress',
  'Bootstrap',
  'Vuetfy',
  'Git',
  'Figma'
]

const fistBackendSkills = [
  'Node',
  'Nest',
  'Sails',
  'Express',
  'Java',
  'SpringBoot',
  'MongoDB',
  'Sql',
  'Ks8',
]

const secondBakcendSkills = [
  'AWS',
  'S3',
  'Sqs',
  'ECR',
  'Route53',
  'Ec2',
  'Reddis',
  'Clean code',
  'Jenkins'
]
const Skills = () => (
    <div className="mt-2">
        <h3>Skills</h3>
        <div className='d-flex space-between'>
            <div>
                <p>Frontend</p>
                <ul className='mt-1'>
                {frontendSkills.map(frontendSkill => <li>{frontendSkill}</li>)}
                </ul>
            </div>
            <div>
                <p>Backend</p>
                <div className='d-flex'>
                    <ul className='mt-1'>
                        {fistBackendSkills.map(fistBackendSkill => <li>{fistBackendSkill}</li>)}
                    </ul>
                    <ul className='mt-1 ml-1'>
                        {secondBakcendSkills.map(secondBakcendSkill => <li>{secondBakcendSkill}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

const CurriculumVitae = () => (
  <div className="cv-container">
    <div className='firstContainer'>
      <h1>Felipe Da Cruz Olegario</h1>
      <h2>Full Stack Developer</h2>
      <FirstExperience />
      <SecondExperience />
    </div>
    <div className='secondContainer'>
      <div className='center'>
        <img className='image' src={imagePerfil} alt='felipePhoto'/>
      </div>
      <Education />
      <Skills/>
    </div>
  </div>
);

export default CurriculumVitae;
