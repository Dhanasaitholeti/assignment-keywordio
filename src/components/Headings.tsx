const Headings = () => {
  return (
    <>
      <div className="flex items-center justify-center px-20 gap-10">
        <section className="flex flex-col w-1/2">
          <section className="flex flex-col">
            <label htmlFor="heading1">Heading 01</label>
            <input type="text" name="heading1" />
          </section>

          <section className="flex flex-col">
            <label htmlFor="heading2">Heading 02</label>
            <input type="text" name="heading2" />
          </section>
        </section>
        <section className="flex flex-col w-1/2">
          <label htmlFor="description">Description</label>
          <textarea name="description"></textarea>
        </section>
      </div>
    </>
  );
};

export default Headings;
