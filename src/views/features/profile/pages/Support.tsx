const Support = () => {
  return (
    <div className="flex h-full w-full flex-col gap-5 p-6 w888:p-2">
      <div className="mb-2 flex items-center justify-start">
        <h2 className="font-philosopher text-3xl font-normal tracking-wide w888:text-2xl">
          Support
        </h2>
      </div>
      <div className="h-full w-full">
        <p className="flex flex-col justify-start gap-3 font-light">
          <span>We're here to help!</span>
          <span>
            If you encounter any issues while using our website or have
            questions, please don't hesitate to reach out to our support team.
          </span>
          <span>
            Contact Email:{" "}
            <span className="bg-glass rounded-full bg-transparent-gray px-3 py-1 text-gold">
              support@thedelphioracle.com
            </span>
          </span>
          <span>
            Our team strives to respond to all inquiries as quickly as possible.
            Most responses are provided within 24-48 hours.
          </span>
          <span>
            We're glad to have you here at The Delphi Oracle - don't hesitate to
            reach out!
          </span>
        </p>
      </div>
    </div>
  );
};

export default Support;
