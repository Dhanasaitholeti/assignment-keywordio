import { styles } from "../CommonStyles";

const BussinessLabel = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:px-20 gap-10">
        <section className="flex flex-col md:flex-row w-full gap-10">
          <section className={`${styles.sectionStyles} gap-2`}>
            <label htmlFor="business-name" className={styles.labelStyles}>
              Bussiness Name
            </label>
            <input
              type="text"
              name="business-name"
              placeholder="Add your bussiness name"
              className={`${styles.inputStyles} h-12`}
            />
          </section>

          <section className={`${styles.sectionStyles} gap-2`}>
            <label htmlFor="btn-label" className={styles.labelStyles}>
              Button Label
            </label>
            <input
              type="text"
              name="btn-label"
              placeholder="Select a label that best suits you ad"
              className={`${styles.inputStyles} h-12`}
            />
          </section>
        </section>
        <section className="flex flex-col w-full gap-2">
          <label htmlFor="web-url" className={styles.labelStyles}>
            Website URL
          </label>
          <input
            type="text"
            name="web-url"
            placeholder="Add the URL of the landing page you want to redirect users to"
            className={`${styles.inputStyles} h-12`}
          />
        </section>
      </div>
    </>
  );
};

export default BussinessLabel;
