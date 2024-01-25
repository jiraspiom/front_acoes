'use client'

import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { setores } from '../lib/setores'

const schemaForm = z
  .object({
    data: z.string(),
    operacao: z.string(),
    ativo: z.string(),
    setor: z.string(),
    quantidade: z.string(),
    preco: z.string(),
  })
  .transform((filter) => ({
    data: filter.data,
    operacao: filter.operacao.toUpperCase(),
    ativo: filter.ativo.toUpperCase(),
    setor: filter.setor.toUpperCase(),
    quantidade: filter.quantidade,
    preco: filter.preco,
  }))

type FormProps = z.infer<typeof schemaForm>

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    mode: 'onSubmit',
    resolver: zodResolver(schemaForm),
  })

  console.log('erros', errors)

  const handleForm = (data: FormProps) => {
    console.log(data)
  }

  return (
    <div>
      <h1>criar</h1>
      <form onSubmit={handleSubmit(handleForm)} className="max-w-sm mx-auto">
        <div>
          <div>
            <label>DATA: </label>
          </div>
          <input
            type="date"
            {...register('data')}
            className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.data?.message && <p>{errors.data.message}</p>}
        </div>
        <div>
          <div>
            <label>OPERAÇÃO: </label>
          </div>
          <select
            {...register('operacao')}
            className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Selecione operação</option>
            <option value="COMPRA">Compra</option>
            <option value="VENDA">Venda</option>
          </select>
        </div>

        <div>
          <div>
            <label>Ativo: </label>
          </div>
          <input
            type="text"
            {...register('ativo')}
            placeholder="Ativo ex: PETRA3, MXRF11"
            className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.ativo?.message && <p>{errors.ativo.message}</p>}
        </div>

        <div>
          <div>
            <label>Setor: </label>
          </div>
          <select
            {...register('setor')}
            className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Selecione o setor</option>
            {setores.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div>
            <label>Quantidade de ações: </label>
          </div>
          <input
            type="text"
            {...register('quantidade')}
            placeholder="Quantidade"
            className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.quantidade?.message && <p>{errors.quantidade.message}</p>}
        </div>

        <div>
          <div>
            <label>Preco: </label>
          </div>
          <input
            type="text"
            {...register('preco')}
            placeholder="Valor"
            className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.preco?.message && <p>{errors.preco.message}</p>}
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          enviar
        </button>
      </form>
    </div>
  )
}
