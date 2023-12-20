import { Fragment } from "react";
function HomePage(props) {
  const { products } = props;
  return (
    <Fragment>
      {props.products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: [{ id: "p1", title: "Product1" }],
    },
  };
}

export default HomePage;
