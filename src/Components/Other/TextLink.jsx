import { Link } from 'react-router-dom'
import cc from 'classcat'

export const TextLink = ({ text, path, virkdk }) => (
  <Link
    className={cc([
      'text-link',
      {
        'text-link-virkdk': virkdk,
      },
    ])}
    to={path}
  >
    {text}
  </Link>
)
