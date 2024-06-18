interface Feature {
    id: number;
    icon: JSX.Element;
    title: string;
    paragraph: string;
}

const SingleFeature = ({ feature }: { feature: Feature }) => {
    const { icon, title, paragraph } = feature;
    return (
        <div className="w-full">
            <div className="wow fadeInUp" data-wow-delay=".15s">
                <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-[var(--primary-color-1)] text-[var(--primary-color-3)] bg-opacity-10">
                    {icon}
                </div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    {title}
                </h3>
                <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    {paragraph}
                </p>
            </div>
        </div>
    );
};

export default SingleFeature;