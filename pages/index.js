import { Fragment } from "react";
import path from "path";
const fs = typeof window === "undefined" ? require("fs/promises") : null;

function HomePage(props) {
  const { products } = props;
  return (
    <Fragment>
      <ul>
        {props.products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
