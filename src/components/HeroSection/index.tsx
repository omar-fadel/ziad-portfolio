import Image from 'next/image';

interface HeroSectionProps {
  header: string;
  subTitle: string;
  imageName: string;
  imageWidth?: number;
  imageHeight?: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  header,
  imageName,
  subTitle,
  imageHeight = 1659,
  imageWidth = 4083,
}) => {
  return (
    <section className="flex flex-col gap-12">
      <h4 className="text-center">{header}</h4>
      <p className="text-center">{subTitle}</p>
      <Image
        src={`/images/${imageName}.png`}
        height={imageHeight}
        width={imageWidth}
        alt={imageName}
      />
    </section>
  );
};

export default HeroSection;
