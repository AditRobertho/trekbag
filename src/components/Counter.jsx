export default function Counter({
  numberOfItems,
  totalNumberOfItems,
}) {
  return (
    <p>
      <b>{numberOfItems}</b> / {totalNumberOfItems} items
      packed
    </p>
  );
}
