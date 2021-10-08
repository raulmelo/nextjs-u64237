  import Style from './SecaoProgramacao.module.scss'

export interface propsModel {
  title?: string
}

const SecaoProgramacao = (props: propsModel) => {
  const programacao = [
    {
      dia: '16 de outubro',
      table: [
        {
          time: '15h',
          tema: ['Abertura'],
          palestrantes: [`
            Suzana Padua - IPÊ
            Jens Brüggemann – GIZ
            Jayleen Vera - USFS
            Fabiana Prado – Projeto LIRA/IPÊ
          `]
        },
        {
          time: '15h30',
          tema: ['Como todos nós podemos ser protagonistas na conservação?'],
          palestrantes: [`Claudia Gaigher – TV Globo/TV Morena`]
        },
        {
          time: '16h',
          tema:
          [
            `<strong>Voluntariado para Conservação:<br/> experiências internacionais e brasileira</strong> `,
            `O voluntariado na gestão pública da biodiversidade: o Programa de Voluntariado do ICMBio`,
            'Experiências em voluntariado do Serviço Florestal dos Estados Unidos',
            'Boas Práticas em voluntariado na Alemanha '
          ],
          palestrantes: [``, `Paulo Russo – ICMBio`, 'Kristin Schmitt – USFS', 'Sylvia Montag – Parque Natural de Eifel']
        },
        {
          time: '17h',
          tema: [
            '<strong>Vozes do Voluntariado: <br/> Inspira Ação</strong>' ,
            'Programa de Voluntariado do Parque Nacional da Tijuca, conquistas e desafios',
            'A Experiência da Rede Brasileira de Trilhas de Longo Curso: ampliando o protagonismo da sociedade civil na conservação',
            'A criação da Brigada Comunitária da Área de Proteção Ambiental Baía Negra - MS',
            'Programa de Voluntariado de Carajás: uma experiência de voluntariado na Amazônia'
          ],
          palestrantes: [``, 'Felipe Martins – ICMBio', 'Pedro Cunha e Menezes - Rede Trilhas', 'Maria de Lourdes de Arruda - Brigadista Comunitária', 'André Luís Macedo - ICMBio']
        },
        {
          time: '18h',
          tema: ['Encerramento'],
          palestrantes: [``]
        }
      ]
    },
    {
      dia: '28 de outubro',
      table: [
        {
          time: '15h',
          tema: ['Abertura'],
          palestrantes: [`Angela Pellin – IPÊ Cibele Tarraço - IPÊ`]
        },
        {
          time: '15h15',
          tema: [ 'Painel: Caminhos para o fortalecimento do Voluntariado para a Conservação'],
          palestrantes: [`Jim Barborak – CSU Marco Van Der Ree – TNC`]
        },
        {
          time: '16h',
          tema: [
            `Extratos do Encontro de Boas Práticas:
              aprendizados, desafios e oportunidades no Voluntariado para Conservação
            `],
          palestrantes: [`Pontos Focais dos Grupos de Trabalho`]
        },
        {
          time: '17h',
          tema: [
            '<strong>Perspectivas para o Voluntariado para a Conservação: <br/> o que aprender e como ampliar a integração com o setor empresarial</strong>',
            'O que podemos aprender com o voluntariado empresarial no Brasil?',
            'Moda, conservação e diversidade: a experiência do Instituto C&A',
            'Voluntariado como gerador de novas atitudes',
            'Moderação'
          ],
          palestrantes: [``, 'Silvia Naccache - GEVE', 'Gustavo Venancio Narciso – Instituto C&A', 'Representante do CBVE', 'Angela Pellin - IPÊ']
        },
        {
          time: '18h',
          tema: ['Encerramento'],
          palestrantes: [``]
        }
      ]
    }
  ]
return (
  <div className={ Style.SecaoProgramacao } >
    <h3>Progamação</h3>
    <div className="grid gap-md grid-cols-1 md:grid-cols-2">
      {
        programacao.map((dia, index) => {
          return (
            <div key={ index } className="">
              <h4 className="table-day">{ dia.dia }</h4>
              <div className="table-responsivo">
              <table>
                <thead>
                  <tr>
                    <th>Hora</th>
                    <th style={{ width: 190 }}>Tema</th>
                    <th>Convidado</th>
                  </tr>
                </thead>
                <tbody>
                  {dia.table.map((item, indexTable) => {
                      return (
                        <tr key={ indexTable }>
                          <td className="td-time">
                            <span>{ item.time }</span>
                          </td>
                          <td colSpan={2}>
                          {item.tema.map((tema, index2) => {
                            return (
                              <table>
                                <tbody>
                                  <tr>
                                    <td dangerouslySetInnerHTML={{ __html: tema }}></td>
                                    <td key={ index2 + 'r' }>
                                      <span dangerouslySetInnerHTML={{ __html: item.palestrantes[index2] }}></span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            )
                          })}
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
              </div>
            </div>
          )
        })
      }
      <div>

      </div>
    </div>

  </div>
)
}

export default SecaoProgramacao
