const BussinessLabel = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-20">
        <section className="flex w-full gap-10">
          <section className="flex flex-col w-1/2">
            <label htmlFor="business-name">Bussiness Name</label>
            <input type="text" name="business-name" />
          </section>

          <section className="flex flex-col w-1/2">
            <label htmlFor="btn-label">Button Label</label>
            <input type="text" name="btn-label" />
          </section>
        </section>
        <section className="flex flex-col w-full">
          <label htmlFor="web-url">Website URL</label>
          <input type="text" name="web-url" />
        </section>
      </div>
    </>
  );
};

export default BussinessLabel;
