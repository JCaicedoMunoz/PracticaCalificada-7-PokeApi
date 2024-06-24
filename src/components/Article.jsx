const Article = ({ id, title, description, image }) => {
  return (
    <article className="flex my-4 lg:px-4">
      <img src={image} alt="Article image"
        className="w-[100px] object-cover flex-none" />
      <div className="py-4 pl-6">
        <p className="text-GrayishBlue text-3xl mb-[10px] font-bold">{id}</p>
        <h2 className="font-bold mb-[10px] hover:text-SoftOrange cursor-pointer">{title}</h2>
        <p className="text-DarkGrayishBlue">{description}</p>
      </div>
    </article>
  )
}

export default Article