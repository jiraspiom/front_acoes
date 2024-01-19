import axios from 'axios'

type dadosTransacao = {
  id: string
  data: string
  operacao: string
  ativo: string
  setor: string
  preco: string
  quantidade: string
  valOperacao: string
  valorTotalAcumulado: string
  quantidadeAcumulada: string
  mediaPreco: string
}

async function getData() {
  try {
    const response = await axios.get(`https://...`)
    const { result } = response.data
    return result
  } catch (error: any) {
    throw new Error('Failed to fetch data')
  }
}

export default async function Page() {
  const response = await axios.get(
    'https://nodejsreseco.onrender.com/lancamentoscalc/',
  )

  const result: dadosTransacao[] = await response.data
  // console.log(result)

  // const data = await getData()
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Operacao</th>
            <th>ativo</th>
            <th>setor</th>
            <th>preco</th>
            <th>quantidade</th>
            <th>valor Operacao</th>
            <th>Val Total Acu</th>
            <th>qtd Acu</th>
            <th>media preco</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item) => (
            <tr key={item.id}>
              <td>{item.data}</td>
              <td>{item.operacao}</td>
              <td>{item.ativo}</td>
              <td>{item.setor}</td>
              <td>{item.preco}</td>
              <td>{item.quantidade}</td>
              <td>{item.valOperacao}</td>
              <td>{item.valorTotalAcumulado}</td>
              <td>{item.quantidadeAcumulada}</td>
              <td>{item.mediaPreco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
