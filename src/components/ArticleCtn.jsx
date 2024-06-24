import Article from "./Article"
import articleImage01 from "../assets/images/image-retro-pcs.jpg"
import articleImage02 from "../assets/images/image-top-laptops.jpg"
import articleImage03 from "../assets/images/image-gaming-growth.jpg"

const ArticlesCtn = () => {
  return (
    <section className="mt-6 md:flex">
      {
        articles.map((article, index) =>
          <Article key={index} {...article} />
        )}
    </section>
  )
}

export default ArticlesCtn

const articles = [
  {
    id: '01',
    title: 'Reviving Retro PCs',
    description: 'What happens when old PCs are given modern upgrades?',
    image: articleImage01
  },
  {
    id: '02',
    title: 'Top 10 Laptops of 2022',
    description: 'Our best picks for various needs and budgets.',
    image: articleImage02
  },
  {
    id: '03',
    title: 'The Growth of Gaming',
    description: 'How the pandemic has sparked fresh opportunities.',
    image: articleImage03
  }
]