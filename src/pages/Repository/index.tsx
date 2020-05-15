import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer"/>

        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
          </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://www.revistapaisatentos.com.br/files/artigos/130/cuidados-com-o-bebe-25-perguntas-e-respostas-1-130.jpg" alt="Bebes"/>
          <div>
            <strong>rocketseat/unform</strong>
            <p>descricao</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="asasa">
          <div>
            <strong>a</strong>
            <p>a</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
