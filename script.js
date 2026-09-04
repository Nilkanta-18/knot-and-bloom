function order(product, price) {
  const message = `Hi Knot & Bloom! I'd like to order the ${product} (${price}).`;

  window.open(
    'https://wa.me/9136503166?text=' + encodeURIComponent(message),
    '_blank'
  );
}
