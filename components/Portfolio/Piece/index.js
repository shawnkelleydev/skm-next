import Action from 'components/Action'
import Metadata from '../Metadata'

import styles from './styles.module.css'

export default function Piece({ piece }) {
  return (
    <li className={styles.piece}>
      <h3>
        <cite>{piece.title}</cite>
        <small>{piece.ensembleType}</small>
      </h3>
      <Metadata piece={piece} />
      <Action
        text='buy now'
        url={piece.purchaseUrl}
      />
    </li>
  )
}
