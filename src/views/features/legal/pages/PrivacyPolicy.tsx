import { useEffect } from "react";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";

const PrivacyPolicy = () => {
  useEffect(() => {
    window?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <ScrollWrapper id="scrollPrivacyPolicy">
      <div className="w888:px-2 flex flex-col items-start justify-center gap-4 pb-3 text-white">
        <div className="w888:pl-[36px] mt-2 flex w-full items-start pl-[53px]">
          <h1 className="font-philosopher text-gold w888:text-2xl text-center text-3xl">
            Privacy policy
          </h1>
        </div>
        <div className="zmd:gap-2 mt-2 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            1.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">Introduction</h1>
            <p className="text-base font-light">
              At The Delphi Oracle, we are committed to protecting your privacy
              and ensuring that your personal information is handled in a safe
              and responsible manner. This Privacy Policy outlines how we
              collect, use, and protect the information you provide while using
              our services. By using our app or website, you agree to the terms
              of this policy.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            2.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">Information We Collect</h1>
            <p className="text-base font-light">
              We collect the following information directly from users when they
              interact with our app or website:
              <br />
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-medium">Personal Information:</span>{" "}
                  Name, Email, Date of Birth, Time of Birth, Place of Birth,
                  Gender.
                </li>
                <li>
                  <span className="font-medium">Usage Data:</span> Interaction
                  with the app, including chat history with our oracle, credits
                  used, and other activities related to the features of our app.
                </li>
                <li>
                  <span className="font-medium">
                    Device and Technical Data:
                  </span>{" "}
                  Information about your device, such as IP address, device
                  type, and browser settings, for security and analytical
                  purposes.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            3.
          </h2>
          <div className="flex w-full flex-col gap-2.5">
            <h1 className="text-lg font-medium">How We Use Your Information</h1>
            <p className="text-base font-light">
              We use the information collected to:
              <br />
              <ul className="list-disc pl-6">
                <li>
                  Provide accurate and personalized astrology readings and
                  synastry reports.
                </li>
                <li>
                  Improve user experience by tracking app usage and preferences
                  through Google Analytics.
                </li>
                <li>
                  Process payments securely via Stripe when users top up credits
                  or purchase services.
                </li>
                <li>
                  Communicate with users regarding account information, updates,
                  or new features.
                </li>
                <li>
                  Provide credits for referrals, watching ads, or other
                  promotional activities.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            4.
          </h2>
          <div className="flex w-full flex-col gap-2.5">
            <h1 className="text-lg font-medium">
              How Your Information is Stored and Protected
            </h1>
            <p className="text-base font-light">
              We use AWS for secure data storage and ensure that all personal
              data is encrypted where applicable. We take security seriously and
              use industry-standard practices to safeguard your data. However,
              no method of transmission over the Internet or method of
              electronic storage is 100% secure.
              <br />
              We do not have access to the specific content of your
              conversations with our oracle, as this information remains private
              and is not stored beyond its intended purpose.
              <br />
              In the unlikely event of a data breach that compromises your
              personal data, we will notify you and the relevant supervisory
              authority within 72 hours, in compliance with GDPR requirements.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            5.
          </h2>
          <div className="flex w-full flex-col gap-2.5">
            <h1 className="text-lg font-medium">
              Sharing Your Information with Third Parties
            </h1>
            <p className="text-base font-light">
              We only share your personal data with trusted third parties when
              necessary:
              <br />
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-medium">Stripe:</span> For processing
                  payments securely.{" "}
                  <a
                    href="https://stripe.com/privacy"
                    target="_blank"
                    className="underline"
                  >
                    Stripe Privacy Policy
                  </a>
                </li>
                <li>
                  <span className="font-medium">Google Analytics:</span> For
                  tracking app usage and improving services.{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    className="underline"
                  >
                    Google Privacy Policy
                  </a>
                </li>
                <li>
                  <span className="font-medium">Legal Compliance:</span> If
                  required by law, to comply with legal processes or protect the
                  rights, property, or safety of our users or the public.
                </li>
              </ul>
              <br />
              We do not sell or rent your personal information to third parties.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            6.
          </h2>
          <div className="flex w-full flex-col gap-2.5">
            <h1 className="text-lg font-medium">User Rights</h1>
            <p className="text-base font-light">
              As a user, you have the following rights concerning your personal
              data:
              <br />
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-medium">Access:</span> You can request
                  access to the personal information we hold about you.
                </li>
                <li>
                  <span className="font-medium">Deletion:</span> You can delete
                  your account and all associated data at any time through the
                  app or by contacting us at admin@thedelphioracle.com.
                </li>
                <li>
                  <span className="font-medium">Export:</span> You can request
                  the export of your readings in PDF format. We do not provide
                  exports in machine-readable formats.
                </li>
              </ul>
              <br />
              As a user, if you reside in the European Economic Area (EEA), you
              are entitled to the following rights under the General Data
              Protection Regulation (GDPR):
              <br />
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-medium">Right to Access:</span>
                  You have the right to request access to the personal
                  information we hold about you and receive a copy of this
                  information.
                </li>
                <li>
                  <span className="font-medium">Right to Correction:</span> You
                  can request that we correct any inaccurate or incomplete data.
                </li>
                <li>
                  <span className="font-medium">
                    Right to Deletion (Right to be Forgotten):
                  </span>{" "}
                  You can request that we delete your personal information in
                  certain circumstances, for example, if it is no longer
                  necessary for the purposes for which it was collected, or you
                  withdraw your consent.
                </li>
                <li>
                  <span className="font-medium">
                    Right to Data Portability:
                  </span>{" "}
                  You may request that your personal data be provided in a
                  machine-readable format so that it can be transferred to
                  another service.
                </li>
                <li>
                  <span className="font-medium">
                    Right to Restrict Processing:
                  </span>{" "}
                  In certain cases, you can request that we restrict the
                  processing of your data (e.g., when you contest the accuracy
                  of the data or the legality of processing).
                </li>
                <li>
                  <span className="font-medium">Right to Object:</span> You can
                  object to the processing of your personal data for direct
                  marketing or other specific reasons.
                </li>
                <li>
                  <span className="font-medium">
                    Rights Related to Automated Decision-Making:
                  </span>{" "}
                  You have the right not to be subject to decisions based solely
                  on automated processing (including profiling) if it has legal
                  or similarly significant effects on you.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-3 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            7.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">
              Cookies and Tracking Technologies
            </h1>
            <p className="text-base font-light">
              Our app uses cookies and similar technologies to improve user
              experience, such as remembering user preferences and gathering
              analytics. You can adjust your browser settings to reject cookies
              if preferred, but this may limit certain functionalities of the
              app.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-3 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            8.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">
              International Data Transfers
            </h1>
            <p className="text-base font-light">
              Your data may be processed or stored in countries outside of your
              own, including the United States and other countries where our
              service providers are located. If you are a resident of the
              European Economic Area (EEA) or the United Kingdom, we ensure that
              your personal data is transferred with appropriate safeguards in
              place, including the use of Standard Contractual Clauses as
              required under GDPR.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-3 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            9.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">Social Logins</h1>
            <p className="text-base font-light">
              The Delphi Oracle allows users to log in either through Google or
              by using the email they provide during registration. No other
              social login options are available. We collect the necessary
              information from Google (such as name and email) to facilitate
              account creation and login. Please refer to Google’s privacy
              policy for details on how they handle your data.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-3 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            10.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">Third-Party Websites</h1>
            <p className="text-base font-light">
              Our app may contain links to third-party websites, services, or
              advertisements. We are not responsible for the privacy practices
              of these external websites, and we encourage users to review their
              privacy policies before providing personal information.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-3 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            11.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">Retention of Data</h1>
            <p className="text-base font-light">
              We retain your personal data only as long as necessary to fulfill
              the purposes for which it was collected or as required by law. If
              you delete your account, we will delete your personal data,
              although some information may be retained for legal compliance,
              fraud prevention, or to fulfill other legal obligations.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-3 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            12.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">Age Restrictions</h1>
            <p className="text-base font-light">
              The Delphi Oracle is not intended for use by individuals under the
              age of 16. We do not knowingly collect personal data from children
              under 16 without verifiable parental consent. If we become aware
              that we have collected personal data from a child without such
              consent, we will delete that data.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-3 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            13.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">Do-Not-Track (DNT) Features</h1>
            <p className="text-base font-light">
              Currently, we do not respond to Do-Not-Track signals from browsers
              or other mechanisms. If a standard for online tracking is adopted,
              we will update this privacy policy accordingly.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-3 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            14.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">
              California Residents' Rights
            </h1>
            <p className="text-base font-light">
              If you are a California resident, you are entitled to specific
              rights under the California Consumer Privacy Act (CCPA), including
              the right to request access to, deletion of, or non-discrimination
              regarding your personal information. For more information, please
              contact us at admin@thedelphioracle.com.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-3 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            15.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">
              Changes to This Privacy Policy
            </h1>
            <p className="text-base font-light">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for legal reasons. If any changes are
              made, we will notify you through a notification on the app or via
              email. Your continued use of the app after such changes will
              constitute your acceptance of the new terms.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-3 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            16.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">Contact Us</h1>
            <p className="text-base font-light">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at admin@thedelphioracle.com.
            </p>
          </div>
        </div>
      </div>
    </ScrollWrapper>
  );
};

export default PrivacyPolicy;
