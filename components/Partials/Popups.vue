<template>
  <div class="popups">
    <a href="#" v-for="(item, i) in popups" @click="openModal" :data-index="i">{{ item.title }}</a>
  </div>
</template>
<script>
export default {
  data(){
    return {
      popups: [
        {
          title: 'Privacy Policy',
          content: `
            <h2>Privacy Policy</h2>
            <p>Your privacy is important to us. It is fast-debt-help.com policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you, including across our website, <a href="www.fast-debt-helpers.com">www.fast-debt-helpers.com</a>, and other sites we own and operate.</p>
            <p>This policy is effective as of 12 May 2021 and was last updated on 12 May 2022.</p>
            <h3>Information We Collect</h3>
            <p>Information we collect includes both information you knowingly and actively provide us when using or participating in any of our services and promotions, and any information automatically sent by your devices in the course of accessing our products and services.</p>
            <h3>Log Data</h3>
            <p>When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your device’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, other details about your visit, and technical details that occur in conjunction with any errors you may encounter.</p>
            <p>Please be aware that while this information may not be personally identifying by itself, it may be possible to combine it with other data to personally identify individual persons.</p>
            <h3>Collection and Use of Information</h3>
            <p>We may collect personal information from you when you do any of the following on our website:</p>
            <p>Use a mobile device or web browser to access our content</p>
            <p>Contact us via email, social media, or on any similar technologies</p>
            <p>When you mention us on social media</p>
            <p>We may collect, hold, use, and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes:</p>
            <p>Please be aware that we may combine information we collect about you with general information or research data we receive from other trusted sources.</p>
            <h3>Security of Your Personal Information</h3>
            <p>When we collect and process personal information, and while we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.</p>
            <p>Although we will do our best to protect the personal information you provide to us, we advise that no method of electronic transmission or storage is 100% secure, and no one can guarantee absolute data security. We will comply with laws applicable to us in respect of any data breach.</p>
            <p>You are responsible for selecting any password and its overall security strength, ensuring the security of your own information within the bounds of our services.</p>
            <h3>How Long We Keep Your Personal Information</h3>
            <p>We keep your personal information only for as long as we need to. This time period may depend on what we are using your information for, in accordance with this privacy policy. If your personal information is no longer required, we will delete it or make it anonymous by removing all details that identify you.</p>
            <p>However, if necessary, we may retain your personal information for our compliance with a legal, accounting, or reporting obligation or for archiving purposes in the public interest, scientific, or historical research purposes or statistical purposes.</p>
            <h3>Children’s Privacy</h3>
            <p>We do not aim any of our products or services directly at children under the age of 13, and we do not knowingly collect personal information about children under 13.</p>
            <h3>International Transfers of Personal Information</h3>
            <p>The personal information we collect is stored and/or processed where we or our partners, affiliates, and third-party providers maintain facilities. Please be aware that the locations to which we store, process, or transfer your personal information may not have the same data protection laws as the country in which you initially provided the information. If we transfer your personal information to third parties in other countries: (i) we will perform those transfers in accordance with the requirements of applicable law; and (ii) we will protect the transferred personal information in accordance with this privacy policy.</p>
            <h3>Your Rights and Controlling Your Personal Information</h3>
            <p>You always retain the right to withhold personal information from us, with the understanding that your experience of our website may be affected. We will not discriminate against you for exercising any of your rights over your personal information. If you do provide us with personal information you understand that we will collect, hold, use and disclose it in accordance with this privacy policy. You retain the right to request details of any personal information we hold about you.</p>
            <p>If we receive personal information about you from a third party, we will protect it as set out in this privacy policy. If you are a third party providing personal information about somebody else, you represent and warrant that you have such person’s consent to provide the personal information to us.</p>
            <p>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time. We will provide you with the ability to unsubscribe from our email-database or opt out of communications. Please be aware we may need to request specific information from you to help us confirm your identity.</p>
            <p>If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant, or misleading, please contact us using the details provided in this privacy policy. We will take reasonable steps to correct any information found to be inaccurate, incomplete, misleading, or out of date.</p>
            <p>If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority in relation to your complaint.</p>
            <h3>Limits of Our Policy</h3>
            <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.</p>
            <h3>Changes to This Policy</h3>
            <p>At our discretion, we may change our privacy policy to reflect updates to our business processes, current acceptable practices, or legislative or regulatory changes. If we decide to change this privacy policy, we will post the changes here at the same link by which you are accessing this privacy policy.</p>
            <p>If required by law, we will get your permission or give you the opportunity to opt in to or opt out of, as applicable, any new uses of your personal information.</p>
            <p>We respect your privacy. We will only use information you provide through the Program to transmit your mobile messages and respond to you, if necessary. This includes, but is not limited to, sharing information with platform providers, phone companies, and other vendors who assist us in the delivery of mobile messages. WE DO NOT SELL, RENT, LOAN, TRADE, LEASE, OR OTHERWISE TRANSFER FOR PROFIT ANY PHONE NUMBERS OR CUSTOMER INFORMATION COLLECTED THROUGH THE PROGRAM TO ANY THIRD PARTY. Nonetheless, We reserve the right at all times to disclose any information as necessary to satisfy any law, regulation or governmental request, to avoid liability, or to protect Our rights or property. When you complete forms online or otherwise provide Us information in connection with the Program, you agree to provide accurate, complete, and true information. You agree not to use a false or misleading name or a name that you are not authorized to use. If, in Our sole discretion, We believe that any such information is untrue, inaccurate, or incomplete, or you have opted into the Program for an ulterior purpose, We may refuse you access to the Program and pursue any appropriate legal remedies. Text Marketing and notifications (if applicable): By entering your phone number in the checkout and initialising a purchase, you agree that we may send you text notifications (for your order, including abandoned cart reminders) and text marketing offers. Text message frequency may vary. You can unsubscribe from further text messages by replying STOP. Message and data rates may apply. In addition, the Website uses cookies to help keep track of items you put in your shopping cart and to tell us if you have visited the Website in the past. This allows visitors to the online store to maintain shopping carts between visits. You can refuse cookies by turning them off in your browser. California Civil Code Section 1798.83 permits Users of the Program that are California residents to request certain information regarding our disclosure of the information you provide through the Program to third parties for their direct marketing purposes.</p>
            <h3>Other</h3>
            <p>This Privacy Policy is strictly limited to the Program and has no effect on any other privacy policy(ies) that may govern the relationship between you and Us in other contexts. If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.</p>
          `
        },
        {
          title: 'Terms of Use',
          content: `
            <h2>Terms and Conditions</h2>
            <h3>Welcome to Fast Debt Helpers!</h3>
            <p>These terms and conditions outline the rules and regulations for the use of Fast Debt Helpers's Website, located at <a href="www.fast-debt-helpers.com">www.fast-debt-helpers.com.</a></p>
            <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Fast Debt Helpers if you do not agree to take all of the terms and conditions stated on this page.</p>
            <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>
            <h3>Cookies</h3>
            <p>We employ the use of cookies. By accessing Fast Debt Helpers, you agreed to use cookies in agreement with the Fast Debt Helpers's Privacy Policy.</p>
            <p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>
            <h3>License</h3>
            <p>Unless otherwise stated, Fast Debt Helpers and/or its licensors own the intellectual property rights for all material on Fast Debt Helpers. All intellectual property rights are reserved. You may access this from Fast Debt Helpers for your own personal use subjected to restrictions set in these terms and conditions.</p>
            <h3>You must not:</h3>
            <ul>
              <li>Republish material from Fast Debt Helpers</li>
              <li>Sell, rent or sub-license material from Fast Debt Helpers</li>
              <li>Reproduce, duplicate or copy material from Fast Debt Helpers</li>
              <li>Redistribute content from Fast Debt Helpers</li>
              <li>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Fast Debt Helpers does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Fast Debt Helpers,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Fast Debt Helpers shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</li>
            </ul>
            <p>Fast Debt Helpers reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>
            <h3>You warrant and represent that:</h3>
            <ul>
              <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
              <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
              <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
              <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
              <li>You hereby grant Fast Debt Helpers a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</li>
            </ul>
            <h3>Hyperlinking to our Content</h3>
            <p>The following organizations may link to our Website without prior written approval:</p>
            <ul>
              <li>Government agencies;</li>
              <li>Search engines;</li>
              <li>News organizations;</li>
              <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses;</li>
              <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
              <li>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</li>
            </ul>
            <p>We may consider and approve other link requests from the following types of organizations:</p>
            <ul>
              <li>commonly-known consumer and/or business information sources;</li>
              <li>dot.com community sites;</li>
              <li>associations or other groups representing charities;</li>
              <li>online directory distributors;</li>
              <li>internet portals;</li>
              <li>accounting, law and consulting firms; and</li>
              <li>educational institutions and trade associations.</li>
              <li>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Fast Debt Helpers; and (d) the link is in the context of general resource information.</li>
            </ul>
            <p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.</p>
            <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Fast Debt Helpers. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>
            <h3>Approved organizations may hyperlink to our Website as follows:</h3>
            <ul>
              <li>By use of our corporate name; or</li>
              <li>By use of the uniform resource locator being linked to; or</li>
              <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.</li>
              <li>No use of Fast Debt Helpers's logo or other artwork will be allowed for linking absent a trademark license agreement.</li>
            </ul>
            <h3>iFrames</h3>
            <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>
            <h3>Content Liability</h3>
            <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
            <h3>Your Privacy</h3>
            <p>Please read Privacy Policy</p>
            <h3>Reservation of Rights</h3>
            <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>
            <h3>Removal of links from our website</h3>
            <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>
            <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>
            <h3>Disclaimer</h3>
            <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
            <ul>
              <li>limit or exclude our or your liability for death or personal injury;</li>
              <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
              <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
              <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
              <li>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</li>
            </ul>
            <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
          `
        }
      ]
    }
  },
  methods: {
    openModal(e){
      e.preventDefault();
      let index = e.target.dataset.index;
      this.$store.commit('setModal', this.popups[index].content)
      document.documentElement.style.overflowY = 'hidden'
    }
  }
}
</script>
<style lang="scss" scoped>
.popups{
  display: flex;
  a{
    text-decoration: none;
    font-weight: 400;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    &:first-child{
      padding-right: 30px;
    }
    &:hover{
    opacity: .7;
    }
  }
}
</style>
