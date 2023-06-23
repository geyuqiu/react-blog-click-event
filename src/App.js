import Header from "./components/Header";
import Blog from "./components/Blog";
import "./styles.css";

const blogData = [
  { id: 1, title: "First Post", teaser: "Some Teaser Text" },
  { id: 2, title: "Second Post  ", teaser: "Other teaser Text" },
  { id: 3, title: "3rd Message", teaser: "More Teasers" }
];

export default function App() {
  return (
    <div>
      <Header />
      <Blog blogData={blogData} />
    </div>
  );
}
