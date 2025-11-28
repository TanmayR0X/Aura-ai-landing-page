"use client"

export default function CustomButton({
  label,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
}) {
  // Base styles
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-200 cursor-pointer hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"

  // Variant styles
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100",
  }

  // Size styles
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const buttonClass = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClass}>
      {label}
    </button>
  )
}
