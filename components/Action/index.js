import Link from 'next/link'
import styles from './styles.module.css'

export default function Action({ children, href, ...rest }) {
  if (href[0] !== '/' && href[0] !== '#')
    return (
      <a
        {...rest}
        className={styles.action}
        href={href}
        rel='noopener noreferrer'
        target='_blank'
      >
        {children}
      </a>
    )

  return (
    <Link
      {...rest}
      href={href}
    >
      <a className={styles.action}>{children}</a>
    </Link>
  )
}
