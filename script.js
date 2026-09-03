function order(product, price) {
  const message = `Hi Knot & Bloom! I'd like to order the ${product} (${price}).`;

  window.open(
    'https://wa.me/919999999999?text=' + encodeURIComponent(message),
    '_blank'
  );
}
