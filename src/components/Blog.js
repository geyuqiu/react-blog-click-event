export default function Blog({ blogData }) {
  // Event Handler sind einfach nur Funktionen, die ich innerhalb
  // meiner Komponente definiere
  const handleItemClick = (itemId) => {
    console.log("the user clicked on item", itemId);

    // Weil der Handler innerhalb meiner Komponente definiert ist, hat er
    // Zugriff auf Props, damit ist z.B. auch möglich:
    console.log(
      "the item has the title",
      blogData.filter((post) => post.id === itemId).pop().title
    );

    // Seiteneffekte erlaubt - da nicht das Rendering beeinflussend
    // Hier also z.B.: Netzwerkrequest, holen von Post-Content aus der DB, ...
  };

  return (
    <>
      {blogData.map((post) => (
        <article>
          <header>{post.title}</header>
          <p>{post.teaser}</p>
          {/* Die Handler werden einfach per Prop an die Komponente gehängt */}
          <a href={"#" + post.id} onClick={() => handleItemClick(post.id)}>
            See more
          </a>
        </article>
      ))}
    </>
  );
}
