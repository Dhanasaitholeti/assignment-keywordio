import { styles } from "../CommonStyles";

const MediaLabels = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:px-20 gap-10">
        <section className="flex flex-col lg:flex-row w-full gap-10">
          <section className={`${styles.sectionStyles} gap-2`}>
            <label htmlFor="img-landscape" className={styles.labelStyles}>
              LandScape Marketing Image(16:9)
            </label>
            <input
              type="text"
              name="img-landscape"
              placeholder="Add the URL of the image you want to use for the ad"
              className={`${styles.inputStyles} h-12`}
            />
          </section>

          <section className={`${styles.sectionStyles} gap-2`}>
            <label htmlFor="img-potrait" className={styles.labelStyles}>
              Potrait Marketing Image(4:3)
            </label>
            <input
              type="text"
              name="img-potrait"
              placeholder="Add the URL of the image you want to use for the ad"
              className={`${styles.inputStyles} h-12`}
            />
          </section>

          <section className={`${styles.sectionStyles} gap-2`}>
            <label htmlFor="img-square" className={styles.labelStyles}>
              Square Marketing Image(1:1)
            </label>
            <input
              type="text"
              name="img-square"
              placeholder="Add the URL of the image you want to use for the ad"
              className={`${styles.inputStyles} h-12`}
            />
          </section>
        </section>

        <section className="flex flex-col w-full gap-2">
          <label htmlFor="video-url" className={styles.labelStyles}>
            Video URL
          </label>
          <input
            type="text"
            name="video-url"
            placeholder="Add the URL of the video you want to use for the ad"
            className={`${styles.inputStyles} h-12`}
          />
        </section>
      </div>
    </>
  );
};

export default MediaLabels;
