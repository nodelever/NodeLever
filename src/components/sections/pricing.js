import { CheckCircle } from "lucide-react";

export default function EnterprisePricingSection() {
  const enterprisePlan = {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations with advanced requirements',
    features: [
      'Unlimited game servers',
      'Priority 24/7 support',
      'Custom integrations',
      'Dedicated account manager',
      'SLA guarantees',
      'Advanced analytics & reporting',
      'Multi-region deployment',
      'Custom security protocols'
    ],
    color: 'from-purple-600 to-pink-600',
    popular: false
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Enterprise <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Solution</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Scalable enterprise gaming infrastructure designed for organizations with complex requirements.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="group relative max-w-md">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{enterprisePlan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{enterprisePlan.price}</span>
                  <span className="text-gray-400">{enterprisePlan.period}</span>
                </div>
                <p className="text-gray-300">{enterprisePlan.description}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {enterprisePlan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full bg-gradient-to-r ${enterprisePlan.color} px-6 py-4 rounded-full text-white font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg`}>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}