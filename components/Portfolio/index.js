import { pieces } from 'utils/constants/data'

import Strip from 'components/Strip'
import Piece from './Piece'
import styles from './styles.module.css'

export default function Portfolio() {
  return (
    <Strip>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <ul>
          {pieces
            .filter((piece) => piece.published)
            .map((piece, index) => (
              <Piece
                key={index}
                piece={piece}
              />
            ))}
        </ul>
      </div>
    </Strip>
  )
}
