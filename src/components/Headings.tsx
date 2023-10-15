import { styles } from "./CommonStyles";

const Headings = () => {
  return (
    <>
      <div className="flex items-center justify-center px-20 gap-10">
        <section className={`${styles.sectionStyles} gap-10`}>
          <section className="flex flex-col gap-2">
            <label htmlFor="heading1" className={styles.labelStyles}>
              Heading 01
            </label>
            <input
              type="text"
              name="heading1"
              placeholder="Add a heading that would make users interested"
              className={`${styles.inputStyles} h-12`}
            />
          </section>

          <section className="flex flex-col gap-2">
            <label htmlFor="heading2" className={styles.labelStyles}>
              Heading 02
            </label>
            <input
              type="text"
              name="heading2"
              placeholder="Add a heading that would make users interested"
              className={`${styles.inputStyles} h-12`}
            />
          </section>
        </section>
        <section className={`${styles.sectionStyles} gap-2`}>
          <label htmlFor="description" className={styles.labelStyles}>
            Description
          </label>
          <textarea
            className={styles.inputStyles}
            rows={7}
            name="description"
            placeholder="Add primary text to help users understand more about your products,services or offers"
          ></textarea>
        </section>
      </div>
    </>
  );
};

export default Headings;
