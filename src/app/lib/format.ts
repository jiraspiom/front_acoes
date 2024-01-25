export function formatStringToDateLocal(dataString: string) {
  const data = new Date(dataString)
  return data.toLocaleDateString()

  //   const dia = ('0' + data.getUTCDate()).slice(-2)
  //   const mes = ('0' + (data.getUTCMonth() + 1)).slice(-2) // Os meses em JavaScript são indexados a partir de 0
  //   const ano = data.getUTCFullYear()
  //   return `${dia}/${mes}/${ano}`
}

export function formatValor(valorString: string) {
  const valorNumerico = parseFloat(valorString)
  // en-US
  return valorNumerico.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  return valorNumerico.toFixed(2)
}
