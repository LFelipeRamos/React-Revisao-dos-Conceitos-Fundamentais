import styles from './CardFilmes.module.css'

function CardFilme({ filme }) {
  function mostrarFilme() {
    alert(`Filme selecionado: ${filme.nome}`)
  }

  return (
    <article className={styles.card} onDoubleClick={mostrarFilme}>
      <div className={styles.header}>
        <h3>{filme.nome}</h3>

        {filme.nota >= 8 ? (
          <span className={styles.recomendado}>⭐ Recomendado</span>
        ) : (
          <span className={styles.comum}>📌 Comum</span>
        )}
      </div>

      <div className={styles.metaList}>
        <div>
          <span>Gênero</span>
          <strong>{filme.genero}</strong>
        </div>

        <div>
          <span>Ano</span>
          <strong>{filme.ano}</strong>
        </div>

        <div>
          <span>Nota</span>
          <strong>{filme.nota}/10</strong>
        </div>
      </div>
    </article>
  )
}

export default CardFilme