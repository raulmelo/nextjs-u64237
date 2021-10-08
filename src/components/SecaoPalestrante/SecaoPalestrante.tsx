  import { useState } from 'react'
import Style from './SecaoPalestrante.module.scss'

export interface propsModel {
  title?: string
}

const SecaoPalestrante = (props: propsModel) => {

  const participantes = [
    {
      id: 1,
      nome: 'Suzana Padua',
      descr: 'Suzana Machado Padua é doutora pela Universidade de Brasília em educação ambiental. É presidente do IPÊ - Instituto de Pesquisas Ecológicas e leciona nos cursos de curta duração e no Mestrado da Escola Superior de Conservação Ambiental e Sustentabilidade - ESCAS (IPÊ). Já recebeu inúmeros prêmios no Brasil e no exterior.',
      img: 'suzana-padua',
      active: false
    },
    {
      id: 2,
      nome: 'Angela Pellin',
      descr: 'Bióloga, Especialista em Biologia da Conservação e Doutora em Ciências da Engenharia Ambiental. Há dez anos é Pesquisadora e Coordenadora de Projetos do IPÊ - Instituto de Pesquisas Ecológicas e Docente da ESCAS - Escola de Conservação Ambiental e Sustentabilidade. Possui experiência no setor governamental e não governamental com projetos relacionados à conservação da natureza, criação e gestão de áreas protegidas públicas e privadas, nos biomas Mata Atlântica, Cerrado, Pantanal e Amazônia. Mãe da Estelinha e amante da natureza.',
      img: 'angela-pellin',
      active: false
    },
    {
      id: 3,
      nome: 'Jens Bruggemann',
      descr: 'Jens Brüggemann, Geógrafo e Mestre em Estudos de Desenvolvimento, atualmente é Diretor do Programa Biosfera da Deutsche Gesellschaft für Internationale Zusammenarbeit GIZ GmbH no Brasil. Anteriormente trabalhou na China, na Agência Federal Alemã de Conservação da Natureza e for Diretor Adjunto do Parque Nacional Müritz na Alemanha.',
      img: 'jens-bruggemann',
      active: false
    },
    {
      id: 4,
      nome: 'Jayleen Vera',
      descr: 'Jayleen Vera trabalha para o Serviço Florestal dos EUA (USFS) desde 2007 até a presente data. Antes trabalhou para o Serviço Nacional de Parques desde 2002. No USFS, desde que entrou atuou como brigadista e gerente de aviões de combate, e atualmente trabalha com os Programas Internacionais da agência.  Após anos como especialista em programas de fogo, Jayleen assumiu em 2021 a coordenação geral dos trabalhos do USFS no Brasil. Hoje, juntamente com a equipe do USFS Brasil, apóia os esforços locais para o desenvolvimento e conservação da biodiversidade através de intercâmbios com especialistas do USFS e seus parceiros brasileiros, em parcerias estratégicas reunindo equipes multidisciplinares. Jayleen passou a infância como filha de um guarda-parques e cresceu perto da fronteira entre os Estados Unidos e o México, o que a inspirou a aprender espanhol e a seguir a carreira florestal internacional. Mais tarde se graduou pela Universidade do Arizona e aprendeu português.  Atualmente reside em Durango, no Estado do Colorado, com seu marido, que é também brigadista e duas filhas.',
      img: 'jayleen-vera',
      active: false
    },
    {
      id: 5,
      nome: 'Fabiana Prado',
      descr: 'Fabiana Prado, Gerente de Projetos e Articulação Institucional do IPÊ – Instituto de Pesquisas Ecológicas, Bióloga, Mestre em Ciências Biológicas, com atuação em gestão de áreas protegidas, monitoramento participativo da biodiversidade e redes de parcerias. Atualmente é gerente do Projeto LIRA - Legado Integrado da Região Amazônica e lidero um conjunto de iniciativas no IPÊ que envolve 116 áreas protegidas na Amazônia.',
      img: 'fabiana-prado',
      active: false
    },
    {
      id: 6,
      nome: 'Claudia Gaigher',
      descr: 'Formanda na universidade federal do espirito santo , comecei a carreira no ES. Há 22 anos atua no centro oeste como reporter de rede nacional da TV Globo baseada na TV Morena.  Desde o inicio da carreira se dedica ao jornalismo ambiental e social. Desde o inicio da carreira busca no conhecimento científico junto aos pesquisadores que as pautas em diferentes biomas.  Reportagens no Jornal Nacional, Fantastico e Globo Reporter, bem como em outros jornais da rede nacional e para os jornais locais do Centro Oeste tem como principal desafio profissional levar aos brasileiros informações que possam ajudar a despertar o pertencimento, a necessidade de envolvimento de todos para desenvolver ações de conservação e sustentabilidade. Coberturas no Pantanal., Amazônia e Cerrado foram premiadas. As denúncias sobre crianças catadoras de iscas no Pantanal levaram o poder público a construir e reestruturar as escolas das aguas onde os filhos dos ribeirinhos tem a chance de ir a escola sem deixar suas famílias e mudar pra cidade. Nas questões indígenas sempre buscou espaço para mostrar as desigualdades denunciando desnutrição infantil nas aldeias guarani kaiowa bem como o drama das disputas fundiárias em Mato Grosso do Sul. Acompanhando há décadas as pesquisas de conservação deu visibilidade aos trabalhos dos pesquisadores que há anos estudam antas, tatus, araras, Jacares, onças e tantas outras espécies em risco nos biomas brasileiros. Mais recentemente as reportagens sobre os incêndios no Pantanal também deram visibilidade aos impactos e ameaças à esse bioma gerando uma mobilização mundial em Prol de ações de conservação e proteção do bioma e das comunidades pantaneiras.',
      img: 'claudia-gaigher',
      active: false
    },
    {
      id: 7,
      nome: 'Paulo Russo',
      descr: `Desde o inicio da carreira se dedica ao jornalismo ambiental e social.`,
      img: 'paulo-russo',
      active: false
    },
    {
      id: 8,
      nome: 'Sylvia Montag',
      descr: 'Desde o inicio da carreira busca no conhecimento científico junto aos pesquisadores que as pautas em diferentes biomas.  Reportagens no Jornal Nacional, Fantastico e Globo Reporter, bem como em outros jornais da rede nacional e para os jornais locais do Centro Oeste tem como principal desafio profissional levar aos brasileiros informações que possam ajudar a despertar o pertencimento, a necessidade de envolvimento de todos para desenvolver ações de conservação e sustentabilidade.',
      img: 'sylvia-montag',
      active: false
    },
    {
      id: 9,
      nome: 'Kristin Schmitt ',
      descr: 'Kristin Schmitt faz parte do Serviço Florestal Americano desde 2017 e atualmente é Coordenadora do Programa de Voluntariado na Região das Montanhas Rochosas. Já atuou no AmeriCorps FEMA Corps, que ajuda as comunidades afetadas por desastres e oferece treinamento em gerenciamento de emergências. Trabalhou para várias organizações sem fins lucrativos e foi voluntária do Peace Corps no Equador entre 2008-2010. Kristin obteve seu mestrado em Administração Internacional na Universidade de Denver em 2012. Adora passar o tempo ao ar livre com sua família e é grata por conhecer tantas pessoas maravilhosas e que ajudam na gestão das áreas naturais.',
      img: 'kristin-schmitt',
      active: false
    },
    {
      id: 10,
      nome: 'Felipe Martins',
      descr: 'Prol de ações de conservação e proteção do bioma e das comunidades pantaneiras.',
      img: 'felipe-martins',
      active: false
    },
    {
      id: 11,
      nome: 'Pedro Cunha e Menezes',
      descr: 'Pedro Cunha e Menezes é Diplomata. Fez sua carreira na área ambiental. Foi Diretor-executivo do Parque Nacional da Tijuca, Representante adjunto do Brasil junto ao Programa das Nações Unidas para o Meio Ambiente, em Nairobi, no Quênia, Negociador brasileiro nas principais Convenções Ambientais, a exemplo da CDB, Clima, RAMSAR, Espécies Migratórias, Patrimônio Mundial etc, Chefe do Parque Nacional da Tijuca, Diretor de Criação e Manejo e Coordenador-Geral de Uso Púbico e Negócios do ICMBio. É membro da Comissão de Áreas Protegidas da União Internacional para a Conservação da Natureza (UICN), presidente do Grupo de Especialistas da UICN para Trilhas de Longo Curso, Diretor da Rede Brasileira de Trilhas, Diretor da World Trails Network, Conselheiro da Trilha Transcarioca e articulista de OECO.',
      img: 'pedro-cunha-menezes',
      active: false
    },
    {
      id: 12,
      nome: 'Maria de Lourdes de Arruda',
      descr: 'Maria de Lourdes de Arruda, mãe de quatro filhos, moradora da região da Área de Proteção Ambiental - APA Municipal da Baía Negra, no Mato Grosso do Sul, há 18 anos. Trabalha como agente comunitária de saúde na Prefeitura de Ladário há 13 anos e é brigadista comunitária voluntária desde 2019. Acredita que os cuidados com a saúde e a natureza precisam andar juntos.',
      img: 'maria-de-lourdes-de-arruda',
      active: false
    },
    {
      id: 13,
      nome: 'André Luís Macedo Vieira',
      descr: 'Nasceu em Barrado corda-MA, em 1983. Engenheiro florestal com mestrado em ciências ambientais e florestais (UFRRJ) e doutorando em ciências ambientais e conservação (UFRJ), é analista ambiental do do ICMBio, com trajetória marcada pelos desafios referentes à covivência entre as atividades minerais e a conservação da biodiversidade em áreas protegidas da Amazônica. Por três anos atuou em Trombetas e, desde 2013, chefia a Flona do Tapirapé Aquiri. Atualmente é responsável pelo Núcleo de Gestão Integrada Carajás - NGI Carajás (O NGI Carajás foi criado em novembro de 2018).',
      img: 'andre-luis-macedo-vieira',
      active: false
    },
    {
      id: 14,
      nome: 'Jim Barborak',
      descr: 'Bacharel e mestre em recursos naturais pela Universidade Estadual de Ohio, trabalhou em cerca de 30 países (Américas, África e Ásia), desenvolvendo iniciativas relacionadas ao planejamento e gestão das áreas protegidas, particularmente turismo e recreação nelas. É especialista em vários aspectos do manejo de áreas protegidas, incluindo capacitação de pessoal, manejo de zonas de amortecimento e corredores, governança, políticas, financiamento e planejamento de parques e reservas naturais. Ao longo de sua carreira, tem se dedicado a elaborar e implementar oportunidades mais amplas de uso público, por meio do turismo, recreação e educação ambiental, além de se envolver ativamente para aumentar os benefícios gerados para o entorno. E membro ativo da Comissão Mundial para Areas Protegidas da UICN.',
      img: 'jim-barborak',
      active: false
    },
    {
      id: 15,
      nome: 'Marco Van Der Ree',
      descr: 'Marco van der Ree é um líder inovador, estratégico e apaixonado com 25 anos de experiência global em desenvolvimento sustentável, construção de parcerias, arrecadação de fundos, advocacy e ação voluntária. Seu interesse pela conservação e pelo Brasil vem desde a época em que fazia Matérias em Relações Internacionais com uma tese sobre a Política de Biodiversidade no Brasil (1995). Depois disso, iniciou sua carreira no Brasil no Instituto Sociedade, População e Natureza. De 1999 a 2015 trabalhou com várias organizações da ONU - UNCDF, UNDP, UNOPS e, por 10 anos, com voluntariado na ONU. Acredita no poder do voluntariado para o desenvolvimento sustentável, o que foi comprovado pela campanha global Ação Voluntária Conta para o desenvolvimento sustentável que liderou para a Rio + 20 - com 64 milhões de ações contabilizadas e 1.500 voluntários brasileiros treinados para a conferência. Atualmente é Director Executivo de Desenvolvimento e Mobilização de Recursos na América Latina da The Nature Conservancy - TNC e anteriormente ocupou cargos de gestão na Global Reporting Initiative (relatórios de sustentabilidade), EIT Climate-KIC (inovação climática). É membro voluntário do Conselho da Green Light District Foundation em Amsterdã (presidente), e da Conexsus no Brasil. Por meio da instituição que criou, a Brokering Solidarity, foi consultor internacional sênior para a Avaliação de 10 anos do Fundo Amazônia no Brasil (2019).',
      img: 'marco-van-der-ree',
      active: false
    },
    {
      id: 16,
      name: 'Silvia Naccache',
      descr: 'Silvia Maria Louzã Naccache é empreendedora social, palestrante, avaliadora de projetos, conteudista e consultora na área de Voluntariado, Responsabilidade Social, Desenvolvimento Sustentável e Terceiro Setor. Articula parcerias com organizações da sociedade civil, governos, escolas, universidades e empresas. Organiza, ministra e facilita cursos, palestras, oficinas e eventos. Avalia projetos para editais e premiações (Fundação Cargill, EDP, Instituto C&A, 100 melhores Ongs do Brasil) . Conselheira voluntária da ABRAPS - Associação dos Profissionais pelo Desenvolvimento Sustentável. Voluntária da Associação Vaga Lume, voluntária no grupo de trabalho de Humanização do Movimento Todos Juntos Contra o Câncer. E voluntário doo Instituto Remo Meu Rumo. Fundadora e voluntária do Grupo de Estudos de Voluntariado Empresarial desde 2009. Coautora do livro Voluntariado Empresarial - Estratégias para Implantação de Programas Eficientes. Coordenou por 14 anos o Centro de Voluntariado de São Paulo. Graduada em Ciências Biomédicas pela UNIFESP - Universidade Federal de São Paulo.',
      img: 'silvia-naccache',
      active: false
    },
    {
      id: 17,
      nome: 'Gustavo Venancio Narciso',
      descr: 'Gustavo Narciso é engenheiro bioquímico pela USP e começou sua carreira como consultor de negócios de varejo pela Cosin Consulting. Na C&A, foi PMO corporativo por 4 anos, liderando também o comitê de Diversidade e Inclusão da companhia. Desde 2020 é gerente executivo do Instituto C&A, a frente das atividades de incentivo a ações de fortalecimento de comunidades por meio da moda através do fomento ao empreendedorismo, voluntariado corporativo e ajudas humanitárias. Apresenta o canal The Very Black Talk Show no Youtube entrevistando vozes negras e antirracistas em temas como opinião, cultura, política e comportamento.',
      img: 'gustavo-venancio-narciso',
      active: false
    }
  ]

  const [palestrantes, setPalestrante] = useState(participantes);

  function changeActive(id: number) {

    const newPalestrantes = palestrantes.map(item => {
      if (item.id === id) {
        item.active = !item.active;
      }
      return item;
    });
    setPalestrante(newPalestrantes);
  }

return (
  <div className={ Style.SecaoPalestrante } >
    <h3>Palestrantes</h3>
    <div className="grid">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-md text-center text-white">
          {
            palestrantes.map( (item, index) => {
              return (
                <div key={ index } className={ Style.Palestrante }>
                  <div className={ Style.PalestranteImg }>
                    <img src={ `/img/palestrantes/${ item.img }.png` } className="mx-auto mb-sm mt-lg" alt={ item.nome } />
                  </div>
                  <div className={ Style.PalestranteInfo }>
                    <h4 className="text-lg font-bold"> { item.nome }</h4>
                    {item.active && <p className="text-sm"> { item.descr } </p>}
                    <button className={`mt-sm ${item.active ? 'palestrante-ativo' : 'palestrante-inativo' }`} onClick={ () => changeActive(item.id)  } >
                      <img src="/img/circle-button.png" alt="Botão abrir" />
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>

  </div>
)
}

export default SecaoPalestrante
