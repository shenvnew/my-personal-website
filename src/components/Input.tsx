import type React from 'react'

type InputProps = {
  label: string
  placeholder: string
  type?: React.HTMLInputTypeAttribute
}

export default function Input({
  label,
  placeholder,
  type = 'text',
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-200">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none placeholder:text-slate-500 transition focus:border-blue-400/40 focus:bg-slate-900"
      />
    </div>
  )
}