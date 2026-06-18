import { useState } from 'react'
import styles from './FormFilmes.module.css'

function FormFilme({ onCadastrar }) {
  const [nome, setNome] = useState('')
  const [genero, setGenero] = useState('')
  const [ano, setAno] = useState('')
  const [nota, setNota] = useState('')

  function cadastrar() {
    if (!nome || !genero || !ano || !nota) {
      alert('Preencha todos os campos!')
      return
    }

    const novoFilme = {
      id: Date.now(),
      nome,
      genero,
      ano,
      nota: Number(nota),
    }

    onCadastrar(novoFilme)

    setNome('')
    setGenero('')
    setAno('')
    setNota('')
  }

  return (
    <section className={styles.card}>
      <h2>Cadastrar Filme</h2>
      <p>Preencha os dados para adicionar um filme à lista.</p>

      <div className={styles.form}>
        <label>
          Nome do filme
          <input
            type="text"
            placeholder="Ex: Shrek"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>

        <label>
          Gênero
          <input
            type="text"
            placeholder="Ex: Animação"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          />
        </label>

        <label>
          Ano de lançamento
          <input
            type="number"
            placeholder="Ex: 2001"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
          />
        </label>

        <label>
          Nota
          <input
            type="number"
            placeholder="0 a 10"
            min="0"
            max="10"
            value={nota}
            onChange={(e) => setNota(e.target.value)}
          />
        </label>

        <button onClick={cadastrar}>Cadastrar Filme</button>
      </div>
    </section>
  )
}

export default FormFilme