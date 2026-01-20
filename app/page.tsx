export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            🏔️ LandFlow Pro
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            Unbreakable Land Marketplace
          </p>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8 mt-12">
            <h2 className="text-3xl font-bold mb-6">Deployment Successful! 🎉</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <FeatureCard 
                title="Blockchain Verified" 
                description="Every title on immutable ledger"
                color="green"
              />
              <FeatureCard 
                title="Military Security" 
                description="256-bit end-to-end encryption"
                color="blue"
              />
              <FeatureCard 
                title="Smart Contracts" 
                description="Automated, trustless transactions"
                color="purple"
              />
            </div>
            
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl text-xl font-bold hover:opacity-90 transition">
              Get Started Free
            </button>
          </div>
          
          <div className="mt-12 text-gray-600">
            <p>🚀 Deployed on Vercel • ⚡ Instant Loading • 🔒 HTTPS Secure</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ title, description, color }: any) {
  const colors = {
    green: 'border-green-200 bg-green-50',
    blue: 'border-blue-200 bg-blue-50', 
    purple: 'border-purple-200 bg-purple-50'
  }
  
  return (
    <div className={`border-2 ${colors[color]} p-6 rounded-2xl`}>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}