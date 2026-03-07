import React from 'react';

export const PaymentMethodTab = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
    <h2 className="text-2xl font-bold mb-6 text-white">Payment Methods</h2>
    <div className="space-y-6">
                   <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-white/10">
                      <h2 className="text-xl font-semibold text-white mb-4">Finances</h2>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-white font-medium">Tax Information (for USA Only)</p>
                              <p className="text-gray-400 text-sm">For US users</p>
                            </div>
                          </div>
                          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-medium">
                            Open Form
                          </button>
                        </div>
                      </div>
                    </div>
      
                    {/* Payment Methods Section */}
                    <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-white/10">
                      <h2 className="text-xl font-semibold text-white mb-4">Payment Methods</h2>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                              <span className="text-purple-400 font-bold text-sm">A</span>
                            </div>
                            <div>
                              <p className="text-white font-medium">AIRTM</p>
                            </div>
                          </div>
                          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-medium">
                            Add Payment Method
                          </button>
                        </div>
      
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/>
                              </svg>
                            </div>
                            <div>
                              <p className="text-white font-medium">PayPal</p>
                            </div>
                          </div>
                          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-medium">
                            Add Payment Method
                          </button>
                        </div>
                      </div>
                    </div>
      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Saved Payment Methods</h3>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
            Add New
          </button>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                VISA
              </div>
              <div>
                <p className="text-white font-medium">**** **** **** 1234</p>
                <p className="text-gray-400 text-sm">Expires 12/27</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-purple-400 text-sm">Primary</span>
              <button className="text-gray-400 hover:text-white">⋯</button>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded flex items-center justify-center text-white text-xs font-bold">
                MC
              </div>
              <div>
                <p className="text-white font-medium">**** **** **** 5678</p>
                <p className="text-gray-400 text-sm">Expires 08/26</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-gray-400 hover:text-white">⋯</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">Billing Address</h3>
        <div className="space-y-2 text-gray-300">
          <p>John Doe</p>
          <p>123 Main Street</p>
          <p>New York, NY 10001</p>
          <p>United States</p>
        </div>
        <button className="mt-4 text-purple-400 hover:text-purple-300">Edit Address</button>
      </div>
    </div>
  </div>
);