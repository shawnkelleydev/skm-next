import styles from './styles.module.css'

export default function Metadata({ piece }) {
  return (
    <details className={styles.metadata}>
      <summary>Info</summary>
      <table>
        <tbody>
          <tr>
            <th>Publisher</th>
            <td className={styles.caps}>{piece.publisher.name}</td>
          </tr>
          <tr>
            <th>Released</th>
            <td>{piece.publisher.year}</td>
          </tr>
          <tr>
            <th>Duration</th>
            <td>{piece.duration}</td>
          </tr>
          <tr>
            <th>Difficulty</th>
            <td>{piece.difficulty}</td>
          </tr>
          {piece.highlights && (
            <tr>
              <th>Highlights</th>
              <td>
                <ul>
                  {piece.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </details>
  )
}
