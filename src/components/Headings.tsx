const Headings = () => {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col">
          <label htmlFor="heading1">Heading 01</label>
          <input type="text" name="heading1" />

          <label htmlFor="heading2">Heading 02</label>
          <input type="text" name="heading2" />
        </div>
        <div>
          <label htmlFor="description"></label>
          <textarea name="description" id="" cols={30} rows={10}></textarea>
        </div>
      </div>
    </>
  );
};

export default Headings;
