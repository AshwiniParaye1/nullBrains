//src/sections/TrustedBy.jsx

const TrustedBy = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <p className="text-center text-xs font-semibold text-gray-800 uppercase tracking-wider">
          TRUSTED BY TOP-LEADING COMPANIES.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        <img src="/public/disney.svg" alt="Disney+" className="h-8 md:h-10" />
        <img src="/public/google.webp" alt="Google" className="h-8 md:h-10" />
        <img src="/public/hubspot.png" alt="HubSpot" className="h-8 md:h-10" />
        <img src="/public/youtube.png" alt="YouTube" className="h-8 md:h-10" />
        <img src="/public/slck.png" alt="Slack" className="h-8 md:h-10" />
        <img src="/public/shopify.png" alt="Shopify" className="h-8 md:h-10" />
      </div>
    </div>
  );
};

export default TrustedBy;
