Essa é resposta do desafio técnico da Ensinio para a vaga de estágio em desenvolvimento front-end.

O projeto foi feito em Next.js.

## Como executar?

0. Instale o Node;
1. Faça clone/download e entre na pasta do projeto;
2. Execute `npm i`;
3. ~~Execute `npx json-server db.json -p 3333`;~~
4. Execute `npm run dev`;
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

## O que não foi implementado?

- Menus dropdown;
- Responsividade;
- Internacionalização;
- Persistência do idioma;
- Testes unitários;

## Por que essas implementações não foram feitas?

Quando recebi o desafio técnico, eu ainda não tinha estudado Next.js. Sendo uma preferência da empresa, resolvi adiantar (estava previso para ser o módulo seguinte no curso que estou fazendo). Isso reduziu meu prazo pra implementar.

### Testes unitários

Pretendia relembrar meu conhecimento de testes unitários para implementar no projeto, mas como é um requisito extra, deixei por último na lista.

### Persistência do idioma

Sobre a persistência do idioma, minha ideia era usar localStorage (que inclusive já implementei em projetos anteriores), mas essa função só seria implementada após a internacionalização.

### Internacionalização

Nunca trabalhei com internacionalização, mas pretendia utilizar i18n, até por conta da integração fácil com o Next.js. Cheguei a criar os arquivos de tradução — que estão disponíveis em `src/strings` — mas não tive tempo para me dedicar à implementação por conta de erros com o menu dropdown e com os dados do vindos do `json-server` (já resolvidos).

### Menus dropdown

Eu não fazia um menu dropdown há anos e acredito que subestimei a dificuldade de implementar um. Fiquei em dúvida entre utilizar RadixUI ou fazer só com HTML e CSS, escolhi a segunda alternativa e enfrentei alguns problemas que me fizeram perder muito tempo ao tentar deixar os submenus alinhados.

### Responsividade

Considerando todos esses problemas, a responsividade acabou ficando para depois. Apesar de ser algo que eu sei fazer, a implementação levaria mais tempo do que já me restava.

```
Em caso de resposta positiva ou não, agradeço pela oportunidade de participar do processo e sigo interessado em futuras oportunidades com a Ensinio!
```