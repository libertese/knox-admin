<template>
  <div class="index-container">
    <el-row>
      <el-col :lg="24" :md="24" :sm="24" :xl="11" :xs="24">
        <el-card class="card" shadow="never">
          <div slot="header">
            <span>Consulta CNPJ</span>
          </div>

          <!-- Select para escolher CNPJ -->
          <el-select
            v-model="selectedCnpj"
            filterable
            placeholder="Selecione um CNPJ"
            style="margin-bottom: 20px"
            @change="handleCnpjChange"
          >
            <el-option v-for="cnpj in cnpjList" :key="cnpj.value" :label="cnpj.label" :value="cnpj.value" />
          </el-select>

          <!-- Tabela de detalhes com base no CNPJ selecionado -->
          <table class="table">
            <tr>
              <td>Razão Social</td>
              <td>{{ filteredData['razao_social'] }}</td>
              <td>Nome Fantasia</td>
              <td>{{ filteredData['nome_fantasia'] }}</td>
            </tr>
            <tr>
              <td>Situação</td>
              <td>{{ filteredData['situacao'] }}</td>
              <td>Data da Situação</td>
              <td>{{ filteredData['data_situacao'] }}</td>
            </tr>
            <tr>
              <td>Natureza Jurídica</td>
              <td>{{ filteredData['natureza_juridica'] }}</td>
              <td>Abertura</td>
              <td>{{ filteredData['abertura'] }}</td>
            </tr>
            <tr>
              <td>CNAE</td>
              <td>{{ filteredData['cnae'] }}</td>
              <td>Ramo de Atividade</td>
              <td>{{ filteredData['ramo_de_atividade'] }}</td>
            </tr>
            <tr>
              <td>E-mail</td>
              <td>{{ filteredData['email'] }}</td>
              <td>Capital Social</td>
              <td>{{ filteredData['capital_social'] }}</td>
            </tr>
            <tr>
              <td>Porte</td>
              <td>{{ filteredData['porte'] }}</td>
              <td>Simples Nacional</td>
              <td>{{ filteredData['simples_nacional'] }}</td>
            </tr>
            <tr>
              <td>MEI</td>
              <td>{{ filteredData['mei'] }}</td>
              <td>Sócios</td>
              <td>{{ filteredData['socios'] }}</td>
            </tr>
            <tr>
              <td>Tributação</td>
              <td>{{ filteredData['tributacao'] }}</td>
              <td>Dívidas FGTS</td>
              <td>{{ filteredData['dividas_fgts'] }}</td>
            </tr>
            <tr>
              <td>Dívidas Não Previdenciárias</td>
              <td>{{ filteredData['dividas_nao_previdenciarias'] }}</td>
              <td>Dívidas Previdenciárias</td>
              <td>{{ filteredData['dividas_previdenciarias'] }}</td>
            </tr>
          </table>

          <br />
          <br />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import VabChart from '@/plugins/echarts'
  import { dependencies, devDependencies } from '../../../package.json'
  import { getNoticeList } from '@/api/notice'

  export default {
    name: 'Index',
    components: {},
    data() {
      return {
        // Lista de CNPJs disponíveis para seleção
        cnpjList: [
          { label: '56.424.632/0001-37', value: '56.424.632/0001-37' },
          { label: '17.431.903/0001-20', value: '17.431.903/0001-20' },
          { label: '56.430.610/0001-80', value: '56.430.610/0001-80' },
          { label: '05.265.147/0001-27', value: '05.265.147/0001-27' },
          { label: '56.387.644/0001-39', value: '56.387.644/0001-39' },
        ],
        // CNPJ atualmente selecionado pelo usuário
        selectedCnpj: '',
        // Dados simulados para cada CNPJ
        cnpjData: {
          '56.424.632/0001-37': {
            razao_social: 'SABEE DISTRIBUIDORA LTDA',
            nome_fantasia: 'SABEE DISTRIBUIDORA',
            situacao: 'ATIVA',
            data_situacao: '09/08/2024',
            natureza_juridica: '206-2 - Sociedade Empresária Limitada',
            abertura: '09/08/2024',
            cnae: '5250804',
            ramo_de_atividade: 'Organização logística do transporte de carga',
            email: 'vilamadalena@xfarmacia.com.br',
            capital_social: 100000,
            porte: 'DEMAIS',
            simples_nacional: null,
            mei: null,
            socios: 'GUILHERME MUSSNICH SCHMIDT, DROGARIA X FARMACIA S.A.',
            tributacao: null,
            dividas_fgts: null,
            dividas_nao_previdenciarias: null,
            dividas_previdenciarias: null,
          },
          '17.431.903/0001-20': {
            razao_social: 'ANTONIO MARIA DE SOUZA TRANSPORTES',
            nome_fantasia: 'AEDO TRANSPORTES',
            situacao: 'ATIVA',
            data_situacao: '09/08/2024',
            natureza_juridica: '213-5 - Empresário (Individual)',
            abertura: '20/08/2012',
            cnae: '4924800',
            ramo_de_atividade: 'Transporte escolar',
            email: 'leonardo@crcontabil.com.br',
            capital_social: 50000,
            porte: 'MICRO EMPRESA',
            simples_nacional: 'SIM em 20/08/2012',
            mei: 'NÃO',
            socios: null,
            tributacao: null,
            dividas_fgts: null,
            dividas_nao_previdenciarias: null,
            dividas_previdenciarias: null,
          },
          '56.430.610/0001-80': {
            razao_social: 'JVO TRANSPORTES E FRETAMENTOS LTDA',
            nome_fantasia: 'JVO TRANSPORTES E FRETAMENTOS',
            situacao: 'ATIVA',
            data_situacao: '09/08/2024',
            natureza_juridica: '206-2 - Sociedade Empresária Limitada',
            abertura: '09/08/2024',
            cnae: '4924800',
            ramo_de_atividade: 'Transporte escolar',
            email: 'jvoliveiradossantos8595@gmail.com',
            capital_social: 25000,
            porte: 'MICRO EMPRESA',
            simples_nacional: null,
            mei: null,
            socios: 'JOSE VICTOR OLIVEIRA DOS SANTOS',
            tributacao: null,
            dividas_fgts: null,
            dividas_nao_previdenciarias: null,
            dividas_previdenciarias: null,
          },
          '05.265.147/0001-27': {
            razao_social: 'OSVALDO RODRIGUES DE FARIA PORTO FERREIRA',
            nome_fantasia: null,
            situacao: 'ATIVA',
            data_situacao: '09/08/2024',
            natureza_juridica: '213-5 - Empresário (Individual)',
            abertura: '23/08/2002',
            cnae: '4923001',
            ramo_de_atividade: 'Serviço de táxi',
            email: 'sr.contabil@hotmail.com.br',
            capital_social: 5000,
            porte: 'DEMAIS',
            simples_nacional: 'SIM em 01/01/2015',
            mei: 'NÃO',
            socios: null,
            tributacao: null,
            dividas_fgts: null,
            dividas_nao_previdenciarias: null,
            dividas_previdenciarias: null,
          },
          '56.387.644/0001-39': {
            razao_social: 'TRANSPORTES GRUEL LTDA',
            nome_fantasia: null,
            situacao: 'ATIVA',
            data_situacao: '08/08/2024',
            natureza_juridica: '206-2 - Sociedade Empresária Limitada',
            abertura: '08/08/2024',
            cnae: '4923002',
            ramo_de_atividade: 'Serviço de transporte de passageiros - locação de automóveis com motorista',
            email: 'transretro@hotmail.com',
            capital_social: 1000,
            porte: 'MICRO EMPRESA',
            simples_nacional: null,
            mei: null,
            socios: 'JOSE ANTONIO RAMOS',
            tributacao: null,
            dividas_fgts: null,
            dividas_nao_previdenciarias: null,
            dividas_previdenciarias: null,
          },
        },
        // Dados filtrados que serão mostrados na tabela
        filteredData: {},
        // Outras propriedades existentes
        timer: 0,
        updateTime: process.env.VUE_APP_UPDATE_TIME,
        nodeEnv: process.env.NODE_ENV,
        dependencies: dependencies,
        devDependencies: devDependencies,
        userAgent: navigator.userAgent,
        // Outras configurações conforme o código original...
      }
    },
    created() {
      this.fetchData()
    },
    beforeDestroy() {
      clearInterval(this.timer)
    },
    mounted() {
      // Inicializa a tabela com dados do primeiro CNPJ, caso desejado
      if (this.cnpjList.length > 0) {
        this.selectedCnpj = this.cnpjList[0].value
        this.handleCnpjChange(this.selectedCnpj)
      }
      // Outras configurações de montagem conforme seu código original...
    },
    methods: {
      // Atualiza os dados filtrados com base no CNPJ selecionado
      handleCnpjChange(value) {
        this.filteredData = this.cnpjData[value] || {}
      },
      async fetchData() {
        const res = await getNoticeList()
        this.noticeList = res.data
      },
      // Outros métodos conforme seu código original...
    },
  }
