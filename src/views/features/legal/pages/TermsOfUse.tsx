import { useEffect } from "react";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";

const TermsOfUse = () => {
  useEffect(() => {
    window?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <ScrollWrapper id="scrollTermsOfUse">
      <div className="w888:px-2 flex flex-col items-start justify-center gap-4 pb-3 text-white">
        <div className="w888:pl-[36px] mt-2 flex w-full items-start pl-[51px]">
          <h1 className="font-philosopher text-gold w888:text-2xl text-center text-3xl">
            Terms and Conditions
          </h1>
        </div>
        <div className="zmd:gap-2 mt-2 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            {" "}
          </h2>
          <div className="flex flex-col gap-2.5">
            <p className="text-base font-light">
              Welcome to The Delphi Oracle! These Terms and Conditions ("Terms")
              govern your use of our app and services. By accessing or using our
              app, you agree to these Terms. Please read them carefully.
            </p>
          </div>
        </div>
        <div className="zmd:gap-2 mt-2 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            1.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">Acceptance of Terms</h1>
            <p className="text-base font-light">
              By using The Delphi Oracle app, you acknowledge that you have
              read, understood, and agreed to be bound by these Terms, including
              our Privacy Policy. If you do not agree to these Terms, you must
              discontinue use of our app immediately.
            </p>
          </div>
        </div>
        <div className="zmd:gap-2 mt-5 flex w-full items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            2.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">Data Collection and Use</h1>
            <p className="text-base font-light">
              By using The Delphi Oracle, you agree to the collection, use, and
              storage of your personal information in accordance with our
              Privacy Policy. We collect personal data such as name, birth
              details, and usage data to provide personalized astrology readings
              and improve our services. For more information, please refer to
              our Privacy Policy.
              <br />
              <span className="font-medium">Your Rights Under GDPR</span>
              <br />
              As a user, if you reside in the European Economic Area (EEA), you
              are entitled to the following rights regarding your personal data:
              <br />
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-medium">Right to Access:</span>
                  You can request access to the personal information we hold
                  about you.
                </li>
                <li>
                  <span className="font-medium">Right to Correction:</span> You
                  can request correction of any inaccurate or incomplete data.
                </li>
                <li>
                  <span className="font-medium">
                    Right to Deletion (Right to be Forgotten):
                  </span>{" "}
                  You can request that we delete your personal data when it is
                  no longer necessary for the purposes for which it was
                  collected or if you withdraw your consent.
                </li>
                <li>
                  <span className="font-medium">
                    Right to Data Portability:
                  </span>{" "}
                  You can request a copy of your personal data in a commonly
                  used format to transfer to another service.
                </li>
                <li>
                  <span className="font-medium">
                    Right to Restrict Processing:
                  </span>{" "}
                  You have the right to request that we restrict the processing
                  of your personal data in certain circumstances.
                </li>
                <li>
                  <span className="font-medium">Right to Object:</span> You may
                  object to the processing of your personal data for direct
                  marketing purposes or in specific situations where our
                  processing relies on legitimate interests.
                </li>
                <li>
                  <span className="font-medium">
                    Rights Related to Automated Decision-Making and Profiling::
                  </span>{" "}
                  You are entitled to protection from decisions made solely
                  based on automated processes, including profiling, which
                  produce legal or similarly significant effects on you.
                </li>
              </ul>
              <br />
              To exercise any of these rights, please contact us at:
              admin@thedelphioracle.com
            </p>
          </div>
        </div>
        <div className="zmd:gap-2 mt-2 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            3.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">Use of the App</h1>
            <p className="text-base font-light">
              The Delphi Oracle provides personalized astrology readings,
              including natal chart interpretations and synastry reports. Use of
              the app is intended for individuals aged 16 and older. By
              accessing the app, you confirm that you meet this age requirement.
              You agree to use the app only for its intended purposes and in
              compliance with all applicable laws and regulations. Unauthorized
              use of the app may result in termination of your access.
            </p>
          </div>
        </div>
        <div className="zmd:gap-2 mt-2 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            4.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">User Accounts</h1>
            <p className="text-base font-light">
              To access certain features of the app, you must create an account
              using your email or Google login. You agree to provide accurate,
              current, and complete information when creating your account. You
              are responsible for maintaining the confidentiality of your
              account credentials and all activities under your account. We
              reserve the right to suspend or terminate your account if we
              believe your use of the app violates these Terms or compromises
              its security.
            </p>
          </div>
        </div>

        <div className="zmd:gap-2 mt-2 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            5.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">Payments and Credits</h1>
            <p className="text-base font-light">
              The Delphi Oracle operates on a freemium model. While some
              features of the app are free, you may purchase additional credits
              to access premium features such as detailed readings or synastry
              reports. Payments are processed securely through third-party
              services like Stripe. By making a purchase, you agree to the terms
              of service of these third-party providers.
              <br />
              All purchases are final and non-refundable unless otherwise
              required by applicable law.
            </p>
          </div>
        </div>
        <div className="zmd:gap-2 mt-2 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            6.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">
              Prohibited Content and Conduct
            </h1>
            <p className="text-base font-light">
              You agree not to misuse the app's features, including astrology
              readings, synastry reports, and personalized guidance.
              Specifically, you may not:
              <br />
              <ul className="list-disc pl-6">
                <li>
                  Use synastry reports or natal charts to harass, defame, or
                  spread false information about others.
                </li>
                <li>
                  Share private information from your own or someone else's
                  reading without their consent.
                </li>
                <li>
                  Use the app to solicit money, gifts, or personal favors.
                </li>
                <li>
                  Interfere with or disrupt the technical operations of the app
                  through malicious activity such as uploading viruses, malware,
                  or engaging in fraudulent transactions.
                </li>
              </ul>
              <br />
              Violating these terms may result in the suspension or termination
              of your account.
            </p>
          </div>
        </div>
        <div className="zmd:gap-2 mt-2 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            7.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">Indemnification</h1>
            <p className="text-base font-light">
              You agree to indemnify, defend, and hold harmless The Delphi
              Oracle, its affiliates, and their respective officers, directors,
              employees, and agents from and against any claims, liabilities,
              damages, losses, and expenses, including legal fees, arising from
              your use of the app, your breach of these Terms, or your violation
              of any rights of a third party.
              <br />
              We reserve the right to assume the exclusive defense of any matter
              subject to indemnification, and you agree to cooperate with our
              defense.
            </p>
          </div>
        </div>
        <div className="zmd:gap-2 mt-2 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            8.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">Intellectual Property</h1>
            <p className="text-base font-light">
              All content available on The Delphi Oracle app, including text,
              graphics, logos, and software, is the property of The Delphi
              Oracle or its licensors and is protected by intellectual property
              laws. You are granted a limited, non-exclusive, non-transferable
              license to use the app for personal, non-commercial purposes.
              <br />
              You may not modify, copy, distribute, or create derivative works
              from any content on the app without our prior written consent.
            </p>
          </div>
        </div>
        <div className="zmd:gap-2 mt-2 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            9.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">Limitation of Liability</h1>
            <p className="text-base font-light">
              The Delphi Oracle provides astrology readings for informational
              and entertainment purposes only. We do not offer professional
              advice (legal, medical, financial, etc.). You use the app at your
              own risk.
              <br />
              To the maximum extent permitted by law, The Delphi Oracle and its
              affiliates, directors, officers, and employees will not be liable
              for any indirect, incidental, punitive, or consequential damages
              arising from your use of the app.
            </p>
          </div>
        </div>
        <div className="zmd:gap-2 mt-2 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            10.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">Security</h1>
            <p className="text-base font-light">
              We take reasonable measures to secure your personal data,
              including encryption and secure storage via third-party providers.
              However, we cannot guarantee absolute security. You are
              responsible for safeguarding your account login information and
              ensuring that your use of the app does not expose your data to
              risks such as malware or unauthorized access. In the event of a
              data breach, we will notify you and the relevant supervisory
              authority within 72 hours, in accordance with our obligations
              under the GDPR.
            </p>
          </div>
        </div>
        <div className="zmd:gap-2 mt-2 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            11.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">User-Generated Content</h1>
            <p className="text-base font-light">
              By submitting content to the app, you grant The Delphi Oracle a
              worldwide, non-exclusive, royalty-free license to use, modify, and
              distribute your content for the purpose of providing services
              through the app. You represent that any content you provide is
              your original work and does not infringe on the rights of any
              third party.
            </p>
          </div>
        </div>
        <div className="zmd:gap-2 mt-2 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            12.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">
              Interaction with the Oracle and Credits Usage
            </h1>
            <p className="text-base font-light">
              Upon sign-up, users receive a set number of free credits to use
              for individual readings or synastry reports. Additional credits
              can be earned through watching ads, inviting friends, or
              purchasing top-up packages. Users can export their chats once for
              free, but subsequent exports will require watching an ad or
              purchasing credits. Once all credits are used, users must either
              purchase additional credits or earn them by engaging with referral
              programs or ads.
            </p>
          </div>
        </div>
        <div className="zmd:gap-2 mt-2 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            13.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">Changes to the Terms</h1>
            <p className="text-base font-light">
              We may update these Terms from time to time to reflect changes in
              our practices or legal obligations. If any changes are made, we
              will notify you through the app or via email. Your continued use
              of the app after such changes constitutes your acceptance of the
              new Terms.
            </p>
          </div>
        </div>
        <div className="zmd:gap-2 mt-2 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            14.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">Assignment</h1>
            <p className="text-base font-light">
              We may assign or transfer these Terms to another entity in
              connection with a merger, acquisition, or sale. You may not
              transfer or assign these Terms to any other party.
            </p>
          </div>
        </div>
        <div className="zmd:gap-2 mt-2 flex items-start justify-start gap-8">
          <h2 className="w888:max-w-[7px] w-full max-w-[25px] text-lg font-medium">
            15.
          </h2>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-lg font-medium">Entire Agreement</h1>
            <p className="text-base font-light">
              These Terms constitute the entire agreement between you and The
              Delphi Oracle regarding your use of the app and supersede all
              prior agreements. Please refer to our Privacy Policy for
              additional details on how we collect, use, and store your personal
              information.
              <br />
              Contact Information: If you have any questions regarding these
              Terms, please contact us at: admin@thedelphioracle.com
            </p>
          </div>
        </div>
      </div>
    </ScrollWrapper>
  );
};

export default TermsOfUse;
