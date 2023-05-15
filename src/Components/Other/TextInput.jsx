import cc from 'classcat'

export const TextInput = ({
  placeholder,
  value,
  onChange,
  type,
  search,
  autoFocus,
}) => (
  <input
    className={cc([
      'text-input',
      {
        'search-input': search,
      },
    ])}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    type={type}
    autoFocus={autoFocus}
  />
)
