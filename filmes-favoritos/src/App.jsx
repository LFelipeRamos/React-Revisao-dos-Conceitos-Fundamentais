import { useState } from 'react'
import FormFilme from './components/FormFilmes'
import ListaFilmes from './components/ListaFilmes'
import styles from './App.module.css'

function App() {
  const [filmes, setFilmes] = useState([])
  const [pesquisa, setPesquisa] = useState('')

  function cadastrarFilme(novoFilme) {
    setFilmes([...filmes, novoFilme])
  }

  const filmesFiltrados = filmes.filter((filme) =>
    filme.nome.toLowerCase().includes(pesquisa.toLowerCase()),
  )

  return (
    <main className={styles.appShell}>
      <header className={styles.appHeader}>
        <div>
          <h1>Filmes Favoritos</h1>
          <p>Cadastre, pesquise e organize seus filmes preferidos.</p>
        </div>

        <span className={styles.contador}>
          Total: <strong>{filmes.length}</strong>
        </span>
      </header>

      <section className={styles.pageGrid}>
        <FormFilme onCadastrar={cadastrarFilme} />

        <div className={styles.pageCard}>
          <div className={styles.sectionHeading}>
            <div>
              <h2>Pesquisar Filmes</h2>
              <p>Filtre os filmes cadastrados pelo nome.</p>
            </div>
          </div>

          <input
            className={styles.pesquisa}
            type="text"
            placeholder="Pesquisar filme..."
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
          />
        </div>

        {filmes.length === 0 ? (
          <p className={styles.mensagem}>Nenhum filme cadastrado.</p>
        ) : (
          <ListaFilmes filmes={filmesFiltrados} />
        )}
      </section>
    </main>
  )
}

export default App