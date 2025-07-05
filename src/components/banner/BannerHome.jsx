import bannerHome from "../../../public/assets/images/bannerHome.webp";

export default function BannerHome() {
  return (
    <div className="w-full my-2 lg:my-10 ">
      <img
        src={bannerHome}
        alt="Banner Home"
        className="w-full h-full object-cover"
      />
    </div>
  );
}