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
          <span>Hey there! We're here to help. 💫</span>
          <span>
            Stuck? Got feedback or questions? Hit us up - we've got your back!
          </span>
          <span>
            Email us at:{" "}
            <span className="rounded-full bg-main-grey px-3 py-1 text-gold">
              support@thedelphioracle.com
            </span>
          </span>
          <span>
            We usually reply within 24 - 48 hours, so hang tight while we get
            back to you.
          </span>
          <span>
            We're thrilled to have you here at The Delphi Oracle - thanks for
            being part of the magic! ✨
          </span>
          <span>
            Mystically yours,
            <br />
            The Delphi Oracle Team
          </span>
        </p>
      </div>
    </div>
  );
};

export default Support;
