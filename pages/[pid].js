import React from "react";

const ProductDetailPage = (props) => {
  return (
    <Fragment>
      <h1>{props.loadedProduct.title}</h1>
      <p>{props.loadedProduct.description}</p>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((p) => p.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export default ProductDetailPage;
