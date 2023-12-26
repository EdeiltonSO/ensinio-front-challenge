Essa é resposta do desafio técnico da Ensinio para a vaga de estágio em desenvolvimento front-end.

O projeto foi feito em Next.js.

## Como executar?

0. Instale o Node;
1. Faça clone/download e entre na pasta do projeto;
2. Execute `npm i`;
3. Execute `npm run dev:server` em um segundo terminal;
4. Execute `npm run dev` no primeiro terminal;
5. Acesse a aplicação na porta 3000;

O projeto também está disponível [neste endereço](https://ensinio-front-challenge.vercel.app/).

## Por que usar essa estrutura?

Busquei misturar o que já conhecia do React com o que aprendi sobre Next.js. O uso da pasta `src` é padrão nos meus projetos para manter a organização dos arquivos e também é uma das possibilidades dadas pelo Next já durante o init. 

Além disso, considerando o planejamento de escalar o projeto, escolhi manter a página inicial dentro da pasta `src/pages` para futuramente utilizar o [sistema de roteamento de páginas](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts) do Next.js.

Escolhi criar diretórios específicos também para a configuração da API (nesse caso, com o Axios) e para os arquivos de idiomas.

## Sugestão sobre os arquivos de idiomas

Em relação aos idiomas, acredito que uma ideia mais escalável seria manter texto de diferentes idiomas em arquivos distintos — diferente do que acontece com o arquivo `db.json`, que mantém vários idiomas na mesma estrutura. 

Isso porque, ao expandir para novos países — e provavelmente com um site maior —, é mais fácil delegar a tarefa de tradução sem que haja risco de idiomas já implementados serem afetados no processo. Um exemplo disso é o que fiz na pasta `src/strings`.

## Quais problemas existem hoje?

### Fonte Degular

A fonte Degular está disponível no Adobe Fonts, mas é paga. A alternativa escolhida foi a de manter a fonte Inter no projeto inteiro e debater possíveis soluções com a equipe de design.

### Barra de navegação

O design da barra de navegação seguiu fielmente a especificação do Figma, mas quando o conteúdo atrás dela deixa de ser a primeira seção (que tem background gradiente), fica impossível ler o texto nela. 

Isso porque a seção seguinte tem fundo branco, assim como a cor do texto.

A sugestão é fazer leves alterações na cor de fundo da barra, mantendo o efeito translúcido e o blur, mas com uma cor que ajude na leitura do texto nesses casos específicos.

## O que falta ser implementado?

- Menus dropdown;
- Responsividade;
- Internacionalização;
- Persistência do idioma;
- Testes unitários;
