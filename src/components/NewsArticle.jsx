const NewsArticle = ({ title, description }) => {
  return (
    <>
      <article className="border-b-2 border-GrayishBlue py-7 last:border-none">
        <h2 className="cursor-pointer hover:text-SoftOrange text-[20px] mb-3 font-bold">{title}</h2>
        <p className="text-[15px] lg:text-[17px]">{description}</p>
      </article>
    </>
  )
}

export default NewsArticle