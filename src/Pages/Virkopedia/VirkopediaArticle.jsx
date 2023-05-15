export const VirkopediaArticle = ({ heading, paragraphs }) => (
  <article>
    <h3>{heading}</h3>
    {paragraphs.map((paragraph) => (
      <p key={paragraph}>{paragraph}</p>
    ))}
  </article>
)
