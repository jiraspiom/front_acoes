import axios from 'axios'
import { formatStringToDateLocal, formatValor } from '../lib/format'
import { Search, PlusCircle } from 'lucide-react'

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
          <p className="text-lg font-bold mx-4 my-4 mb-2 text-gray-500 dark:text-gray-400">
            Valor Total Acumulado: {formatValor(totalAcumulado.toString())}
          </p>
        </div>

        <div className="p-6 max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-between">
            <form className="flex items-center gap-2">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ativo"
              />
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="setor"
              />
              <button
                type="submit"
                className=" flex py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <Search className="w-4 h-4 mr-2"></Search>
                Filtrar
              </button>
            </form>
            <button className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              <PlusCircle className="w-4 h-4 mr-2"></PlusCircle>
              Novo lancamento
            </button>
          </div>
        </div>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-1 text-center">Data</th>
              <th className="px-6 py-1 text-left">Operação</th>
              <th className="px-6 py-1 text-left">Ativo</th>
              <th className="px-6 py-1 text-left">Setor</th>
              <th className="px-6 py-1 text-right">Preço</th>
              <th className="px-6 py-1 text-center">Qtd</th>
              <th className="px-6 py-1 text-right">V. operação</th>
              <th className="px-6 py-1 text-right">V. total AC</th>
              <th className="px-6 py-1 text-center">qtd Ac</th>
              <th className="px-6 py-1 text-right">M. preço</th>
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
                <td className="px-6 py-1 text-right">
                  {formatValor(item.preco)}
                </td>
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
