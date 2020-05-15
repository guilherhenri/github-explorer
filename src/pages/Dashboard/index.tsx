import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore repositorios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />

        <button>Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/36506176?s=460&u=ba466d956830f22733dbbf96cfd76033fdb5124d&v=4"
            alt="Guilherme Henrique"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>teste</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/36506176?s=460&u=ba466d956830f22733dbbf96cfd76033fdb5124d&v=4"
            alt="Guilherme Henrique"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>teste</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/36506176?s=460&u=ba466d956830f22733dbbf96cfd76033fdb5124d&v=4"
            alt="Guilherme Henrique"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>teste</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;
