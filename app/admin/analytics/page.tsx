import AnalyticsDashboard from "../../components/AnalyticsDashboard"

export default function AdminAnalyticsPage() {
  return (
    <div className="container mx-auto px-4 py-12 pt-20">
      <div className="mb-6 p-4 bg-yellow-900 bg-opacity-30 rounded-lg border border-yellow-600">
        <p className="text-yellow-200 text-sm">
          🔒 <strong>Admin Only:</strong> This analytics dashboard is for internal use only and not linked from the main
          navigation.
        </p>
      </div>
      <AnalyticsDashboard />
    </div>
  )
}
