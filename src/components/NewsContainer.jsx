import NewsArticle from "./NewsArticle"

const NewsContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px]">
      <h1 className="text-SoftOrange text-4xl font-bold">News</h1>
      {
        articles.map((article, index) =>
          <NewsArticle key={index} {...article} />)
      }
    </aside>
  )
}

export default NewsContainer

const articles = [
  {
    title: "Hydrogen VS Electric Cars",
    description:
      "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    description: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  }
]