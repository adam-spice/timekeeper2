const CustomButton = ({ type, text }) => {
  return (
    <div>
      <button
        type={type}
        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-red-ae hover:bg-red-aeLight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {text}
      </button>
    </div>
  )
}

export default CustomButton
