
import { Wallet } from "lucide-react";

const HowToJoinPayment = () => {
  return (
    <section className="py-20 bg-white/80 dark:bg-sacco-blue/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* How to Join Section */}
          <div className="glass bg-white/40 dark:bg-sacco-blue/40 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center text-sacco-blue dark:text-white mb-12">
              How to Join
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((step) => (
                <div key={step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-sacco-orange/90 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step}
                  </div>
                  <h3 className="text-lg font-semibold text-sacco-blue dark:text-white mb-2">
                    Step {step}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                  {step === 1 && "Dial *847#"}
                    {step === 2 && "Select language"}
                    {step === 3 && "Enter your full names"}
                    {step === 4 && "Enter your ID No."}
                    {step === 5 && "Enter your postal or E-mail Address"}
                    {step === 6 && "Enter your monthly pledge amount"}
                    {step === 7 && "Agree to terms and conditions"}
                    {step === 8 && "You can also access our sacco services from our Digital Sacco Mobile app download it from Google play store"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* How to Make Payment Section */}
          <div className="glass bg-white/40 dark:bg-sacco-blue/40 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center text-sacco-blue dark:text-white mb-12">
              How to Make Payment
            </h2>
            <div className="flex flex-col items-center mb-6">
              <Wallet className="h-16 w-16 text-sacco-orange mb-4" />
              <h3 className="text-2xl font-semibold text-sacco-blue dark:text-white">
                Mobile Money (M-Pesa)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
                Follow these simple steps to make your payment via M-Pesa
              </p>
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              <ol className="list-decimal space-y-2 pl-6">
                <li className="p-2 rounded-lg hover:bg-gray-50/50 dark:hover:bg-sacco-dark-blue/50 transition-colors">
                  Go to M-Pesa menu on your phone
                </li>
                <li className="p-2 rounded-lg hover:bg-gray-50/50 dark:hover:bg-sacco-dark-blue/50 transition-colors">
                  Select "Lipa na M-Pesa" option
                </li>
                <li className="p-2 rounded-lg hover:bg-gray-50/50 dark:hover:bg-sacco-dark-blue/50 transition-colors">
                  Choose "Pay Bill" from the menu
                </li>
                <li className="p-2 rounded-lg hover:bg-gray-50/50 dark:hover:bg-sacco-dark-blue/50 transition-colors">
                  Enter Business Number: <span className="font-semibold text-sacco-orange">542431</span>
                </li>
                <li className="p-2 rounded-lg hover:bg-gray-50/50 dark:hover:bg-sacco-dark-blue/50 transition-colors">
                Enter your phone number(acts as account number): 
                </li>
                <li className="p-2 rounded-lg hover:bg-gray-50/50 dark:hover:bg-sacco-dark-blue/50 transition-colors">
                Enter desired amount
                </li>
                <li className="p-2 rounded-lg hover:bg-gray-50/50 dark:hover:bg-sacco-dark-blue/50 transition-colors">
                Enter M-pesa pin
                </li>
                <li className="p-2 rounded-lg hover:bg-gray-50/50 dark:hover:bg-sacco-dark-blue/50 transition-colors">
                Confirm transaction. Press Ok
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToJoinPayment;
