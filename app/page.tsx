export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center py-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            🚀 LandFlow Pro
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Unbreakable Land Marketplace - DEPLOYMENT SUCCESSFUL!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-green-500 text-2xl mb-4">✓</div>
              <h3 className="font-bold text-lg mb-2">Secure Transactions</h3>
              <p className="text-gray-600">Blockchain-verified land titles</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-blue-500 text-2xl mb-4">✓</div>
              <h3 className="font-bold text-lg mb-2">Verified Agents</h3>
              <p className="text-gray-600">Government-certified professionals</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-purple-500 text-2xl mb-4">✓</div>
              <h3 className="font-bold text-lg mb-2">Smart Contracts</h3>
              <p className="text-gray-600">Automated, secure agreements</p>
            </div>
          </div>
          
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
