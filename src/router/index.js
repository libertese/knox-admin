/**
 * @author https://github.com/zxwk1998/vue-admin-better (Se não quiser manter o autor, pode remover)
 * @description Configurações globais do router; caso necessário, podem ser separados em diferentes arquivos. As asyncRoutes só serão utilizadas no modo inteligência. Na documentação VIP há um guia para configuração de ícones básicos e de estilo clean para as rotas. Leia atentamente.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layouts'
import EmptyLayout from '@/layouts/EmptyLayout'
import { publicPath, routerMode } from '@/config'

Vue.use(VueRouter)
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true,
  },
  {
    path: '/register',
    component: () => import('@/views/register/index'),
    hidden: true,
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/401'),
    hidden: true,
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
    hidden: true,
  },
]

export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/index/index'),
        meta: {
          title: 'Início',
          icon: 'home',
          affix: true,
        },
      },
      // {
      //   path: 'form',
      //   name: 'Form',
      //   component: () => import('@/views/vab/form/index'),
      //   meta: { title: 'Formulário', permissions: ['admin'] },
      // },
    ],
  },
  /* {
    path: "/test",
    component: Layout,
    redirect: "noRedirect",
    children: [
      {
        path: "test",
        name: "Test",
        component: () => import("@/views/test/index"),
        meta: {
          title: "teste",
          icon: "marker",
          permissions: ["admin"],
        },
      },
    ],
  }, */

  // {
  //   path: '/vab',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: 'Vab',
  //   alwaysShow: true,
  //   meta: { title: 'Componentes', icon: 'box-open' },
  //   children: [
  //     {
  //       path: 'permissions',
  //       name: 'Permission',
  //       component: () => import('@/views/vab/permissions/index'),
  //       meta: {
  //         title: 'Permissões de Papel',
  //         permissions: ['admin', 'editor'],
  //       },
  //     },
  //     {
  //       path: 'icon',
  //       component: EmptyLayout,
  //       redirect: 'noRedirect',
  //       name: 'Icon',
  //       meta: {
  //         title: 'Ícones',
  //         permissions: ['admin'],
  //       },
  //       children: [
  //         {
  //           path: 'awesomeIcon',
  //           name: 'AwesomeIcon',
  //           component: () => import('@/views/vab/icon/index'),
  //           meta: { title: 'Ícones Gerais' },
  //         },
  //         {
  //           path: 'colorfulIcon',
  //           name: 'ColorfulIcon',
  //           component: () => import('@/views/vab/icon/colorfulIcon'),
  //           meta: { title: 'Ícones Coloridos' },
  //         },
  //       ],
  //     },
  //     {
  //       path: 'table',
  //       component: () => import('@/views/vab/table/index'),
  //       name: 'Table',
  //       meta: {
  //         title: 'Tabela',
  //         permissions: ['admin'],
  //       },
  //     },

  //     {
  //       path: 'webSocket',
  //       name: 'WebSocket',
  //       component: () => import('@/views/vab/webSocket/index'),
  //       meta: { title: 'webSocket', permissions: ['admin'] },
  //     },
  //
  //     {
  //       path: 'element',
  //       name: 'Element',
  //       component: () => import('@/views/vab/element/index'),
  //       meta: { title: 'Componentes Comuns', permissions: ['admin'] },
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/vab/tree/index'),
  //       meta: { title: 'Árvore', permissions: ['admin'] },
  //     },
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/vab/nested/menu1/index'),
  //       name: 'Menu1',
  //       alwaysShow: true,
  //       meta: {
  //         title: 'Rotas Aninhadas 1',
  //         permissions: ['admin'],
  //       },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           name: 'Menu1-1',
  //           alwaysShow: true,
  //           meta: { title: 'Rotas Aninhadas 1-1' },
  //           component: () => import('@/views/vab/nested/menu1/menu1-1/index'),

  //           children: [
  //             {
  //               path: 'menu1-1-1',
  //               name: 'Menu1-1-1',
  //               meta: { title: 'Rotas Aninhadas 1-1-1' },
  //               component: () => import('@/views/vab/nested/menu1/menu1-1/menu1-1-1/index'),
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       path: 'loading',
  //       name: 'Loading',
  //       component: () => import('@/views/vab/loading/index'),
  //       meta: { title: 'Carregando', permissions: ['admin'] },
  //     },
  //     {
  //       path: 'backToTop',
  //       name: 'BackToTop',
  //       component: () => import('@/views/vab/backToTop/index'),
  //       meta: { title: 'Voltar ao Topo', permissions: ['admin'] },
  //     },
  //     {
  //       path: 'lodash',
  //       name: 'Lodash',
  //       component: () => import('@/views/vab/lodash/index'),
  //       meta: { title: 'lodash', permissions: ['admin'] },
  //     },

  //     {
  //       path: 'upload',
  //       name: 'Upload',
  //       component: () => import('@/views/vab/upload/index'),
  //       meta: { title: 'Upload', permissions: ['admin'] },
  //     },
  //     {
  //       path: 'log',
  //       name: 'Log',
  //       component: () => import('@/views/vab/errorLog/index'),
  //       meta: { title: 'Simulação de Erros de Log', permissions: ['admin'] },
  //     },
  //     {
  //       path: 'https://github.com/zxwk1998/vue-admin-better/',
  //       name: 'ExternalLink',
  //       meta: {
  //         title: 'Link Externo',
  //         target: '_blank',
  //         permissions: ['admin', 'editor'],
  //         badge: 'Novo',
  //       },
  //     },
  //     {
  //       path: 'more',
  //       name: 'More',
  //       component: () => import('@/views/vab/more/index'),
  //       meta: { title: 'Sobre', permissions: ['admin'] },
  //     },
  //   ],
  // },
  // {
  //   path: '/personnelManagement',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: 'PersonnelManagement',
  //   meta: { title: 'Configuração', icon: 'users-cog', permissions: ['admin'] },
  //   children: [
  //     {
  //       path: 'userManagement',
  //       name: 'UserManagement',
  //       component: () => import('@/views/personnelManagement/userManagement/index'),
  //       meta: { title: 'Gerenciamento de Usuário' },
  //     },
  //     {
  //       path: 'roleManagement',
  //       name: 'RoleManagement',
  //       component: () => import('@/views/personnelManagement/roleManagement/index'),
  //       meta: { title: 'Gerenciamento de Papéis' },
  //     },
  //     {
  //       path: 'menuManagement',
  //       name: 'MenuManagement',
  //       component: () => import('@/views/personnelManagement/menuManagement/index'),
  //       meta: { title: 'Gerenciamento de Menu', badge: 'Novo' },
  //     },
  //   ],
  // },
  // {
  //   path: '/mall',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: 'Mall',
  //   meta: {
  //     title: 'Shopping',
  //     icon: 'shopping-cart',
  //     permissions: ['admin'],
  //   },

  //   children: [
  //     {
  //       path: 'pay',
  //       name: 'Pay',
  //       component: () => import('@/views/mall/pay/index'),
  //       meta: {
  //         title: 'Pagamento',
  //         noKeepAlive: true,
  //       },
  //       children: null,
  //     },
  //     {
  //       path: 'goodsList',
  //       name: 'GoodsList',
  //       component: () => import('@/views/mall/goodsList/index'),
  //       meta: {
  //         title: 'Lista de Produtos',
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/error',
  //   component: EmptyLayout,
  //   redirect: 'noRedirect',
  //   name: 'Error',
  //   meta: { title: 'Páginas de Erro', icon: 'bug' },
  //   children: [
  //     {
  //       path: '401',
  //       name: 'Error401',
  //       component: () => import('@/views/401'),
  //       meta: { title: '401' },
  //     },
  //     {
  //       path: '404',
  //       name: 'Error404',
  //       component: () => import('@/views/404'),
  //       meta: { title: '404' },
  //     },
  //   ],
  // },
  // {
  //   path: '*',
  //   redirect: '/404',
  //   hidden: true,
  // },
]

const router = new VueRouter({
  base: publicPath,
  mode: routerMode,
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: constantRoutes,
})

export function resetRouter() {
  location.reload()
}

export default router
