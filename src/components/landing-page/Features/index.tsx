import SectionTitle from "@/components/ui/sectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
    return (
        <>
            <section
                id="features"
                className="py-16 md:py-20 lg:py-28"
            >
                <div className="container">
                    <SectionTitle
                        title="Main Features"
                        paragraph="Open Path Finder provide some intresting features to the beginner developers to learn something new about tech."
                        center
                    />

                    <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                        {featuresData.map((feature: any) => (
                            <SingleFeature key={feature.id} feature={feature} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;