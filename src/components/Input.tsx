import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface BaseProps {
  label: string
  error?: string
}

type InputProps =
  | ({ as?: 'input' } & BaseProps & InputHTMLAttributes<HTMLInputElement>)
  | ({ as: 'textarea' } & BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>)

export default function Input(props: InputProps) {
  const { label, error } = props

  const baseClasses =
    'mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none backdrop-blur-md transition placeholder:text-slate-500 focus:border-cyan-400/40'

  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-200">{label}</span>

      {props.as === 'textarea' ? (
        <textarea {...props} className={baseClasses} />
      ) : (
        <input {...props} className={baseClasses} />
      )}

      {error && <p className="mt-2 text-xs text-rose-300">{error}</p>}
    </label>
  )
}