const Headings = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex">
          <label htmlFor="business-name">Bussiness Name</label>
          <input type="text" name="business-name" />

          <label htmlFor="btn-label">Button Label</label>
          <input type="text" name="btn-label" />
        </div>
        <div>
          <label htmlFor="web-url">Website URL</label>
          <input type="text" name="web-url" />
        </div>
      </div>
    </>
  );
};

export default Headings;
