import CardFilme from './CardFilmes'
import styles from './ListaFilmes.module.css'

function ListaFilmes({ filmes }) {
  return (
    <section className={styles.card}>
      <div className={styles.heading}>
        <h2>Lista de Filmes</h2>
        <p>Veja os filmes cadastrados e suas avaliações.</p>
      </div>

      <div className={styles.lista}>
        {filmes.map((filme) => (
          <CardFilme key={filme.id} filme={filme} />
        ))}
      </div>
    </section>
  )
}

export default ListaFilmes