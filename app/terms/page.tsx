
import React from 'react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
          Bull Bitcoin Mobile Wallet Terms and Conditions
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl mb-8 text-gray-300">
            These Terms and Conditions ("Terms") govern your use of the Bull Bitcoin Mobile Wallet application (the "App"), created and distributed by Satoshi Portal Inc., a Canadian company (the "App Developers"). By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree, do not use the App.
          </p>
          
          <p className="mb-8 text-gray-300">
            The App is provided as free and open-source software. There is no contractual relationship between users of the Bull Bitcoin Wallet and the App Developers.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">1. Wallet Services</h2>
            
            <div className="space-y-4 text-gray-300">
              <p><strong>1.1</strong> The Bull Bitcoin Wallet is a self-custodial wallet for the Bitcoin Network and Liquid Network. The App Developers are never in control of user funds and are not involved in money transmission.</p>
              
              <p><strong>1.2</strong> The responsibility to safeguard BTC and L-BTC private keys falls exclusively on the end-user. The App Developers cannot recover lost funds.</p>
              
              <p><strong>1.3</strong> The App Developers cannot monitor, freeze, or seize any BTC and L-BTC assets held by users of the App.</p>
              
              <p><strong>1.4</strong> Swap transactions between BTC and L-BTC, between BTC and Lightning, and between L-BTC and Lightning are provided by non-custodial third-party atomic swap services. These services are offered within the App via third-party API integrations, and the App Developers are not responsible for swap fees or swap failures.</p>
              
              <p><strong>1.5</strong> Encrypted backup services are provided by non-custodial third-party backup service providers. These services are offered within the App via third-party API integrations, and the App Developers are not responsible for backup availability.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">2. Exchange Services</h2>
            
            <div className="space-y-4 text-gray-300">
              <p><strong>2.1</strong> The App provides an optional API client that allows users to link their Bull Bitcoin exchange account to the App by importing and storing an API key from an external exchange account managed outside of the App.</p>
              
              <p><strong>2.2</strong> Bull Bitcoin exchange services are provided:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>In Canada by Satoshi Portal Inc., registered as a Money Service Business;</li>
                <li>In France by Leonod SARL, licensed as a Virtual Asset Service Provider; and</li>
                <li>In Mexico by Toro Pagos S.A., registered as offering Operations with Virtual Assets.</li>
              </ul>
              
              <p><strong>2.3</strong> Exchange services are only offered in countries or regions where the App has appropriate licensing and permissions to provide a cryptocurrency exchange.</p>
              
              <p><strong>2.4</strong> Enforcement of Restrictions:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Exchange services are not available by default in the App. Access requires a Bull Bitcoin API key linked to an external Bull Bitcoin account.</li>
                <li>When creating an external Bull Bitcoin account, users undergo a Know Your Customer (KYC) process, providing personal information and documentation to verify identity. This includes, but is not limited to, IP address validation, phone number validation, government-issued identity document verification, selfie verification, proof of residence verification, and source of funds verification.</li>
                <li>VPNs are detected using Maxmind, an IP analytics service. Phone numbers are verified using Telesign, a phone number analytics service. Identity, country of residence, and country of citizenship are verified using Incode, an identity verification service.</li>
                <li>Through this process, Bull Bitcoin determines the user's country of residence and citizenship and restricts accounts in countries where exchange services cannot be legally offered.</li>
                <li>Users in prohibited jurisdictions will be unable to access exchange features and will receive an error message indicating they are in a prohibited jurisdiction.</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">3. Privacy Policy</h2>
            
            <div className="space-y-4 text-gray-300">
              <p><strong>3.1</strong> This Privacy Policy applies to the use of the Bull Bitcoin Mobile Wallet application, created and distributed by Satoshi Portal Inc. Registration for a Bull Bitcoin Exchange account subjects you to the separate Bull Bitcoin Exchange privacy policy. Registration for the exchange platform is not required to use the App.</p>
              
              <p><strong>3.2</strong> For privacy-related inquiries, contact our Data Privacy Manager at: <a href="mailto:privacy@satoshiportal.com" className="text-brandRed hover:underline">privacy@satoshiportal.com</a>. Translations of this Privacy Policy are provided for convenience; in case of any discrepancy, the English version prevails.</p>
              
              <p><strong>3.3</strong> Satoshi Portal Inc. does not collect or share any data or personal information. Any data leaving the user's device is processed ephemerally and immediately deleted, as detailed below.</p>
              
              <p><strong>3.4</strong> Data Collection:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Data is collected by Satoshi Portal Inc. only when users of the App use the Bull Bitcoin Electrum server as an intermediary to obtain information about the Bitcoin blockchain, including mempool content and node analysis (such as fee estimation).</li>
                <li>When using custom Bitcoin node servers (permitted in the App), no data is collected by Bull Bitcoin's node servers.</li>
                <li>When using Bull Bitcoin's Bitcoin node servers, the following data is collected:
                  <ul className="list-disc pl-8 mt-2 space-y-1">
                    <li>Your IP address;</li>
                    <li>Bitcoin addresses in your wallet covered by the gap limit.</li>
                  </ul>
                </li>
              </ul>
              
              <p><strong>3.5</strong> Bull Bitcoin node servers do not keep logs and do not retain any data. IP addresses, Bitcoin addresses, and Bitcoin transaction data are immediately deleted.</p>
              
              <p><strong>3.6</strong> Bull Bitcoin does not share any user data with any third party under any circumstances.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">4. General Provisions</h2>
            
            <div className="space-y-4 text-gray-300">
              <p><strong>4.1</strong> These Terms may be updated from time to time. Continued use of the App after changes constitutes acceptance of the updated Terms.</p>
              
              <p><strong>4.2</strong> The App is provided "as is" without warranties of any kind. The App Developers disclaim all liability for any loss or damage arising from use of the App.</p>
              
              <p><strong>4.3</strong> These Terms are governed by the laws of Canada, without regard to conflict of laws principles.</p>
              
              <p><strong>4.4</strong> If any provision of these Terms is held invalid, the remainder shall continue in full force and effect.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
