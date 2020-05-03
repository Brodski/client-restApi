// eslint-disable-next-line import/prefer-default-export
import React from 'react'

// https://stackoverflow.com/questions/44643424/how-to-parse-html-to-react-component
const PrivacyPolicy = () => (
  <div className="container">
    <div dangerouslySetInnerHTML={{ __html: htmlString}} />
  </div>
)

export default PrivacyPolicy;

const htmlString = `<style>
  [data-custom-class='body'],
  [data-custom-class='body'] * {
    background: transparent !important;
  }

  [data-custom-class='title'],
  [data-custom-class='title'] * {
    font-family: Arial !important;
    font-size: 26px !important;
    color: #000000 !important;
  }

  [data-custom-class='subtitle'],
  [data-custom-class='subtitle'] * {
    font-family: Arial !important;
    color: #595959 !important;
    font-size: 14px !important;
  }

  [data-custom-class='heading_1'],
  [data-custom-class='heading_1'] * {
    font-family: Arial !important;
    font-size: 19px !important;
    color: #000000 !important;
  }

  [data-custom-class='heading_2'],
  [data-custom-class='heading_2'] * {
    font-family: Arial !important;
    font-size: 17px !important;
    color: #000000 !important;
  }

  [data-custom-class='body_text'],
  [data-custom-class='body_text'] * {
    color: #595959 !important;
    font-size: 14px !important;
    font-family: Arial !important;
  }

  [data-custom-class='link'],
  [data-custom-class='link'] * {
    color: #3030F1 !important;
    font-size: 14px !important;
    font-family: Arial !important;
    word-break: break-word !important;
  }
</style>
<div data-custom-class="body">
  <div align="center" class="MsoNormal" data-custom-class="title" style="text-align: left; line-height: 1.5;">
    <strong><span style="line-height: 22.5px; font-size: 26px;">
        <bdt class="block-component"></bdt>PRIVACY NOTICE<bdt class="else-block"></bdt>
      </span></strong></div>
  <p style="font-size:15px;"><span style="color: rgb(127, 127, 127);"><strong><span data-custom-class="subtitle">Last
          updated <bdt class="question">April 04, 2020</bdt></span></strong></span></p>
  <p style="font-size: 15px; line-height: 1.5;"><br></p>
  <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">Thank you for
        choosing to be part of our community at <bdt class="question">Video Feed Organizer</bdt>
        <bdt class="block-component"></bdt> (“<bdt class="block-component"></bdt><strong>Company</strong>
        <bdt class="statement-end-if-in-editor"></bdt>”, “<strong>we</strong>”, “<strong>us</strong>”, or
        “<strong>our</strong>”). We are committed to protecting your personal information and your right to privacy. If
        you have any questions or concerns about our <span style="color: rgb(89, 89, 89);"><span
            data-custom-class="body_text">
            <bdt class="block-component"></bdt>notice<bdt class="else-block"></bdt>
          </span></span>, or our practices with regards to your personal information, please contact us at <bdt
          class="question">cbrodski@gmail.com</bdt>.
      </span></span></p>
  <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">When you visit
        our <bdt class="block-component"></bdt>website <bdt class="question"><a href="https://customyoutube.com"
            target="_blank" data-custom-class="link">https://customyoutube.com</a></bdt>,<bdt
          class="statement-end-if-in-editor"></bdt>
        <bdt class="block-component"></bdt> and use our services, you trust us with your personal information. We take
        your privacy very seriously. In this <span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
            <bdt class="block-component"></bdt>privacy notice<bdt class="else-block"></bdt>
          </span></span>, we seek to explain to you in the clearest way possible what information we collect, how we use
        it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is
        important. If there are any terms in this <span style="color: rgb(89, 89, 89);"><span
            data-custom-class="body_text">
            <bdt class="block-component"></bdt>privacy notice<bdt class="else-block"></bdt>
          </span>&nbsp;</span>that you do not agree with, please discontinue use of our <bdt class="block-component">
        </bdt>Sites<bdt class="statement-end-if-in-editor"></bdt>
        <bdt class="block-component"></bdt>
        <bdt class="block-component"></bdt> and our services.
      </span></span></p>
  <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">This <span
          style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
            <bdt class="block-component"></bdt>privacy notice<bdt class="else-block"></bdt>
          </span>&nbsp;</span>applies to all information collected through our <bdt class="block-component"></bdt>
        <bdt class="forloop-component"></bdt>
        <bdt class="question">website</bdt>
        <bdt class="forloop-component"></bdt> (such as <bdt class="question"><a href="https://customyoutube.com"
            target="_blank" data-custom-class="link">https://customyoutube.com</a></bdt>), <bdt
          class="statement-end-if-in-editor"></bdt>
        <bdt class="block-component"></bdt> and/or any related services, sales, marketing or events (we refer to them
        collectively in this <span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
            <bdt class="block-component"></bdt>privacy notice<bdt class="else-block"></bdt>
          </span>&nbsp;</span>as the "<strong>Services</strong>").
      </span></span></p>
  <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><strong><span data-custom-class="body_text">Please
          read this <span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
              <bdt class="block-component"></bdt>privacy notice<bdt class="else-block"></bdt>
            </span>&nbsp;</span>carefully as it will help you make informed decisions about sharing your personal
          information with us.</span></strong></span></p>
  <p style="font-size: 15px; line-height: 1.5;"><span style="color: rgb(89, 89, 89);"><br></span></p>
  <p style="font-size:15px;"><span style="color: rgb(0, 0, 0);"><strong><span style="font-size: 19px;"><span
            data-custom-class="heading_1">TABLE OF CONTENTS</span></span></strong></span></p>
  <p style="font-size:15px;"><a data-custom-class="link" href="#infocollect"><span style="color: rgb(89, 89, 89);">1.
        WHAT INFORMATION DO WE COLLECT?</span></a> <span style="color: rgb(89, 89, 89);">
      <bdt class="block-component"></bdt>
    </span></p>
  <p style="font-size:15px;"><a data-custom-class="link" href="#infouse"><span style="color: rgb(89, 89, 89);">2. HOW DO
        WE USE YOUR INFORMATION?</span></a><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);">
        <bdt class="statement-end-if-in-editor"></bdt>
      </span></span></p>
  <p style="font-size:15px;"><span style="color: rgb(89, 89, 89);"><a data-custom-class="link" href="#infoshare">3. WILL
        YOUR INFORMATION BE SHARED WITH ANYONE?</a>
      <bdt class="block-component"><span data-custom-class="body_text"></bdt>
    </span></span><span style="font-size: 15px; color: rgb(89, 89, 89);">
      <bdt class="block-component"></bdt>
    </span><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);">
        <bdt class="block-component"></bdt>
        <bdt class="block-component"></bdt>
      </span></span></span></p>
  <p style="font-size:15px;"><a data-custom-class="link" href="#sociallogins"><span
        style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);">4.
            HOW DO WE HANDLE YOUR SOCIAL LOGINS?</span></span></span></a><span style="color: rgb(89, 89, 89);"><span
        style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);">
          <bdt class="statement-end-if-in-editor"></bdt>
        </span></span>
      <bdt class="block-component"></bdt>
      <bdt class="block-component"></bdt>
    </span></p>
  <p style="font-size:15px;"><a data-custom-class="link" href="#inforetain"><span style="color: rgb(89, 89, 89);">5. HOW
        LONG DO WE KEEP YOUR INFORMATION?</span></a><span style="color: rgb(89, 89, 89);"><span
        style="color: rgb(89, 89, 89);">
        <bdt class="block-component"></bdt>
      </span></span></p>
  <p style="font-size:15px;"><a data-custom-class="link" href="#infosafe"><span style="color: rgb(89, 89, 89);">6. HOW
        DO WE KEEP YOUR INFORMATION SAFE?</span></a><span style="color: rgb(89, 89, 89);"><span
        style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);">
          <bdt class="statement-end-if-in-editor"></bdt>
        </span></span>
      <bdt class="block-component"></bdt>
    </span></p>
  <p style="font-size:15px;"><a data-custom-class="link" href="#infominors"><span style="color: rgb(89, 89, 89);">7. DO
        WE COLLECT INFORMATION FROM MINORS?</span></a>
    <bdt class="statement-end-if-in-editor"></bdt>
  </p>
  <p style="font-size:15px;"><a data-custom-class="link" href="#privacyrights"><span style="color: rgb(89, 89, 89);">8.
        WHAT ARE YOUR PRIVACY RIGHTS?<bdt class="block-component"></bdt></span></a></p>
  <p style="font-size:15px;"><a data-custom-class="link" href="#DNT"><span style="color: rgb(89, 89, 89);">9. CONTROLS
        FOR DO-NOT-TRACK FEATURES</span></a></p>
  <p style="font-size:15px;"><a data-custom-class="link" href="#caresidents"><span style="color: rgb(89, 89, 89);">10.
        DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></a></p>
  <p style="font-size:15px;"><a data-custom-class="link" href="#policyupdates"><span style="color: rgb(89, 89, 89);">11.
        DO WE MAKE UPDATES TO THIS POLICY?</span></a></p>
  <p style="font-size:15px;"><a data-custom-class="link" href="#contact"><span style="color: rgb(89, 89, 89);">12. HOW
        CAN YOU CONTACT US ABOUT THIS POLICY?</span></a></p>
  <p style="font-size: 15px; line-height: 1.5;"><span style="color: rgb(89, 89, 89);"><br></span></p>
  <p id="infocollect" style="font-size:15px;"><span style="color: rgb(0, 0, 0);"><strong><span
          style="font-size: 19px;"><span data-custom-class="heading_1">1. WHAT INFORMATION DO WE
            COLLECT?</span></span></strong><span style="font-size: 19px;"><span data-custom-class="heading_1"><span
            style="color: rgb(89, 89, 89);">
            <bdt class="block-component"></bdt>
          </span></span></span></span><span data-custom-class="body_text">
      <bdt class="block-component"></bdt>
    </span><span data-custom-class="body_text">
      <bdt class="statement-end-if-in-editor">
        <bdt class="block-component"></bdt>
    </span></span></span></span></span></span></li>
    </ul>
    <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span
          data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span
              data-custom-class="body_text">
              <bdt class="statement-end-if-in-editor">
                <bdt class="block-component"></bdt>
              </bdt>
            </span></span></span></span></p>
    <p style="font-size: 15px;"><strong><span style="font-size: 16px;"><span data-custom-class="heading_2"><strong><span
                data-custom-class="heading_2"><br>Information collected from other
                sources</span></strong></span></span></strong></p>
    <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><strong><em><span style="font-size: 15px;"><span
                data-custom-class="body_text">In Short:</span></span>&nbsp;</em> &nbsp;</strong><span
          style="font-size: 15px;"><em><span data-custom-class="body_text">We may collect limited data from public
              databases, marketing partners, <bdt class="block-component"></bdt>social media platforms, <bdt
                class="statement-end-if-in-editor"></bdt>and other outside sources.</span></em></span></span></p>
    <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
            data-custom-class="body_text">We may obtain information about your from other sources, such as public
            databases, joint marketing partners,<bdt class="block-component"></bdt> social media platforms (such as
            Facebook),<bdt class="statement-end-if-in-editor"></bdt> as well as from other third parties. Examples of
            the information we receive from other sources include: social media profile information<bdt
              class="block-component"></bdt> (your name, gender, birthday, email, current city, state and country, user
            identification numbers for your contacts, profile picture URL, and any other information that you choose to
            make public)<bdt class="statement-end-if-in-editor"></bdt>; marketing leads and search results and links,
            including paid listings (such as sponsored links). We will inform you about the source of information and
            the type of information and the type of information we have collected about you within a reasonable period
            after obtaining the personal data, but at the latest within one month.</span></span><span
          style="color: rgb(89, 89, 89);">
          <bdt class="block-component"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span
                data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span
                    data-custom-class="body_text">
                    <bdt class="statement-end-if-in-editor">
                      <bdt class="statement-end-if-in-editor"></bdt>
                    </bdt>
                  </span></span></span></span></bdt>
        </span></span></p>
    <p style="font-size: 15px; line-height: 1.5;"><br></p>
    <p id="infouse" style="font-size: 15px;"><span style="color: rgb(0, 0, 0);"><strong><span
            style="font-size: 19px;"><span data-custom-class="heading_1">2. HOW DO WE USE YOUR
              INFORMATION?</span></span></strong></span></p>
    <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><strong><em><span style="font-size: 15px;"><span
                data-custom-class="body_text">In Short:</span></span>&nbsp;</em>&nbsp;</strong><span
          style="font-size: 15px;"><em><span data-custom-class="body_text">We process your information for purposes
              based on legitimate business interests, the fulfillment of our contract with you, compliance with our
              legal obligations, and/or your consent.</span></em></span></span></p>
    <p style="font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span
            data-custom-class="body_text">We use personal information collected via our <bdt class="block-component">
            </bdt>Services<bdt class="statement-end-if-in-editor"></bdt>
            <bdt class="block-component"></bdt>
            <bdt class="block-component"></bdt> for a variety of business purposes described below. We process your
            personal information for these purposes in reliance on our legitimate business interests, in order to enter
            into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We
            indicate the specific processing grounds we rely on next to each purpose listed below.
          </span><span data-custom-class="body_text">
            <bdt class="block-component"></bdt>
          </span></span></span></span></p>
    <p style="font-size:15px;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span
            data-custom-class="body_text">We use the information we collect or receive:<bdt class="block-component">
            </bdt></span></span></span></p>
    <ul>
      <li><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><strong><span
                data-custom-class="body_text">To facilitate account creation and logon process.</span></strong><span
              data-custom-class="body_text">&nbsp;If you choose to link your account with us to a third party account
              (such as your Google or Facebook account), we use the information you allowed us to collect from those
              third parties to facilitate account creation and logon process for the performance of the contract. <bdt
                class="block-component"></bdt>See the section below headed "</span></span></span><span
          data-custom-class="body_text"><a data-custom-class="link" href="#sociallogins"><span
              style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">HOW DO WE HANDLE YOUR SOCIAL
                LOGINS</span></span></a></span><span style="font-size: 15px;"><span
            style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">" for further information.<span
                style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                    <bdt class="statement-end-if-in-editor"></bdt>
                  </span></span></span></span><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span
                  data-custom-class="body_text">
                  <bdt class="statement-end-if-in-editor"></bdt>
                  <bdt class="block-component"></bdt>
                  <bdt class="block-component"></bdt>
                  <bdt class="block-component"></bdt>
                  <bdt class="block-component"></bdt>
                  <bdt class="block-component"></bdt>
                  <bdt class="block-component"></bdt>
                  <bdt class="block-component"></bdt>
                  <bdt class="block-component"></bdt>
                  <bdt class="block-component"></bdt>
                  <bdt class="block-component"></bdt>
                  <bdt class="block-component"></bdt>
                  <bdt class="block-component"></bdt>
                </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span
          style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                    style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                        style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                            style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                                style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                                    style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                                        style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                                            style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                                                style="color: rgb(89, 89, 89);"><span
                                                  data-custom-class="body_text"><br></span></span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>
      </li>
      <li><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                    style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                        style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                            style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                                style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                                    style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                                        style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                                            style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                                                style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                                                    style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                                                        style="color: rgb(89, 89, 89);"><span
                                                          style="font-size: 15px;"><span
                                                            style="color: rgb(89, 89, 89);"><span
                                                              data-custom-class="body_text"><strong>To deliver services
                                                                to the user.</strong> We may use your information to
                                                              provide you with the requested service.<span
                                                                style="font-size: 15px;"><span
                                                                  style="color: rgb(89, 89, 89);"><span
                                                                    style="font-size: 15px;"><span
                                                                      style="color: rgb(89, 89, 89);"><span
                                                                        style="font-size: 15px;"><span
                                                                          style="color: rgb(89, 89, 89);"><span
                                                                            style="font-size: 15px;"><span
                                                                              style="color: rgb(89, 89, 89);"><span
                                                                                style="font-size: 15px;"><span
                                                                                  style="color: rgb(89, 89, 89);"><span
                                                                                    style="font-size: 15px;"><span
                                                                                      style="color: rgb(89, 89, 89);"><span
                                                                                        style="font-size: 15px;"><span
                                                                                          style="color: rgb(89, 89, 89);"><span
                                                                                            style="font-size: 15px;"><span
                                                                                              style="color: rgb(89, 89, 89);"><span
                                                                                                style="font-size: 15px;"><span
                                                                                                  style="color: rgb(89, 89, 89);"><span
                                                                                                    style="font-size: 15px;"><span
                                                                                                      style="color: rgb(89, 89, 89);"><span
                                                                                                        style="font-size: 15px;"><span
                                                                                                          style="color: rgb(89, 89, 89);"><span
                                                                                                            style="font-size: 15px;"><span
                                                                                                              style="color: rgb(89, 89, 89);"><span
                                                                                                                style="font-size: 15px;"><span
                                                                                                                  style="color: rgb(89, 89, 89);"><span
                                                                                                                    data-custom-class="body_text"><span
                                                                                                                      style="font-size: 15px;"><span
                                                                                                                        style="color: rgb(89, 89, 89);"><span
                                                                                                                          style="font-size: 15px;"><span
                                                                                                                            style="color: rgb(89, 89, 89);"><span
                                                                                                                              style="font-size: 15px;"><span
                                                                                                                                style="color: rgb(89, 89, 89);"><span
                                                                                                                                  style="font-size: 15px;"><span
                                                                                                                                    style="color: rgb(89, 89, 89);"><span
                                                                                                                                      style="font-size: 15px;"><span
                                                                                                                                        style="color: rgb(89, 89, 89);"><span
                                                                                                                                          style="font-size: 15px;"><span
                                                                                                                                            style="color: rgb(89, 89, 89);"><span
                                                                                                                                              style="font-size: 15px;"><span
                                                                                                                                                style="color: rgb(89, 89, 89);"><span
                                                                                                                                                  style="font-size: 15px;"><span
                                                                                                                                                    style="color: rgb(89, 89, 89);"><span
                                                                                                                                                      style="font-size: 15px;"><span
                                                                                                                                                        style="color: rgb(89, 89, 89);"><span
                                                                                                                                                          style="font-size: 15px;"><span
                                                                                                                                                            style="color: rgb(89, 89, 89);"><span
                                                                                                                                                              style="font-size: 15px;"><span
                                                                                                                                                                style="color: rgb(89, 89, 89);"><span
                                                                                                                                                                  style="font-size: 15px;"><span
                                                                                                                                                                    style="color: rgb(89, 89, 89);"><span
                                                                                                                                                                      style="font-size: 15px;"><span
                                                                                                                                                                        style="color: rgb(89, 89, 89);"><span
                                                                                                                                                                          data-custom-class="body_text">
                                                                                                                                                                          <bdt
                                                                                                                                                                            class="statement-end-if-in-editor">
                                                                                                                                                                          </bdt>
                                                                                                                                                                        </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
        <bdt class="block-component"></bdt>
        </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span
          style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span
                style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                      style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                          style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                              style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                                  style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                                      style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                                          style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                                              style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                <bdt class="block-component"></bdt>
                                              </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span
          style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                    style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                        style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                            style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span
                                style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px;"><span
                                    style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                                        style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                                            style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                                                style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                                                    style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                                                        style="color: rgb(89, 89, 89);"><span
                                                          style="font-size: 15px;"><span
                                                            style="color: rgb(89, 89, 89);"><span
                                                              style="font-size: 15px;"><span
                                                                style="color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px;"><span
                                                                    style="color: rgb(89, 89, 89);"><span
                                                                      style="font-size: 15px;"><span
                                                                        style="color: rgb(89, 89, 89);"><span
                                                                          style="font-size: 15px;"><span
                                                                            style="color: rgb(89, 89, 89);"><span
                                                                              style="font-size: 15px;"><span
                                                                                style="color: rgb(89, 89, 89);"><span
                                                                                  style="font-size: 15px;"><span
                                                                                    style="color: rgb(89, 89, 89);"><span
                                                                                      style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                                        data-custom-class="body_text">
                                                                                        <bdt
                                                                                          class="statement-end-if-in-editor">
                                                                                        </bdt>
                                                                                      </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
      </li>
    </ul>
    <p style="font-size: 15px; line-height: 1.5;"><br></p>
    <p id="infoshare" style="font-size:15px;"><span style="color: rgb(0, 0, 0);"><strong><span
            style="font-size: 19px;"><span data-custom-class="heading_1">3. WILL YOUR INFORMATION BE SHARED WITH
              ANYONE?</span></span></strong></span></p>
    <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><strong><em><span style="font-size: 15px;"><span
                data-custom-class="body_text">In Short:</span></span>&nbsp;</em>&nbsp;</strong><span
          style="font-size: 15px;"><em><span data-custom-class="body_text">We only share information with your consent,
              to comply with laws, to provide you with services, to protect your rights, or to fulfill business
              obligations.</span></em></span></span></p>
    <div><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">We may process or
          share data based on the following legal basis:</span></span></div>
    <ul>
      <li><span data-custom-class="body_text"><span
            style="color: rgb(89, 89, 89); font-size: 15px;"><strong>Consent:</strong> We may process your data if you
            have given us specific consent to use your personal information in a specific purpose.</span><br><br></span>
      </li>
      <li><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><strong>Legitimate
              Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate
            business interests.</span><br><br></span></li>
      <li><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><strong>Performance
              of a Contract:&nbsp;</strong>Where we have entered into a contract with you, we may process your personal
            information to fulfill the terms of our contract.</span><br><br></span></li>
      <li><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><strong>Legal
              Obligations:</strong> We may disclose your information where we are legally required to do so in order to
            comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process,
            such as in response to a court order or a subpoena (including in response to public authorities to meet
            national security or law enforcement requirements).</span><br><br></span></li>
      <li><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><strong>Vital
              Interests:</strong> We may disclose your information where we believe it is necessary to investigate,
            prevent, or take action regarding potential violations of our policies, suspected fraud, situations
            involving potential threats to the safety of any person and illegal activities, or as evidence in litigation
            in which we are involved.</span></span></li>
    </ul>
    <p style="font-size:15px;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span
            data-custom-class="body_text">More specifically, we may need to process your data or share your personal
            information in the following situations:</span><span data-custom-class="body_text">
            <bdt class="block-component"></bdt>
          </span></span></span></p>
    <ul>
      <li><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><strong><span
                data-custom-class="body_text">Vendors, Consultants and Other Third-Party Service
                Providers.</span></strong><span data-custom-class="body_text">&nbsp;We may share your data with third
              party vendors, service providers, contractors or agents who perform services for us or on our behalf and
              require access to such information to do that work. Examples include: payment processing, data analysis,
              email delivery, hosting services, customer service and marketing efforts. We may allow selected third
              parties to use tracking technology on the <bdt class="block-component"></bdt>Services<bdt
                class="statement-end-if-in-editor"></bdt>
              <bdt class="block-component"></bdt>
              <bdt class="block-component"></bdt>, which will enable them to collect data about how you interact with
              the <bdt class="block-component"></bdt>Services<bdt class="statement-end-if-in-editor"></bdt>
              <bdt class="block-component"></bdt>
              <bdt class="block-component"></bdt> over time. This information may be used to, among other things,
              analyze and track data, determine the popularity of certain content and better understand online activity.
              Unless described in this Policy, we do not share, sell, rent or trade any of your information with third
              parties for their promotional purposes. <bdt class="block-component"></bdt>
            </span></span></span></span><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span
              data-custom-class="body_text">
              <bdt class="statement-end-if-in-editor"></bdt>
            </span></span></span></span></span><br><br></li>
      <li><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><strong><span
                data-custom-class="body_text">Business Transfers.</span></strong><span
              data-custom-class="body_text">&nbsp;We may share or transfer your information in connection with, or
              during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion
              of our business to another company.<bdt class="block-component"></bdt></span></span></span><br><br></li>
      <li><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><strong><span
                data-custom-class="body_text">Third-Party Advertisers.</span></strong><span
              data-custom-class="body_text">&nbsp;We may use third-party advertising companies to serve ads when you
              visit the <bdt class="block-component"></bdt>Services<bdt class="statement-end-if-in-editor"></bdt>
              <bdt class="block-component"></bdt>
              <bdt class="block-component"></bdt>. These companies may use information about your visits to our
              Website(s) and other websites that are contained in web cookies and other tracking technologies in order
              to provide advertisements about goods and services of interest to you. <bdt class="block-component"></bdt>
              <bdt class="statement-end-if-in-editor"></bdt>
              <bdt class="block-component"></bdt>
            </span></span></span></span>
        <bdt class="block-component"></bdt></span></span></span><span data-custom-class="body_text">
          <bdt class="block-component"></bdt>
          <bdt class="block-component"></bdt>
        </span></span></span></span>
      </li>
    </ul>
    <div>
      <bdt class="block-component"><span data-custom-class="body_text"></bdt></span><span
        style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px;"><span
            style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                <bdt class="block-component"><span data-custom-class="heading_1"></bdt>
              </span></span><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                <bdt class="block-component"></bdt>
                <bdt class="block-component"></bdt>
              </span></span></span></span></span></span></span></span>
  </p>
  <p style="font-size: 15px; line-height: 1.5;"><span style="color: rgb(89, 89, 89);"><br></span></p>
  <p id="sociallogins" style="font-size:15px;"><span style="color: rgb(0, 0, 0);"><strong><span
          style="font-size: 19px;"><span data-custom-class="heading_1">4. HOW DO WE HANDLE YOUR SOCIAL
            LOGINS?</span></span></strong></span></p>
  <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><strong><em><span style="font-size: 15px;"><span
              data-custom-class="body_text">In Short:</span></span>&nbsp;</em>&nbsp;</strong><span
        style="font-size: 15px;"><em><span data-custom-class="body_text">If you choose to register or log in to our
            services using a social media account, we may have access to certain information about
            you.</span></em></span></span></p>
  <p style="font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span
          data-custom-class="body_text">Our <bdt class="block-component"></bdt>Services<bdt
            class="statement-end-if-in-editor"></bdt>
          <bdt class="block-component"></bdt>
          <bdt class="block-component"></bdt> offer you the ability to register and login using your third party social
          media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive
          certain profile information about you from your social media provider. The profile Information we receive may
          vary depending on the social media provider concerned, but will often include your name, e-mail address,
          friends list, profile picture as well as other information you choose to make public. <bdt
            class="block-component">
        </span></bdt></span></span></span></span></p>
  <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span
        data-custom-class="body_text">We will use the information we receive only for the purposes that are described in
        this <span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
            <bdt class="block-component"></bdt>privacy notice<bdt class="else-block"></bdt>
          </span>&nbsp;</span>or that are otherwise made clear to you on the <bdt class="block-component"></bdt>Services
        <bdt class="statement-end-if-in-editor"></bdt>
        <bdt class="block-component"></bdt>
        <bdt class="block-component"></bdt>. Please note that we do not control, and are not responsible for, other uses
        of your personal information by your third party social media provider. We recommend that you review their
        privacy policy to understand how they collect, use and share your personal information, and how you can set your
        privacy preferences on their sites and apps.
      </span><span style="color: rgb(89, 89, 89); font-size: 15px;"><span
          style="color: rgb(89, 89, 89); font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span
              style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
                    style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                      <bdt class="statement-end-if-in-editor"></bdt>
                    </span>
                    <bdt class="block-component"><span data-custom-class="body_text"></bdt>
                    <bdt class="block-component">
                  </span></bdt></span></span></span></span></span></span></span></span></p>
  <p style="font-size: 15px; line-height: 1.5;"><span style="color: rgb(89, 89, 89);"><br></span></p>
  <p id="inforetain" style="font-size:15px;"><span style="color: rgb(0, 0, 0);"><strong><span
          style="font-size: 19px;"><span data-custom-class="heading_1">5. HOW LONG DO WE KEEP YOUR
            INFORMATION?</span></span></strong></span></p>
  <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><strong><em><span style="font-size: 15px;"><span
              data-custom-class="body_text">In Short:</span></span>&nbsp;</em>&nbsp;</strong><span
        style="font-size: 15px;"><em><span data-custom-class="body_text">We keep your information for as long as
            necessary to fulfill the purposes outlined in this <span style="color: rgb(89, 89, 89);"><span
                data-custom-class="body_text">
                <bdt class="block-component"></bdt>privacy notice<bdt class="else-block"></bdt>
              </span>&nbsp;</span>unless otherwise required by law.</span></em></span></span></p>
  <p style="font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span
          data-custom-class="body_text">We will only keep your personal information for as long as it is necessary for
          the purposes set out in this <span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
              <bdt class="block-component"></bdt>privacy notice<bdt class="else-block"></bdt>
            </span></span>, unless a longer retention period is required or permitted by law (such as tax, accounting or
          other legal requirements). No purpose in this policy will require us keeping your personal information for
          longer than <bdt class="block-component"></bdt>
          <bdt class="question">the period of time in which users have an account with us</bdt>
          <bdt class="else-block"></bdt>.
        </span></span></span></p>
  <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span
        data-custom-class="body_text">When we have no ongoing legitimate business need to process your personal
        information, we will either delete or anonymize it, or, if this is not possible (for example, because your
        personal information has been stored in backup archives), then we will securely store your personal information
        and isolate it from any further processing until deletion is possible.</span></span><span
      style="color: rgb(89, 89, 89);">
      <bdt class="block-component"></bdt>
    </span></p>
  <div style="line-height: 1.5;"><br></div>
  <p id="infosafe" style="font-size:15px;"><span style="color: rgb(0, 0, 0);"><strong><span
          style="font-size: 19px;"><span data-custom-class="heading_1">6. HOW DO WE KEEP YOUR INFORMATION
            SAFE?</span></span></strong></span></p>
  <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><strong><em><span style="font-size: 15px;"><span
              data-custom-class="body_text">In Short:</span></span>&nbsp;</em>&nbsp;</strong><span
        style="font-size: 15px;"><em><span data-custom-class="body_text">We aim to protect your personal information
            through a system of organizational and technical security measures.</span></em></span></span></p>
  <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span
        data-custom-class="body_text">We have implemented appropriate technical and organizational security measures
        designed to protect the security of any personal information we process. However, please also remember that we
        cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal
        information, transmission of personal information to and from our <bdt class="block-component"></bdt>Services
        <bdt class="statement-end-if-in-editor"></bdt>
        <bdt class="block-component"></bdt>
        <bdt class="block-component"></bdt> is at your own risk. You should only access the services within a secure
        environment.
      </span></span><span style="color: rgb(89, 89, 89);">
      <bdt class="statement-end-if-in-editor"></bdt>
    </span><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
        <bdt class="block-component"></bdt>
      </span></span></p>
  <p style="font-size: 15px; line-height: 1.5;"><span style="color: rgb(89, 89, 89);"><br></span></p>
  <p id="infominors" style="font-size:15px;"><span style="color: rgb(0, 0, 0);"><strong><span
          style="font-size: 19px;"><span data-custom-class="heading_1">7. DO WE COLLECT INFORMATION FROM
            MINORS?</span></span></strong></span></p>
  <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><strong><em><span style="font-size: 15px;"><span
              data-custom-class="body_text">In Short:</span></span>&nbsp;</em>&nbsp;</strong><span
        style="font-size: 15px;"><em><span data-custom-class="body_text">We do not knowingly collect data from or market
            to children under 18 years of age.</span></em></span></span></p>
  <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span
        data-custom-class="body_text">We do not knowingly solicit data from or market to children under 18 years of age.
        By using the <bdt class="block-component"></bdt>Services<bdt class="statement-end-if-in-editor"></bdt>
        <bdt class="block-component"></bdt>
        <bdt class="block-component"></bdt>, you represent that you are at least 18 or that you are the parent or
        guardian of such a minor and consent to such minor dependent’s use of the <bdt class="block-component"></bdt>
        Services<bdt class="statement-end-if-in-editor"></bdt>
        <bdt class="block-component"></bdt>
        <bdt class="block-component"></bdt>. If we learn that personal information from users less than 18 years of age
        has been collected, we will deactivate the account and take reasonable measures to promptly delete such data
        from our records. If you become aware of any data we have collected from children under age 18, please contact
        us at <bdt class="block-component"></bdt>
        <bdt class="question">cbrodski@gmail.com</bdt>
        <bdt class="else-block"></bdt>.
      </span><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
          <bdt class="statement-end-if-in-editor"></bdt>
        </span></span></span></p>
  <p style="font-size: 15px; line-height: 1.5;"><span style="color: rgb(89, 89, 89);"><br></span></p>
  <p id="privacyrights" style="font-size:15px;"><span style="color: rgb(0, 0, 0);"><strong><span
          style="font-size: 19px;"><span data-custom-class="heading_1">8. WHAT ARE YOUR PRIVACY
            RIGHTS?</span></span></strong></span></p>
  <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><strong><em><span style="font-size: 15px;"><span
              data-custom-class="body_text">In Short:</span></span>&nbsp;</em>&nbsp;</strong><span
        style="font-size: 15px;"><span data-custom-class="body_text"><em>
            <bdt class="block-component"></bdt>You may review, change, or terminate your account at any time.
          </em></span>
        <bdt class="block-component"><span data-custom-class="body_text"></bdt>
      </span></span></span></span></span></p>
  <p style="font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span
          data-custom-class="body_text">If you are resident in the European Economic Area and you believe we are
          unlawfully processing your personal information, you also have the right to complain to your local data
          protection supervisory authority. You can find their contact details here:</span></span>&nbsp;</span><span
      data-custom-class="body_text"><span style="color: rgb(48, 48, 241);"><span style="font-size: 15px;"><a
            data-custom-class="link" href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
            target="_blank">http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>.</span></span></span><span
      style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
        <bdt class="block-component"><span data-custom-class="body_text"></span></bdt>
        <bdt class="block-component"></bdt>
      </span></span></p>
  <p style="font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span
          data-custom-class="body_text">If you have questions or comments about your privacy rights, you may email us at
          <bdt class="question">cbrodski@gmail.com</bdt>.</span>
        <bdt class="statement-end-if-in-editor"></bdt>
      </span></span></p>
  <div style="line-height: 1.1;"><br></div>
  <div><span style="font-size: 16px;"><span style="color: rgb(0, 0, 0);"><strong><span
            data-custom-class="heading_2">Account Information</span></strong></span></span></div>
  <p style="font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span
          data-custom-class="body_text">If you would at any time like to review or change the information in your
          account or terminate your account, you can:<bdt class="forloop-component"></bdt></span></span></span></p>
  <p style="font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span
          data-custom-class="body_text">Upon your request to terminate your account, we will deactivate or delete your
          account and information from our active databases. However, some information may be retained in our files to
          prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply
          with legal requirements.</span><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span
              data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                  <bdt class="statement-end-if-in-editor"></bdt>
                  <bdt class="block-component"></bdt>
                </span></span></span></span></span></span></span><span data-custom-class="body_text">
      <bdt class="block-component"></bdt>
    </span></span></span></p>
  <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><strong><u><span
              data-custom-class="body_text">Opting out of email marketing:</span></u>&nbsp;</strong><span
          data-custom-class="body_text">You can unsubscribe from our marketing email list at any time by clicking on the
          unsubscribe link in the emails that we send or by contacting us using the details provided below. You will
          then be removed from the marketing email list – however, we will still need to send you service-related emails
          that are necessary for the administration and use of your account. To otherwise opt-out, you may:<bdt
            class="forloop-component"></bdt><span style="color: rgb(89, 89, 89);"><span
              data-custom-class="body_text"><span style="font-size: 15px;"><span style="font-size: 15px;">
                  <bdt class="statement-end-if-in-editor">
                    <bdt class="block-component"></bdt>
                  </bdt>
                </span></span></span></span></span></p>
  <p style="font-size: 15px; line-height: 1.5;"><br></p>
  <p id="DNT" style="font-size:15px;"><span style="color: rgb(0, 0, 0);"><strong><span style="font-size: 19px;"><span
            data-custom-class="heading_1">9. CONTROLS FOR DO-NOT-TRACK FEATURES</span></span></strong></span></p>
  <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
          data-custom-class="body_text">Most web browsers and some mobile operating systems and mobile applications
          include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to
          have data about your online browsing activities monitored and collected. No uniform technology standard for
          recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT
          browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
          If a standard for online tracking is adopted that we must follow in the future, we will inform you about that
          practice in a revised version of this <span style="color: rgb(89, 89, 89);"><span
              data-custom-class="body_text">
              <bdt class="block-component"></bdt>privacy notice<bdt class="else-block"></bdt>
            </span></span>.</span></span></span></p>
  <p style="font-size: 15px; line-height: 1.5;"><br></p>
  <p id="caresidents" style="font-size:15px;"><span style="color: rgb(0, 0, 0);"><strong><span
          style="font-size: 19px;"><span data-custom-class="heading_1">10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY
            RIGHTS?</span></span></strong></span></p>
  <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><strong><em><span style="font-size: 15px;"><span
              data-custom-class="body_text">In Short:</span></span>&nbsp;</em>&nbsp;</strong><span
        style="font-size: 15px;"><em><span data-custom-class="body_text">Yes, if you are a resident of California, you
            are granted specific rights regarding access to your personal information.</span></em></span></span></p>
  <p style="font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span
          data-custom-class="body_text">California Civil Code Section 1798.83, also known as the “Shine The Light” law,
          permits our users who are California residents to request and obtain from us, once a year and free of charge,
          information about categories of personal information (if any) we disclosed to third parties for direct
          marketing purposes and the names and addresses of all third parties with which we shared personal information
          in the immediately preceding calendar year. If you are a California resident and would like to make such a
          request, please submit your request in writing to us using the contact information provided
          below.</span></span></span></p>
  <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span
        data-custom-class="body_text">If you are under 18 years of age, reside in California, and have a registered
        account with the <bdt class="block-component"></bdt>Services<bdt class="statement-end-if-in-editor"></bdt>
        <bdt class="block-component"></bdt>
        <bdt class="block-component"></bdt>, you have the right to request removal of unwanted data that you publicly
        post on the <bdt class="block-component"></bdt>Services<bdt class="statement-end-if-in-editor"></bdt>
        <bdt class="block-component"></bdt>
        <bdt class="block-component"></bdt>. To request removal of such data, please contact us using the contact
        information provided below, and include the email address associated with your account and a statement that you
        reside in California. We will make sure the data is not publicly displayed on the <bdt class="block-component">
        </bdt>Services<bdt class="statement-end-if-in-editor"></bdt>
        <bdt class="block-component"></bdt>
        <bdt class="block-component"></bdt>, but please be aware that the data may not be completely or comprehensively
        removed from our systems.
      </span></span></p>
  <p style="font-size: 15px; line-height: 1.5;"><span style="color: rgb(89, 89, 89);"><br></span></p>
  <p id="policyupdates" style="font-size: 15px; line-height: 1.5;"><span style="color: rgb(0, 0, 0);"><strong><span
          style="font-size: 19px;"><span data-custom-class="heading_1">11. DO WE MAKE UPDATES TO THIS
            POLICY?</span></span></strong></span></p>
  <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><strong><em><span style="font-size: 15px;"><span
              data-custom-class="body_text">In Short:</span></span>&nbsp;</em>&nbsp;</strong><span
        style="font-size: 15px;"><em><span data-custom-class="body_text">Yes, we will update this policy as necessary to
            stay compliant with relevant laws.</span></em></span></span></p>
  <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span
        data-custom-class="body_text">We may update this <span style="color: rgb(89, 89, 89);"><span
            data-custom-class="body_text">
            <bdt class="block-component"></bdt>privacy notice<bdt class="else-block"></bdt>
          </span>&nbsp;</span>from time to time. The updated version will be indicated by an updated “Revised” date and
        the updated version will be effective as soon as it is accessible. If we make material changes to this <span
          style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
            <bdt class="block-component"></bdt>privacy notice<bdt class="else-block"></bdt>
          </span></span>, we may notify you either by prominently posting a notice of such changes or by directly
        sending you a notification. We encourage you to review this <span style="color: rgb(89, 89, 89);"><span
            data-custom-class="body_text">
            <bdt class="block-component"></bdt>privacy notice<bdt class="else-block"></bdt>
          </span>&nbsp;</span>frequently to be informed of how we are protecting your information.</span></span></p>
  <p style="font-size: 15px; line-height: 1.5;"><span style="color: rgb(89, 89, 89);"><br></span></p>
  <p id="contact" style="font-size:15px;"><span style="color: rgb(0, 0, 0);"><strong><span
          style="font-size: 19px;"><span data-custom-class="heading_1">12. HOW CAN YOU CONTACT US ABOUT THIS
            POLICY?</span></span></strong></span></p>
  <p style="font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span
        data-custom-class="body_text">If you have questions or comments about this policy, you may <bdt
          class="block-component"></bdt>email us at <bdt class="question">cbrodski@gmail.com</bdt>
        <bdt class="statement-end-if-in-editor"></bdt> or by post to:
      </span></span></p>
  <div><span style="color: rgb(89, 89, 89);">
      <bdt class="question"><span style="font-size: 15px;"><span data-custom-class="body_text">Chris
            Brodski</span></span>&nbsp;</bdt><span data-custom-class="body_text"><span style="font-size: 15px;"><span
            data-custom-class="body_text">
            <bdt class="block-component"></bdt>
          </span></span></div>
  <div><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;">
          <bdt class="question">cbrodski@gmail.com</bdt>
          <bdt class="block-component"></bdt>
        </span></span></span></div>
  <div><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;">
          <bdt class="question">Denver</bdt>
          <bdt class="block-component"></bdt>
          <bdt class="block-component"></bdt>, <bdt class="question">CO</bdt>
          <bdt class="statement-end-if-in-editor"></bdt>
          <bdt class="block-component"></bdt>
          <bdt class="block-component"></bdt>
        </span></span></span><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span
          style="font-size: 15px;">
          <bdt class="block-component"></bdt>
          <bdt class="block-component"></bdt>
          <bdt class="block-component"></bdt>
        </span></span></span></div>
  <div><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;">
          <bdt class="question">United States</bdt><span data-custom-class="body_text"><span
              style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><span
                    style="color: rgb(89, 89, 89);"><span style="font-size: 15px;">
                      <bdt class="statement-end-if-in-editor"></bdt>
                    </span></span></span></span></span></span>
          <bdt class="else-block"></bdt>
        </span></span></span><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span
          style="font-size: 15px;">
          <bdt class="statement-end-if-in-editor"></bdt>
          <bdt class="statement-end-if-in-editor"></bdt>
        </span></span></span><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span
          data-custom-class="body_text">
          <bdt class="block-component"></bdt>
        </span></span></span>
    <bdt class="block-component"></bdt>
  </div>
  <p id="contact" style="font-size: 15px; line-height: 1.5;"><br></p>
  <p id="contact" style="font-size:15px;"><strong><span data-custom-class="heading_1">HOW CAN YOU REVIEW, UPDATE, OR
        DELETE THE DATA WE COLLECT FROM YOU?</span></strong></p>
  <div><span data-custom-class="body_text">Based on the laws of some countries, you may have the right to request access
      to the personal information we collect from you, change that information, or delete it in some circumstances. To
      request to review, update, or delete your personal information, please <bdt class="block-component"></bdt>submit a
      request form by<span data-custom-class="body_text">&nbsp;<span data-custom-class="body_text">clicking <span
            style="color: rgb(48, 48, 241);"><span data-custom-class="body_text"><span style="font-size: 15px;"><a
                  data-custom-class="link" href="https://app.termly.io/notify/39f877a7-471d-41d9-bc5c-dd150bff8cf1"
                  rel="noopener noreferrer" target="_blank">here</a></span></span></span></span></span>
      <bdt class="block-component"></bdt>. We will respond to your request within 30 days.
    </span></div>
  <style>
    ul {
      list-style-type: square;
    }

    ul>li>ul {
      list-style-type: circle;
    }

    ul>li>ul>li>ul {
      list-style-type: square;
    }

    ol li {
      font-family: Arial;
    }
  </style>
</div>
<div style="color: #595959;font-size: 14px;font-family: Arial;padding-top:16px;">This privacy policy was created using
  <a style="color: rgb(48, 48, 241) !important;"
    href="https://termly.io/products/privacy-policy-generator/?ftseo">Termly’s Privacy Policy Generator</a>.</div>`