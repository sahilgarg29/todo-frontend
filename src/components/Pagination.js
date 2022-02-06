const Pagination = ({ page, setPage }) => {
  return (
    <div>
      {page > 1 ? (
        <button className="prev" onClick={() => setPage(page - 1)}>
          Prev
        </button>
      ) : (
        <button className="prev" onClick={() => setPage(page - 1)} disabled>
          Prev
        </button>
      )}

      <button className="next" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
