/**
 * @description Exporta a configuração padrão geral
 */
const setting = {
  // URL para desenvolvimento e implantação
  publicPath: '',
  // Nome do diretório dos arquivos construídos para o ambiente de produção
  outputDir: 'dist',
  // Diretório (relativo a outputDir) onde serão colocados os recursos estáticos gerados (js, css, img, fontes).
  assetsDir: 'static',
  // Se deve exibir avisos do eslint ao salvar no ambiente de desenvolvimento
  lintOnSave: true,
  // Dependências que serão compiladas
  transpileDependencies: [],
  // Título (inclui o título da tela de carregamento inicial, o título da página e o título do navegador)
  title: 'Portal Knox',
  // Abreviação
  abbreviation: 'vab',
  // Porta do ambiente de desenvolvimento
  devPort: '81',
  // Número da versão
  version: process.env.VUE_APP_VERSION,
  // Este item é muito importante! Certifique-se de manter o MIT License no package.json e as informações de direitos autorais do autor para uso comercial gratuito. Se não cumprir esta regra, você não poderá usar este framework. Para personalizar as informações de direitos autorais, entre em contato pelo QQ1204505056.
  copyright: 'vab',
  // Se deve exibir as informações de direitos autorais personalizadas no rodapé da página
  footerCopyright: true,
  // Se deve exibir a barra de progresso no topo
  progressBar: true,
  // Número máximo de rotas mantidas em cache
  keepAliveMaxNum: 99,
  // Modo de roteamento, valores possíveis: history ou hash
  routerMode: 'hash',
  // Rotas que não requerem verificação de token
  routesWhiteList: ['/login', '/register', '/404', '/401'],
  // Texto exibido durante o carregamento
  loadingText: 'Carregando...',
  // Nome do token
  tokenName: 'accessToken',
  // Nome da chave para armazenar o token no localStorage ou sessionStorage
  tokenTableName: 'vue-admin-better-2024',
  // Local de armazenamento do token: localStorage ou sessionStorage
  storage: 'localStorage',
  // Se deve registrar a rota atual ao redirecionar para a página de login quando o token expirar
  recordRoute: true,
  // Se deve exibir o logo. Se não exibir, defina como false. Para exibir, insira o nome do ícone remixIcon; atualmente, apenas remixIcon é suportado.
  logo: 'vuejs-fill',
  // Se deve destacar erros na página
  errorLog: ['development', 'production'],
  // Se deve ativar a interceptação de login
  loginInterception: true,
  // Se deve ativar a criptografia RSA no login
  loginRSA: true,
  // Modo de autenticação: 'intelligence' (o backend controla apenas permissões e não o import dos arquivos de view, reduzindo a carga do backend) ou 'all' (o backend controla tudo, o frontend apenas carrega)
  authentication: 'intelligence',
  // Se deve manter apenas um submenu expandido no layout vertical
  uniqueOpened: true,
  // Menu padrão expandido no layout vertical. Use vírgula para separar. Recomenda-se expandir apenas um.
  defaultOopeneds: ['/vab'],
  // Requisições que precisam de uma camada de loading para evitar envios duplicados
  debounce: ['doEdit'],
  // Módulos que precisam ser injetados e carregados automaticamente
  providePlugin: {},
  // Nome da pasta onde o gerador de código cria arquivos dentro da view
  templateFolder: 'project',
  // Se deve exibir a mensagem de doação no terminal
  donation: true,
  // Se deve ativar a compressão de imagens
  imageCompression: true,
}

module.exports = setting
