function ResumoFinanceiro({receitas, despesas}) {
  let saldo = receitas - despesas;
  let informacaoResumo = "Saldo Zerado."

  if (saldo !== 0) {
    informacaoResumo = saldo > 0 ? `Saldo Positivo: ${saldo}` : `Saldo Negativo: ${saldo}`
  }

  saldo = saldo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

  return (
    <p><strong>{informacaoResumo}</strong></p>
  )

};

export default function App() {
  return (
    <div>
      <ResumoFinanceiro receitas={5000} despesas={3000} />
      <ResumoFinanceiro receitas={2400} despesas={7000} />
      <ResumoFinanceiro receitas={2900} despesas={2900} />
    </div>
  )
};