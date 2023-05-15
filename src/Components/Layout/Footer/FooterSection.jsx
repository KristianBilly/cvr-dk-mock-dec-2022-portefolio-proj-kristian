export const FooterSection = ({ columnLinks, className }) => (
  <section className='footer-section footer-links-container'>
    {columnLinks.map((paragraph) => (
      <p className={className} key={paragraph}>
        {paragraph}
      </p>
    ))}
  </section>
)
