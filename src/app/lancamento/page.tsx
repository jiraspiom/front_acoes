import axios from 'axios'
import { formatStringToDateLocal, formatValor } from '../lib/format'

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

export default async function Page() {
  const response = await axios.get(
    'https://nodejsreseco.onrender.com/lancamentoscalc/',
  )

  const result: dadosTransacao[] = await response.data

  const totalAcumulado = result.reduce(
    (acc, item) => acc + parseFloat(item.valOperacao),
    0,
  )

  return (
    <div className="max-w-fit p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div>
          <p className="text-lg font-bold mb-2 text-gray-500 dark:text-gray-400">
            Valor Total Acumulado: {formatValor(totalAcumulado.toString())}
          </p>
        </div>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-1 text-center">Data</th>
              <th className="px-6 py-1 text-center">Operação</th>
              <th className="px-6 py-1 text-center">Ativo</th>
              <th className="px-6 py-1 text-center">Setor</th>
              <th className="px-6 py-1 text-center">Preço</th>
              <th className="px-6 py-1 text-center">Qtd</th>
              <th className="px-6 py-1 text-center">V. operação</th>
              <th className="px-6 py-1 text-center">V. total AC</th>
              <th className="px-6 py-1 text-center">qtd Ac</th>
              <th className="px-6 py-1 text-center">M. preço</th>
            </tr>
          </thead>
          <tbody>
            {result.map((item) => (
              <tr
                key={item.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-6 py-1">
                  {formatStringToDateLocal(item.data)}
                </td>
                <td className="px-6 py-1">{item.operacao}</td>
                <td className="px-6 py-1">{item.ativo}</td>
                <td className="px-6 py-1">{item.setor}</td>
                <td className="px-6 py-1 text-right">{item.preco}</td>
                <td className="px-6 py-1 text-center">{item.quantidade}</td>
                <td className="px-6 py-1 text-right">
                  {formatValor(item.valOperacao)}
                </td>
                <td className="px-6 py-1 text-right">
                  {formatValor(item.valorTotalAcumulado)}
                </td>
                <td className="px-6 py-1 text-center">
                  {item.quantidadeAcumulada}
                </td>
                <td className="px-6 py-1 text-right">
                  {formatValor(item.mediaPreco)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
