import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ProfileImage from './components/img/profileimage.jpg'
import OutSystems from './components/img/outsystems.png'
import CardPequeno from './components/CardPequeno/CardPequeno';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={ProfileImage}
          nome="Asrgleydson Leão Dias"
          descricao="Oi, sou aluno Labenu da turma Maryam, estou estudando para ser web dev full stack e a partir de Janeiro você pode me contratar."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Aluno da turma Maryam desde Agosto de 2021."
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos."
        />

        <CardGrande
          imagem={OutSystems}
          nome="OutSystems"
          descricao="Estudei a plataforma no período de Agosto à Dezembro de 2020"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>

      <div className="page-section-container">
        <h2>Contato</h2>
        <CardPequeno
          email="argleydson@gmail.com"
          endereco="Brasil"
        />
      </div>
    </div>
  );
}

export default App;
