<template>
  <div class="element-container">
    <el-row :gutter="20">
      <el-col :lg="18" :md="18" :sm="24" :xl="16" :xs="24">
        <el-button type="primary" @click="dialogVisible = !dialogVisible">Clique aqui para a documentação completa do Element</el-button>
        <el-dialog :fullscreen="true" title="Documentação do Element" :visible.sync="dialogVisible">
          <iframe class="element-iframe" frameborder="0" src="https://element.eleme.cn/#/zh-CN/component/installation"></iframe>
        </el-dialog>
        <el-divider content-position="left">
          Tag
          <a href="https://element.eleme.cn/#/zh-CN/component/tag" target="_blank">Documentação</a>
        </el-divider>
        <el-tag>Tag Um</el-tag>
        <el-tag type="success">Tag Dois</el-tag>
        <el-tag type="info">Tag Três</el-tag>
        <el-tag type="warning">Tag Quatro</el-tag>
        <el-tag type="danger">Tag Cinco</el-tag>
        <el-tag effect="dark">Tag Um</el-tag>
        <el-tag effect="dark" type="success">Tag Dois</el-tag>
        <el-tag effect="dark" type="info">Tag Três</el-tag>
        <el-tag effect="dark" type="warning">Tag Quatro</el-tag>
        <el-tag effect="dark" type="danger">Tag Cinco</el-tag>

        <el-divider content-position="left">
          Barra de Progresso
          <a href="https://element.eleme.cn/#/zh-CN/component/progress" target="_blank">Documentação</a>
        </el-divider>
        <el-progress :percentage="50" />
        <el-progress :percentage="100" status="success" />
        <el-progress :percentage="100" status="warning" />
        <el-progress :percentage="50" status="exception" />
        <el-progress :percentage="70" :stroke-width="26" :text-inside="true" />
        <el-progress :percentage="100" status="success" :stroke-width="24" :text-inside="true" />
        <el-progress :percentage="80" status="warning" :stroke-width="22" :text-inside="true" />
        <el-progress :percentage="50" status="exception" :stroke-width="20" :text-inside="true" />
        <el-progress :percentage="0" type="circle" />
        <el-progress :percentage="25" type="circle" />
        <el-progress :percentage="100" status="success" type="circle" />
        <el-progress :percentage="70" status="warning" type="circle" />
        <el-progress :percentage="50" status="exception" type="circle" />

        <el-divider content-position="left">
          Botões
          <a href="https://element.eleme.cn/#/zh-CN/component/button" target="_blank">Documentação</a>
        </el-divider>
        <el-button>Botão Padrão</el-button>
        <el-button type="primary">Botão Principal</el-button>
        <el-button type="success">Botão de Sucesso</el-button>
        <el-button type="info">Botão de Informação</el-button>
        <el-button type="warning">Botão de Aviso</el-button>
        <el-button type="danger">Botão de Perigo</el-button>
        <el-button plain>Botão Simples</el-button>
        <el-button plain type="primary">Botão Principal</el-button>
        <el-button plain type="success">Botão de Sucesso</el-button>
        <el-button plain type="info">Botão de Informação</el-button>
        <el-button plain type="warning">Botão de Aviso</el-button>
        <el-button plain type="danger">Botão de Perigo</el-button>
        <el-button round>Botão Arredondado</el-button>
        <el-button round type="primary">Botão Principal</el-button>
        <el-button round type="success">Botão de Sucesso</el-button>
        <el-button round type="info">Botão de Informação</el-button>
        <el-button round type="warning">Botão de Aviso</el-button>
        <el-button round type="danger">Botão de Perigo</el-button>
        <el-button circle icon="el-icon-search" />
        <el-button circle icon="el-icon-edit" type="primary" />
        <el-button circle icon="el-icon-check" type="success" />
        <el-button circle icon="el-icon-message" type="info" />
        <el-button circle icon="el-icon-star-off" type="warning" />
        <el-button circle icon="el-icon-delete" type="danger" />
        <el-button disabled>Botão Padrão</el-button>
        <el-button disabled type="primary">Botão Principal</el-button>
        <el-button disabled type="success">Botão de Sucesso</el-button>
        <el-button disabled type="info">Botão de Informação</el-button>
        <el-button disabled type="warning">Botão de Aviso</el-button>
        <el-button disabled type="danger">Botão de Perigo</el-button>
        <el-button icon="el-icon-edit" type="primary" />
        <el-button icon="el-icon-share" type="primary" />
        <el-button icon="el-icon-delete" type="primary" />
        <el-button icon="el-icon-search" type="primary">Pesquisar</el-button>
        <el-button type="primary">
          Upload
          <i class="el-icon-upload el-icon--right"></i>
        </el-button>
        <el-button :loading="true" type="primary">Carregando</el-button>

        <el-divider content-position="left">
          Links de Texto
          <a href="https://element.eleme.cn/#/zh-CN/component/link" target="_blank">Documentação</a>
        </el-divider>
        <el-link href="https://element.eleme.io" target="_blank">Link Padrão</el-link>
        <el-link type="primary">Link Principal</el-link>
        <el-link type="success">Link de Sucesso</el-link>
        <el-link type="warning">Link de Aviso</el-link>
        <el-link type="danger">Link de Perigo</el-link>
        <el-link type="info">Link de Informação</el-link>
        <el-link disabled>Link Padrão</el-link>
        <el-link disabled type="primary">Link Principal</el-link>
        <el-link disabled type="success">Link de Sucesso</el-link>
        <el-link disabled type="warning">Link de Aviso</el-link>
        <el-link disabled type="danger">Link de Perigo</el-link>
        <el-link disabled type="info">Link de Informação</el-link>
        <el-link :underline="false">Sem Sublinhado</el-link>
        <el-link>Com Sublinhado</el-link>
        <el-divider content-position="left">
          Avatar
          <a href="https://element.eleme.cn/#/zh-CN/component/avatar" target="_blank">Documentação</a>
        </el-divider>
        <el-avatar icon="el-icon-user-solid" />
        <el-divider content-position="left">
          Cabeçalho
          <a href="https://element.eleme.cn/#/zh-CN/component/page-header" target="_blank">Documentação</a>
        </el-divider>
        <el-page-header content="Página de Detalhes" />
        <el-divider content-position="left">
          Breadcrumb
          <a href="https://element.eleme.cn/#/zh-CN/component/breadcrumb" target="_blank">Documentação</a>
        </el-divider>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">Página Inicial</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">Gestão de Atividades</a></el-breadcrumb-item>
          <el-breadcrumb-item>Lista de Atividades</el-breadcrumb-item>
          <el-breadcrumb-item>Detalhes da Atividade</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Element',
    components: {},
    data() {
      return {
        dialogVisible: false,
      }
    },
    created() {},
    mounted() {},
    methods: {},
  }
</script>

<style lang="scss" scoped>
  .element-container {
    ::v-deep {
      .el-dialog__wrapper {
        position: fixed;
        top: 20px;
        right: 20px;
        bottom: 20px;
        left: 20px;
      }

      .el-tag,
      .el-button,
      .el-link {
        margin: 5px;
      }

      .el-progress {
        margin: 20px;
      }
    }

    .element-iframe {
      position: absolute;
      top: 55px;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 89vh;
    }
  }
</style>
