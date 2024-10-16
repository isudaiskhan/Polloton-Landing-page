import React, { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import footerlogo from '../Assets/Vector.png';
import { AnimatePresence, motion } from 'framer-motion';
import { FaXTwitter } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";

const Footer = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalHeading, setModalHeading] = useState('');

  const modalRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openModal = (heading, content) => {
    setModalHeading(heading);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
    setModalHeading('');
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  const initialXLeft = windowSize.width >= 640 ? -200 : -100;
  const initialXRight = windowSize.width >= 640 ? 200 : 100;

  const initialGreen = {
    x: initialXLeft,
    opacity: 0,
  };

  const initialRed = {
    x: initialXRight,
    opacity: 0,
  };

  return (
    <>
      <div className='container py-8 mx-auto mt-20 md:px-10 px-6 text-gray-300 overflow-hidden'>
        <div className='flex flex-wrap justify-center gap-6'>
          <motion.div
            initial={initialGreen}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1
            }}
            className='w-full lg:w-[30%] md:w-2/5'
          >
            <div className='space-y-3 mt-16'>
              <img src={footerlogo} alt='logo' className='sm:w-60 w-40' />
            </div>
          </motion.div>

          <div className='w-full lg:w-1/5 md:w-2/5'>
            <motion.div
              initial={initialGreen}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1
              }}
              className='space-y-3 mt-16'
            >
              <ul>
                <li className='py-2 cursor-pointer text-white hover:tracking-widest duration-500'
                  onClick={() => openModal("Terms of Service", `
                    <b class="mt-2">1. Acceptance of Terms:</b> <p> By accessing or using our Platform or Services, you
                      acknowledge that you have read, understood, and agree to be bound by and
                      adhere to these Terms and all Policies and Terms incorporated by reference. If
                      you do not agree to these Terms, do not access or use our Platform or Services,
                      delete our applications and promptly exit our websites.</p>

                      <b class="block mt-4"> 2. Agreement to Binding Arbitration:</b><p> By accessing the Platform and using the
                      Services, you irrevocably agree that all disputes between you and Company that
                      in any way relate to these Terms or your use of the Platform or Services will be
                      resolved by BINDING ARBITRATION. ACCORDINGLY, YOU EXPRESSLY
                      WAIVE ANY AND ALL RIGHTS TO GO TO COURT (INCLUDING IN A CLASS
                      ACTION PROCEEDING) to assert or defend your rights under these Terms
                      (except for matters that may be taken to small claims court). Your rights will be
                      determined by a NEUTRAL ARBITRATOR and NOT a judge or jury, and your
                      claims cannot be brought as a class action. Please review the Section below
                      entitled Dispute Resolution; Arbitration Agreement for the details regarding your
                      agreement to arbitrate any disputes with Company. All claims must be brought
                      within one year.</p>

                      <b class="block mt-4"> 3. The Platform: </b> <p> The Platform or Services enable visitors (a) to create profiles and
                      polls (“Authors”), (b) to vote on and engage with polls (“Voters”); (c) to raise tips
                      and obtain sponsorships for Authors (“Earners”); (d) to raise funds and solicit
                      donations to support the organization and/or mission of appropriately qualified
                      charities, individuals and other entities in conjunction with said polls (“Causes”);
                      (e) to tip or sponsor Authors, and provide funds or make donations to registered
                      Causes (“Supporters”). Supporters interact directly with Earners and Fundraisers

                      through separate Services Agreements. All visitors using any of our Services are
                      collectively referred to as “Users”. </p>

                      <b class="block mt-4"> 4. The Role of Company: </b> <p> The Platform is offered only to provide technology to
                      allow Authors, Voters, Earners, Causes and Supporters or other Users to
                      connect. Company’s role is expressly limited to making the Platform available
                      and maintaining Services for Authors, Voters, Earners, Causes, Supporters and
                      Users. We are a Platform and not an agent, consultant, professional fundraiser,
                      broker, financial institution, charity or fiduciary for any Author, Voter, Earner,
                      Cause, Supporter or User for any purpose. We are not responsible for polls,
                      fundraising, sponsorships, sale of items offered by Users and do not control the
                      information provided by Users. We are not responsible for any content posted by
                      any Author, Voter, Earner, Cause, Supporter or other User, including the
                      accuracy of any description or the accuracy, or reliability or timeliness of any
                      information or content provided by Authors, Voters, Earners, Causes, Supporters
                      or other Users 
                      Company has no control over the conduct of or any information provided by any
                      Author, Voter, Earner, Cause, Supporter or other User and expressly disclaims all
                      liability to the fullest extent permitted by law, as more specifically described
                      below. We are not responsible for and do not endorse any Author, Voter, Earner,
                      Cause, Supporter or other User and do not guarantee or warrant, expressly or
                      impliedly, that any information provided through the Services is accurate or how
                      the funds raised by any User will be used.
                      Company is not a payment processor, money services business or other financial
                      institution. Payments made by or received from a User of the Platform or
                      Services are processed using one or more third-party payment processors
                      (collectively “Payment Processor”). All Users acknowledge and agree that the
                      use of Payment Processors is essential to the Services and that we exchange
                      information with Payment Processors to facilitate the Services provided.
                      Company does not engage in any solicitation activities on behalf of any
                      individual, entity, organization, or charity.
                      Company does not intend to and does not post information to provide financial,
                      legal, tax or other professional advice. Before making any payment to any User
                      through the Services, you should consult your own financial, legal, tax or other
                      professional advisor as you deem appropriate. Users acknowledge that all
                      information and content they access is at their own risk.
                      Company may but is not obligated to provide intermediary services to assist
                      Users in resolving disputes between them and related to the use of our Platform
                      or Services with the agreement of all parties. In the event Company elects, in its
                      sole discretion, to provide such services, then our decision is final and binding on
                      all parties and cannot be appealed, challenged or reversed.</p>
                      <b class="block mt-4"> 5. Eligibility: </b> <p>  You must be at least 13 years old to use our Services. If you are
                      under 18, you may use our platform only with the involvement and explicit
                      permission of a parent or guardian. By agreeing to these Terms, you represent
                      and warrant that you are at least 13 years old and have the right, authority, and
                      capacity to enter into these Terms.</p>
                      <b class="block mt-4"> 6. Your Account: </b> <p> To access certain features of our Services, e.g., to create or vote
                      on polls, contribute content, raise or provide funds or donations, you must create
                      an account. You agree to provide accurate, complete, and current information
                      during the registration process and to update such information to keep it
                      accurate, complete, and current. Company can rely on the accuracy of the
                      information users provide, and we have the right, but not the obligation, to verify
                      or validate such information.
                      Verified Accounts: Earners and Causes can provide us with enhanced
                      information about their IRS status and their organization to earn a “Verified
                      Account” status once we have verified their information. We use our best efforts
                      in this process, but we do not guarantee or warrant the legitimacy of the Earner
                      or Cause or their status when it is given a Verified Account status.
                      Account Access: You are responsible for maintaining the confidentiality of your
                      account and password and for restricting access to your computer or device. You
                      agree to accept responsibility for all activities that occur under your account or
                      password, and to notify Company immediately of any unauthorized use of your
                      account. We are not liable for any loss or damage arising from your failure to
                      protect your account information.</p>
                      <b class="block mt-4"> 7. Responsibilities of Earners and Causes:</b>
                      Earners and Causes warrant that: <p> 
                      All information provided in connection with their use of the Services and with
                      respect to raising funds is accurate, current and complete and not likely to
                      deceive reasonable Supporters or other Users;
                      All payments received through the use of the Services will be used only as
                      described in the content posted on the Platform or otherwise provided to
                      Supporters;
                      If you are not the beneficiary of the poll or fundraiser you organize, you agree
                      to deliver funds to the ultimate beneficiary directly and as soon as possible.
                      You agree to fully cooperate with any request we make for evidence we deem
                      necessary to verify your compliance with these Terms;
                      You will promptly correct any errors or omissions in posted information;

                      Supporter information received will be used in accordance with the Causes
                      publicly posted privacy policy;
                      You will not infringe upon the rights of others;
                      You will abide by the Community Guidelines set forth below;
                      You will comply with all applicable laws and financial reporting obligations and
                      will provide Company and any Supporter with all information to establish such
                      compliance;
                      Company may use any information provided by youband share it with any
                      Supporter, any regulator, law enforcement or others in connection with any
                      investigation of you;
                      If you provide information claiming any tax-exempt status, your activity is legal
                      under all applicable laws and regulations and your organization is a tax-
                      exempt organization in good standing with the IRS; 
                      For any payments received by you, it is your sole responsibility to determine
                      what, if any, taxes apply to payments received; it is your sole responsibility to
                      assess, collect, report and remit the correct tax, if any, to the appropriate
                      taxing authority.</p>


                      <b class="block mt-4">8. Responsibilities of Supporters:</b>
                      <p> All payments made through the Services are at the Supporter’s own risk. It is the
                      Supporter’s responsibility to investigate the Earner or Cause and to understand
                      how your payments will be used. Company is not responsible for any offers,
                      promises, or promotions made by any Earner or Cause. We are not responsible
                      for the accuracy of the information that Earners or Causes supply and do not
                      guarantee that payments Supporters make will be used in accordance with
                      promises made or implied by Earners or Causes or are compliant with applicable
                      law. 
                      If a Supporter believes that an Earner or Cause is not raising or using funds for
                      their stated purpose, please contact us at support@polloton.com.
                      Company does not make any representation about the tax deductibility or
                      treatment of payments made by Supporters. We do not make any representation
                      about the tax status or charitable status of any Earner or Cause, including those
                      with Verified Accounts. Earners or Causes, and not Company, are solely
                      responsible for providing Supporters with receipts acknowledging receipt of funds
                      from the Supporter.
                      Information provided by Supporters through the Services is shared with the
                      Earner or Cause to whom a payment is made and may be used by such Earner

                      or Cause in accordance with their own respective privacy policies. Company is
                      not responsible for any Earner’s or Cause’s use of a Supporter’s information. 
                      Supporters are responsible to determine what, if any, taxes or tax exemptions
                      apply to payments made to Earners or Causes. If a Supporter purchases items
                      from an Earner or Cause, the Supporter is responsible for payment of all
                      applicable sales and use taxes.‍</p>
                      <b class="block mt-4"> 9. Fees: </b> <p> Creating an account, profile, and polls on Company is free. Company also
                      does not charge fees on donations paid directly to accredited non-profit
                      organizations. We aspire to fund our operations with voluntary tips from our users
                      and by collecting fees on payments you receive directly through your activity on
                      Company, including but not limited to tips and sponsorships. However, if you are
                      successfully raising money with Company, our payment partners collect fees on
                      ALL payments. Our partners’ fees may vary slightly based on your location.
                      Each payment provider is its own company, and Company isn’t responsible for its
                      performance. You are responsible for paying any additional fees or taxes
                      associated with your use of our Platform or Services. Company is partnered
                      with Stripe for payment processing (“Payment Processor”). When you use our
                      Services, you are also agreeing to the Payment Processors’ Terms of Service.</p>
                      <b class="block mt-4"> 10.  Taxes: </b> <p> Payments for donations, tips and service fees made by Users or received
                      from Users through the Platform do not include any foreign, federal, state or local
                      sales, use or other similar taxes, however designated, levied against the sale,
                      licensing, delivery or use of the Platform or Services. You shall not be liable for
                      any taxes based on Company’s net income; however, you agree to pay, or
                      reimburse, Company for all other sales and income taxes related to payments
                      you made or received through the Platform or Services. When Company has the
                      legal obligation to collect such taxes, the appropriate amount shall be paid by you
                      unless you provide Company with a valid tax exemption certificate authorized by
                      the appropriate taxing authority. You agree to promptly notify us of any
                      amendment or revocation of such certificate and will hold Company harmless
                      from and against any taxes or other monies resulting from the failure to hold a
                      certificate recognized as valid by the appropriate tax authority.</p>

                      <b class="block mt-4"> 11.  Payments: </b> <p>  Payment Processor provides all financial services for payments
                      made to through the Platform. Payment Processor accepts credit and debit cards
                      issued by U.S. banks and ACH payments. If a credit card account is being used
                      for a transaction, Payment Processor may obtain preapproval for an amount up
                      to the amount of the payment. If you enroll to make recurring payments
                      automatically, all charges and fees will be billed to the credit card you designate
                      during the setup process. If you want to designate a different credit card or if
                      there is a change in your credit card, you must change your information on the
                      Platform online. This may temporarily delay your ability to make payments
                      through the Platform while we verify your new payment information. Payment
                      Processor will use information received in connection with payments made

                      through the Platform in accordance with its privacy policy available at
                      https://stripe.com/privacy.
                      You represent and warrant that if you are making payments through the Platform
                      (i) any credit card, debit card, or bank account information you supply is true,
                      correct and complete, (ii) charges incurred by you will be honored by your
                      credit/debit card company or bank, (iii) you will pay the charges incurred by you
                      in the amounts posted, including any applicable taxes, and (iv) you are the
                      person in whose name the card was issued and you are authorized to make a
                      purchase or other transaction with the relevant card and card information.
                      In connection with payments made through the Platform, you shall:
                      Review and clearly accept the agreement to be entered into with Payment
                      Processor (the “Payment Processor Agreement”), including without limitation
                      all updated versions of the Payment Processor Agreement, which agreement
                      makes clear that Payment Processor shall make such payments in
                      accordance with such agreement; 
                      Not use the Services in violation of the Payment Processor Agreement or for
                      any activity expressly prohibited by Payment Processor; 
                      Comply with the Payment Processor Agreement and all guidelines and
                      requirements established by Payment Processor or its affiliates or banks; 
                      Shall not take or fail to take any action that may cause Payment Processor or
                      its affiliates or banks to violate any applicable law;
                      Shall not access, use or disclose any information except to the extent
                      necessary for you to access and use the services provided by Payment
                      Processor; 
                      Only make electronic payments and funds transfers to and from a prepaid
                      account maintained with Payment Processor and represented by a virtual
                      bank account number (if applicable) for business purposes;
                      Provide all information necessary to enable Payment Processor to determine
                      your eligibility to receive services and make services available to you and
                      ensure that such information will at all times be complete and accurate; and 
                      Authorize us to receive on your behalf any notices or forms provided by
                      Payment Processor.

                      Refunds: All transactions and payments between Supporters, Earners, Causes,
                      and Payment Processors made on the Platform (“Third Party Payments”) are the
                      sole responsibility of the respective payer and payee. Earners, Causes, and

                      Payment Processors are solely responsible for determining when and whether to
                      issue refunds at their sole discretion. Company is not responsible for Third Party
                      Payments, related refunds, or any of the associated costs. Payments of tips and
                      fees made directly to Company are final and non-refundable; Company may
                      determining at its sole discretion when and whether to issue voluntary refunds.</p>

                      <b class="block mt-4"> 12. Privacy: </b> <p> Your privacy is important to us. Company&#39;s collection and use of
                      personal information in connection with the Services are described in our Privacy
                      Policy, which is incorporated by reference into these Terms. Our Privacy Policy
                      explains how we collect, use, and share your personal information. By using our
                      Services, you agree to our collection, use, and sharing of your personal
                      information as described in our Privacy Policy.</p>

                      <b class="block mt-4"> 13. User Content: </b><p> “User Content” is any comments, ideas, suggestions, information,
                      files, videos, images or other materials a User provides to us, uploads, posts,
                      publishes, displays, transmits or otherwise uses (hereinafter, “Uploads”) on the
                      Platform. You agree that you are solely responsible for the User Content you
                      Upload on our Platform, the accuracy of the User Content, and it’s compliance
                      with all applicable law. We are not responsible for the personally identifiable or
                      other information you choose to submit as User Content, and we reserve the
                      right to remove any User Content generated by any User at our sole discretion.
                      By posting to the Platform, you understand that once you post User Content, it
                      becomes public. We are not responsible for keeping any User Content
                      confidential, so if you do not want anyone to read or see your User Content, do
                      not submit or post it to the Platform.
                      Users may not: (i) provide User Content that they do not have the right to submit,
                      unless they have the owner’s permission; this includes material covered by
                      someone else’s copyright, patent, trade secret, or privacy, publicity, or other
                      proprietary right; (ii) forge headers or manipulate other identifiers in order to
                      disguise the origin of any User Content they provide; (iii) provide any User
                      Content that contains lies, falsehoods or misrepresentations that could damage
                      us or anyone else; (iv) provide User Content that is illegal, obscene, defamatory,
                      libelous, threatening, pornographic, harassing, hateful, or racially or ethnically
                      offensive, or encourages conduct that would be considered a criminal offense,
                      give rise to civil liability or violate any law or is otherwise inappropriate; (v)
                      impersonate anyone else or lie about your affiliation with another person or entity
                      in your User Content; (vi) use meta tags or any other “hidden text” utilizing any of
                      our or our suppliers’ product names or trademarks in their User Content; or (vii)
                      provide User Content that disparages us or our vendors, partners,
                      representatives or affiliates.
                      Each User represents and warrants that such User owns or otherwise controls all
                      of the rights to the content that such User posts; that such content is accurate;
                      that use of such content does not violate these Terms or any law or regulation;
                      and such content will not cause injury to any person or entity. We have the right

                      but not the obligation to monitor and edit or remove any activity or content from
                      the Platform. User Content comes from a variety of sources.
                      We do not endorse, support, represent any views, opinions, recommendations,
                      or advice that may be in User Content, nor do we vouch for the completeness,
                      truthfulness, its accuracy, reliability, usefulness, or safety or the intellectual
                      property rights of any User Content. We take no responsibility and assume no
                      liability for any User Content posted by any User or any third party.
                      You retain all rights in, and are solely responsible for, the User Content you post
                      to our Platform. By posting User Content on our Platform or through our
                      Services, you grant Company a worldwide, non-exclusive, royalty-free license
                      (with the right to sublicense) to use, copy, reproduce, process, adapt, modify,
                      publish, transmit, display, and distribute such User Content in any and all media
                      or distribution methods (now known or later developed). This license allows us to
                      operate, promote, and improve our platform and services.
                      All Users agree that they will abide by our Community Guidelines incorporated by
                      reference.
                      We reserve the right to remove any content that violates these Terms or that we
                      find objectionable.</p>

                      <b class="block mt-4"> 14. Respecting Copyrights: </b> <p> We take copyright infringement seriously and are
                      committed to complying with the Digital Millennium Copyright Act (DMCA) and
                      other applicable copyright laws. We encourage users to be mindful of copyright
                      ownership and to obtain necessary permissions before posting any content that
                      is not their own.
                      Fair Use: We recognize the doctrine of fair use, which allows limited use of
                      copyrighted material without permission from the copyright holder under certain
                      circumstances.
                      Reporting Copyright Infringement: If you believe that your copyrighted work has
                      been infringed upon on our platform, please email us a complete and accurate
                      DMCA notice at support@polloto.com.
                      Repeat Infringers: We have a policy of terminating the accounts of users who
                      repeatedly infringe copyrights. We may also take other actions, such as removing
                      infringing content or disabling access to certain features, at our discretion.</p>

                      <b class="block mt-4"> 15. Links to Third Parties: </b> <p> User Content and our Services may permit you to link to
                      other websites, services, resources or material on the Internet, and other
                      websites, services or resources may contain links to our Platform or Services.
                      When you access third party resources on the Internet, you do so at your own
                      risk. These other resources are not under our control, and you acknowledge that

                      we are not responsible or liable for the availability, content, functions, accuracy,
                      legality, appropriateness, advertising, products, information, or use of user
                      information or other materials, or any other aspect of any such linked websites or
                      any additional links contained therein.
                      The inclusion of any such link does not imply our endorsement or any association
                      between us and the linked websites or their operators. It is your sole
                      responsibility to comply with the appropriate terms of service of the linked
                      websites as well as with any other obligation under copyright, secrecy,
                      defamation, decency, privacy, security and export laws related to the use of such
                      linked websites and any content contained thereon.
                      You further acknowledge and agree that in no event shall we be responsible or
                      liable, directly or indirectly, to anyone for any damage or loss caused or alleged
                      to be caused by or occasioned by the creation or use of the linked website or in
                      connection with the use of or reliance on any such content, material, goods or
                      services available on or through any such websites or resource. You should
                      direct any concerns to the applicable linked websites administrator or
                      Webmaster.
                      We reserve the exclusive right, at our sole discretion, to add, change, decline or
                      remove, without notice, any feature or link to any of the linked websites from the
                      Platform and/or introduce different features or links to different Users.
                      Permission must be granted by us for any type of link to the Platform. To seek
                      our permission, you may create and maintain a registered account in good
                      standing or write to us using the contact information below. We reserve the right,
                      however, to deny any request or rescind any permission granted by us to link
                      through such other type of link and to require termination of any such link to the
                      Platform, at our discretion at any time.</p>

                      <b class="block mt-4"> 16. Accuracy and Integrity of Information; Errors: </b> <p> Although Company attempts to
                      ensure the integrity and accuracy of the Platform, it makes no representations,
                      warranties or guarantees whatsoever as to the correctness, accuracy, or
                      accessibility of the Platform and Content thereon. It is possible that the Platform
                      could include typographical errors, inaccuracies or other errors and that
                      unauthorized additions, deletions and alterations could be made to the Platform
                      by third parties.
                      All information and content regarding polls their Authors and related Earners and
                      Fundraisers are provided solely by the User, who is expressly responsible for the
                      accuracy of the content provided and posted to the Platform. Company shall
                      have no responsibility or liability for information or content posted to the Platform
                      from any non-Company affiliated third party.
                      If an inaccuracy arises, please inform us so that it can be corrected. We reserve

                      the right to unilaterally correct any inaccuracies on the Platform without notice.
                      Information contained on the Platform may be changed or updated without
                      notice.</p>
                      <b class="block mt-4"> 17. Paid-contribution disclosure: </b> <p> Authors must disclose their employer, client, and
                      affiliation with respect to any contribution for which they receive, or expect to
                      receive, compensation.</p>
                      <b class="block mt-4"> 18. User Conduct: </b> <p>  You agree to use our Services only for lawful purposes and in a
                      manner that does not infringe the rights of or restrict or inhibit the use and
                      enjoyment of the Services by any other User or third party. You may not use our
                      Services for any unlawful purpose or in a manner that violates these Terms.
                      You are responsible for your own communications, including the upload,
                      transmission and posting of information, and the consequences of their posting
                      on or through the Platform.
                      Company specifically prohibits any use of the Platform, and requires all Users to
                      agree not to use the Platform, for any of the following: 
                      Engaging in illegal activities or promoting dangerous activities.
                      Harassing, abusing, or harming another person or group.
                      Providing to us, posting, or publicly sharing any information which is
                      incomplete, false, inaccurate or not your own;
                      Impersonating another person;
                      Advocating or encouraging conduct that would constitute a criminal offense,
                      give rise to civil liability or otherwise violate any city, state, national or
                      international law or regulation or that fails to comply with accepted Internet
                      protocol;
                      Posting material that is copyrighted or otherwise owned by a third party
                      unless you are the copyright owner or have the permission of the owner to
                      post it;
                      Posting material that reveals trade secrets, unless you own them or have the
                      permission of the owner;
                      Posting material that infringes on any other intellectual property, privacy or
                      publicity right of another;
                      Using the Services in or for the benefit of a country, organization, entity, or
                      person embargoed or blocked by any government, including those on
                      sanctions lists identified by the U.S. Office of Foreign Assets Control
                      (“OFAC”);
                      Transmitting or transferring (by any means) information or software derived
                      from the Platform to foreign countries or nations in violation of U.S. export
                      control laws; or
                      Attempting to interfere in any way with the Platform’s or our networks or
                      network security or attempting to use the Platform’s service to gain
                      unauthorized access to any other computer system.</p>
                      <b class="block mt-4"> 19. Violation of Platform Security: </b> <p> Violations of system or network security may
                      result in civil or criminal liability. Company will investigate occurrences and may
                      involve, and cooperate with, law enforcement authorities in prosecuting the User
                      or Users who are involved in such violations. You are prohibited from violating or
                      attempting to violate the security of the Platform, including, without limitation, the
                      following:
                      Accessing data not intended for you or logging into a server or account that
                      you are not authorized to access; 
                      Using any scraper, crawler, spider, robot or other automated means of any
                      kind to access or copy data on the Platform, deep-link to any feature or
                      content on the Platform, bypass our robot exclusion headers or other
                      measures we may use to prevent or restrict access to the Platform;
                      Attempting to probe, scan or test the vulnerability of a system or network or to
                      breach security or authentication measures without proper authorization;
                      Attempting to interfere with service to any User, host or network, including,
                      without limitation, via means of submitting a virus to the Platform, overloading,
                      “flooding”, “mailbombing” or “crashing”; or sending unsolicited e-mail,
                      including promotions and/or advertising of products or services, or
                      Forging any TCP/IP packet header or any part of the header information in
                      any e-mail or newsgroup posting.</p>
                      <b class="block mt-4"> 20. Intellectual Property:</b><p> The Platform or Services and their entire contents,
                      features, and functionality are owned by Company, its licensors, or other
                      providers of such material and are protected by U.S. and international copyright,
                      trademark, patent, trade secret, and other intellectual property or proprietary
                      rights laws. The contents of the Platform, including without limitation, all data,
                      files, documents, text, photographs, images, audio, and video, and any materials
                      accessed through or made available for use or download through the Platform
                      (“Content”), may not be copied, distributed, modified, reproduced, published or
                      used, in whole or in part, except for purposes authorized by these Terms or
                      otherwise approved in writing by Company. You may not frame or utilize framing
                      techniques to enclose, or deep link to, any name, trademarks, service marks,
                      logo, Content or other proprietary information (including images, text, page
                      layout, or form) of Company without our express prior written consent.</p>
                      <b class="block mt-4"> 21. Our Right to Refuse, Terminate or Suspend Use: </b> <p> Company expressly
                      reserves the right to terminate the use of, or to refuse to permit the use of, the
                      Platform or Services by any person or entity, at the sole discretion of Company,
                      for any reason or no reason at all, and with or without cause or prior notice,
                      which may result in the deletion of your content. Upon termination, your right to
                      use the Services will immediately cease.
                      In the event of termination, any rights or obligations regarding pending or

                      completed transactions, or your indemnity obligations related to use of the
                      Platform or Services, shall survive such termination.
                      We reserve the right, but accept no obligation, to monitor any activity and content
                      on the Platform. We may investigate any reported violations of law, rule or
                      regulation applicable to Users, or transactions on the Platform or using the
                      Services, and take action that we deem appropriate, including, but not limited to,
                      issuing warnings, suspending or terminating service, or denying access to or
                      removing any content from the Platform. We may also investigate the use of a
                      credit card by a User and take such action as we deem appropriate, including,
                      but not limited to, canceling any transaction by such User.</p>
                      <b class="block mt-4"> 22. Disclaimer of Warranties: </b>
                      <p> YOU ASSUME TOTAL RESPONSIBILITY AND RISK FOR YOUR USE OF THE
                      PLATFORM AND RELATED SERVICES, AND LINKED WEBSITES. YOU
                      UNDERSTAND AND AGREE THAT TO THE FULLEST EXTENT PERMITTED
                      BY APPLICABLE LAW:
                      THE PLATFORM, INCLUDING, WITHOUT LIMITATION, ALL CONTENT,
                      FUNCTION, MATERIALS AND SERVICES, IS PROVIDED “AS IS,” WITHOUT
                      WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING,
                      WITHOUT LIMITATION, ANY WARRANTY FOR INFORMATION, DATA, DATA
                      PROCESSING SERVICES OR UNINTERRUPTED ACCESS, ANY
                      WARRANTIES CONCERNING THE AVAILABILITY, ACCURACY,
                      COMPLETENESS, USEFULNESS, OR CONTENT OF INFORMATION, AND
                      ANY WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY OR
                      FITNESS FOR A PARTICULAR PURPOSE. COMPANY DOES NOT WARRANT
                      THAT THE PLATFORM OR THE FUNCTION, CONTENT OR SERVICES MADE
                      AVAILABLE THEREBY WILL BE TIMELY, SECURE, UNINTERRUPTED OR
                      ERROR FREE OR THAT DEFECTS WILL BE CORRECTED. COMPANY
                      MAKES NO WARRANTY THAT THE PLATFORM WILL MEET USERS’
                      EXPECTATIONS OR REQUIREMENTS. NO ADVICE, RESULTS,
                      INFORMATION, OR MATERIALS WHETHER ORAL OR WRITTEN, OBTAINED
                      BY YOU THROUGH THE PLATFORM SHALL CREATE ANY WARRANTY NOT
                      EXPRESSLY MADE HEREIN. IF YOU ARE DISSATISFIED WITH THE
                      PLATFORM, YOUR SOLE REMEDY IS TO DISCONTINUE USING THE
                      PLATFORM.
                      ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE
                      USE OF THE PLATFORM IS DONE AT YOUR OWN DISCRETION AND RISK
                      AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE THAT
                      RESULTS FROM THE DOWNLOAD OF ANY SUCH MATERIAL.
                      COMPANY DOES NOT ENDORSE, WARRANT OR GUARANTEE ANY
                      PRODUCTS OR SERVICES OFFERED OR PROVIDED BY OR ON BEHALF

                      OF THIRD PARTIES ON OR THROUGH THE PLATFORM. COMPANY IS NOT
                      A PARTY TO, AND DOES NOT MONITOR, ANY TRANSACTION BETWEEN
                      USERS AND THIRD PARTIES WITHOUT THE DIRECT INVOLVEMENT OF
                      COMPANY.</p>
                      <b class="block mt-4"> 23. Limitation of Liability Regarding Use of the Platform or Services: </b>
                      <p> TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, NEITHER
                      COMPANY, ITS AFFILIATES OR ANY OF THEIR RESPECTIVE DIRECTORS,
                      OFFICERS, EMPLOYEES, AGENTS, OR CONTENT OR SERVICE
                      PROVIDERS SHALL BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL,
                      CONSEQUENTIAL, EXEMPLARY OR PUNITIVE DAMAGES ARISING FROM
                      OR DIRECTLY OR INDIRECTLY RELATED TO THE USE/MISUSE OF, OR THE
                      INABILITY TO USE, THE PLATFORM OR THE CONTENT, MATERIALS AND
                      FUNCTION RELATED THERETO, INCLUDING, WITHOUT LIMITATION, LOSS
                      OF REVENUE, OR ANTICIPATED PROFITS, LOST BUSINESS, DATA OR
                      SALES, OR COST OF SUBSTITUTE SERVICES, EVEN IF COMPANY OR ITS
                      REPRESENTATIVE OR SUCH INDIVIDUAL HAS BEEN ADVISED OF THE
                      POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW
                      THE LIMITATION OR EXCLUSION OF LIABILITY SO SOME OF THE ABOVE
                      LIMITATIONS MAY NOT APPLY TO YOU. IN NO EVENT SHALL THE TOTAL
                      LIABILITY OF COMPANY TO YOU FOR ALL DAMAGES, LOSSES, AND
                      CAUSES OF ACTION (WHETHER IN CONTRACT OR TORT, INCLUDING, BUT
                      NOT LIMITED TO, NEGLIGENCE OR OTHERWISE) ARISING FROM THESE
                      TERMS OR YOUR USE OF THE PLATFORM EXCEED, IN THE AGGREGATE,
                      $100.00.</p>
                      <b class="block mt-4"> 24. Indemnification: </b> <p> Each User agrees to defend, indemnify and hold harmless
                      Company, its directors, officers, employees, agents and affiliates from any and all
                      claims, liabilities, damages, costs and expenses, including reasonable attorneys’
                      fees, in any way arising from, related to or in connection with (a) your use of or
                      access to the Platform or Services, including any act or omission related to
                      services provided by Payment Processor, (b) your violation of these Terms, the
                      Payment Processor Agreement, or applicable law; (c) the posting or transmission
                      of any materials, content or User Content on the Platform or through the Services
                      by you or allowed by you, including, but not limited to, any third-party claim that
                      any information or materials you provide infringes any third-party proprietary
                      right; (d) access to the Platform by anyone using your user name and password;
                      or (e) your providing inaccurate or incomplete information to us or Payment
                      Processor.</p>

                      <b class="block mt-4"> 25. Choice of Law: </b><p> These Terms shall be governed by and construed in accordance
                      with the laws of the State of Delaware, without regard to its conflict of law
                      provisions.</p>

                      <b class="block mt-4"> 26. International Use: </b> <p> We control and operate the Platform from our offices in the
                      U.S., and all information is processed within the U.S. We do not represent that
                      materials on the Platform are appropriate or available for use in other locations.
                      Persons who choose to access the Platform from other locations do so on their
                      own initiative and are responsible for compliance with local laws if and to the
                      extent local laws are applicable. 
                      You agree to comply with all applicable laws, rules and regulations in connection
                      with your use of the Platform. Without limiting the generality of the foregoing, you
                      agree to comply with all applicable laws regarding the transmission of technical
                      data exported from the U.S. or the country in which you reside.</p>

                      <b class="block mt-4"> 27. Dispute Resolution and Arbitration Agreement: </b> <p> We will try to work in good
                      faith to resolve any issue you have with the Platform, including payments made
                      for products and services offered through the Platform, if you bring that issue to
                      the attention of our customer service department. However, we realize that there
                      may be rare cases where we may not be able to resolve an issue to a customer’s
                      satisfaction.
                      You and Company agree that any dispute, claim or controversy arising out of or
                      relating in any way to these Terms or your use of the Platform, including
                      payments made for products and services offered through the Platform, shall be
                      determined by binding arbitration instead of in courts of general jurisdiction.
                      Arbitration is more informal than bringing a lawsuit in court. Arbitration uses a
                      neutral arbitrator instead of a judge or jury and is subject to very limited review by
                      courts. Arbitration allows for more limited discovery than in court; however, you
                      and Company shall cooperate with each other to agree to reasonable discovery
                      in light of the issues involved and amount of the claim. Arbitrators can award the
                      same damages and relief that a court can award, but in so doing, the arbitrator
                      shall apply substantive law regarding damages as if the matter had been brought
                      in court, including without limitation, the law on punitive damages as applied by
                      the U.S. Supreme Court. You agree that, by agreeing to these Terms, the U.S.
                      Federal Arbitration Act governs the interpretation and enforcement of this
                      provision and that you and Company are each waiving the right to a trial by jury
                      or to participate in a class action. This arbitration provision shall survive
                      termination of these Terms and any other contractual relationship between you
                      and Company.
                      If you desire to assert a claim against Company and therefore elect to seek
                      arbitration, you must first send to Company, by certified mail, a written notice of
                      the claim (“Notice”). The Notice to Company should be addressed to:
                      Ecomo.World LLC, 1978 Watson Circle, Rochester, Michigan 48306. (“Notice
                      Address”). If Company desires to assert a claim against you and therefore elects
                      to seek arbitration, it will send, by certified mail, a written Notice to the most
                      recent address we have on file or otherwise in our records for you. A Notice,
                      whether sent by you or by Company, must (a) describe the nature and basis of

                      the claim or dispute; and (b) set forth the specific relief sought. If Company and
                      you do not reach an agreement to resolve the claim within 30 days after the
                      Notice is received, you or Company may commence an arbitration proceeding or
                      file a claim in small claims court. During the arbitration, the amount of any
                      settlement offer made by Company or you shall not be disclosed to the arbitrator.
                      You may download or copy a form Notice and a form to initiate arbitration from
                      the American Arbitration Association at www.adr.org. If you are required to pay a
                      filing fee, after Company receives notice at the Notice Address that you have
                      commenced arbitration, it will promptly reimburse you for your payment of the
                      filing fee, unless your claim is for more than US $10,000. The arbitration will be
                      governed by the Commercial Arbitration Rules and the Supplementary
                      Procedures for Consumer Related Disputes (collectively, “AAA Rules”) of the
                      American Arbitration Association (“AAA”), as modified by these Terms, and will
                      be administered by the AAA. The AAA Rules and Forms are available online at
                      www.adr.org, by calling the AAA at 1-800-778-7879, or by requesting them from
                      us by writing to us at the Notice Address. The arbitrator is bound by the terms of
                      these Terms. All issues are for the arbitrator to decide, including issues relating to
                      the scope and enforceability of these Terms, including this arbitration agreement.
                      Unless Company and you agree otherwise, any arbitration hearings will take
                      place in the county (or parish) of your billing address. (If you reside outside of the
                      United States, any arbitration hearings will take place in your country of
                      residence at a location reasonably convenient to you, but will remain subject to
                      the AAA Rules including the AAA Rules regarding the selection of an arbitrator).
                      If your claim is for US $10,000 or less, we agree that you may choose whether
                      the arbitration will be conducted solely on the basis of documents submitted to
                      the arbitrator, through a telephonic hearing, or by an in-person hearing as
                      established by the AAA Rules. If your claim exceeds US $10,000, the right to a
                      hearing will be determined by the AAA Rules. Regardless of the manner in which
                      the arbitration is conducted, the arbitrator shall issue a reasoned written decision
                      sufficient to explain the essential findings and conclusions on which the award is
                      based. If the arbitrator issues you an award that is greater than the value of
                      Company’s last written settlement offer made before an arbitrator was selected
                      (or if Company did not make a settlement offer before an arbitrator was selected),
                      then Company will pay you the amount of the award or US $1,000, whichever is
                      greater. Except as expressly set forth herein, the payment of all filing,
                      administration and arbitrator fees will be governed by the AAA Rules. Each party
                      shall pay for its own costs and attorneys’ fees, if any. However, if any party
                      prevails on a statutory claim that affords the prevailing party attorneys’ fees, or if
                      there is a written agreement providing for payment or recovery of attorneys’ fees,
                      the arbitrator may award reasonable fees to the prevailing party under the
                      standards for fee shifting provided by law.
                      YOU AND COMPANY AGREE THAT EACH MAY BRING CLAIMS AGAINST
                      THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A
                      PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR
                      REPRESENTATIVE PROCEEDING. Further, unless both you and Company

                      agree otherwise, the arbitrator may not consolidate more than one person’s
                      claims with your claims and may not otherwise preside over any form of a
                      representative or class proceeding. The arbitrator may award declaratory or
                      injunctive relief only in favor of the individual party seeking relief and only to the
                      extent necessary to provide relief warranted by that party’s individual claim.
                      If this specific provision is found to be unenforceable, then (a) the entirety of this
                      arbitration provision shall be null and void, but the remaining provisions of these
                      Terms shall remain in full force and effect; and (b) exclusive jurisdiction and
                      venue for any claims will be in state or federal courts located in and for
                      Wilmington, Delaware.</p>

                      <b class="block mt-4"> 28. Notices: </b> <p>  Except for notices relating to arbitration of disputes, any notices (i) to us
                      shall be given by postal mail addressed to: Ecomo.World LLC, 1978 Watson
                      Circle, Rochester, Michigan 48306. (“Notice Address”) or by email
                      to support@polloton.com or (ii) to you at the e-mail address provided to us by
                      you. Notices shall be deemed to have been given 24 hours after the e-mail was
                      sent, unless we are notified that the e-mail address is invalid, in which event we
                      may give notice by email or, if applicable, any postal mail at the address provided
                      to us by you upon registration. Notice given by postal mail shall be deemed to
                      have been given three (3) business days after the date of mailing.</p>

                      <b class="block mt-4"> 29. Amendments: </b><p> We reserve the right to modify these Terms at any time. Terms
                      may be amended periodically to reflect changes in Services, operations,
                      business practices, industry standards, community needs, legal standards, or
                      other regulations. When we make changes, we will post the updated policy on
                      this page and update the &quot;Last Updated&quot; date at the top. If we make material
                      changes to these Terms, we will notify you by email or by posting a notice on our
                      Services. Your continued use of our Services after any such change constitutes
                      your acceptance of the new Terms. We encourage our users to review these
                      Terms periodically to ensure compliance.</p>

                      <b class="block mt-4"> 30. Miscellaneous: </b> <p> Company reserves the right, in its sole discretion, to terminate
                      your access to all or part of the Platform, with or without cause and with or
                      without notice.
                      These Terms constitute the entire agreement between you and Company
                      regarding the use of the Services, superseding any prior agreements between
                      you and Company relating to your use of the Services. You also may be subject
                      to additional terms and conditions that are applicable to certain parts of the
                      Platform.
                      If any of these Terms are held by a court or other tribunal of competent
                      jurisdiction to be unenforceable, such provisions shall be eliminated or limited to
                      the minimum extent necessary so that these Terms shall otherwise remain in full
                      force and effect.

                      Certain provisions of these Terms may be superseded by expressly designated
                      legal notices or terms located on pages within the Platform.
                      You agree that no joint venture, partnership, employment, or agency relationship
                      exists between Company and you as a result of these Terms or your use of the
                      Platform or Services.
                      Any claim or cause of action you may have with respect to Company, the
                      Platform or Services must be commenced within one (1) year after the
                      claim or cause of action arose.
                      The failure of Company to exercise or enforce any right or provision of these
                      Terms shall not constitute a waiver of such right or provision.
                      You may not assign these Terms or any of your rights or obligations under these
                      Terms without our express written consent.
                      These Terms inure to the benefit of Company’s successors, assigns and
                      licensees. The section titles in these Terms are for convenience only and have no
                      legal or contractual effect.</p>
                      <b class="block mt-4"> 31. Contact Us: </b><p> If you have any questions about these Terms, please contact us
                      at support@polloton.com.</p>`)}
                >
                  Terms of Service
                </li>



                <li className='py-2 cursor-pointer text-white hover:tracking-widest duration-500'
                  onClick={() => openModal("Privacy Policy", `

                    <b class="block mt-2"> 1. Acceptance of Terms. </b> <p> By accessing or using our Services, you acknowledge
                    that you have read, understood, and agree to be bound by and adhere to this
                    Privacy Policy and all Policies and Terms incorporated by reference. Your use of
                    our Services constitutes your acceptance of these policies and any applicable
                    terms.</p>


                    <b class="block mt-4"> 2. Information We Collect.</b><p> When you create an account, make a purchase, or
                    interact with our Services, we may collect personal information. These incude:
                    Contact Information: Name, birthday, gender, email address, postal address,
                    phone number, your username and password
                    Interaction Information: Log-on and log-off details, response times of mobile
                    application and webpages, browser behavior, download errors, etc.
                    Device Information: IP address, browser type, browser settings, operating
                    system, etc.
                    User-Generated Content: Polls, likes, shares, comments, and other content
                    you create and share on Company.
                    Payment Information: We do not collect payment information from Supporters;
                    Supporters wishing to make a payment are connected to Stripe or another of
                    our third-party payment processors, who collects and processes payment
                    information necessary to process transactions, including credit card details
                    and billing address.</p>

                    <b class="block mt-4"> 3. Cookies and Tracking Technologies: </b> <p> We use cookies and similar tracking
                    technologies to help us understand how you use our Services, remember your
                    preferences, to enhance your experience, analyze trends, and gather
                    demographic information about our user base. You can control cookies through
                    your browser settings. For more information, please see our Cookies Policy. </p>

                    <b class="block mt-4"> 4. How We Use Your Information. </b> <p>  We use your data to provide and improve our
                    Services, process transactions, communicate with you, and for security
                    purposes. Specifically, we use your information for:</p>
                    <b class="block mt-4"> 4.1 Providing and Improving Our Services: </b> <p> We use your information to deliver
                    our products and services, process transactions, and improve our platform&#39;s
                    functionality, performance and security, to process transactions and send related
                    information, including confirmations and invoices, to send you technical notices,
                    updates, security alerts, and support and administrative messages, to respond to
                    your comments, questions, and requests and provide customer service.</p>


                    <b class="block mt-4"> 4.2 Communication: </b> <p> We may use your contact information to send you
                    important notifications, updates, and promotional messages related to products,
                    services, offers, promotions, and events, and provide other news or information
                    about us and our partners. You can opt-out of receiving marketing
                    communications at any time.</p>

                    <b class="block mt-4"> 4.3 Personalization: </b> <p> We may use your information to personalize your
                    experience, such as displaying relevant content and advertisements.</p>


                    <b class="block mt-4"> 4.4 Aggregated Data: </b> <p> We may compile and analyze aggregated data about our
                    users to better understand customer demographics, interests, and behavior. This
                    aggregate information does not identify you personally and may be shared with
                    affiliates, agents, and business partners.</p>


                    <b class="block mt-4"> 4.5 Legal Compliance: </b> <p> We may process your information to comply with
                    applicable laws, regulations, legal processes, or enforceable governmental
                    requests.</p>

                    <b class="block mt-4"> 5. Sharing Your Information.</b>
                    <p> 
                    Information. We do not sell or share your personal information
                    with third parties without your consent, except with Service Providers, for Legal
                    Compliance, and for Business Transfers.
                    </p>

                    <b class="block mt-4"> 5.1 Service Providers:</b>
                    <p> 
                    We may share your information with trusted third-party
                    service providers who assist us in operating our platform or provide services on
                    our behalf, such as payment processing, data analysis, email delivery,
                    messaging, hosting services, customer service, and marketing assistance,
                    subject to confidentiality obligations.
                    </p>

                    <b class="block mt-4"> 5.2 Legal Requirements:</b>
                    <p> 
                    We may disclose your information if required to do so
                    by law or in the good faith belief that such action is necessary to comply with a
                    legal obligation, protect and defend our rights or property, act in urgent
                    circumstances to protect the personal safety of users of the Platform, or protect
                    against legal liability.
                    </p>


                    <b class="block mt-4"> 5.3 Business Transfers:</b>
                    <p> 
                    In the event of a merger, acquisition, or sale of all or a
                    portion of our assets, your information may be transferred as part of the
                    transaction.
                    </p>


                <b class="block mt-4"> 6. Data Security.</b> <p> 
                We take reasonable measures, including administrative,
                technical, and physical safeguards, to protect your information from loss, theft,
                misuse, and unauthorized access, disclosure, alteration, and destruction. We
                implement a variety of security measures to maintain the safety of your personal
                data. These measures include encryption, firewalls, and secure server
                environments. However, no method of transmission over the Internet or
                electronic storage is completely secure, so we cannot guarantee absolute
                security.
                </p>


                <b class="block mt-4"> 7. Data Retention:</b> <p> 
                We retain your personal data for as long as necessary to fulfill
                the purposes for which it was collected, comply with our legal obligations, resolve
                disputes, and enforce our agreements. When your data is no longer needed, we
                will securely delete or anonymize it.
                </p>


                <b class="block mt-4">8. Your Rights:</b>
                <p> You may review, change, or terminate your account at any time by
                logging into your account settings. You can also manage your cookie preferences
                through your browser settings or by using our cookie consent tool. We retain your
                personal information for as long as necessary to fulfill the purposes outlined in
                this Privacy Policy, unless a longer retention period is required or permitted by
                law. You have the following rights regarding your personal data:
                </p>
                <p>Access: You can request a copy of the personal data we hold about you.
                Correction: You can request that we correct any inaccurate or incomplete
                data.
                Deletion: You can request that we delete your personal data, subject to
                certain exceptions.
                Objection: You can object to the processing of your data for certain
                purposes.
                Restriction: You can request that we restrict the processing of your data.
                Portability: You can request that we transfer your data to another
                organization or directly to you.
                To exercise any of these rights, please contact us at  support@polloton.com.</p>

                <b class="block mt-4"> 9. Third-Party Links: </b> <p> We may permit others to link to this Platform or to post a link
                to their website on ours.  We do not endorse these linked websites. These
                websites are out of our direct control, and by visiting the website our Platform
                visitors acknowledge this fact, and accept any risks that may be incurred by
                visiting other websites. These third-party websites have separate and
                independent privacy policies. Please read their privacy policies before submitting
                information.  We hold no responsibility or liability for content and activities on
                these sites. 
                The third-party websites may contain advertisements or sponsorships, which are
                offered by third-parties, as well as, in some instances, the website itself or parties
                associated with Company. We do not endorse the companies placing such
                advertisements or sponsorships and are not responsible for any Personally
                Identifiable Information collected by advertisements not associated with the
                Platform or the Company.</p>

                <b class="block mt-4"> 10. Notice to California Residents: </b> <p> Your California Privacy Rights.  Certain
                California residents may request disclosure about the manner in which we share

                certain categories of information with others for their marketing purposes. If you
                would like a copy of this notice, send an email to support@polloton.com with the
                subject of “CALIFORNIA PRIVACY RIGHTS.” California Consumer Privacy Act. 
                At this time the Company is not required to comply with the California Consumer
                Privacy Act (CCPA). We will update this Privacy Policy when we qualify for
                coverage under the CCPA.</p>

                <b class="block mt-4"> 11. Notice to Nevada Residents: </b> <p>  We do not transfer personal information for
                monetary consideration.  If you would like to tell us not to sell your information in
                the future please email us at support@polloton.com with your name, postal
                address, telephone number and email address with “Nevada do not sell” in the
                subject line.</p>

                <b class="block mt-4"> 12. International Data Transfers: </b> <p> Company is based in the United States, and your
                data may be transferred to, stored, and processed in the United States or any
                other country where we or our service providers operate. We ensure that such
                transfers are carried out in compliance with applicable data protection laws and
                that your data is protected. If you are visiting our Platform from outside the United
                States, please be advised that your information is transferred to our U.S. servers.
                Disclosing your personal information to us pursuant to this Privacy Policy is at
                your own risk. We strive to comply with laws of jurisdictions in which we maintain
                operations but we make no representations that the practices described in this
                Privacy Policy are compliant with laws outside those jurisdictions that apply to the
                collection, security, use and disclosure of personal information.</p>

                <b class="block mt-4"> 13. Childrens Privacy. </b><p> Our services are not designed nor intended to be attractive
                for children under the age of 13. If you are under 13 please do not submit any
                information to us. We do not knowingly collect information of minors under the
                age of 13 years of age online. If we discover that we hold information from an
                individual under the age of 13, we will take steps to delete such information.</p>

                <b class="block mt-4"> 14. Amendments. </b> <p>We may update this Privacy Policy from time to time to reflect
                changes in Services, operations, business practices, industry standards,
                community needs, legal standards, or other regulations. When we make
                changes, we will post the updated policy on this page and update the &quot;Last
                Updated&quot; date at the top. If we make material changes to these Terms, we will
                notify you by email or by posting a notice on our Services. Your continued use of
                our Services after any such change constitutes your acceptance of the new
                Terms. We encourage our users to review this Privacy Policy periodically to stay
                informed about how we are protecting your data and to ensure compliance.</p>

                <b class="block mt-4"> 15. Contact Us. </b> <p>If you have any questions about our Privacy Policy, please email us
                at  support@polloton.com.</p>`
                  )}
                >
                  Privacy Policy
                </li>
                <li className='py-2 cursor-pointer text-white hover:tracking-widest duration-500'
                  onClick={() => openModal("Cookies Policy", `
                    <b class="block mt-2"> 1. Acceptance of Terms.</b> <p>By accessing or using our Services, you acknowledge
                    that you have read, understood, and agree to be bound by and adhere to this
                    Cookies Policy and all Policies and Terms incorporated by reference. If you do
                    not agree to these Terms, do not access or use our Services.</p>


                    <b class="block mt-4"> 2. What are cookies?</b><p> Cookies are small data files that are placed on your
                    computer or mobile device when you visit a website. Cookies are widely used by
                    online service providers to facilitate and help to make the interaction between
                    users and websites, mobile apps, and online platforms faster and easier, as well
                    as to provide reporting information.</p>

                    <b class="block mt-4"> 3. Why do we use cookies? </b> <p>Cookies on our website are used for several reasons.
                    Some cookies are required for technical reasons for our Services to operate, and
                    we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies
                    enable us and the third parties we work with to track and target the interests of
                    users of our Services, and we refer to these as &quot;performance&quot; or &quot;functionality&quot;
                    cookies. For example, we use cookies to tailor content and information that we
                    may send or display to you and otherwise personalize your experience while
                    interacting with our platform and to otherwise improve the functionality of the
                    services we provide. </p>

                    <b class="block mt-4"> 4. How can I control cookies? </b> <p> You have the right to decide whether to accept or
                    reject cookies. You can exercise your cookie preferences by clicking on the
                    appropriate opt-out links provided in the cookie table above. You can set or
                    amend your web browser controls to accept or refuse cookies. If you choose to
                    reject cookies, you may still use our platform though your access to some
                    functionality and areas of our platform may be restricted.</p>


                    <b class="block mt-4"> 5. Amendments. </b> <p> We may update this Cookies Policy from time to time to reflect
                    changes in Services, operations, business practices, industry standards,
                    community needs, legal standards, or other regulations. When we make
                    changes, we will post the updated policy on this page and update the &quot;Last
                    Updated&quot; date at the top. If we make material changes to these Terms, we will
                    notify you by email or by posting a notice on our Services. Your continued use of
                    our Services after any such change constitutes your acceptance of the new
                    Terms. We encourage our users to review this Cookie Policy periodically to stay
                    informed about our use of cookies and related technologies.</p>

                    <b class="block mt-4"> 6. Contact us: </b> <p> If you have any questions about our use of cookies or other
                    technologies, please email us at support@polloton.com.</p>`

                  )}
                >
                  Cookie Policy
                </li>
              </ul>
            </motion.div>
          </div>

          <div className='w-full lg:w-1/5 md:w-2/5'>
            <motion.div
              initial={initialRed}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1
              }}
              className='space-y-3 mt-16'
            >
              <ul>
                <li className='py-2 cursor-pointer text-white hover:tracking-widest duration-500'
                  onClick={() => openModal("Community Guidelines", `

                    <b class="block mt-2"> 1. Acceptance of Terms: </b> <p> By accessing or using our Services, you acknowledge that
                    you have read, understood, and agree to be bound by and adhere to these
                    Community Guidelines and all Policies and Terms incorporated by reference. If you
                    do not agree to these Terms, do not access or use our Services.</p>


                    <b class="block mt-4"> 2. Poll with Purpose: </b><p> Create polls that elevate meaningful conversations and
                    contribute to the communitys goals of high-quality information and well-informed
                    opinions.</p>

                    <b class="block mt-4"> 3. Fair Participation: </b> <p> Participate in polls fairly and honestly. Do not manipulate poll
                      outcomes through fraudulent means, such as using multiple accounts or
                      encouraging others to do so. </p>

                    <b class="block mt-4"> 4. Fundraising and Charitable Causes: </b> <p> Be transparent about the goals and
                    beneficiaries of any fundraising activities. Provide clear and accurate information
                    about how funds will be used. Ensure that all charitable causes and fundraising
                    activities are legitimate and that funds are used as promised.</p>


                    <b class="block mt-4"> 5. Accuracy and Authenticity: </b> <p> Company is a platform for accurate and verified
                    information. We strive to ensure our listings are 100% correct, timely, and up-to-date.
                    If you're contributing to our database, ensure your postings are true and confirmed. If
                    incorrect information is spotted, correct it or notify us via support@polloton.com.
                    Repeatedly adding false information will lead to account action, including potential
                    deletion.</p>


                    <b class="block mt-4"> 6. Credible Information: </b> <p> Share information from credible sources. Avoid spreading
                    misinformation or unverified claims. If you discover that you have shared incorrect
                    information, correct it promptly.</p>


                    <b class="block mt-4"> 7. Clean Content: </b> <p> Ensure that all content you share is appropriate for a diverse
                    audience. This includes avoiding content that is explicit, obscene, or otherwise
                    unsuitable for public sharing. Company is not a place for pornography or illegal
                    material. Do not post sexually explicit or illegal material anywhere on the platform.</p>


                    <b class="block mt-4"> 8. Honesty: </b> <p> Be honest and transparent in your interactions. Do not misrepresent
                      yourself or your intentions.</p>


                    <b class="block mt-4"> 9. Intellectual Property: </b> <p> Only share content that you have the right to share. Do not
                    plagiarize or share content that infringes on the intellectual property rights of others.
                    When adding photos, posters, and videos to Company, please refrain from
                    uploading copyrighted content without permission from the owner. If your content is
                    being used without your consent, contact us at support@polloton.com.</p>

                    <b class="block mt-4"> 10. Respectful Interaction:</b>
                    <p> 
                    Treat all members with respect. Harassment,
                      discrimination, bullying, or any form of abuse is not tolerated. We strive for a
                      positive, diverse community. We encourage diverse viewpoints but expect them to
                      be expressed politely and considerately. Hateful, racist, sexist, or harassing
                      language is strictly prohibited. This includes comments or content that is offensive,
                      threatening, or discriminatory based on race, ethnicity, national origin, religion,
                      gender, sexual orientation, disability, or any other characteristic. We remove content
                      that contains credible threats or hate speech, content that targets private individuals
                      to degrade or shame them, personal information meant to blackmail or harass
                      someone, and repeated unwanted messages.
                    </p>

                    <b class="block mt-4"> 11. Constructive Engagement:</b>
                    <p> 
                    Engage in discussions and debates constructively.
                    Focus on the content of the conversation, not the personalities involved. Personal
                    attacks and name-calling are not allowed.
                    </p>

                    <b class="block mt-4"> 12. Provide Feedback:</b>
                    <p> 
                    Feedback from the community is essential for improving
                    product offerings and user experiences, addressing concerns related to transactions,
                    interactions, or content, enhancing safety measures and community trust. Users can
                    submit feedback through feedback forms available on our website and apps,
                    community forums designated for user discussions and feedback, Direct
                    communication with customer support for specific issues.
                    </p>


                    <b class="block mt-4"> 13. Be Respectful and Constructive:</b>
                    <p> 
                    When providing feedback, users are encouraged
                      to be clear, constructive, and specific to ensure that issues can be effectively
                      addressed, include relevant details such as timestamps, descriptions of the issue,
                      and suggestions for improvement, if applicable, and remain respectful and courteous
                      towards community members and our team.
                    </p>


                <b class="block mt-4"> 14. No Violence and Criminal Behavior:</b> <p> 
                Any content promoting violence, harm, or
                criminal behavior is strictly prohibited. This includes terrorism, organized crime, or
                hate groups and offering sexual services, buying or selling firearms, alcohol, tobacco
                products, and non-medical, pharmaceutical drugs and all prohibited behavior listed
                in our Prohibited Behavior Policy.
                </p>


                <b class="block mt-4"> 15. Safety and Privacy:</b> <p> 
                We're committed to making Company a safe place and
                protecting personal privacy and information. Do not share personal information of
                others without their consent. This includes addresses, phone numbers, email
                addresses, and any other private information. Respect the confidentiality of private
                communications and content meant for closed groups or private polls. Content that
                threatens people or violates privacy is not allowed.
                </p>


                <b class="block mt-4">16. No Spamming or Misuse:</b>
                <p> Company is for sharing information, not spamming, or
                misusing for commercial gain. Avoid posting repetitive content, advertisements, or
                spam. This includes unsolicited promotion of products, services, or other websites.
                </p>
              

                <b class="block mt-4"> 17. Promote Company: </b> <p> If you're enjoying the Company experience, spread the word!
                More people using Company means more people get relevant, real and high-quality
                information to make better decisions on topics that really matter in life. The world will
                be a better, happier, smarter place as a result.</p>

                <b class="block mt-4"> 18. Reporting: </b> <p> YIf you encounter content violating these guidelines, please report it using
                  the built-in reporting options. If you encounter behavior or content that violates these
                  Community Guidelines, please report it to Companys support team. Use the &quot;Report
                  Abuse&quot; option available on the platform.</p>

                <b class="block mt-4"> 19. Enforcement: </b> <p>  Violations of these Community Guidelines may result in actions taken
                by Company, including but not limited to warnings, content removal, account
                suspension, or permanent banning from the Services. In cases of severe violations,
                Company reserves the right to cooperate with law enforcement authorities. For
                misunderstandings or disputes, consider resolving them directly with other users. If
                your content is used without permission, file a copyright or trademark report. We
                may cooperate with law enforcement when necessary to ensure safety and security.</p>

                <b class="block mt-4"> 20. Amendments. </b> <p> We may update these Community Guidelines from time to time to
                reflect changes in Services, operations, business practices, industry standards,
                community needs, legal standards, or other regulations. When we make changes,
                we will post the updated policy on this page and update the &quot;Last Updated&quot; date at
                the top. If we make material changes to these Terms, we will notify you by email or
                by posting a notice on our Services. Your continued use of our Services after any
                such change constitutes your acceptance of the new Terms. We encourage our
                users to review these Community Guidelines periodically to stay informed about our
                use of cookies and related technologies.</p>

                <b class="block mt-4"> 21. Contact us: </b><p>If you have any questions about our Community Guidelines, please
                email us at support@polloton.com.</p>`
                  )} >Community Guidelines</li>






                <li className='py-2 cursor-pointer text-white hover:tracking-widest duration-500'
                  onClick={() => openModal("Prohibited Behavior Policy", `

                    <b class="block mt-2"> 1. Acceptance of Terms. </b> <p> By accessing or using our Services, you acknowledge
                    that you have read, understood, and agree to be bound by and adhere to this
                    Prohibited Content Policy and all Policies and Terms incorporated by reference. If
                    you do not agree to these Terms, do not access or use our Services.</p>


                    <p class="block mt-4"> 2. The following are examples of User Content and/or use that is illegal or
                      prohibited by Company. This list is not exhaustive, and we reserve the right to
                      remove any poll or fundraising campaign and/or investigate any User who, in our
                      sole discretion, violates any of the terms or spirit of these Terms. As we
                      investigate your poll, fundraising campaign, User, or User Content, we may
                      consider all available material, including, but not limited to, social media, related
                      news, and any other information that we, in our sole discretion, deem relevant in
                      our review. We further reserve the right, without limitation, to ban or disable your
                      use of the Services, remove the offending User Content, suspend or terminate
                      your account, stop payments to any such fundraising campaign, freeze or place a
                      hold on donations, and report you to law enforcement authorities or otherwise
                      take appropriate legal action including seeking restitution on behalf of ourselves
                      and/or our Users.</p>
                      <p>Without limiting the foregoing, you agree not to use the Services to create polls,
                      raise funds, Upload User Content or establish or contribute to any poll or
                      fundraising campaign with the implicit or explicit purpose of or involving:</p>

<ul class="list-disc pl-4 block mt-2">
    <li>
        <b class="block mt-4">Breaking the Law:</b>
        <p>Content that violates any law or regulations, or facilitates, promotes, or endorses illegal activities;</p>
    </li>
    <li>
        <b class="block mt-4">Fraudulent schemes or scams:</b>
        <p>Information that is fraudulent, misleading, inaccurate, dishonest, or impossible, particularly if done knowingly with the intent to deceive;</p>
    </li>
    <li>
        <b class="block mt-4">Financial schemes:</b>
        <p>annuities, investments, loans, equity or lottery contracts, lay-away systems, off-shore banking or similar transactions, money service businesses (including currency exchanges, check cashing or the like), pyramid schemes, “get rich quick schemes” (i.e., investment opportunities or other services that promise high rewards), network marketing and referral marketing programs, debt collection or crypto-currencies;</p>
    </li>
    <li>
        <b class="block mt-4">Payment manipulation:</b>
        <p>Collecting payments on behalf of merchants by payment processors or otherwise; including, but not limited to, self-payments on campaigns or an attempt to bypass or otherwise circumvent the designated method of payment as provided by Company;</p>
    </li>
    <li>
        <b class="block mt-4">Credit card fraud:</b>
        <p>Processing where there is no bona fide donation accepted; cash advance; card testing; or evasion of card network chargeback monitoring programs;</p>
    </li>
    <li>
        <b class="block mt-4">Misuse of funds:</b>
        <p>The receipt or grant of cash advances or lines of credit to yourself or to another person for purposes other than those purposes clearly stated in the campaign or collecting or providing funds for any purpose other than as described in a campaign description;</p>
    </li>
    <li>
        <b class="block mt-4">Financial crimes:</b>
        <p>Any other in support of individuals and/or entities associated with alleged financial crimes, including, but not limited to, corruption, bribery, tax evasion, fraud, and activities of a similar nature;</p>
    </li>
    <li>
        <b class="block mt-4">Money laundering:</b>
        <p>Aggregation of funds owed to third parties, factoring, or other activities intended to obfuscate the origin of funds;</p>
    </li>

    <li>
        <b class="block mt-4">Credit:</b>
        <p>credit repair or debt settlement services;</p>
    </li>



    <li>
        <b class="block mt-4">Pre-Sales:</b>
        <p>the sale of items before the seller has control or possession of the
item;</p>
    </li>




    <li>
        <b class="block mt-4">Intellectual Property Violations.</b>
        <p>Content, products or services that infringe
        or facilitate infringement upon the trademark, patent, copyright, trade secrets,
        or proprietary or privacy rights of any third party, including unauthorized use of
        copyrighted or trademarked materials.</p>
    </li>



    <li>
        <b class="block mt-4">No-value-added services:</b>
        <p>sale or resale of a service without added benefit
        to the buyer or resale of government offerings without authorization or added
        value;</p>
    </li>


    <li>
        <b class="block mt-4">Trade violations:</b>
        <p>sale of goods or services that are illegally imported or exported;</p>
    </li>


    <li>
        <b class="block mt-4">Unauthorized sale or resale:</b>
        <p>of brand name or designer products or
services;</p>
    </li>

    <li>
        <b class="block mt-4">Piracy:</b>
        <p>counterfeit music, movies, software, or other licensed materials
      without the appropriate authorization from the rights holder;</p>
    </li>

    <li>
        <b class="block mt-4">Sale, Use or Promotion of Illegal Drugs:</b>
        <p>narcotics, steroids, controlled
      substances, abuse of pharmaceuticals or similar products or therapies that
      are either illegal or prohibited;</p>
    </li>


    <li>
        <b class="block mt-4">Nudity and Sexual Content:</b>
        <p>Any form of pornography; Content that sexually
        exploits or endangers children and adults, including sexual content relating to
        minors or persons appearing to possibly be minors; Content that promotes
        dating or sexual services;</p>
    </li>


    <li>
        <b class="block mt-4">Regulated Goods or Services:</b>
        <p>Content that attempts to sell or trade non-
        medical drugs, pharmaceuticals, marijuana, or firearms, ammunition, and
        explosives.</p>
    </li>


    <li>
        <b class="block mt-4">Violence and Graphic Content:</b>
        <p>Knives, or other weaponry or accessories;
        the promotion of violent ideas such as genocide, execution, and other violent
        acts; Offensive, graphic, perverse or sensitive content; Content that glorifies
        violence or celebrates suffering or humiliation; Real-life graphic or gratuitous
        violence; Animal cruelty or extreme violence towards animals;</p>
    </li>

    <li>
        <b>Promotion of Harmful or Dangerous Activities:</b>
        <p>Content encouraging
        physical challenges that have inherent risks of physical harm, self-injury or
        eating disorders.</p>
    </li>

    <li>
        <b class="block mt-4">Discrimination and Hate Speech:</b>
        <p>Content that directly attacks or demeans
        individuals or groups based on attributes such as race, ethnicity, national
        origin, religious affiliation, mental, physical, or medical conditions or
        disabilities, disease, age, sexual orientation, sex, gender, or gender identity.</p>
    </li>


      <li>
        <b class="block mt-4">Regulated Goods or Services:</b>
        <p>Content that attempts to sell or trade non-medical drugs, pharmaceuticals, marijuana, or firearms, ammunition, and
        explosives.</p>
    </li>


    <li>
        <b class="block mt-4">Slander, Harassment, and Bullying:</b>
        <p>Content meant to harass or bully
        individuals or legal entities, including: Personal attacks, defamation, or
        slander, where the primary purpose of posting such User Content is to cause
        or raise concerns of reputational harm, as well as personal attacks, slurs,
        caustic or combative content submitted with the aim of harming other people
        in some way; Encouraging others to harass individuals both on and off our
        platforms; Sharing private or confidential information without consent.</p>
    </li>


    <li>
        <b class="block mt-4">Exploitation:</b>
        <p>funding a ransom, human trafficking or exploitation, vigilantism,
          bribes or bounty;</p>
    </li>



    <li>
        <b class="block mt-4">Legal defense for serious crimes:</b>
        <p>campaigns for the legal defense of
        alleged crimes associated with hate, violence, harassment, bullying,
        discrimination, terrorism, or intolerance of any kind relating to race, ethnicity,
        national origin, religious affiliation, sexual orientation, sex, gender or gender
        identity, mental, physical, or other medical conditions, or financial crimes or
        crimes of deception;</p>
    </li>




    <li>
        <b class="block mt-4">International sanctions:</b>
        <p>activities with, in, or involving countries, regions,
        governments, persons, or entities that are subject to U.S. and other economic
        sanctions under applicable law, unless such activities are expressly
        authorized by the appropriate governmental authority;</p>
    </li>




    <li>
        <b class="block mt-4">Organized Crime:</b>
        <p>aAny direct or indirect activities related to organized crime.</p>
    </li>
    <li>
        <b class="block mt-4">Terrorism:</b>
        <p>Any direct or indirect activities related to terrorism.</p>
    </li>


    <li>
        <b class="block mt-4">Gambling:</b>
        <p>casino games, sports betting, fantasy sports, horse or greyhound
        racing, lottery tickets, and other ventures that facilitate gambling, games of
        skill or chance (whether or not it is legally defined as a lottery), promotions
        involving monetary rewards, including gift cards, or sweepstakes;</p>
    </li>

    <li>
        <b class="block mt-4">Misinformation and False News:</b>
        <p>Content that promotes false claims or
        conspiracy theories that may cause harm; Misinformation that could disrupt
        public safety or undermine civic processes;</p>
    </li>


    <li>
        <b class="block mt-4">Manipulated Media:</b>
        <p>Content manipulated to deceive or mislead; Deepfake
          videos and other forms of synthetically altered media, especially those that
          could harm user trust;</p>
    </li>

    <li>
        <b class="block mt-4">Spam and Malicious Content:</b>
        <p>Unsolicited mass communication or
        advertisements; Content intended to deceive or mislead recipients; Malicious
        software or links to malware;</p>
    </li>

    <li>
        <b class="block mt-4">Generally unacceptable activity:</b>
        <p>any other activity that Company may
        deem in its sole discretion to be unacceptable.</p>
    </li>

</ul>




        <b class="block mt-4"> 2. Enforcement and Reporting. </b> <p> Violations of this policy may lead to content
        removal, restrictions on account capabilities, or account termination. Users can
        report violations using our provided reporting tools or by contacting our support
        staff at support@polloton.com. </p>

                    <b class="block mt-4"> 3. Amendments. </b> <p> We may update this Prohibited Content Policy from time to time
                to reflect changes in Services, operations, business practices, industry
                standards, community needs, legal standards, or other regulations. When we
                make changes, we will post the updated policy on this page and update the &quot;Last
                Updated&quot; date at the top. If we make material changes to these Terms, we will
                notify you by email or by posting a notice on our Services. Your continued use of
                our Services after any such change constitutes your acceptance of the new
                Terms. We encourage our users to review this Prohibited Content Policy
                periodically to stay informed about our use of cookies and related technologies.</p>

                  <b class="block mt-4"> 4. Contact us: </b> <p> If you have any questions about our Prohibited Content Policy,
                  please email us at  support@polloton.com.</p>`)}
                >Prohibited Behavior Policy</li>

                <li className='py-2 cursor-pointer text-white hover:tracking-widest duration-500'
                  onClick={() => openModal("Restricted Behavior Policy", `

                    <b class="block mt-2"> 1. Acceptance of Terms: </b> <p> By accessing or using our Services, you acknowledge that
                    you have read, understood, and agree to be bound by and adhere to this Restricted
                    Content Policy and all Policies and Terms incorporated by reference. If you do not
                    agree to these Terms, do not access or use our Services.</p>


                    <b class="block mt-4"> 2. Alcohol. </b> <p> Content promoting the sale of alcohol must comply with all applicable laws,
                    including age restrictions and marketing standards. Promotions should not
                    encourage excessive or irresponsible consumption.</p>

                    <b class="block mt-4"> 3. Tobacco and Vaping Products. </b> <p> Promotions or sales of tobacco products and e-
                      cigarettes are restricted. Any promotional content must not target minors and must
                      adhere to health and safety guidelines. </p>

                    <b class="block mt-4"> 4. Dating Services. </b> <p> Dating services must prioritize user safety and must not be
                    deceptive or lead to scams. These services must implement proper age verification
                    processes and provide clear guidelines on safe dating practices.</p>


                    <b class="block mt-4"> 5. Dietary Supplements. </b> <p> Promotions for dietary supplements must not contain
                    misleading claims regarding health benefits and must not promote products not
                    approved by relevant health authorities.</p>


                    <b class="block mt-4"> 6. Financial Services and Insurance Products. </b> <p> Content related to financial services
                    and insurance products, such as loans, investment advice, insurance, and credit
                    card applications, must be clear, fair, and not misleading. Providers must be
                    authorized or licensed by appropriate regulatory bodies and must provide
                    transparency about terms, risks, and conditions.</p>


                    <b class="block mt-4"> 7. Health and Medical Products. </b> <p> Promotions for medical products and services must
                    have authorization from relevant health authorities. Claims must be supported by
                    scientific evidence, and content must not exploit health-related anxieties.</p>


                    <b class="block mt-4"> 8. Cosmetic Procedures and Weight Loss. </b> <p> Content promoting cosmetic interventions
                    and weight loss products must be responsible and scientifically supported. Claims
                    about results must be realistic and not exploit body image insecurities.</p>


                    <b class="block mt-4"> 9. Family Planning and Contraception. </b> <p> Content related to family planning and
                  contraception must be factual and not misleading. It should provide accurate
                  information about the effectiveness and side effects of products.</p>

                    <b class="block mt-4"> 10. Pharmacies and Prescription Drugs.</b>
                    <p> 
                    Content promoting or selling prescription
                  drugs must only be from entities that are properly licensed. Promotion of online
                  pharmacies must ensure that they comply with all regulatory requirements, including
                  verification of prescriptions.
                    </p>

                    <b class="block mt-4"> 11. Cryptocurrency Products and Services.</b>
                    <p> 
                    Promotions or advice regarding
                  cryptocurrency must provide clear information about risks and should not promise
                  guaranteed returns. All promotional content must comply with financial regulatory
                  guidelines.
                    </p>

                    <b class="block mt-4"> 12. Drug and Alcohol Treatment Centers.</b>
                    <p> 
                   Content promoting drug and alcohol
                    treatment centers must be factual and not misleading. These centers must be
                    properly licensed and accredited where required.
                                        </p>


                    <b class="block mt-4"> 13. Government, Elections, or Politics.</b>
                    <p> 
                    Political content, particularly advertisements,
                      must not include misinformation about voting, political processes, or misinformation
                      that could affect public trust in civic institutions. Political content must be transparent
                      about who is paying for the advertisement and where it is being served.
                    </p>


                <b class="block mt-4"> 14. Format Restrictions.</b> <p> 
               Content must not use formatting techniques that excessively
              distract or mislead users. This includes overly sensationalized headlines or visuals
              that distort the facts of the content.
                </p>


                <b class="block mt-4"> 15. Enforcement.</b> <p> 
                Violations of this policy may result in content removal, account
              suspension, or other enforcement actions depending on the severity of the violation.
              Company reserves the right to enforce these policies at its discretion to maintain a
              safe and legal environment for all users.
                </p>

                <b class="block mt-4">16. Amendments.</b>
                <p> We may update this Restricted Content Policy from time to time to
                reflect changes in Services, operations, business practices, industry standards,
                community needs, legal standards, or other regulations. When we make changes,
                we will post the updated policy on this page and update the &quot;Last Updated&quot; date at
                the top. If we make material changes to these Terms, we will notify you by email or
                by posting a notice on our Services. Your continued use of our Services after any
                such change constitutes your acceptance of the new Terms. We encourage our
                users to review this Restricted Content Policy periodically to stay informed about our
                use of cookies and related technologies.
                </p>
                <b class="block mt-4"> 17. Contact us: </b> <p>If you have any questions about our Restricted Content Policy, please email us at support@polloton.com.</p>`)}>Restricted Behavior Policy</li>
              </ul>
            </motion.div>
          </div>

          <div className='overflow-hidden md:w-2/5 lg:w-[20%] md:px-0 px-2 w-full'>
            <motion.div
              initial={initialRed}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1
              }}
              className="md:mx-auto md:max-w-md"
            >
              <div className="mt-16 md:px-3">
                <div className="flex items-center justify-start">
                  <div className='md:flex items-center py-6 text-center'>
                    <div className='flex justify-end text-white xl:space-x-5 lg:space-x-3 space-x-5 flex-wrap'>
                      <div>
                        <button className="relative w-8 h-8 rounded-full group">
                          <div className="w-full h-full absolute top-0 left-0 bg-[#9255E0] rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                          <div className="relative z-10 w-full h-full flex items-center justify-center border-2 border-[#9255E0] rounded-full">
                            <FaFacebook className='cursor-pointer text-white text-xl' />
                          </div>
                        </button>
                      </div>
                      <div>
                        <button className="relative w-8 h-8 rounded-full group">
                          <div className="w-full h-full absolute top-0 left-0 bg-[#9255E0] rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                          <div className="relative z-10 w-full h-full flex items-center justify-center border-2 border-[#9255E0] rounded-full">
                            <FaXTwitter className='cursor-pointer text-white text-xl' />
                          </div>
                        </button>
                      </div>
                      <div>
                        <button className="relative w-8 h-8 rounded-full group">
                          <div className="w-full h-full absolute top-0 left-0 bg-[#9255E0] rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                          <div className="relative z-10 w-full h-full flex items-center justify-center border-2 border-[#9255E0] rounded-full">
                            <FaYoutube className='cursor-pointer text-white text-xl' />
                          </div>
                        </button>
                      </div>
                      <div>
                        <button className="relative w-8 h-8 rounded-full group">
                          <div className="w-full h-full absolute top-0 left-0 bg-[#9255E0] rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                          <div className="relative z-10 w-full h-full flex items-center justify-center border-2 border-[#9255E0] rounded-full">
                            <AiFillLinkedin className='cursor-pointer text-white text-xl' />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>


      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex px-4 justify-center items-center">
            <motion.div
              ref={modalRef}
              className="bg-[#000000c7] text-white px-5 py-3 rounded-md shadow-md max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.3 }}
            >
              <div className='flex justify-between items-center'>
                <h1 className='font-medium text-lg'>{modalHeading}</h1>
                <button onClick={closeModal} className="text-white">
                  <GiCrossMark className='text-xl' />
                </button>
              </div>
              <div className="mt-2 max-h-[21rem] overflow-y-auto scrollable">
                <div className='text-xs' dangerouslySetInnerHTML={{ __html: modalContent }} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </>
  );
};

export default Footer;