</script>

<style lang="scss" scoped>
  .index-container {
    padding: 0 !important;
    margin: 0 !important;
    background: #f5f7f8 !important;

    ::v-deep {
      .el-alert {
        padding: $base-padding;

        &--info.is-light {
          min-height: 82px;
          padding: $base-padding;
          margin-bottom: 15px;
          color: #909399;
          background-color: $base-color-white;
          border: 1px solid #ebeef5;
        }
      }

      .el-card__body {
        .echarts {
          width: 100%;
          height: 115px;
        }
      }
    }

    .card {
      ::v-deep {
        .el-card__body {
          .echarts {
            width: 100%;
            height: 305px;
          }
        }
      }
    }

    .bottom {
      padding-top: 20px;
      margin-top: 5px;
      color: #595959;
      text-align: left;
      border-top: 1px solid $base-border-color;
    }

    .table {
      width: 100%;
      color: #666;
      border-collapse: collapse;
      background-color: #fff;

      td {
        position: relative;
        min-height: 20px;
        padding: 9px 15px;
        font-size: 14px;
        line-height: 20px;
        border: 1px solid #e6e6e6;

        &:nth-child(odd) {
          width: 20%;
          text-align: right;
          background-color: #f7f7f7;
        }
      }
    }

    .icon-panel {
      height: 117px;
      text-align: center;
      cursor: pointer;

      svg {
        font-size: 40px;
      }

      p {
        margin-top: 10px;
      }
    }

    .bottom-btn {
      button {
        margin: 5px 10px 15px 0;
      }
    }
  }
</style>
